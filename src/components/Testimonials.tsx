"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { portfolioData } from "@/data/content";

export default function Testimonials() {
  const testimonials = portfolioData.testimonials;
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide on mobile
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
      {/* Section Header */}
      <div className="text-center max-w-xl mx-auto mb-14 sm:mb-16">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#7ED321] dark:text-[#A6F03A]">
          // Kind Words &amp; Endorsements
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white mt-1">
          Recommendations
        </h2>
        <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-2">
          Feedback from academic mentors, project guides, and hackathon peers.
        </p>
      </div>

      {/* Desktop Grid (2-3 cards side by side) */}
      <div className="hidden md:grid md:grid-cols-3 gap-6">
        {testimonials.map((t, idx) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="flex flex-col justify-between p-7 rounded-[30px] bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border border-neutral-200/80 dark:border-neutral-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)] hover:border-[#A6F03A]/60 transition-colors"
          >
            <div>
              {/* Star Rating & Quote Icon */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-1 text-[#7ED321] dark:text-[#A6F03A]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-neutral-300 dark:text-neutral-700" />
              </div>

              {/* Quote Text */}
              <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed italic mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>

            {/* Author Profile */}
            <div className="flex items-center gap-3 pt-4 border-t border-neutral-100 dark:border-neutral-800">
              <div className="relative w-10 h-10 rounded-full overflow-hidden bg-neutral-100 border border-neutral-200 dark:border-neutral-700">
                <Image src={t.avatar} alt={t.name} fill className="object-cover" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-white">
                  {t.name}
                </h4>
                <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
                  {t.role} • {t.organization}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile Auto-sliding Carousel */}
      <div className="md:hidden relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.35 }}
            className="p-6 rounded-[28px] bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-lg"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-1 text-[#7ED321] dark:text-[#A6F03A]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
              <Quote className="w-5 h-5 text-neutral-300 dark:text-neutral-700" />
            </div>

            <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed italic mb-6">
              &ldquo;{testimonials[currentIndex].quote}&rdquo;
            </p>

            <div className="flex items-center gap-3 pt-4 border-t border-neutral-100 dark:border-neutral-800">
              <div className="relative w-10 h-10 rounded-full overflow-hidden bg-neutral-100">
                <Image
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-xs font-bold text-neutral-900 dark:text-white">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-[10px] text-neutral-500 dark:text-neutral-400">
                  {testimonials[currentIndex].role} • {testimonials[currentIndex].organization}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Mobile Navigation Dots */}
        <div className="flex items-center justify-center gap-2 mt-5">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all ${
                currentIndex === i
                  ? "w-6 bg-[#7ED321] dark:bg-[#A6F03A]"
                  : "w-2 bg-neutral-300 dark:bg-neutral-700"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

