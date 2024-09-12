import { Link } from "react-router-dom";
import React from "react";

const Header = () => {
  return (
    <div>
      <div>
        <div>
          <Link to={"/fetch/users"}>Users Fetch request</Link>
        </div>
        <div>
          <Link to={"/fetch/posts"}>Posts Fetch request</Link>
        </div>
        <div>
          <Link to={"/fetch/comments"}>Comments Fetch request</Link>
        </div>
      </div>
      <br />

      <div>
        <div>
          <Link to={"/axios/users"}>Users Axios request</Link>
        </div>
        <div>
          <Link to={"/axios/posts"}>Posts Axios request</Link>
        </div>
        <div>
          <Link to={"/axios/comments"}>Comments Axios request</Link>
        </div>
      </div>
      <hr />
    </div>
  );
};

export { Header };
