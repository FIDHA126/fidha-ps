import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import AboutFocus from "@/components/AboutFocus";
import ProcessSteps from "@/components/ProcessSteps";
import SelectedWorks from "@/components/SelectedWorks";
import SkillsExperience from "@/components/SkillsExperience";
import Testimonials from "@/components/Testimonials";
import StatsCounter from "@/components/StatsCounter";
import ContactFooter from "@/components/ContactFooter";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#FCFCFC] dark:bg-[#0B0E14] text-neutral-900 dark:text-neutral-100 selection:bg-[#A6F03A] selection:text-neutral-950 overflow-x-hidden">
      {/* 1. Floating Glass Navbar */}
      <Navbar />

      {/* 2. Hero with Cutout, Headline, Lime Glow, Pills */}
      <Hero />

      {/* 3. Infinite Logo Marquee */}
      <LogoMarquee />

      {/* 4. About & Focus with Scroll-Driven Word Reveal */}
      <AboutFocus />

      {/* 5. How It Works / Process with Animated Drawing Line */}
      <ProcessSteps />

      {/* 6. Selected Works Bento Grid inside Big Lime-Green Container */}
      <SelectedWorks />

      {/* 7. Skills & Experience Timeline */}
      <SkillsExperience />

      {/* 8. Testimonials from Professors & Teammates */}
      <Testimonials />

      {/* 9. Animated Stats Count-Up */}
      <StatsCounter />

      {/* 10. Contact / Footer with Working Form & Celebration */}
      <ContactFooter />
    </main>
  );
}
