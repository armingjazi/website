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
export type LinkData = SimulationLinkDatum<NodeData> & {color?: "primary" | "secondary"};

const MIN_RADIUS = 35;
const MAX_RADIUS = 40;
const CHARGE = -150;
const LINK_STRENGTH = 0.5;
const ALLOWED_RADIUS = 40;
const LINK_MIN_DISTANCE = 50;
const LINK_MAX_DISTANCE = 100;
const X_FORCE = 0.3;
const Y_FORCE = 0.05;
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
    const boundaryNodes = [
      {x: 0, y: height/2, fx: 0, fy: height/2, id: "left", charge: 0},
      {x: width, y: height/2, fx: width, fy: height/2, id: "right", charge: 0},
      {x: width/2, y: 0, fx: width/2, fy: 0, id: "top", charge: 0},
      {x: width/2, y: height, fx: width/2, fy: height, id: "bottom", charge: 0},
    ];


    if (simulationRef.current) {
      simulationRef.current
        .nodes([...nodes, ...boundaryNodes])
        .force(
          "link",
          d3
            .forceLink<NodeData, SimulationLinkDatum<NodeData>>(links)
            .id((d, i) => d.id)
            .distance((d) =>
              (d.target as NodeData).affinity === (d.source as NodeData).id
                ? LINK_MIN_DISTANCE
                : LINK_MAX_DISTANCE,
            )
            .strength(LINK_STRENGTH),
        )
        .force("xForce", d3.forceX<NodeData>(width).strength((d) => X_FORCE * (d.xPos ?? 0)))
        .force("yForce", d3.forceY<NodeData>(-height).strength((d) => Y_FORCE * (d.xPos ?? 0)))
        .force(
          "charge",
          d3.forceManyBody<NodeData>().strength((d, i) => d.charge),
        )
        .force("bounce", function(alpha) {
          for (let node of nodes) {
            if (!node.x || !node.y) continue;
            if (!node.vx || !node.vy) continue;
            if (node.x < ALLOWED_RADIUS) node.vx += alpha;
            if (node.x > width - ALLOWED_RADIUS) node.vx -= alpha;
            if (node.y < ALLOWED_RADIUS) node.vy += alpha;
            if (node.y > height - ALLOWED_RADIUS) node.vy -= alpha;
          }
        })
        .force("center", d3.forceCenter(width / 2, height / 2))
        .force("collision", d3.forceCollide().radius(60))
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
          .id((d, i) => d.id)
          .distance((d) =>
            (d.target as NodeData).affinity === (d.source as NodeData).id
              ? LINK_MIN_DISTANCE
              : LINK_MAX_DISTANCE,
          )
          .strength(LINK_STRENGTH),
      )
      .force("xForce", d3.forceX<NodeData>(width).strength((d) => X_FORCE * (d.xPos ?? 0)))
      .force("yForce", d3.forceY<NodeData>(-height).strength((d) => Y_FORCE * (d.xPos ?? 0)))
      .force("bounce", function(alpha) {
        for (let node of nodes) {
          if (!node.x || !node.y) continue;
          if (!node.vx || !node.vy) continue;
          if (node.x < ALLOWED_RADIUS) node.vx += alpha;
          if (node.x > width - ALLOWED_RADIUS) node.vx -= alpha;
          if (node.y < ALLOWED_RADIUS) node.vy += alpha;
          if (node.y > height - ALLOWED_RADIUS) node.vy -= alpha;
        }
      })
      // Weak charge force just to prevent overlap
      .force(
        "charge",
        d3.forceManyBody<NodeData>().strength((d, i) => d.charge),
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
      });

    simulationRef.current.alpha(ALPHA).alphaDecay(ALPHA_DECAY);

    // Cleanup
    return () => {
      simulationRef.current?.stop();
    };
  }, [nodes]);

  const handleNodeClick = (node: NodeData, nodeIndex: number) => {
    if(node.expanded || node.children?.length === 0)
      return;
    const newNodes = node.children?.map((child) => ({
      charge: -(node.charge + 10),
      affinity: nodes[nodeIndex].id,
      x: (node.x || 0) + 50,
      y: (node.y || 0) + 50,
      min_radius: (node.min_radius ?? MIN_RADIUS) - 5,
      max_radius: (node.max_radius ?? MAX_RADIUS) - 5,
      ...child,
    }));

    console.log(newNodes);

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

        {nodes.map((node, index) => (
          (positions[node.id] && <CareerNode
            key={node.id}
            data={node}
            min_radius={node.min_radius ?? MIN_RADIUS}
            max_radius={node.max_radius ?? MAX_RADIUS}
            position={positions[node.id]}
            disabled={node.description === ""}
            onClick={() => handleNodeClick(node, index)}
          />)
        ))}
      </svg>
    </div>
  );
};

export default CareerGraph;
