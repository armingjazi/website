"use client";
import { useRef } from "react";
import { useScroll } from "framer-motion";
import { useParallax } from "@/hooks/useParallax";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function Reference({
  title,
  src,
  alt,
  url,
  details,
}: {
  title: string;
  src: string;
  alt: string;
  url: string;
  details: string;
}) {
  const containerRef = useRef(null);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, container: containerRef });
  const y = useParallax(scrollYProgress, 300);
  return (
    <section ref={containerRef} className="h-screen snap-start flex justify-center items-center relative overflow-hidden">
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute w-full h-full z-10"
      />
      <div ref={ref} className="relative">
        <motion.img
          src={src}
          alt={alt}
          width={600}
          height={247}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        />
      </div>
      <div className={"flex flex-row"}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{ y }}
          className="absolute inline-block top-[calc(50%)] m-0 left-[calc(50%_+_50px)]"
        >
          <h2 className="text-primary text-[50px] md:text-[48px] lg:text-[64px] xl:text-[72px] leading-[1.2] tracking-wider ">
            {title}
          </h2>
          <p className="px-2 text-white">{details}</p>
        </motion.div>
      </div>
    </section>
  );
}
