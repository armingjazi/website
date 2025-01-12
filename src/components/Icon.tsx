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
  Infinity,
  BadgeCheck,
  Github,
  Bean,
  BriefcaseBusiness, User
} from "lucide-react";
import AWSIcon from "@/components/AWSIcon";
import AzureIcon from "@/components/AzureIcon";
import FluentIcon from "@/components/FluentIcon";
import ReactIcon from "@/components/ReactIcon";
import VueIcon from "@/components/VueIcon";
import NestIcon from "@/components/NestIcon";
import TSIcon from "@/components/TSIcon";
import GoIcon from "@/components/GoIcon";
import NodeIcon from "@/components/NodeIcon";
import GraphQLIcon from "@/components/GraphQLIcon";
import DockerIcon from "@/components/DockerIcon";
import UnityIcon from "@/components/UnityIcon";
import CIcon from "@/components/CIcon";

export type IconProps = {
  size?: number;
  strokeWidth?: number;
};

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
    case "CI":
      return <Infinity size={size} strokeWidth={strokeWidth} />;
    case "Quality":
      return <BadgeCheck size={size} strokeWidth={strokeWidth} />;
    case "Github":
      return <Github size={size} strokeWidth={strokeWidth} />;
    case "Seed":
      return <Bean size={size} strokeWidth={strokeWidth} />;
    case "Business":
      return <BriefcaseBusiness size={size} strokeWidth={strokeWidth} />;
    case "ts":
      return <TSIcon size={size} strokeWidth={strokeWidth} />;
    case "Go":
      return <GoIcon size={size} strokeWidth={strokeWidth} />;
    case "Node":
      return <NodeIcon size={size} strokeWidth={strokeWidth} />;
    case "GraphQL":
      return <GraphQLIcon size={size} strokeWidth={strokeWidth} />;
    case "Docker":
      return <DockerIcon size={size} strokeWidth={strokeWidth} />;
    case "db":
      return <Database size={size} strokeWidth={strokeWidth} />;
    case "unity":
      return <UnityIcon size={size} strokeWidth={strokeWidth} />;
    case "c++":
      return <CIcon size={size} strokeWidth={strokeWidth} />;
    case "platform":
      return <Layers size={size} strokeWidth={strokeWidth} />;
    case "team":
      return <Users size={size} strokeWidth={strokeWidth} />;
    case "user":
      return <User size={size} strokeWidth={strokeWidth} />;
    default:
      return <BookOpen strokeWidth={strokeWidth} size={size} />;
  }
};

export default Icon;
