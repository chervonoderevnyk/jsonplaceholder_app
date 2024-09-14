import React, { useContext } from "react";

import { ToggleThemeContext } from "../lauoyts/MainLayout";
import styles from "./Buttons.module.css";

const ThemeToggleButton: React.FC = () => {
  const toggleTheme = useContext(ToggleThemeContext);

  return (
    <button className={styles.button} onClick={toggleTheme}>
      Toggle Theme
    </button>
  );
};

export { ThemeToggleButton };
