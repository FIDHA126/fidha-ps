"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { portfolioData } from "@/data/content";

function CounterItem({
  label,
  value,
  suffix,
  isInView,
}: {
  label: string;
  value: number;
  suffix: string;
  isInView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000; // 2 seconds
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      // easeOutExpo
      const progress = 1 - Math.pow(2, -10 * (frame / totalFrames));
      const current = Math.min(value, Math.floor(progress * value));
      setCount(current);

      if (frame >= totalFrames) {
        setCount(value);
        clearInterval(timer);
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, [isInView, value]);

  const formattedCount =
    value >= 1000 ? count.toLocaleString() : count.toString();

  return (
    <div className="flex flex-col items-center text-center p-6 sm:p-8 rounded-3xl bg-white/70 dark:bg-neutral-900/60 backdrop-blur-md border border-neutral-200/80 dark:border-neutral-800 shadow-xs hover:border-[#A6F03A]/60 transition-colors">
      <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white mb-2">
        <span>{formattedCount}</span>
        <span className="text-[#7ED321] dark:text-[#A6F03A]">{suffix}</span>
      </div>
      <p className="text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-400">
        {label}
      </p>
    </div>
  );
}

export default function StatsCounter() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const stats = portfolioData.stats;

  return (
    <section ref={ref} className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((s) => (
          <CounterItem
            key={s.label}
            label={s.label}
            value={s.value}
            suffix={s.suffix}
            isInView={isInView}
          />
        ))}
      </div>
    </section>
  );
}

