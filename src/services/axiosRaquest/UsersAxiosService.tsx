import axios from "axios";

import { USERS_URL } from "../../constants/urls.axios";
import { IUser } from "../../interfaces/IUser";

const UsersAxiosService = async (): Promise<IUser[]> => {
  const getUsers = await axios.get<IUser[]>(USERS_URL);
  return getUsers.data;
};

export { UsersAxiosService };
