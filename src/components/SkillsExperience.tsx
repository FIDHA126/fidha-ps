"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Award, Briefcase, Calendar, GraduationCap, MapPin, Terminal, Users } from "lucide-react";
import { portfolioData } from "@/data/content";

export default function SkillsExperience() {
  const [activeTab, setActiveTab] = useState(0);
  const skillsCategories = portfolioData.skillsData;
  const timeline = portfolioData.timeline;

  const timelineIcons: Record<string, React.ComponentType<{ className?: string }>> = {
    education: GraduationCap,
    experience: Briefcase,
    achievement: Award,
  };

  return (
    <section id="skills" className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
      {/* Section Header */}
      <div className="text-center max-w-xl mx-auto mb-16 sm:mb-20">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#7ED321] dark:text-[#A6F03A]">
          // Capabilities &amp; Journey
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white mt-1">
          Skills &amp; Experience
        </h2>
        <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-2">
          Engineering capabilities backed by real coursework, team hackathons, and production development.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
        {/* Left Column: Skills Categories & Progress Bars */}
        <div className="lg:col-span-5 p-6 sm:p-8 rounded-[32px] bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-lg">
          <div className="flex items-center gap-2 mb-6">
            <Terminal className="w-5 h-5 text-[#7ED321] dark:text-[#A6F03A]" />
            <h3 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Technical Proficiencies
            </h3>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {skillsCategories.map((cat, idx) => (
              <button
                key={cat.category}
                onClick={() => setActiveTab(idx)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeTab === idx
                    ? "bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 font-semibold shadow-xs"
                    : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>

          {/* Active Category Skills */}
          <div className="space-y-5">
            {skillsCategories[activeTab].skills.map((skill, sIdx) => (
              <div key={skill.name}>
                <div className="flex justify-between text-xs font-medium text-neutral-800 dark:text-neutral-200 mb-1.5">
                  <span>{skill.name}</span>
                  <span className="font-semibold text-neutral-500 dark:text-neutral-400">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-neutral-100 dark:bg-neutral-800 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8, delay: sIdx * 0.08, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-[#A6F03A] to-[#7ED321]"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Quick Info Box */}
          <div className="mt-8 pt-6 border-t border-neutral-100 dark:border-neutral-800 text-xs text-neutral-500 dark:text-neutral-400">
            <p>
              💡 Hands-on project experience in Next.js 15/16 App Router, TypeScript strict mode, REST/GraphQL APIs, and responsive design systems.
            </p>
          </div>
        </div>

        {/* Right Column: Timeline */}
        <div className="lg:col-span-7">
          <div className="space-y-6 sm:space-y-8 relative before:absolute before:inset-0 before:left-5 before:w-0.5 before:bg-neutral-200 dark:before:bg-neutral-800 pl-2">
            {timeline.map((item, idx) => {
              const Icon = timelineIcons[item.type] || GraduationCap;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative flex items-start gap-4 sm:gap-6"
                >
                  {/* Timeline Node Icon */}
                  <div className="relative z-10 w-10 h-10 rounded-full bg-white dark:bg-neutral-900 border-2 border-[#A6F03A] flex items-center justify-center shrink-0 shadow-md">
                    <Icon className="w-4 h-4 text-neutral-900 dark:text-white" />
                  </div>

                  {/* Card */}
                  <div className="flex-grow p-6 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-xs hover:border-[#A6F03A]/50 transition-colors">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-[#A6F03A]/15 text-neutral-900 dark:text-[#A6F03A]">
                        {item.year}
                      </span>
                      <span className="text-xs text-neutral-500 dark:text-neutral-400 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#7ED321]" />
                        {item.location}
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm font-semibold text-[#7ED321] dark:text-[#A6F03A] mb-2">
                      {item.organization}
                    </p>

                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-3">
                      {item.description}
                    </p>

                    {item.highlights && (
                      <ul className="space-y-1 pt-2 border-t border-neutral-100 dark:border-neutral-800">
                        {item.highlights.map((h, i) => (
                          <li
                            key={i}
                            className="text-xs text-neutral-500 dark:text-neutral-400 flex items-start gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#A6F03A] shrink-0 mt-1.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

