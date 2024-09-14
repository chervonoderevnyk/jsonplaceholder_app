import { createContext } from "react";
import { ThemeOptions } from "../interfaces/ThemeOptions";

const colorOptions = {
  redColor: "red",
  blueColor: "blue",
  greenColor: "green",
  yellowColor: "yellow",
  orangeColor: "orange",
  purpleColor: "purple",
};

const themeOptions = {
  light: { backgroundColor: "#fff", color: "#000" },
  dark: {
    backgroundColor: "#333",
    color: "#fff",
  },
};

const ChangeColor = createContext(colorOptions);
const ChangeTheme = createContext<ThemeOptions>(themeOptions.light);

export { ChangeColor, ChangeTheme };
