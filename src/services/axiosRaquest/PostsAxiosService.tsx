import axios from "axios";
import { IPost } from "../../interfaces/IPost";
import { POSTS_URL } from "../../constants/urls.axios";

const PostsAxiosService = async (): Promise<IPost[]> => {
  const getPosts = await axios.get<IPost[]>(POSTS_URL);
  return getPosts.data;
};

export { PostsAxiosService };
