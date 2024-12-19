"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function Projects() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    (<div className="w-full h-full py-20 max-w-[1400px] mx-auto overflow-hidden">
      <h2
        className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Recent Projects
      </h2>
      <Carousel items={cards} />
    </div>)
  );
}

const DummyContent = (webImage) => {
  return (<>
    {[...new Array(1).fill(1)].map((_, index) => {
      return (
        (<div
          key={"dummy-content" + index}
          className="rounded-3xl mb-4 overflow-hidden">
          {console.log(webImage.webImage)}
          <Image
            src={webImage.webImage}
            alt='project image'
            height="1200"
            width="800"
            className="h-full w-full mx-auto object-contain" />
        </div>)
      );
    })}
  </>);
};

const data = [
  {
    category: "Ousodh Chai",
    title: "Online medicine store",
    src: "/project_1_cover.png",
    content: <DummyContent webImage='/project_1.png' />,
  },
  {
    category: "Movie Gallary",
    title: "Find your favorite movies and series here.",
    src: "/project_2_cover.jpg",
    content: <DummyContent webImage='/project_2.jpg' />,
  },
  {
    category: "ErgoCraft",
    title: "Buy our latest art and craft product.",
    src: "/project_3_cover.png",
    content: <DummyContent webImage='/project_3.png' />,
  },
  {
    category: "Tomomoni",
    title: "Job post and Seeking portal",
    src: "/project_4_cover.png",
    content: <DummyContent webImage='/project_4.png' />,
  },
  {
    category: "Berao Hotel booking",
    title: "Book your right place here.",
    src: "/project_5_cover.jpg",
    content: <DummyContent webImage='/project_5.jpg' />,
  },
  {
    category: "P-Ticket",
    title: "Smart bus ticketing website.",
    src: "/project_6_cover.jpg",
    content: <DummyContent webImage='/project_6.jpg' />,
  }
];
