import * as Popover from "@radix-ui/react-popover";
import axios from "axios";
import { useAtom } from "jotai";
import { useCallback, useEffect, useState } from "react";
import { colors } from "./colors";
import { gradients } from "./gradients";
import { appStateAtom } from "./appState";

export const backgroundWindowTabs = [
  {
    id: "colors",
    label: "Colors",
  },
  {
    id: "gradients",
    label: "Gradients",
  },
];

export const BackgroundPicker = () => {
  const [tab, setTab] = useState(backgroundWindowTabs[0].id);
  const [appState] = useAtom(appStateAtom);
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs text-white/30" htmlFor="background-input">
        Background
      </label>
      <Popover.Root>
        <Popover.Trigger asChild>
          <button
            id="background-input"
            className="h-7 w-12 rounded-md ring-1 ring-white/20 bg-no-repeat bg-cover"
            style={{
              backgroundColor: appState.backgroundColor,
              backgroundImage:
                appState.backgroundColor === "transparent"
                  ? "url(/transparent-bg-pattern.png)"
                  : appState.backgroundThumb,
            }}
          />
        </Popover.Trigger>
        <Popover.Content sideOffset={10} align="center" side="top">
          <div className="bg-gray-900 ring-offset-white/20 ring-offset-1 rounded-2xl backdrop-blur-xl ring-1 ring-black/40 shadow-2xl w-screen max-w-xs max-h-[500px] h-[70vh] overflow-y-auto relative text-white">
            <div className="px-4 h-12 sticky top-0 z-10 bg-gray-900/60 backdrop-blur-xl border-b border-white/10">
              <div className="flex gap-4 items-center h-full list-none">
                {backgroundWindowTabs.map((item) => (
                  <div key={item.id}>
                    <button
                      className={item.id === tab ? "opacity-100" : "opacity-50"}
                      onClick={() => setTab(item.id)}
                    >
                      {item.label}
                    </button>
                  </div>
                ))}
              </div>
            </div>
            {tab === "colors" ? <ColorsPanel /> : <GradientsPanel />}
          </div>
        </Popover.Content>
      </Popover.Root>
    </div>
  );
};

const ColorsPanel = () => {
  const [appState, setAppState] = useAtom(appStateAtom);
  const setColor = useCallback(
    (color) => {
      setAppState({
        ...appState,
        backgroundImage: undefined,
        backgroundThumb: undefined,
        backgroundColor: color,
      });
    },
    [appState, setAppState]
  );
  return (
    <div className="grid grid-cols-3 gap-4 p-4 list-none">
      {colors.map((color, i) => (
        <div key={i} className="w-full">
          <button
            className="w-full aspect-video rounded-md ring-1 ring-gray-700 bg-no-repeat bg-cover"
            style={{
              backgroundColor: color,
              backgroundImage:
                color === "transparent"
                  ? "url(/transparent-bg-pattern.png)"
                  : undefined,
            }}
            onClick={() => setColor(color)}
          ></button>
        </div>
      ))}
    </div>
  );
};

const GradientsPanel = () => {
  const [appState, setAppState] = useAtom(appStateAtom);

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {gradients.map((gradient, i) => (
        <div className="w-full" key={i}>
          <button
            className="w-full aspect-video rounded-md ring-1 ring-gray-700 bg-no-repeat bg-cover bg-center"
            style={{
              backgroundColor: gradient.color,
              backgroundImage: gradient.gradient,
            }}
            onClick={() =>
              setAppState({
                ...appState,
                backgroundColor: gradient.color,
                backgroundImage: gradient.gradient,
                backgroundThumb: gradient.gradient,
              })
            }
          ></button>
        </div>
      ))}
    </div>
  );
};
