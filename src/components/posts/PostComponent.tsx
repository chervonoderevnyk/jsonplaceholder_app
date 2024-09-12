import { IPost } from "../../interfaces/IPost";
import React from "react";

interface IProps {
  post: IPost;
}

const PostComponent: React.FC<IProps> = ({ post }) => {
  return (
    <div>
      <h3>
        {post.id}. {post.title}
      </h3>
    </div>
  );
};

export { PostComponent };
