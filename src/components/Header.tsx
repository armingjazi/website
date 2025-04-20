'use client';

import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import DownloadPdf from "@/components/DownloadPdf";
import { Circle } from "lucide-react";

export const Header = () => {
  return (
    <motion.header
      className="p-6 flex justify-between items-center z-40 relative "
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <Link className="items-left cursor-pointer" href="/">
        <Circle/>
      </Link>
      <div className="flex-grow" />
      <DownloadPdf />
    </motion.header>
  );
};
