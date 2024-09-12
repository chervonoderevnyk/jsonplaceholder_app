import { useEffect, useState } from "react";
import React from "react";

import { IUser } from "../../interfaces/IUser";
import { UsersAxiosService } from "../../services/axiosRaquest/UsersAxiosService";
import { UsersComponent } from "../../components/users/UsersComponent";

const UsersPagesAxios: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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
    <div>
      <h3>Users AXIOS List</h3>
      <UsersComponent users={users} />
    </div>
  );
};

export { UsersPagesAxios };
