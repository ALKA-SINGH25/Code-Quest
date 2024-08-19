"use client";

import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
import { githubDark } from "@uiw/codemirror-theme-github";
import { css } from "@codemirror/lang-css";
import { AiOutlineFullscreenExit, AiOutlineFullscreen } from "react-icons/ai";
import { SiHtml5, SiCss3, SiJavascript } from "react-icons/si";
import { FiCopy } from "react-icons/fi";

const Editor_Dev = ({ language, displayName, value, onChange }) => {
  const [open, setOpen] = useState(true);

  return (
    <div className={`editor-container ${open ? "" : "collapsed"}`}>
      <div className="editor-title desktop">
        {displayName === "HTML" && <SiHtml5 size={25} color="#E44D27" />}
        {displayName === "CSS" && <SiCss3 size={25} color="#1F8FE7" />}
        {displayName === "JS" && <SiJavascript size={25} color={"yellow"} />}
        {displayName}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            className="btn btn-copy"
            onClick={() => {
              navigator.clipboard.writeText(value);
              alert("Copied to clipboard");
            }}
          >
            <FiCopy />
          </button>
          <button
            className="btn"
            onClick={() => setOpen((prevOpen) => !prevOpen)}
          >
            {open ? <AiOutlineFullscreenExit /> : <AiOutlineFullscreen />}
          </button>
        </div>
      </div>
      <CodeMirror
        value={value}
        extensions={
          language === "js"
            ? [javascript({ jsx: true })]
            : language === "css"
            ? [css()]
            : [html()]
        }
        theme={githubDark}
        onChange={(value) => onChange(value)}
        className={`codemirror-wrapper`}
        options={{
          lint: true,
          lineWrapping: true,
          mode: language,
          lineNumbers: true,
          theme: "material",
        }}
        basicSetup={{
          foldGutter: false,
          dropCursor: false,
          allowMultipleSelections: false,
          indentOnInput: false,
        }}
      />
    </div>
  );
};

export default Editor_Dev;
