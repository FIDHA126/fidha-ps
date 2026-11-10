"use client";

import { portfolioData } from "@/data/content";
import {
  Code2,
  Cpu,
  Database,
  Globe,
  Layers,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react";

export default function LogoMarquee() {
  const logos = portfolioData.marqueeLogos;
  // Duplicate for seamless infinite loop
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="relative w-full py-10 sm:py-14 border-y border-neutral-200/60 dark:border-neutral-800/60 bg-neutral-50/50 dark:bg-neutral-900/20 overflow-hidden">
      {/* Left and Right Fade Gradients */}
      <div className="absolute left-0 inset-y-0 w-24 sm:w-44 bg-gradient-to-r from-[#FCFCFC] dark:from-[#0B0E14] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-24 sm:w-44 bg-gradient-to-l from-[#FCFCFC] dark:from-[#0B0E14] to-transparent z-10 pointer-events-none" />

      <div className="flex w-full overflow-hidden">
        <div className="animate-marquee flex items-center gap-6 sm:gap-10 py-1">
          {duplicatedLogos.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-xs hover:border-[#A6F03A] dark:hover:border-[#A6F03A] hover:shadow-md transition-all group cursor-default"
            >
              <div className="w-2 h-2 rounded-full bg-[#A6F03A] group-hover:scale-125 transition-transform" />
              <span className="text-sm font-semibold tracking-tight text-neutral-800 dark:text-neutral-200 group-hover:text-black dark:group-hover:text-white transition-colors">
                {item.name}
              </span>
              <span className="text-[10px] font-medium uppercase tracking-wider text-neutral-400 dark:text-neutral-500 pl-1">
                {item.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

