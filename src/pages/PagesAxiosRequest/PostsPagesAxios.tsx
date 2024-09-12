import React, { useEffect, useState } from "react";
import { IPost } from "../../interfaces/IPost";
import { PostsAxiosService } from "../../services/axiosRaquest/PostsAxiosService";
import { PostsComponent } from "../../components/posts/PostsComponent";

const PostsPagesAxios: React.FC = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsData = await PostsAxiosService();
        setPosts(postsData);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h3>Posts Axios List</h3>
      <PostsComponent posts={posts} />
    </div>
  );
};

export { PostsPagesAxios };
