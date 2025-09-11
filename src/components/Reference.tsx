"use client";
import { useRef } from "react";
import { useScroll } from "framer-motion";
import { useParallax } from "@/hooks/useParallax";
import { motion } from "framer-motion";
import Link from "next/link";

export function Reference({
  id,
  title,
  src,
  alt,
  url,
  details,
  backgroundColor = "bg-[#08101b]",
}: {
  id?: string;
  title: string;
  src: string;
  alt: string;
  url: string;
  details: string;
  backgroundColor?: string;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);
  return (
    <section id={id} className={`h-screen snap-start flex justify-center items-center relative overflow-hidden ${backgroundColor}`}>
      <Link
        href={url}
        target={url.startsWith("http") ? "_blank" : "_self"}
        rel="noopener noreferrer"
        className="absolute w-full h-full z-10 left-0 md:left-[100px]"
        style={{ width: "calc(100% - 100px)" }}
      />
      <div ref={ref} className="overflow-hidden">
        <motion.img
          src={src}
          alt={alt}
          width={600}
          height={247}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />
      </div>
      <div className="flex flex-row">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ y }}
          className="absolute inline-block m-0 top-[calc(12%)] md:top-[calc(50%)] left-[calc(50%_+_20px)] md:left-[calc(50%_+_50px)] xl:left-[calc(47%)] xl:px-32"
        >
          <h2 className="text-primary text-[22px] md:text-[48px] lg:text-[64px] xl:text-[72px] leading-[1.2] tracking-wider">
            {title}
          </h2>
          <p className="pr-2 text-white text-[12px] sm:text-[14px] md:text-[16px]">{details}</p>
        </motion.div>
      </div>
    </section>
  );
}
