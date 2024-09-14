import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css"; // Імпорт стилів

const Header: React.FC = () => {
  return (
    <div className={styles["header-container"]}>
      <div className={styles["link-group"]}>
        <div className={styles["link-item"]}>
          <Link to={"/fetch/users"}>Users Fetch request</Link>
        </div>
        <div className={styles["link-item"]}>
          <Link to={"/fetch/posts"}>Posts Fetch request</Link>
        </div>
        <div className={styles["link-item"]}>
          <Link to={"/fetch/comments"}>Comments Fetch request</Link>
        </div>
      </div>

      <div className={styles["link-group"]}>
        <div className={styles["link-item"]}>
          <Link to={"/axios/users"}>Users Axios request</Link>
        </div>
        <div className={styles["link-item"]}>
          <Link to={"/axios/posts"}>Posts Axios request</Link>
        </div>
        <div className={styles["link-item"]}>
          <Link to={"/axios/comments"}>Comments Axios request</Link>
        </div>
      </div>

      <hr />
    </div>
  );
};

export { Header };
