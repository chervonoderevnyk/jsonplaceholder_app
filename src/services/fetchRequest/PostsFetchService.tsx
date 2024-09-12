import { useEffect, useState } from "react";
import React from "react";

import { IPost } from "../../interfaces/IPost";
import { UrlsFetch } from "../../constants/urls.fetch";
import { PostsComponent } from "../../components/posts/PostsComponent";

const PostsFetchService = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = async (): Promise<IPost[]> => {
    const response = await fetch(`${UrlsFetch}/posts`);
    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.statusText}`);
    }
    return response.json();
  };

  // Використання useEffect для отримання даних після першого рендеру
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postsData] = await Promise.all([fetchPosts()]);
        setPosts(postsData);
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
      <h3>Posts FETCH list</h3>
      <PostsComponent posts={posts} />
    </div>
  );
};

export { PostsFetchService };
