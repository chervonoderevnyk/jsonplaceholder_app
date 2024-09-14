import { useContext, useEffect, useState } from "react";
import React from "react";

import { IUser } from "../../interfaces/IUser";
import { UsersComponent } from "../../components/users/UsersComponent";
import { UrlsFetch } from "../../constants/urls.fetch";
import { ChangeColor } from "../../context/Context";

const UsersFetchService = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const { blueColor } = useContext(ChangeColor);

  const fetchUsers = async (): Promise<IUser[]> => {
    const response = await fetch(`${UrlsFetch}/users`);
    if (!response.ok) {
      throw new Error(`Failed to fetch users: ${response.statusText}`);
    }
    return response.json();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [usersData] = await Promise.all([fetchUsers()]);
        setUsers(usersData);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h3 style={{ color: blueColor }}>Users FETCH list</h3>
      <UsersComponent users={users} />
    </div>
  );
};

export { UsersFetchService };
