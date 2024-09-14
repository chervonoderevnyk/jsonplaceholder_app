import React, { useContext, useEffect, useState } from "react";

import { IUser } from "../../interfaces/IUser";
import { UsersAxiosService } from "../../services/axiosRaquest/UsersAxiosService";
import { UsersComponent } from "../../components/users/UsersComponent";
import { ChangeColor, ChangeTheme } from "../../context/Context";
import { ThemeToggleButton } from "../../buttons/ThemeToggleButton";

const UsersPagesAxios: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const { redColor } = useContext(ChangeColor);
  const theme = useContext(ChangeTheme);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await UsersAxiosService();
        setUsers(usersData);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
      <ThemeToggleButton />
      <h3 style={{ color: redColor }}>Users AXIOS List</h3>
      <UsersComponent users={users} />
    </div>
  );
};

export { UsersPagesAxios };
