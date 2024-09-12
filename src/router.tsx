import { createBrowserRouter } from "react-router-dom";
import React from "react";

import { MainLayout } from "./lauoyts/MainLayout";
import { UsersPagesAxios } from "./pages/PagesAxiosRequest/UsersPagesAxios";
import { UsersPagesFetch } from "./pages/PagesFetchRequest/UsersPagesFetch";
import { PostsPagesFetch } from "./pages/PagesFetchRequest/PostsPagesFetch";
import { CommentsPagesFetch } from "./pages/PagesFetchRequest/CommentsPagesFetch";
import { PostsPagesAxios } from "./pages/PagesAxiosRequest/PostsPagesAxios";
import { CommentsPagesAxios } from "./pages/PagesAxiosRequest/CommentsPagesAxios";

const router = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
    children: [
      { path: "/fetch/users", element: <UsersPagesFetch /> },
      { path: "/fetch/posts", element: <PostsPagesFetch /> },
      { path: "/fetch/comments", element: <CommentsPagesFetch /> },

      { path: "/axios/users", element: <UsersPagesAxios /> },
      { path: "/axios/posts", element: <PostsPagesAxios /> },
      { path: "/axios/comments", element: <CommentsPagesAxios /> },
    ],
  },
]);

export { router };
