"use client";
import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Reference } from "@/components/Reference";
import ScrollHint from "@/components/ScrollHint";

const links = [
  {
    name: "Armin Jazi",
    url: "/cv?mode=tabular",
    img: "/main_cv.png",
    details:
      "Engineer, Manager, Artist with a holistic approach to life. Experienced Software Developer with a demonstrated history of working in various fields. Skilled in Computer Science, C++, C#, Java, and web technologies, with a strong on analytical and critical methods." +
      " Manager supporting businesses grow through contemporary management body of knowledge." +
      " A trained movement artist interested in movement of any kind." +
      " An enthusiast of quantum mechanics, general relativity and neural networks" +
      " A digital experience designer and a digital artist with a focus on the human experience.",
    tooltip: "Click to see my CV",
    bg: "bg-[#111318]",
  },
  {
    name: "Web Docker",
    url: "https://github.com/OpenReplyDE/web-docker",
    img: "/webdocker.png",
    details: "Webdocker is a novel solution for delivering microfrontends in modern web applications. At its core, Webdocker functions as a central registry to which self-contained web fragments (built as web components) can subscribe. These fragments declare their required assets—such as JavaScript or CSS—and Webdocker is responsible for injecting them on demand.",
    tooltip: "Click to visit the repository",
    bg: "bg-[#020b14]",
  },
  {
    name: "Writings",
    url: "https://medium.com/@armin.gjazi",
    img: "/medium.png",
    details: "A collection of my writings on Medium. I write about technology, management, and the intersection of art and technology.",
    tooltip: "Click to read my articles",
  },
  {
    name: "A Digital Twin",
    url: "/digital-twin",
    img: "/digital_twin.png",
    details: "A prompted LLM acting as my digital twin. It is a work in progress, but it is capable of answering questions about me and my work.",
    tooltip: "Click to talk to my digital twin",
  },
];

export default function Page() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className='relative'>
      {links.map((link) => (
        <Reference
          key={link.name}
          alt={link.name}
          title={link.name}
          src={link.img}
          url={link.url}
          details={link.details}
          backgroundColor={link.bg}
        />
      ))}
      <ScrollHint />
      <motion.div className="fixed left-0 right-0 h-[5px] bottom-[50px] bg-[#8df0cc]" style={{ scaleX }} />
    </div>
  );
}
