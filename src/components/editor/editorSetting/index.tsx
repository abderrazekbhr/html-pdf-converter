import React, { useContext, useState } from "react";
import styles from "../index.module.css";
import { iconsPath } from "../../../consts/icons";
import { AppContext } from "../../../context/appContext";
export function EditorSetting() {
  const { themeDark, toggleTheme } = useContext(AppContext);
  const { autoSave, toggleAutoSave } = useContext(AppContext);

  return (
    <div className={themeDark ? styles.ideConfigDark : styles.ideConfigLight}>
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          onChange={toggleAutoSave}
          className="sr-only peer"
        />
        <div className="relative w-11 h-6 bg-gray-200  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>

        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          Auto save
        </span>
      </label>
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          onChange={toggleTheme}
          className="sr-only peer"
        />
        <div className="relative w-11 h-6 bg-gray-200  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          Dark mode
        </span>
      </label>
    </div>
  );
}
