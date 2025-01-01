import React from "react";
import { Position } from "@/components/CareerGraph";
import { cn } from "@/lib/utils";

const CareerEdge = ({
  source,
  target,
  color,
}: {
  source: Position | undefined;
  target: Position | undefined;
  color?: 'primary' | 'secondary';
}) => {
  return (
    <line
      x1={source?.x || 0}
      y1={source?.y || 0}
      x2={target?.x || 0}
      y2={target?.y || 0}
      className={cn(
        'stroke-2',
        color === 'secondary' ? 'stroke-secondary/75' : 'stroke-primary/75',
      )}
    />
  );
};

export default CareerEdge;
