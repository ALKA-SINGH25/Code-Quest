"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useEditor } from "./EditorContext";
import Editor from "./Editor";
import isDark from "./color";
import getExtentions from "./get-extentions";
import { darkTheme, lightTheme } from "./theme";
import { useAtom } from "jotai";
import { appStateAtom } from "./appState";
import { exportSettingsAtom } from "./exportSettings";

const Preview = () => {
  const [appState] = useAtom(appStateAtom);
  const { canvasRef } = useEditor();

  return (
    <div
      className={`w-full overflow-x-auto px-4 ${
        appState.darkMode ? "dark" : ""
      }`}
    >
      <div
        className="mx-auto overflow-hidden w-fit bg-repeat bg-center rounded-xl relative"
        style={{
          backgroundImage: "url(/transparent-bg-pattern.png)",
        }}
      >
        <div
          ref={canvasRef}
          className="bg-no-repeat bg-cover bg-center relative"
          style={{
            padding: appState.padding,
            backgroundImage: appState.backgroundImage,
            backgroundColor: appState.backgroundColor,
          }}
        >
          <TitleField />
          <Window />
          <WatterMark />
        </div>
      </div>
    </div>
  );
};

export default Preview;

const Window = () => {
  const [bgWidth, setBgWidth] = useState(0);
  const [bgHeight, setBgHeight] = useState(0);
  const [extentions, setExtentions] = useState([]);
  const [appState, setAppState] = useAtom(appStateAtom);

  const { canvasRef } = useEditor();

  const theme = useMemo(
    () => (appState.darkMode ? darkTheme : lightTheme),
    [appState.darkMode]
  );

  const onCodeChange = useCallback(
    (value) => {
      setAppState({
        ...appState,
        code: value,
      });
    },
    [appState, setAppState]
  );

  // useEffect(() => {
  //   setExtentions(getExtentions(appState.language));
  // }, [appState.language]);

  useEffect(() => {
    if (canvasRef.current) {
      setBgWidth(canvasRef.current.clientWidth);
      setBgHeight(canvasRef.current.clientHeight);
    }
  }, [appState.padding, appState.code, appState.title, canvasRef]);

  return (
    <div
      className="dark:bg-gray-800 rounded-xl bg-white text-gray-800 dark:text-gray-100 shadow-2xl border-black/30 border dark:border-white/30 relative overflow-hidden"
      style={{
        boxShadow: `0 0 0 1px ${
          appState.darkMode ? "rgba(0, 0, 0, 0.3)" : "rgba(255, 255, 255, 0.3)"
        } ${
          appState.dropShadow ? ", 0px 12px 30px -3px rgba(0, 0, 0, 0.4)" : ""
        }`,
        zIndex: 10,
      }}
    >
      <div
        style={{
          backgroundImage: appState.backgroundThumb,
          backgroundColor: appState.backgroundColor,
          width: bgWidth,
          height: bgHeight,
          left: `-${appState.padding}`,
          top: `-${appState.padding}`,
          zIndex: -5,
          opacity: appState.bgBlur ? 0.3 : 0,
          filter: `blur(${appState.bgBlur ? 60 : 0}px)`,
        }}
        className="w-full h-full absolute inset-0 bg-no-repeat bg-cover bg-center"
      />
      <WindowTitleBar />
      <Editor
        value={appState.code}
        onChange={onCodeChange}
        extensions={extentions}
        theme={theme}
        basicSetup={{
          foldGutter: false,
          allowMultipleSelections: false,
          lineNumbers: appState.showLineNumber,
          highlightActiveLine: false,
        }}
        style={{
          outline: "none",
          fontSize: appState.fontSize,
        }}
      />
    </div>
  );
};

const WindowTitleBar = () => {
  const [appState, setAppState] = useAtom(appStateAtom);

  return (
    <div className="px-4 h-12 flex items-center gap-8 z-20">
      <div className="flex items-center gap-2 h-full">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>
      <input
        value={appState.filename}
        translate="no"
        autoCorrect="off"
        onChange={(e) => {
          setAppState({
            ...appState,
            filename: e.target.value,
          });
        }}
        className="w-auto min-w-0 bg-transparent outline-none p-0 border-0 text-center text-gray-600 dark:text-gray-300 flex-1"
      />
      <div className="flex items-center gap-2.5 opacity-0">
        <div className="w-3" />
        <div className="w-3" />
        <div className="w-3" />
      </div>
    </div>
  );
};

const TitleField = () => {
  const [appState, setAppState] = useAtom(appStateAtom);

  const handleChange = useCallback(
    (e) => {
      setAppState({
        ...appState,
        title: e.target.innerText,
      });
    },
    [appState, setAppState]
  );

  if (!appState.showTitle) return null;

  return (
    <div
      className="flex items-center justify-center w-full"
      style={{
        paddingBottom: appState.padding,
      }}
    >
      <div
        className="w-full text-3xl bg-transparent outline-none border-none text-center placeholder-white/50 p-0 font-bold resize-none selection:bg-blue-500 inline-block"
        style={{
          color: appState.backgroundImage
            ? "#fff"
            : isDark(appState.backgroundColor)
            ? "#fff"
            : "#000",
          // 2.25 is the lineheight of the textarea
          textShadow: "0 0 0.35rem rgba(0, 0, 0, 0.2)",
        }}
        spellCheck="false"
        onBlur={handleChange}
        contentEditable
        dangerouslySetInnerHTML={{ __html: appState.title }}
      />
    </div>
  );
};

const WatterMark = () => {
  const [exportSettings] = useAtom(exportSettingsAtom);

  if (!exportSettings.showWaterMark) return null;
  return (
    <div className="absolute left-4 bottom-2 mix-blend-overlay opacity-50 text-white">
      CODE QUEST
    </div>
  );
};
