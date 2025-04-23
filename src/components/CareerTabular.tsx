import useCareerData from "@/hooks/useCareerData";
import TimelineNode from "@/components/TimelineNode";

const CareerTabular = () => {
  const careerData = useCareerData();
  return (
    <div className="mx-auto p-4 space-y-4 z-10 w-full h-screen bg-radial-dark">
      <div className="space-y-2 z-10">
        {careerData.nodes.reverse().map((node) => (
          <TimelineNode key={node.id} node={node} depth={0} />
        ))}
      </div>
    </div>
  );
};

export default CareerTabular;
