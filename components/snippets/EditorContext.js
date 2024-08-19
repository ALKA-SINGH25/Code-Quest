"use client";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { toPng, toJpeg, toSvg, toBlob } from "html-to-image";
import { useRouter } from "next/router";
import { useAtom } from "jotai";
import { appStateAtom, initAppState } from "./appState";
import { exportSettingsAtom } from "./exportSettings";
import * as gtag from "./gtag";

export const EditorContext = createContext(null);

export const EditorProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [settings, setSettings] = useAtom(appStateAtom);
  const [exportSettings] = useAtom(exportSettingsAtom);

  // const router = useRouter();

  const getSettings = useCallback(async () => {
    let decodedQuery = Object.fromEntries(new URLSearchParams(location.search));
    Object.keys(decodedQuery).map((key) => {
      switch (decodedQuery[key]) {
        case "true":
          decodedQuery[key] = true;
          break;

        case "false":
          decodedQuery[key] = false;
          break;

        default:
          break;
      }
    });

    setSettings({
      ...initAppState,
      ...decodedQuery,
    });

    setIsLoading(false);
  }, [setSettings]);

  useEffect(() => {
    getSettings();
  }, [getSettings]);

  useEffect(() => {
    if (isLoading) return;
    // router.replace({
    //   query: settings,
    // });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [settings, isLoading]);

  const canvasRef = useRef(null);

  const getConvertOptions = useCallback(
    (settings) => {
      const scale =
        exportSettings.renderScale === "3x"
          ? 3
          : exportSettings.renderScale === "2x"
          ? 2
          : 1;
      console.log(scale);

      const options = {
        canvasWidth: canvasRef.current.clientWidth * scale,
        canvasHeight: canvasRef.current.clientHeight * scale,
        quality: 0.95,
      };
      return options;
    },
    [exportSettings.renderScale]
  );

  const onExport = useCallback(async () => {
    if (!canvasRef.current) return;

    const options = getConvertOptions(settings);

    let imgUrl = null;

    const fileExtension = `.${exportSettings.renderFormat.toLowerCase()}`;

    switch (fileExtension) {
      case ".jpeg":
        imgUrl = await toJpeg(canvasRef.current, options);
        break;
      case ".svg":
        imgUrl = await toSvg(canvasRef.current, options);
        break;
      default:
        imgUrl = await toPng(canvasRef.current, options);
        break;
    }

    if (!imgUrl) return;
    const filename = `${settings.filename || "Untitled"}${fileExtension}`;
    const link = document.createElement("a");
    link.download = filename;
    link.href = imgUrl;
    link.click();

    gtag.event({
      action: "image_export",
      category: "export",
      label: location.href,
    });
  }, [getConvertOptions, settings, exportSettings.renderFormat]);

  const onCopyAsLink = useCallback(async () => {
    window.navigator.clipboard.writeText(location.href);
    gtag.event({
      action: "copy_link",
      category: "export",
      label: location.href,
    });
  }, []);

  const onCopyAsImage = useCallback(async () => {
    if (!canvasRef.current) return;
    const options = getConvertOptions(settings);
    const blob = await toBlob(canvasRef.current, options);
    window.navigator.clipboard.write([
      new ClipboardItem({ "image/png": blob }),
    ]);
    console.log("Copied");
    gtag.event({
      action: "copy_image",
      category: "export",
      label: location.href,
    });
  }, [getConvertOptions, settings]);

  const onReset = () => {
    setSettings(initAppState);
    gtag.event({
      action: "reset",
      category: "reset",
    });
  };

  if (isLoading) return null;

  return (
    <EditorContext.Provider
      value={{
        canvasRef,
        onExport,
        onCopyAsLink,
        onCopyAsImage,
        onReset,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};

export const useEditor = () => {
  const context = useContext(EditorContext);
  if (!context) {
    throw new Error("Editor context is not initialized!");
  }
  return context;
};
