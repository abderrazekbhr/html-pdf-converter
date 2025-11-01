import React, { useState, useContext } from "react";
import AceEditor from "react-ace";
import { EditorSetting } from "./editorSetting";
import { AppContext } from "../../context/appContext";

import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-cloud9_night";
import "ace-builds/src-noconflict/theme-cloud9_day";
import "ace-builds/src-noconflict/ext-beautify";

import styles from "./index.module.css";

function Editor() {
  const { themeDark, toggleTheme } = useContext(AppContext);
  const { autoSave, toggleAutoSave } = useContext(AppContext);
  const { htmlContent, changeHtmlContent } = useContext(AppContext);
  const coding = (newCode: string) => {
    if (autoSave) {
      console.log(newCode);
      changeHtmlContent(newCode);
    }
  };
  return (
    <div className={styles.contents}>
      <EditorSetting />
      <AceEditor
        className={styles.ide}
        defaultValue={htmlContent}
        setOptions={{ useWorker: false }}
        mode="html"
        theme={themeDark ? "cloud9_night" : "cloud9_day"}
        onChange={coding}
        editorProps={{ $blockScrolling: true }}
      />
    </div>
  );
}

export default Editor;
