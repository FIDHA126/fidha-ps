"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GraduationCap, MapPin, Sparkles } from "lucide-react";
import { portfolioData } from "@/data/content";

function Word({ children, progress, range }: { children: string; progress: any; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block mr-2 transition-colors">
      {children}
    </motion.span>
  );
}

export default function AboutFocus() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.45"],
  });

  const statement = portfolioData.aboutFocus.statement;
  const words = statement.split(" ");

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 py-24 sm:py-32 overflow-hidden"
    >
      {/* Floating Skills Pills Drifting Around */}
      <div className="relative w-full mb-10">
        <div className="flex flex-wrap gap-2.5 sm:gap-3.5 justify-center sm:justify-start items-center">
          {portfolioData.aboutFocus.floatingTags.map((tag, idx) => (
            <motion.div
              key={tag.label}
              initial={{ y: 0 }}
              animate={{
                y: [0, idx % 2 === 0 ? -8 : 8, 0],
              }}
              transition={{
                duration: 3 + (idx % 3),
                repeat: Infinity,
                ease: "easeInOut",
                delay: idx * 0.25,
              }}
              className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium tracking-tight shadow-xs border cursor-default transition-all ${
                tag.color === "lime"
                  ? "bg-[#A6F03A]/15 text-neutral-900 dark:text-[#A6F03A] border-[#A6F03A]/40 font-semibold"
                  : "bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border-neutral-200 dark:border-neutral-800"
              }`}
            >
              {tag.label}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Eyebrow Subtitle */}
      <div className="mb-4 sm:mb-6">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#7ED321] dark:text-[#A6F03A]">
          {portfolioData.aboutFocus.eyebrow}
        </span>
      </div>

      {/* Large Typography Scroll-Driven Word Reveal */}
      <div className="mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.25] sm:leading-[1.2] text-neutral-900 dark:text-white">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </h2>
      </div>

      {/* College & Education Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        <div className="md:col-span-2 p-6 sm:p-8 rounded-3xl bg-neutral-100/70 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 backdrop-blur-md">
          <p className="text-sm sm:text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
            {portfolioData.aboutFocus.secondaryText}
          </p>
        </div>

        {/* Education Badge Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#A6F03A]/10 to-[#7ED321]/5 dark:from-[#A6F03A]/15 dark:to-transparent border border-[#A6F03A]/30 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-2xl bg-[#A6F03A] text-neutral-950 flex items-center justify-center mb-4 shadow-sm">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white mb-1">
              {portfolioData.personal.college}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-medium">
              {portfolioData.personal.degree}
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-neutral-200/60 dark:border-neutral-800 flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#7ED321]" />
              {portfolioData.personal.location}
            </span>
            <span className="font-semibold text-neutral-800 dark:text-neutral-200">
              Class of {portfolioData.personal.graduationYear}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

