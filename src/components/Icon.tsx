import {
  Cloud,
  Database,
  Layers,
  Code2,
  Trophy,
  Users,
  TrendingUp,
  Workflow,
  GraduationCap,
  Award,
  BookOpen,
  NotebookPen,
  SquareLibrary,
} from "lucide-react";
import AWSIcon from "@/components/AWSIcon";
import AzureIcon from "@/components/AzureIcon";
import FluentIcon from "@/components/FluentIcon";
import ReactIcon from "@/components/ReactIcon";
import VueIcon from "@/components/VueIcon";
import NestIcon from "@/components/NestIcon";

const Icon = ({
  name,
  size,
  strokeWidth,
}: {
  name?: string;
  size?: number;
  strokeWidth?: number;
}) => {
  switch (name) {
    case "Cloud":
      return <Cloud size={size} strokeWidth={strokeWidth} />;
    case "Database":
      return <Database size={size} strokeWidth={strokeWidth} />;
    case "Layers":
      return <Layers size={size} strokeWidth={strokeWidth} />;
    case "Code2":
      return <Code2 size={size} strokeWidth={strokeWidth} />;
    case "Trophy":
      return <Trophy size={size} strokeWidth={strokeWidth} />;
    case "Users":
      return <Users size={size} strokeWidth={strokeWidth} />;
    case "Trending":
      return <TrendingUp size={size} strokeWidth={strokeWidth} />;
    case "Workflow":
      return <Workflow size={size} strokeWidth={strokeWidth} />;
    case "GraduationCap":
      return <GraduationCap size={size} strokeWidth={strokeWidth} />;
    case "Award":
      return <Award size={size} strokeWidth={strokeWidth} />;
    case "BookOpen":
      return <BookOpen size={size} strokeWidth={strokeWidth} />;
    case "AWS":
      return <AWSIcon size={size} strokeWidth={strokeWidth} />;
    case "Azure":
      return <AzureIcon size={size} strokeWidth={strokeWidth} />;
    case "Fluent":
      return <FluentIcon size={size} strokeWidth={strokeWidth} />;
    case "Teaching":
      return <NotebookPen size={size} strokeWidth={strokeWidth} />;
    case "Research":
      return <SquareLibrary size={size} strokeWidth={strokeWidth} />;
    case "React":
      return <ReactIcon size={size} strokeWidth={strokeWidth} />;
    case "Vue":
      return <VueIcon size={size} strokeWidth={strokeWidth} />;
    case "Nest":
      return <NestIcon size={size} strokeWidth={strokeWidth} />;
    default:
      return <BookOpen strokeWidth={strokeWidth} size={size} />;
  }
};

export default Icon;
