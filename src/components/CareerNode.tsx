import React from "react";
import { cn } from "@/lib/utils";
import { NodeData, Position } from "@/components/CareerGraph";
import Icon from "@/components/Icon";
import { useTooltip } from "@/components/MouseTooltip";
import { Plus } from "lucide-react";
import { useDescription } from "@/components/DescriptionContext";

const CareerNode = ({
  data,
  position,
  onClick,
  onDrag,
  onDragStart,
  onDragEnd,
  disabled,
  min_radius,
  max_radius,
}: {
  data: NodeData;
  position: Position;
  onClick?: () => void;
  onDrag?: (e: React.MouseEvent) => void;
  onDragStart?: (e: React.MouseEvent) => void;
  onDragEnd?: (e: React.MouseEvent) => void;
  disabled?: boolean;
  min_radius: number;
  max_radius: number;
}) => {
  const [hovered, setHovered] = React.useState(false);
  const { setTooltipContent } = useTooltip();
  const {setDescription} = useDescription();

  const handleMouseOver = () => {
    setHovered(true);
    if (data.tooltip) {
      setTooltipContent(data.tooltip);
    }
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    setHovered(false);
    setTooltipContent("");
    onDragEnd?.(e);
  };

 const handleClick = () => {
   setDescription(data.description ?? "");
   onClick?.();
 }

  return (
    <g
      transform={`translate(${position.x || 0}, ${position.y || 0})`}
      onMouseUp={onDragEnd}
      onMouseDown={onDragStart}
      onMouseMove={onDrag}
      onMouseLeave={handleMouseLeave}
      onMouseOver={handleMouseOver}
    >
      <g
        role={disabled ? "none" : "button"}
        tabIndex={0}
        aria-label={`Career: ${data.title}`}
        onClick={() => {
          if (disabled) return;
          handleClick();
        }}
        onKeyDown={(e) => {
          if (disabled) return;
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleClick();
          }
        }}
        className="focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-full"
      >
        <circle
          r={hovered ? max_radius : min_radius}
          className={cn(
            "transition-all duration-300 peer stroke-primary stroke-2",
            disabled ? "" : "hover:fill-accent",
            data.color === "secondary" ? 'fill-secondary' : "fill-primary",
          )}
        />
        {data.shortTitle && (
          <text
            className={cn(
              "text-xs font-semibold text-center fill-primary-foreground pointer-events-none",
              disabled ? "" : "peer-hover:fill-primary",
            )}
            textAnchor="middle"
            y="5"
            aria-hidden="true"
          >
            {data.shortTitle}
          </text>
        )}
        {!data.expanded && data.children && (data.children.length > 0) && (
          // Show the expand icon
          <foreignObject
            x={10}
            y={-20}
            width={12}
            height={12}
            className={cn(
              "pointer-events-none text-primary-foreground peer-hover:text-primary",
            )}
          >
            <Plus
              size={10}
              className="pointer-events-none"
              />
          </foreignObject>
        )}
        {data.icon && (
          <foreignObject
            x={-12}
            y={-12}
            width={24}
            height={24}
            className={cn(
              "pointer-events-none text-primary-foreground inline-flex content-center justify-items-center",
              disabled ? "" : "peer-hover:text-primary",
            )}
          >
            <Icon name={data.icon} size={22} strokeWidth={1.5} />
          </foreignObject>
        )}
      </g>
    </g>
  );
};

export default CareerNode;
