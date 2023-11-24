"use client";
import { ThemeProvider } from "next-themes";

const DarkMode = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default DarkMode;
