"use client";
import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Reference } from "@/components/Reference";

const links = [
  {
    name: "Armin Jazi",
    url: "/cv?mode=tabular",
    img: "/main_cv.png",
    details:
      "Engineer, Manager, Artist with a holistic approach to life, continuously growing with the new. Experienced Software Developer with a demonstrated history of working in various fields. Skilled in Computer Science, C++, C#, Java, and web technologies, with a strong analytical and critical thinking focus." +
      "Manager Helping businesses grow and learn from gross misunderstandings of the contemporary management body of knowledge.\n" +
      " A dancer, martial artist, and trained movement therapist interested in movement of any kind." +
      " An enthusiast of quantum mechanics, general relativity, and quantum loop theory." +
      " Neural network enthusiasts studying the latest trends as they develop" +
      " A digital experience designer and a digital artist with a focus on the human experience.",
    tooltip: "Click to see my CV",
    priority: true,
  },
  {
    name: "Web Docker",
    url: "https://github.com/OpenReplyDE/web-docker",
    img: "/webdocker.png",
    details: "Webdocker is a novel solution for delivering microfrontends in modern web applications. At its core, Webdocker functions as a central registry to which self-contained web fragments (built as web components) can subscribe. These fragments declare their required assets—such as JavaScript or CSS—and Webdocker is responsible for injecting them on demand.",
    tooltip: "Click to visit the repository",
  },
  {
    name: "Movement Archery",
    url: "https://movementarchery.com",
    img: "/movement_archery.jpg",
    details: "Managing Online Products at Movement Archery, a method inspired by Zen, that highlights the value of practice as a way to improve one's presence within one's own body." +
      "Combining meditation, dance, acrobatics, philosophy, conditioning and martial arts. It is a practice of creativity. Moving to rediscover the self, its potential and its interaction with the world.",
    tooltip: "Click to visit the website",
  },
  {
    name: "Wonderground",
    url: "https://wondergroundcompany.com",
    img: "/wonderground.jpeg",
    details: "Collaborating with Wonderground since 2024, bringing technical innovation to dance performance documentation and audience engagement. Crafting their digital presence and enhancing the experience of their performances through digital media.",
    tooltip: "Click to visit the website",
  },
  {
    name: "Writings",
    url: "https://medium.com/@armin.gjazi",
    img: "/medium.jpeg",
    details: "A collection of my writings on Medium. I write about technology, management, and the intersection of art and technology.",
    tooltip: "Click to read my articles",
  },
  {
    name: "A Digital Twin",
    url: "/digital-twin",
    img: "/digital_twin.png",
    details: "A prompted LLM acting as my digital twin of my CV.",
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
    <div>
      {links.map((link) => (
        <Reference
          key={link.name}
          alt={link.name}
          title={link.name}
          src={link.img}
          url={link.url}
          details={link.details}
          priority={link.priority}
        />
      ))}
      <motion.div className="fixed left-0 right-0 h-[5px] bottom-[50px] bg-[#8df0cc]" style={{ scaleX }} />
    </div>
  );
}
