// "use client";
//
// import React, { useState } from "react";
// import { Card } from "@/components/ui/card";
// import useCareerData, {
//   CareerNodeData,
//   CareerSecondaryNodeData,
// } from "@/hooks/useCareerData";
// import CareerNode from "@/components/CareerNode";
// import CareerSecondaryNode from "@/components/CareerSecondaryNode";
// import CareerEdge from "@/components/CareerEdge";
//
// const CareerGraph = () => {
//   const [selectedNodeId, setSelectedNodeId] = useState<null | string>(null);
//   const [secondaryNodes, setSecondaryNodes] = useState<
//     CareerSecondaryNodeData[]
//   >([]);
//   const [hoveredSecondary, setHoveredSecondary] =
//     useState<CareerSecondaryNodeData | null>(null);
//   const careerData = useCareerData();
//
//   const generateSecondaryNodes = (primaryNode: CareerNodeData) => {
//     const techNodes = primaryNode.tech.map((tech, i) => ({
//       id: `${primaryNode.id}-tech-${i}`,
//       x:
//         primaryNode.x +
//         120 * Math.cos((i * Math.PI) / (primaryNode.tech.length - 1)),
//       y: primaryNode.y - 100,
//       type: "tech",
//       content: tech,
//     }));
//
//     const achievementNodes = primaryNode.achievements.map((achievement, i) => ({
//       id: `${primaryNode.id}-achievement-${i}`,
//       x:
//         primaryNode.x +
//         120 * Math.cos((i * Math.PI) / (primaryNode.achievements.length - 1)),
//       y: primaryNode.y + 100,
//       type: "achievement",
//       content: achievement,
//     }));
//
//     return [...techNodes, ...achievementNodes];
//   };
//
//   const handleNodeClick = (node: CareerNodeData) => {
//     if (selectedNodeId === node.id) {
//       setSelectedNodeId(null);
//       setSecondaryNodes([]);
//     } else {
//       setSelectedNodeId(node.id);
//       setSecondaryNodes(generateSecondaryNodes(node));
//     }
//   };
//
//   return (
//     <div className="w-full max-w-6xl mx-auto p-4">
//       <div className="relative">
//         <svg className="w-full h-96 bg-gray-50 rounded-lg">
//           <g>
//             {careerData.edges.map((edge) => (
//               <CareerEdge
//                 key={`${edge.source}-${edge.target}`}
//                 edgeData={edge}
//               />
//             ))}
//             {careerData.nodes.map((node) => (
//               <CareerNode
//                 key={node.id}
//                 data={node}
//                 selectedNodeId={selectedNodeId}
//                 onClick={() => handleNodeClick(node)}
//               />
//             ))}
//             {secondaryNodes.map((node) => (
//               <CareerSecondaryNode
//                 key={node.id}
//                 data={node}
//                 onMouseLeave={() => setHoveredSecondary(null)}
//                 onMouseEnter={() => setHoveredSecondary(node)}
//               />
//             ))}
//           </g>
//         </svg>
//
//         {hoveredSecondary && (
//           <Card className="absolute top-4 right-4 w-80 p-4 bg-white shadow-lg animate-fadeIn">
//             <h3 className="font-bold text-lg">
//               {hoveredSecondary.content.name}
//             </h3>
//             <p className="text-sm text-gray-600">
//               {hoveredSecondary.content.detail}
//             </p>
//           </Card>
//         )}
//       </div>
//
//       <style jsx>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: scale(0.9);
//           }
//           to {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }
//
//         .animate-fadeIn {
//           animation: fadeIn 0.3s ease-out forwards;
//         }
//       `}</style>
//     </div>
//   );
// };
//
// export default CareerGraph;
