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
  priority = false,
}: {
  title: string;
  src: string;
  alt: string;
  url: string;
  details: string;
  priority?: boolean;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);
  return (
    <section className="img-container h-screen snap-start flex justify-center items-center relative">
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute w-full h-full"
      />
      <div ref={ref}>
        <Image
          src={src}
          alt={alt}
          width={720}
          height={297}
          priority={priority}
        />
      </div>
      <div className={"flex flex-row"}>
        <motion.div
          initial={{ visibility: "hidden" }}
          animate={{ visibility: "visible" }}
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
