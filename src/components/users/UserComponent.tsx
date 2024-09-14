import React, { useContext } from "react";

import { IUser } from "../../interfaces/IUser";
import { ChangeColor } from "../../context/Context";
import styles from "./UserComponent.module.css";

interface IProps {
  user: IUser;
}

const UserComponent: React.FC<IProps> = ({ user }) => {
  const { orangeColor, purpleColor } = useContext(ChangeColor);

  return (
    <div className={styles.container}>
      <h3 className={styles.title} style={{ color: orangeColor }}>
        {user.id}. {user.name}
      </h3>
      <p className={styles.details}>
        <strong className={styles.label} style={{ color: purpleColor }}>
          Username:
        </strong>{" "}
        {user.username},{" "}
        <strong className={styles.label} style={{ color: purpleColor }}>
          Email:
        </strong>{" "}
        {user.email}
      </p>
    </div>
  );
};

export { UserComponent };
