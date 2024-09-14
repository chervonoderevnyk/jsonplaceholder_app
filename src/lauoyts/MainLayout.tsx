import { Outlet } from "react-router-dom";
import React, { useCallback, useState } from "react";

import { Header } from "../components/header/Header";
import { ChangeColor, ChangeTheme } from "../context/Context";

export const ToggleThemeContext = React.createContext<() => void>(() => {});

const MainLayout = () => {
  const colorOptions = {
    redColor: "red",
    blueColor: "blue",
    greenColor: "green",
    yellowColor: "yellow",
    orangeColor: "orange",
    purpleColor: "purple",
  };

  const themeOptions = {
    light: {
      backgroundColor: "#fff",
      color: "#000",
    },
    dark: {
      backgroundColor: "#333",
      color: "#fff",
    },
  };

  const [currentTheme, setCurrentTheme] = useState<"light" | "dark">("light");

  const toggleTheme = useCallback(() => {
    setCurrentTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }, []);

  return (
    <ChangeColor.Provider value={colorOptions}>
      <ChangeTheme.Provider value={themeOptions[currentTheme]}>
        <ToggleThemeContext.Provider value={toggleTheme}>
          <div>
            <Header />
            <Outlet />
          </div>
        </ToggleThemeContext.Provider>
      </ChangeTheme.Provider>
    </ChangeColor.Provider>
  );
};

export { MainLayout };
