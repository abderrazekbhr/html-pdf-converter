import React, { createContext, useState, JSX } from "react";
import { ContextType } from "./types";

export const AppContext = createContext<ContextType>({
  themeDark: false,
  toggleTheme: function (): void {
    throw new Error("Function not implemented.");
  },
  autoSave: false,
  toggleAutoSave: function (): void {
    throw new Error("Function not implemented.");
  },
  htmlContent: "",
  changeHtmlContent: function (content: string): void {
    throw new Error("Function not implemented.");
  },
});

const DEFAULT_HTML_TEMPLATE: string = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hello World</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      margin-top: 50px;
      background-color: #f9f9f9;
    }
    img {
      width: 200px;
      height: auto;
      margin-top: 20px;
      border-radius: 10px;
    }
  </style>
</head>
<body>
  <h1>Hello, World!</h1>
  <img src="public/icons/light.png"
   alt="Sample Image">
</body>
</html>

    `;

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [themeDark, setThemeDark] = useState<boolean>(
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const [autoSave, setAutoSave] = useState<boolean>(false);
  const [htmlContent, setHtmlContent] = useState<string>(DEFAULT_HTML_TEMPLATE);

  const toggleTheme = () => setThemeDark((prev) => !prev);
  const toggleAutoSave = () => setAutoSave((prev) => !prev);
  const changeHtmlContent = (value: string) => setHtmlContent(value);

  return (
    <AppContext.Provider
      value={{
        themeDark,
        toggleTheme,

        autoSave,
        toggleAutoSave,

        htmlContent,
        changeHtmlContent,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
