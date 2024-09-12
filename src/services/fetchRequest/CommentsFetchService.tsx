import { useEffect, useState } from "react";
import React from "react";
import { IComment } from "../../interfaces/IComment";
import { CommentsComponent } from "../../components/comments/CommentsComponent";
import { UrlsFetch } from "../../constants/urls.fetch";

const CommentsFetchService = () => {
  const [comments, setComments] = useState<IComment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchComments = async (): Promise<IComment[]> => {
    const response = await fetch(`${UrlsFetch}/comments`);

    if (!response.ok) {
      throw new Error(`Failed to fetch comments: ${response.statusText}`);
    }
    return response.json();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [commentsData] = await Promise.all([fetchComments()]);
        setComments(commentsData);
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
      <h3>Comments FETCH list</h3>
      <CommentsComponent comments={comments} />
    </div>
  );
};

export { CommentsFetchService };
