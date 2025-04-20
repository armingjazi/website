'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from "react";

export default function ScrollHint() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShow(false);
      } else {
        setShow(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!show) return null;
  return (
    <motion.div
      className="fixed bottom-32 left-1/2 -translate-x-1/2 z-50"
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: [0, 10, 0], opacity: [0, 1, 0] }}
      transition={{
        delay: 3,
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg
        className="w-12 h-12 text-white opacity-70"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </motion.div>
  );
}
