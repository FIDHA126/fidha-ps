"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { Eye, Layers } from "lucide-react";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState<"default" | "link" | "project" | "works">("default");
  const [isTouch, setIsTouch] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check for works section
      const worksSection = target.closest("[data-cursor='works']");
      const projectCard = target.closest("[data-cursor='project']");
      const link = target.closest("a, button, [role='button'], input, textarea");

      if (projectCard) {
        setCursorVariant("project");
        setCursorText("View");
      } else if (worksSection) {
        setCursorVariant("works");
        setCursorText("See Works");
      } else if (link) {
        setCursorVariant("link");
        setCursorText("");
      } else {
        setCursorVariant("default");
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleOver);
    };
  }, [isVisible, mouseX, mouseY]);

  if (isTouch || !isVisible) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-50 transition-opacity duration-300"
      style={{
        left: cursorX,
        top: cursorY,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      {cursorVariant === "works" ? (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 text-neutral-900 shadow-2xl backdrop-blur-md border border-white/60 font-semibold text-xs tracking-tight"
        >
          <Layers className="w-3.5 h-3.5 text-neutral-800" />
          <span>See Recent Works</span>
        </motion.div>
      ) : cursorVariant === "project" ? (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1.1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-neutral-950 text-white shadow-xl font-medium text-xs tracking-tight"
        >
          <Eye className="w-3.5 h-3.5 text-[#A6F03A]" />
          <span>View</span>
        </motion.div>
      ) : cursorVariant === "link" ? (
        <motion.div
          initial={{ scale: 0.6 }}
          animate={{ scale: 1.8 }}
          className="w-8 h-8 rounded-full bg-[#A6F03A]/40 backdrop-blur-sm border border-[#A6F03A]"
        />
      ) : (
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          className="w-3.5 h-3.5 rounded-full bg-neutral-900 dark:bg-white shadow-md border-2 border-white dark:border-neutral-900"
        />
      )}
    </motion.div>
  );
}

