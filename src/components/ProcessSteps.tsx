"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { CheckCircle2, Compass, Layers, Rocket } from "lucide-react";
import { portfolioData } from "@/data/content";

export default function ProcessSteps() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.3"],
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 90,
  });

  const icons = [Compass, Layers, Rocket];
  const tilts = ["-rotate-2 hover:rotate-0", "rotate-2 hover:rotate-0", "-rotate-1 hover:rotate-0"];

  return (
    <section
      id="process"
      ref={containerRef}
      className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 py-24 sm:py-32 overflow-hidden"
    >
      {/* Section Header */}
      <div className="text-center max-w-xl mx-auto mb-16 sm:mb-20">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#7ED321] dark:text-[#A6F03A]">
          // System &amp; Craft
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white mt-2">
          Here&apos;s how it works
        </h2>
        <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-3">
          A disciplined engineering approach from discovery and interface design to robust production delivery.
        </p>
      </div>

      {/* SVG Connecting Curved Line (draws on scroll) */}
      <div className="hidden lg:block absolute inset-x-0 top-60 pointer-events-none z-0">
        <svg
          className="w-full h-36"
          viewBox="0 0 1000 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background dashed line */}
          <path
            d="M 160 70 C 330 15, 360 125, 500 70 C 640 15, 680 125, 840 70"
            stroke="rgba(0,0,0,0.06)"
            strokeWidth="3"
            strokeDasharray="6 6"
            className="dark:stroke-white/10"
          />
          {/* Animated drawing green stroke */}
          <motion.path
            d="M 160 70 C 330 15, 360 125, 500 70 C 640 15, 680 125, 840 70"
            stroke="#A6F03A"
            strokeWidth="3.5"
            strokeLinecap="round"
            style={{ pathLength }}
          />
        </svg>
      </div>

      {/* 3 Process Cards */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {portfolioData.processSteps.map((step, idx) => {
          const StepIcon = icons[idx];
          return (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className={`group relative p-7 sm:p-8 rounded-[30px] bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl border border-neutral-200/80 dark:border-neutral-800 shadow-[0_10px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_10px_30px_rgb(0,0,0,0.3)] hover:shadow-2xl hover:border-[#A6F03A]/60 dark:hover:border-[#A6F03A]/60 transition-all duration-300 transform hover:-translate-y-3 ${tilts[idx]}`}
            >
              {/* Header inside card */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-serif italic text-3xl sm:text-4xl font-medium text-neutral-400 group-hover:text-[#7ED321] dark:group-hover:text-[#A6F03A] transition-colors">
                  {step.step}
                </span>
                <div className="w-10 h-10 rounded-2xl bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 group-hover:bg-[#A6F03A] group-hover:text-neutral-950 flex items-center justify-center transition-colors">
                  <StepIcon className="w-5 h-5" />
                </div>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white mb-1.5">
                {step.title}
              </h3>
              <p className="text-xs font-semibold text-[#7ED321] dark:text-[#A6F03A] mb-3">
                {step.tagline}
              </p>

              {/* Description */}
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                {step.description}
              </p>

              {/* Key Bullet Points */}
              <div className="space-y-2 pt-4 border-t border-neutral-100 dark:border-neutral-800/80">
                {step.points.map((pt) => (
                  <div key={pt} className="flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#7ED321] dark:text-[#A6F03A] shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

