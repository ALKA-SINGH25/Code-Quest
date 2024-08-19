"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { generateColor } from "./utils";
import Meeting from "@/components/sync/Meeting";
import "./Room.css";
import Editor_Dev from "@/components/Editor_Dev";

export default function Room({ socket }) {
  const navigate = useRouter();
  const { roomId } = useParams();
  const [fetchedUsers, setFetchedUsers] = useState([]);
  const [html, setHtml] = useState("<h1>Hello People</h1>");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
      <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
      </html>
      `);
      localStorage.setItem("playground", JSON.stringify({ html, css, js }));
    }, 250);
    return () => clearTimeout(timeout);
  }, [html, css, js]);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("playground")) || {
      html: "<h1>Hello People </h1>",
      css: "",
      js: "",
    };
    setHtml(savedData.html);
    setCss(savedData.css);
    setJs(savedData.js);
  }, []);

  const handleCodeChange = (language, newValue) => {
    if (language === "html") setHtml(newValue);
    if (language === "css") setCss(newValue);
    if (language === "js") setJs(newValue);
    socket.emit("update code2", { roomId, language, code: newValue });
  };

  const handleLeave = () => {
    socket.disconnect();
    if (!socket.connected) navigate.push("/", { replace: true, state: {} });
  };

  const copyToClipboard = (text) => {
    try {
      navigator.clipboard.writeText(text);
    } catch (exp) {
      console.error(exp);
    }
  };

  useEffect(() => {
    socket.on("updating client list", ({ userslist }) => {
      setFetchedUsers(userslist);
    });

    socket.on("on code update2", ({ language, code }) => {
      if (language === "html") setHtml(code);
      if (language === "css") setCss(code);
      if (language === "js") setJs(code);
    });

    const backButtonEventListner = window.addEventListener("popstate", (e) => {
      const eventStateObj = e.state;
      if (!("usr" in eventStateObj) || !("username" in eventStateObj.usr)) {
        socket.disconnect();
      }
    });

    return () => {
      window.removeEventListener("popstate", backButtonEventListner);
    };
  }, [socket]);

  return (
    <div className="room">
      <div className="w-full flex flex-col">
        <div className="roomSidebarUsersWrapper mb-3">
          <p className="text-[#3F74E6]">Connected Users:</p>
          <div className="roomSidebarUsers">
            {fetchedUsers.map((each, index) => (
              <div key={index} className="roomSidebarUsersEach">
                <div
                  className="roomSidebarUsersEachAvatar"
                  style={{ backgroundColor: `${generateColor(each)}` }}
                >
                  {each.slice(0, 2).toUpperCase()}
                </div>
                <div className="roomSidebarUsersEachName">{each}</div>
              </div>
            ))}
          </div>
        </div>

        <Meeting roomId={roomId} />
        <div className="flex my-2 justify-center items-center gap-4">
          <button
            className="bg-blue-500 text-light-1 hover:bg-blue-600 transition-all px-4 py-2 rounded-lg"
            onClick={() => copyToClipboard(roomId)}
          >
            Copy Invite code
          </button>
          <button
            className="bg-red-500 text-light-1 hover:bg-red-600 transition-all px-4 py-2 rounded-lg"
            onClick={handleLeave}
          >
            Leave
          </button>
        </div>
      </div>

      <div className="w-full flex flex-col">
        <div className="pane top-pane">
          <Editor_Dev
            language="html"
            displayName="HTML"
            value={html}
            onChange={(newValue) => handleCodeChange("html", newValue)}
          />
          <Editor_Dev
            language="css"
            displayName="CSS"
            value={css}
            onChange={(newValue) => handleCodeChange("css", newValue)}
          />
          <Editor_Dev
            language="js"
            displayName="JS"
            value={js}
            onChange={(newValue) => handleCodeChange("js", newValue)}
          />
        </div>
        <div className="pane">
          <iframe
            srcDoc={srcDoc}
            title="output"
            sandbox="allow-scripts"
            frameBorder="0"
            width="100%"
            height="100%"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
