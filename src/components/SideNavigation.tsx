"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface NavigationLink {
  name: string;
  id: string;
}

interface SideNavigationProps {
  links: NavigationLink[];
}

export default function SideNavigation({ links }: SideNavigationProps) {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    links.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      links.forEach((link) => {
        const element = document.getElementById(link.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [links]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden md:block">
      <ul className="space-y-6">
        {links.map((link) => (
          <li key={link.id} className="relative group">
            <button
              onClick={() => handleClick(link.id)}
              className="flex items-center relative z-50 pr-32"
              aria-label={`Navigate to ${link.name}`}
            >
              <motion.div
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeSection === link.id
                    ? "bg-primary w-3 h-3"
                    : "bg-gray-400 hover:bg-gray-300"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
              <span
                className={`absolute left-6 whitespace-nowrap px-2 py-1 rounded transition-all duration-200 ${
                  activeSection === link.id
                    ? "text-primary opacity-100 text-sm"
                    : "text-gray-500 opacity-60 text-xs group-hover:opacity-100 group-hover:text-sm"
                }`}
              >
                {link.name}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}