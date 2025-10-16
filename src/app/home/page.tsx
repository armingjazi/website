"use client";
import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Reference } from "@/components/Reference";
import ScrollHint from "@/components/ScrollHint";
import { links } from "@/app/links";

export default function Page() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="relative">
      {links.map((link) => (
        <Reference
          key={link.id}
          id={link.id}
          alt={link.name}
          title={link.name}
          src={link.img}
          url={link.url}
          details={link.details}
          backgroundColor={link.bg}
        />
      ))}
      <ScrollHint />
      <motion.div
        className="fixed left-0 right-0 h-[5px] bottom-[50px] bg-[#8df0cc]"
        style={{ scaleX }}
      />
    </div>
  );
}
