"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const TypewriterText = () => {
  useEffect(() => {
    const texts = document.querySelectorAll(".typewriter-text");

    texts.forEach((text, index) => {
      const originalText = text.getAttribute("data-text");
      text.textContent = "";

      gsap.to(text, {
        text: originalText,
        duration: originalText.length * 0.05,
        ease: "none",
        delay: index * 0.5,
      });
    });
  }, []);

  return (
    <div className="flex flex-col gap-6 items-start max-sm:gap-5 max-xs:gap-3">
      <p
        className="text-7xl max-sm:text-6xl max-xs:text-4xl text-[#4BD4A3] font-bold text-center typewriter-text"
        data-text="Learn"
      ></p>
      <p
        className="text-7xl max-sm:text-6xl max-xs:text-4xl text-[#3F74E7] font-bold text-center typewriter-text"
        data-text="Compete"
      ></p>
      <p
        className="text-7xl max-sm:text-6xl max-xs:text-4xl text-[#921BB4] font-bold text-center typewriter-text"
        data-text="Collaborate."
      ></p>
    </div>
  );
};

export default TypewriterText;
