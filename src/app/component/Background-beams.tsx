"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";

import { FlipWords } from "./ui/flip-words";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUnity,faLinkedin,faGithub } from "@fortawesome/free-brands-svg-icons"; 
import { HoverBorderGradient } from "./ui/hover-border-gradient";



export function BackgroundBeamsDemo() {
  return (
    <div className="h-[100vh] w-full rounded-md bg-neutral-950 relative flex flex-1 flex-col items-center justify-center ">
      <div className="max-w-2xl mx-auto p-2">

        <div className="my-5 items-center justify-center">
          <h1 className="relative z-10 text-7xl md:text-7xl bg-clip-text text-transparenttext-neutral-500  text-left ">
            Usama Waseem
          </h1>
        </div>
        <div className=" w-full mb-10">
          <h2 className="absolute z-10 text-6xl md:text-[4rem] font-bold text-left">
            <FlipWords words={["Software Engineer", "Android Developer", "Game Developer"]} /></h2>
        </div><br /><br /><br />
        <div className=" text-neutral-500  max-w-lg mx-auto mt-20 text-center relative z-10 " >
        
          <a href="/cv.pdf" download="cv_UsamaWaseem">
            <button className="relative h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              Download Resume
            </button>
          </a>

        </div>
        <div className="mt-10 flex justify-center items-center gap-10">
        <a href="https://play.unity.com/en/user/1bcac88f-91a5-4c21-bd77-c01faa1b4135" target="_blank" rel="noopener noreferrer" style={{ zIndex: 20 }}>
            <FontAwesomeIcon icon={faUnity} size="3x" />
          </a>
          <a href="https://linkedin.com/in/usama-waseem-bbb27a279/" target="_blank" rel="noopener noreferrer" style={{ zIndex: 20 }}>
            <FontAwesomeIcon icon={faLinkedin} size="3x" style={{ color: "#668fd6" }} />
          </a>
          <a href="https://github.com/usamawaseem888" target="_blank" rel="noopener noreferrer" style={{ zIndex: 20 }}>
            <FontAwesomeIcon icon={faGithub} size="3x" />
          </a>

        </div>

      </div>
      <BackgroundBeams />
    </div>
  );
}
