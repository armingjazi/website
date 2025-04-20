import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { CareerNodeData } from "@/hooks/useCareerData";
import Icon from "@/components/Icon";
import { useDescription } from "@/components/DescriptionContext";
import { motion } from "framer-motion";

const TimelineNode = ({
  node,
  depth = 0,
}: {
  node: CareerNodeData;
  depth: number;
}) => {
  const { setDescription } = useDescription();
  const [isOpen, setIsOpen] = useState(false);

  const hasChildren = node.children && node.children.length > 0;

  const handleClick = () => {
    if (hasChildren) {
      setIsOpen(!isOpen);
    }
    setDescription(node.description ?? "");
  };

  return (
    <motion.div
      className={`ml-${depth * 4} z-10 flex flex-col`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <button
        onClick={handleClick}
        className="z-10 w-full py-3 flex items-center justify-between cursor-pointer hover:bg-secondary/10 pl-2"
      >
        <span className="flex flex-row space-x-2 items-center z-10">
          {depth === 0 && (
            <span className="text-secondary-foreground px-3 py-2 rounded-full text-xs inline-block bg-secondary">
              {node.shortTitle}
            </span>
          )}
          {depth > 0 && <Icon name={node.icon} size={20} strokeWidth={1.5} />}
          {!node.hideTitle && (
            <span className="font-semibold z-10 text-left">{node.title}</span>
          )}
        </span>
        {hasChildren && (
          <ChevronDown
            className={`w-6 h-6 mr-2 transition-transform duration-200 ${
              isOpen ? "transform rotate-180" : ""
            }`}
          />
        )}
      </button>
      {hasChildren && (
        <div
          className={`border-l border-l-secondary/85 ml-6 pl-8 transition-all overflow-hidden ease-in-out duration-500 ${isOpen ? "max-h-96" : "max-h-0"}`}
        >
          {node.children.map((child) => (
            <TimelineNode key={child.id} node={child} depth={depth + 1} />
          ))}
        </div>
      )}
      {depth === 0 && (
        <div className="pl-10">
          <hr className="h-px w-full border-t-secondary/85 my-4" />
        </div>
      )}
    </motion.div>
  );
};

export default TimelineNode;
