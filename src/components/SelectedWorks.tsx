"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink, Sparkles, X } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";
import { portfolioData, Project } from "@/data/content";

export default function SelectedWorks() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const projects = portfolioData.projects;

  return (
    <section id="works" className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
      {/* Section Title */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-[#7ED321] dark:text-[#A6F03A]">
            // Best Projects
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white mt-1">
            Selected Works
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 max-w-sm">
          A showcase of full-stack web applications, accessible design systems, and engineering tools built with precision.
        </p>
      </div>

      {/* The Big Rounded Lime-Green Container matching Screenshots 1 & 3 */}
      <div
        data-cursor="works"
        className="relative w-full rounded-[32px] sm:rounded-[44px] bg-gradient-to-br from-[#A6F03A] via-[#98EC27] to-[#7ED321] p-5 sm:p-8 md:p-10 shadow-2xl overflow-hidden border border-[#A6F03A]"
      >
        {/* Subtle Ambient Light Reflections */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 rounded-full blur-2xl pointer-events-none" />

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-7 relative z-10">
          {projects.map((project, idx) => {
            // Bento layout spans: 7 cols & 5 cols, then 5 cols & 7 cols
            const spanClass =
              idx === 0
                ? "md:col-span-7"
                : idx === 1
                ? "md:col-span-5"
                : idx === 2
                ? "md:col-span-5"
                : "md:col-span-7";

            return (
              <motion.div
                key={project.id}
                data-cursor="project"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => setSelectedProject(project)}
                className={`group cursor-pointer ${spanClass} flex flex-col justify-between rounded-[26px] sm:rounded-[32px] bg-white dark:bg-neutral-950 p-5 sm:p-7 shadow-lg border border-white/60 dark:border-neutral-800 transition-all duration-300 hover:shadow-2xl hover:scale-[1.015]`}
              >
                {/* Image Showcase Container */}
                <div className="relative w-full h-56 sm:h-72 md:h-80 rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/60 dark:border-neutral-800 mb-5">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-neutral-950/0 group-hover:bg-neutral-950/10 transition-colors" />

                  {/* Year Tag */}
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md text-[11px] font-semibold text-neutral-800 dark:text-neutral-200 border border-white/40">
                    {project.year}
                  </div>
                </div>

                {/* Card Content & Meta */}
                <div className="flex flex-col flex-grow justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#7ED321] dark:text-[#A6F03A]">
                        {project.category}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white group-hover:bg-[#A6F03A] group-hover:text-neutral-950 flex items-center justify-center transition-colors">
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2 mb-4 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-neutral-100 dark:border-neutral-800/80">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-neutral-100 dark:bg-neutral-800/80 text-neutral-700 dark:text-neutral-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="text-[11px] font-medium text-neutral-400 pl-1">
                        +{project.techStack.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Case Study Quick Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-neutral-950/70 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-neutral-900 shadow-2xl border border-neutral-200 dark:border-neutral-800 p-6 sm:p-10 z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-200 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#A6F03A]/20 text-neutral-950 dark:text-[#A6F03A]">
                    {selectedProject.category}
                  </span>
                  <span className="text-xs text-neutral-400 font-medium">
                    {selectedProject.year}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white">
                  {selectedProject.title}
                </h2>
                <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-1">
                  {selectedProject.subtitle}
                </p>
              </div>

              {/* Image Preview */}
              <div className="relative w-full h-64 sm:h-96 rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-800 mb-8 border border-neutral-200 dark:border-neutral-800">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-8 p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200/80 dark:border-neutral-800">
                {selectedProject.metrics.map((m) => (
                  <div key={m.label} className="text-center">
                    <div className="text-xl sm:text-3xl font-extrabold text-[#7ED321] dark:text-[#A6F03A]">
                      {m.value}
                    </div>
                    <div className="text-[11px] sm:text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Problem & Solution Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="p-5 rounded-2xl bg-neutral-100/60 dark:bg-neutral-800/40">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-rose-500 mb-2">
                    The Challenge
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    {selectedProject.problem}
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-[#A6F03A]/10 border border-[#A6F03A]/20">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#7ED321] dark:text-[#A6F03A] mb-2">
                    The Engineering Solution
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-8">
                <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-900 dark:text-white mb-3">
                  Key Technical Features
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedProject.keyFeatures.map((kf) => (
                    <li
                      key={kf}
                      className="flex items-start gap-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400"
                    >
                      <Sparkles className="w-4 h-4 text-[#7ED321] dark:text-[#A6F03A] shrink-0 mt-0.5" />
                      <span>{kf}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons & Full Case Study Link */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-neutral-200 dark:border-neutral-800">
                <div className="flex items-center gap-3">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 text-xs sm:text-sm font-semibold hover:opacity-90 transition-opacity"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-white text-xs sm:text-sm font-semibold hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>

                <Link
                  href={`/projects/${selectedProject.slug}`}
                  className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-[#7ED321] dark:text-[#A6F03A] hover:underline"
                >
                  <span>Open Full Dedicated Case Study</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

