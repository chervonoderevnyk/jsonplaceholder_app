import { IComment } from "../../interfaces/IComment";
import React from "react";

interface IProps {
  comment: IComment;
}

const CommentComponent: React.FC<IProps> = ({ comment }) => {
  return (
    <div>
      <p>
        {" "}
        <strong>{comment.id}.</strong> {comment.body}. userId:{comment.userId}
      </p>
    </div>
  );
};

export { CommentComponent };
