import { IComment } from "../../interfaces/IComment";
import { CommentComponent } from "./CommentComponent";
import React from "react";

interface IProps {
  comments: IComment[];
}

const CommentsComponent: React.FC<IProps> = ({ comments }) => {
  return (
    <div>
      {comments.map((comment) => (
        <CommentComponent key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export { CommentsComponent };
