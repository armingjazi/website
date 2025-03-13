import React from "react";
import { ArrowUpRight, BookOpen, BrainCircuit, Coffee, FileUser } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import GithubIcon from "@/components/GithubIcon";
import LinkedInIcon from "@/components/LinkedInIcon";
import Image from "next/image";

export default function Page() {
  const links = [
    {
      name: "My Digital Twin",
      url: "/digital-twin",
      icon: <BrainCircuit className="w-8 h-8" strokeWidth={1.5} />,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/armingjazi",
      icon: <LinkedInIcon size={32} strokeWidth={1} />,
    },
    {
      name: "Code Portfolio @ GitHub",
      url: "https://github.com/armingjazi",
      icon: <GithubIcon size={32} />,
    },
    {
      name: "Managing Products @ Movement Archery",
      url: "https://movementarchery.com",
      icon: (
        <Image
          src="/movement-archery.png"
          width={32}
          height={32}
          alt="movement-archery"
        />
      ),
    },
    {
      name: "My Writings @ Radical Thinking",
      url: "https://radical-thinking.com",
      icon: <BookOpen className="w-8 h-8" strokeWidth={1.5} />,
    },
    {
      name: "My Writings @ Medium",
      url: "https://medium.com/@armin.gjazi",
      icon: <Coffee className="w-8 h-8" strokeWidth={1.5} />,
    },
    {
      name: "CV",
      url: "/cv?mode=tabular",
      icon: <FileUser className="w-8 h-8" strokeWidth={1.5} />,
    },
  ];

  return (
    <div className="min-h-screen bg-transparent flex flex-col items-center justify-center p-4">
      <div className="max-w-lg w-full rounded-lg shadow-lg p-8 bg-accent/50">
        <div className="flex flex-row items-center mb-5 space-x-4">
          <Avatar className="w-24 h-24 z-10 relative shadow-xl shadow-primary">
            <AvatarImage
              src="/me-xs.jpg"
              className="border-2 rounded-full border-primary"
            />
            <AvatarFallback>AJ</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold">Armin Jazi</h1>
            <h2 className="text-xl ">Engineering Manager</h2>
          </div>
        </div>
        <div className="space-y-4 pt-3">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-lg bg-transparent hover:bg-secondary/10 transition-colors duration-200"
            >
              <span className="flex items-center gap-3">
                {link.icon}
                <span className="font-medium">{link.name}</span>
              </span>
              <ArrowUpRight className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
