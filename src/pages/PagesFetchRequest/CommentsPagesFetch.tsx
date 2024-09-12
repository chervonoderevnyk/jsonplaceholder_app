import React from "react";
import { CommentsFetchService } from "../../services/fetchRequest/CommentsFetchService";

const CommentsPagesFetch = () => {
  return (
    <div>
      <CommentsFetchService />
    </div>
  );
};

export { CommentsPagesFetch };
