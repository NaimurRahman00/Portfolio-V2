"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function SkillsSection() {
  return (
    (<div
      className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.125] bg-grid-black/[0.125] items-center justify-center relative overflow-hidden">
      <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center text-white font-medium mb-2 lg:mb-8">
        All that technology I know
      </h4>
      <InfiniteMovingCards items={skills} direction="right" speed="slow" />
      <InfiniteMovingCards items={tools} direction="left" speed="slow" />
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    </div>)
  );


}

const skills = [
  {
    logo: '/html.png'
  },
  {
    logo: '/css.png'
  },
  {
    logo: '/tailwind.png'
  },
  {
    logo: '/bootstrap-framework.png'
  },
  {
    logo: '/js.png'
  },
  {
    logo: '/ts.png'
  },
  {
    logo: '/react.png'
  },
  {
    logo: '/nextjs.512x309.png'
  },
];

const tools = [
  {
    logo: '/firebase.png'
  },
  {
    logo: '/npm.png'
  },
  {
    logo: '/mongodb.png'
  },
  {
    logo: '/figma.png'
  },
  {
    logo: '/git.png'
  },
  {
    logo: '/express.png'
  },
  {
    logo: '/github.png'
  },
  {
    logo: '/vscode.png'
  },
  {
    logo: '/node.png'
  },
]
