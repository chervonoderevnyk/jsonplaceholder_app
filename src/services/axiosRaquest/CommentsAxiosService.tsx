import { IComment } from "../../interfaces/IComment";
import { COMMENTS_URL } from "../../constants/urls.axios";
import axios from "axios";

const CommentsAxiosService = async (): Promise<IComment[]> => {
  const getComments = await axios.get<IComment[]>(COMMENTS_URL);
  return getComments.data;
};

export { CommentsAxiosService };
