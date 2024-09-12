import { IPost } from "../../interfaces/IPost";
import { PostComponent } from "./PostComponent";
import React from "react";

interface IProps {
  posts: IPost[];
}

const PostsComponent: React.FC<IProps> = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <PostComponent key={post.id} post={post} />
      ))}
    </div>
  );
};

export { PostsComponent };
