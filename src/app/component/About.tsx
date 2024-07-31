"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";



export function About() {
  return (
    <div>
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
            Discover more<br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
              About Me
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/about1.svg`}
          alt="hero"
          height={720}
          width={1400}
          mx-auto rounded-2xl object-cover object-left-top h-auto max-w-full
          className="mx-auto rounded-2xl object-cover h-full object-left-top w-full"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
export default About;