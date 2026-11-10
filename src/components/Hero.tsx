"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { portfolioData } from "@/data/content";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax transformations
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const glowY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 overflow-x-hidden select-none"
    >
      {/* Background Lime Gradient Glow Blob matching screenshots */}
      <motion.div
        style={{ y: glowY }}
        className="absolute inset-x-0 top-12 sm:top-8 md:top-4 mx-auto w-full max-w-4xl h-[420px] sm:h-[500px] md:h-[600px] pointer-events-none -z-10"
      >
        <div className="w-full h-full hero-radial-glow blur-2xl sm:blur-3xl opacity-90 transition-opacity" />
      </motion.div>

      {/* Top Section: Laurel Award Badge */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center overflow-visible">
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border border-neutral-200/80 dark:border-neutral-800 shadow-xs mb-4 sm:mb-6"
        >
          {/* Laurel Left SVG */}
          <svg className="w-4 h-4 text-neutral-800 dark:text-neutral-200" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C8 5 6 9 6 14c0 3 1.5 5.5 3.5 7.5L8 23c-3-2.5-5-6-5-10C3 7 6 3 10 1l2 1z" />
          </svg>
          <span className="text-[11px] sm:text-xs font-semibold tracking-tight text-neutral-800 dark:text-neutral-200 uppercase">
            {portfolioData.personal.awardBadge.title}
          </span>
          {/* Laurel Right SVG */}
          <svg className="w-4 h-4 text-neutral-800 dark:text-neutral-200 transform scale-x-[-1]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C8 5 6 9 6 14c0 3 1.5 5.5 3.5 7.5L8 23c-3-2.5-5-6-5-10C3 7 6 3 10 1l2 1z" />
          </svg>
        </motion.div>

        {/* Hero Headline Mixing Two Fonts */}
        <motion.div
          style={{ y: textY }}
          className="text-center relative z-10 w-full max-w-[100vw] px-2"
        >
          {/* Line 1: Bold Sans-Serif — "Hi I'm Fidha" */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="whitespace-nowrap font-extrabold tracking-tight text-neutral-900 dark:text-white"
            style={{ fontSize: "clamp(2.5rem, 10vw, 7rem)" }}
          >
            {portfolioData.personal.greeting}
          </motion.h1>

          {/* Line 2: Elegant Serif Italic — "Aspiring Developer" */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="whitespace-nowrap font-serif italic font-normal tracking-tight text-neutral-950 dark:text-neutral-100 -mt-1 sm:-mt-2 md:-mt-3"
            style={{ fontSize: "clamp(2rem, 7.5vw, 7rem)" }}
          >
            {portfolioData.personal.role}
          </motion.div>

          {/* Line 3: Elegant Serif Italic — "Exploring AI & Technology" */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
            className="whitespace-nowrap font-serif italic font-normal tracking-tight text-neutral-700 dark:text-neutral-300 -mt-1 sm:-mt-2 md:-mt-3"
            style={{ fontSize: "clamp(1.4rem, 5.5vw, 5rem)" }}
          >
            {portfolioData.personal.secondaryRole}
          </motion.div>
        </motion.div>
      </div>

      {/* Centerpiece: Photo Cutout Overlapping Headline with Masked Fade */}
      <div className="relative w-full max-w-4xl mx-auto px-4 -mt-10 sm:-mt-16 md:-mt-24 lg:-mt-28 flex justify-center items-end">
        {/* The Cutout Photo */}
        <motion.div
          style={{ y: photoY }}
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-20 w-[280px] sm:w-[380px] md:w-[460px] lg:w-[500px] h-[340px] sm:h-[460px] md:h-[550px] lg:h-[600px] flex justify-center items-end"
        >
          <div className="relative w-full h-full hero-cutout-mask">
            <Image
              src={portfolioData.personal.avatarPhoto}
              alt={portfolioData.personal.name}
              fill
              priority
              sizes="(max-width: 640px) 280px, (max-width: 1024px) 460px, 500px"
              className="object-contain object-bottom drop-shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
        </motion.div>

        {/* Left Side: Floating Availability Pill (Desktop / Tablet Position) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="absolute left-2 sm:left-4 md:left-6 lg:left-0 top-16 sm:top-24 md:top-36 z-30 hidden sm:flex items-center gap-2.5 px-4 py-2 rounded-full glass-pill border border-white/80 shadow-lg"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A6F03A] opacity-80" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#7ED321]" />
          </span>
          <span className="text-xs sm:text-sm font-medium text-neutral-800 dark:text-neutral-200">
            {portfolioData.personal.availability.status}
          </span>
        </motion.div>

        {/* Right Side: Expressive Tagline (Desktop / Tablet Position) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="absolute right-2 sm:right-4 md:right-6 lg:right-0 top-16 sm:top-24 md:top-36 z-30 hidden sm:block max-w-[220px] md:max-w-[260px] text-right"
        >
          <p className="text-xs md:text-sm font-normal leading-relaxed text-neutral-600 dark:text-neutral-300">
            {portfolioData.personal.tagline}
          </p>
        </motion.div>
      </div>

      {/* Bottom Hero Bar: Avatar Stack on Left & CTA on Right */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 relative z-30 pt-4 sm:pt-6">
        {/* Mobile View: Availability & Tagline Fallback */}
        <div className="flex sm:hidden flex-col items-center gap-3 text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-white/80 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A6F03A] opacity-80" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7ED321]" />
            </span>
            <span className="text-xs font-medium text-neutral-800 dark:text-neutral-200">
              {portfolioData.personal.availability.status}
            </span>
          </div>
          <p className="text-xs text-neutral-600 dark:text-neutral-400 px-4 max-w-sm">
            {portfolioData.personal.tagline}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-2">
          {/* Avatar Stack with Trust Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex items-center gap-3.5"
          >
            <div className="flex -space-x-2.5 overflow-hidden">
              {[1, 2, 3].map((num) => (
                <div
                  key={num}
                  className="inline-block relative h-9 w-9 rounded-full ring-2 ring-white dark:ring-neutral-900 bg-neutral-200 overflow-hidden shadow-xs"
                >
                  <Image
                    src={`/images/avatar-${num}.png`}
                    alt="Peer / Mentor Avatar"
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="max-w-[230px] sm:max-w-[270px]">
              <p className="text-[11px] sm:text-xs leading-snug text-neutral-600 dark:text-neutral-400">
                <strong className="font-semibold text-neutral-900 dark:text-white">
                  {portfolioData.personal.avatarStack.count} collaborators
                </strong>{" "}
                across hackathons, campus engineering &amp; open source projects.
              </p>
            </div>
          </motion.div>

          {/* Right Dark Pill Button CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 font-semibold text-sm shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all btn-magnetic"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4 text-[#A6F03A] dark:text-neutral-900 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

