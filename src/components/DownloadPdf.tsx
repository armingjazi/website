"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useTooltip } from "@/components/MouseTooltip";
import React from "react";

const DownloadPdf = () => {
  const { setTooltipContent } = useTooltip();
  const downloadPdf = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "cv.pdf";
    link.click();
  };

  const handleMouseOver = () => {
    setTooltipContent("Download CV as PDF");
  };

  const handleMouseLeave = () => {
    setTooltipContent("");
  };
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={downloadPdf}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <Download />
    </Button>
  );
};

export default DownloadPdf;
