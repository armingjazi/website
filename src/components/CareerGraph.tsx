"use client";

import useCareerData, { CareerNodeData } from "@/hooks/useCareerData";
import React, { useEffect, useRef, useState } from "react";
import CareerNode from "@/components/CareerNode";
import { SimulationLinkDatum, SimulationNodeDatum } from "d3";
import * as d3 from "d3";
import CareerEdge from "@/components/CareerEdge";

export type Position = { x?: number; y?: number };

export type NodeData = SimulationNodeDatum &
  Partial<CareerNodeData> & {
    id: string;
    charge: number;
    affinity?: string;
    expanded?: boolean;
    min_radius?: number;
    max_radius?: number;
  };
export type LinkData = SimulationLinkDatum<NodeData> & {
  color?: "primary" | "secondary";
};

const MIN_RADIUS = 35;
const MAX_RADIUS = 40;
const CHARGE = -100;
const LINK_STRENGTH = 1;
const X_FORCE = 0.1;
const ALPHA = 0.3;
const ALPHA_DECAY = 0.5;

const CareerGraph = () => {
  const careerData = useCareerData();
  const svgRef = useRef<SVGSVGElement>(null);
  const simulationRef = useRef<d3.Simulation<NodeData, LinkData> | null>(null);

  const [nodes, setNodes] = useState<NodeData[]>(
    careerData.nodes.map((node) => ({
      ...node,
      min_radius: MIN_RADIUS,
      max_radius: MAX_RADIUS,
      charge: CHARGE,
    })),
  );

  const [positions, setPositions] = useState<Record<string, Position>>({});

  const [links, setLinks] = useState<LinkData[]>(
    careerData.edges.map((edge) => edge),
  );

  useEffect(() => {
    if (!svgRef.current) return;

    const width = svgRef.current.clientWidth;
    const height = svgRef.current.clientHeight;

    if (simulationRef.current) {
      simulationRef.current
        .nodes(nodes)
        .force(
          "link",
          d3
            .forceLink<NodeData, SimulationLinkDatum<NodeData>>(links)
            .id((d) => d.id)
            .strength(LINK_STRENGTH),
        )
        .force("charge", d3.forceManyBody<NodeData>().strength((d) => d.charge))
        .force("center", d3.forceCenter(width / 2, height / 2))
        .force("collision", d3.forceCollide().radius(30))
        .force("bounds", () => {
          for (const node of nodes) {
            // Bound x coordinate
            node.x = Math.max(
              MAX_RADIUS,
              Math.min(width - MAX_RADIUS, node.x ?? 0),
            );
            // Bound y coordinate
            node.y = Math.max(
              MAX_RADIUS,
              Math.min(height - MAX_RADIUS, node.y ?? 0),
            );
          }
        })
        .alpha(ALPHA)
        .restart();
    }

    // Update positions on tick
    simulationRef.current = d3
      .forceSimulation<NodeData>(nodes)
      // Strong link force for equal distances
      .force(
        "link",
        d3
          .forceLink<NodeData, SimulationLinkDatum<NodeData>>(links)
          .id((d) => d.id)
          .strength(LINK_STRENGTH),
      )
      .force("charge", d3.forceManyBody<NodeData>().strength((d) => d.charge))
      .force(
        "xForce",
        d3.forceX<NodeData>(width).strength((d) => X_FORCE * (d.xPos ?? 0)),
      )
      // Center force to keep the graph centered
      .force("center", d3.forceCenter(width / 2, height / 2))
      // Optional collision force if needed
      .force("collision", d3.forceCollide().radius(60))
      .on("tick", () => {
        setPositions(
          nodes.reduce(
            (acc, node) => {
              acc[node.id] = { x: node.x || 0, y: node.y || 0 };
              return acc;
            },
            {} as Record<string, Position>,
          ),
        );
      })
      .force("bounds", () => {
        for (const node of nodes) {
          // Bound x coordinate
          node.x = Math.max(
            MAX_RADIUS,
            Math.min(width - MAX_RADIUS, node.x ?? 0),
          );
          // Bound y coordinate
          node.y = Math.max(
            MAX_RADIUS,
            Math.min(height - MAX_RADIUS, node.y ?? 0),
          );
        }
      });

    simulationRef.current.alpha(ALPHA).alphaDecay(ALPHA_DECAY);

    // Cleanup
    return () => {
      simulationRef.current?.stop();
    };
  }, [nodes, links]);

  const handleNodeClick = (node: NodeData) => {
    if (node.expanded || node.children?.length === 0) return;
    const newNodes = node.children?.map((child) => ({
      charge: (node.charge - 10),
      affinity: node.id,
      x: (node.x || 0),
      y: (node.y || 0),
      min_radius: (node.min_radius ?? MIN_RADIUS) - 5,
      max_radius: (node.max_radius ?? MAX_RADIUS) - 5,
      ...child,
      xPos: 0,
    }));

    if (!newNodes) return;

    const newLinks = newNodes.map((newNode) => ({
      source: node,
      target: newNode,
    }));

    node.expanded = true;
    setNodes([...nodes, ...newNodes]);
    setLinks([...links, ...newLinks]);
  };

  return (
    <div className="w-full h-screen bg-transparent overflow-hidden z-10 relative">
      <svg className="w-full h-full z-10 relative" ref={svgRef}>
        {links.map((link, i) => (
          <CareerEdge
            target={{
              x: typeof link.target === "object" ? link.target.x : 0,
              y: typeof link.target === "object" ? link.target.y : 0,
            }}
            source={{
              x: typeof link.source === "object" ? link.source.x : 0,
              y: typeof link.source === "object" ? link.source.y : 0,
            }}
            color={link.color}
            key={i}
          />
        ))}

        {nodes.map(
          (node) =>
            positions[node.id] && (
              <CareerNode
                key={node.id}
                data={node}
                min_radius={node.min_radius ?? MIN_RADIUS}
                max_radius={node.max_radius ?? MAX_RADIUS}
                position={positions[node.id]}
                disabled={node.description === ""}
                onClick={() => handleNodeClick(node)}
              />
            ),
        )}
      </svg>
    </div>
  );
};

export default CareerGraph;
