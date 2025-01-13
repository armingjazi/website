import React from "react";
import { ArrowUpRight, BookOpen, FileUser, Github, Globe, Linkedin } from "lucide-react";
import ConversationBubbleMobile from "@/components/ConversationBubbleMobile";
import ConversationBubble from "@/components/ConversationBubble";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Page() {
  const links = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/armingjazi",
      icon: <Linkedin className="w-6 h-6" />,
    },
    {
      name: "Code Portfolio @ GitHub",
      url: "https://github.com/armingjazi",
      icon: <Github className="w-6 h-6" />,
    },
    {
      name: "Managing Products @ Movement Archery",
      url: "https://movementarchery.com",
      icon: <ArrowUpRight className="w-6 h-6" />,
    },
    {
      name: "My Writings @ Radical Thinking",
      url: "https://radical-thinking.com",
      icon: <BookOpen className="w-6 h-6" />,
    },
    {
      name: "CV",
      url: "/cv",
      icon: <FileUser className="w-6 h-6" />,
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
        <div className="space-y-4">
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
