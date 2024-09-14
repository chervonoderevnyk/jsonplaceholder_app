import React, { useContext, useEffect, useState } from "react";
import { IComment } from "../../interfaces/IComment";
import { CommentsAxiosService } from "../../services/axiosRaquest/CommentsAxiosService";
import { CommentsComponent } from "../../components/comments/CommentsComponent";
import { ChangeColor } from "../../context/Context";

const CommentsPagesAxios: React.FC = () => {
  const [comments, setComments] = useState<IComment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const { yellowColor } = useContext(ChangeColor);

  useEffect(() => {
    const fetchComment = async () => {
      try {
        const commentData = await CommentsAxiosService();
        setComments(commentData);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };
    fetchComment();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h3 style={{ color: yellowColor }}>Users AXIOS List</h3>
      <CommentsComponent comments={comments} />
    </div>
  );
};

export { CommentsPagesAxios };
