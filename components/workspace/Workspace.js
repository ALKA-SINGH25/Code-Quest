"use client";
import Split from "react-split";
import ProblemDesc from "../ProblemDesc";
import Playground from "./Playground";
import { useState } from "react";
import Confetti from "react-confetti";

const Workspace = ({ problems }) => {
  const [submitted, setSubmitted] = useState(false);
  const gutterStyle = () => ({
    backgroundColor: "#1e1e1e",
    width: "10px",
    borderRadius: "10px",
  });

  return (
    <>
      {submitted && <Confetti gravity={0.3} tweenDuration={5000} />}
      <Split
        className="split px-1 h-[92vh] max-md:hidden"
        minSize={400}
        gutterStyle={gutterStyle}
      >
        <ProblemDesc problems={problems} />
        <Playground problems={problems} setSubmitted={setSubmitted} />
      </Split>
      <div className="md:hidden px-1">
        <ProblemDesc problems={problems} />
        <Playground problems={problems} setSubmitted={setSubmitted} />
      </div>
    </>
  );
};

export default Workspace;
