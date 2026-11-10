"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X, Sun, Moon } from "lucide-react";
import { portfolioData } from "@/data/content";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial dark mode preference
    if (typeof window !== "undefined") {
      const isDarkMode = document.documentElement.classList.contains("dark") ||
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDark(isDarkMode);
      if (isDarkMode) {
        document.documentElement.classList.add("dark");
      }
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 120) {
        if (currentScrollY > lastScrollY && !mobileMenuOpen) {
          // Scrolling down
          setIsVisible(false);
        } else {
          // Scrolling up
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, mobileMenuOpen]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Process", href: "#process" },
    { name: "Works", href: "#works" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{
          y: isVisible ? 0 : -100,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-4 md:top-6 inset-x-0 z-40 max-w-5xl mx-auto px-4 sm:px-6 pointer-events-none"
      >
        <div className="pointer-events-auto flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white/70 dark:bg-neutral-900/80 backdrop-blur-xl border border-white/60 dark:border-neutral-800 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)] transition-all">
          {/* Logo in Serif Italic with Profile Avatar */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 focus:outline-none"
            aria-label="Fidha PS Portfolio Home"
          >
            <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden ring-1.5 ring-[#A6F03A] shadow-xs flex-shrink-0 bg-neutral-100 dark:bg-neutral-800 transition-transform group-hover:scale-105">
              <Image
                src={portfolioData.personal.avatarPhoto}
                alt={portfolioData.personal.name}
                fill
                sizes="32px"
                className="object-cover object-top"
              />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-serif italic text-xl sm:text-2xl font-medium tracking-tight text-neutral-900 dark:text-white transition-transform group-hover:scale-105">
                {portfolioData.personal.name}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#A6F03A]" />
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 sm:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs lg:text-sm font-medium text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white rounded-full hover:bg-neutral-100/70 dark:hover:bg-neutral-800/60 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors focus:outline-none"
              aria-label="Toggle color theme"
            >
              {isDark ? <Sun className="w-4 h-4 text-[#A6F03A]" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Dark Pill CTA Button */}
            <a
              href="#contact"
              className="group hidden sm:inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold rounded-full bg-neutral-950 text-white hover:bg-neutral-900 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-100 transition-all shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#A6F03A] dark:text-neutral-900 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Full-Screen Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 md:hidden bg-white/95 dark:bg-neutral-950/95 flex flex-col justify-between p-8 pt-28"
          >
            <div className="flex flex-col space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                Navigation
              </span>
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * idx, duration: 0.2 }}
                  className="text-2xl font-semibold text-neutral-900 dark:text-white hover:text-lime-600 dark:hover:text-[#A6F03A] transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="flex flex-col space-y-6 pt-6 border-t border-neutral-200 dark:border-neutral-800">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 font-semibold text-sm shadow-md"
              >
                <span>Get in touch</span>
                <ArrowUpRight className="w-4 h-4 text-[#A6F03A] dark:text-neutral-950" />
              </a>

              <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
                <span>Thejus Engineering College</span>
                <span>Class of 2026</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

