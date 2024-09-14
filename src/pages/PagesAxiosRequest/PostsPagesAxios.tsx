import React, { useCallback, useContext, useEffect, useState } from "react";
import { IPost } from "../../interfaces/IPost";
import { PostsAxiosService } from "../../services/axiosRaquest/PostsAxiosService";
import { PostsComponent } from "../../components/posts/PostsComponent";
import { ChangeColor } from "../../context/Context";

const PostsPagesAxios: React.FC = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const { greenColor } = useContext(ChangeColor);

  const fetchPosts = useCallback(async () => {
    try {
      const postsData = await PostsAxiosService();
      setPosts(postsData);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h3 style={{ color: greenColor }}>Posts Axios List</h3>
      <PostsComponent posts={posts} />
    </div>
  );
};

export { PostsPagesAxios };
