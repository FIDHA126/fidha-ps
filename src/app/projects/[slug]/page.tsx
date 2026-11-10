import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2, ExternalLink, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";
import { portfolioData } from "@/data/content";

export async function generateStaticParams() {
  return portfolioData.projects.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = portfolioData.projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#FCFCFC] dark:bg-[#0B0E14] text-neutral-900 dark:text-neutral-100 pt-24 sm:pt-28 pb-20">
      {/* Background Subtle Lime Glow */}
      <div className="absolute top-0 inset-x-0 mx-auto w-full max-w-4xl h-[380px] pointer-events-none -z-10">
        <div className="w-full h-full hero-radial-glow blur-3xl opacity-50" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/#works"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs sm:text-sm font-semibold text-neutral-700 dark:text-neutral-300 hover:border-[#A6F03A] hover:text-black dark:hover:text-white shadow-xs transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Selected Works</span>
          </Link>
        </div>

        {/* Header Metadata */}
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-2.5 mb-3">
            <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-[#A6F03A]/20 text-neutral-950 dark:text-[#A6F03A]">
              {project.category}
            </span>
            <span className="text-xs font-medium text-neutral-500">
              Project Year: {project.year}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white mb-3">
            {project.title}
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed">
            {project.subtitle}
          </p>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 mt-6">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 text-xs sm:text-sm font-semibold shadow-md hover:scale-[1.02] transition-transform"
              >
                <span>Live Interactive Demo</span>
                <ExternalLink className="w-4 h-4 text-[#A6F03A] dark:text-neutral-950" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-800 text-xs sm:text-sm font-semibold hover:border-[#A6F03A] transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            )}
          </div>
        </div>

        {/* Hero Image Showcase */}
        <div className="relative w-full h-72 sm:h-96 md:h-[460px] rounded-3xl overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xl mb-12">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14">
          {project.metrics.map((m) => (
            <div
              key={m.label}
              className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-xs text-center"
            >
              <div className="text-2xl sm:text-4xl font-extrabold text-[#7ED321] dark:text-[#A6F03A] mb-1">
                {m.value}
              </div>
              <div className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Case Study Details Section */}
        <div className="space-y-12">
          {/* Executive Summary */}
          <div className="p-7 sm:p-8 rounded-3xl bg-neutral-100/70 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#7ED321] dark:text-[#A6F03A] mb-2">
              Executive Summary
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Problem & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-7 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xs">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-500 block mb-2">
                01. The Problem Space
              </span>
              <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-gradient-to-br from-[#A6F03A]/10 to-transparent border border-[#A6F03A]/30 shadow-xs">
              <span className="text-xs font-bold uppercase tracking-wider text-[#7ED321] dark:text-[#A6F03A] block mb-2">
                02. The Engineering Solution
              </span>
              <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Architecture & Stack */}
          <div className="p-7 sm:p-8 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xs">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#7ED321] dark:text-[#A6F03A] mb-2">
              System Architecture &amp; Data Pipeline
            </h2>
            <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
              {project.architecture}
            </p>

            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
              Technologies &amp; Libraries Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-full text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Deliverables & Features */}
          <div className="p-7 sm:p-8 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xs">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#7ED321] dark:text-[#A6F03A] mb-4">
              Key Capabilities &amp; Engineering Highlights
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {project.keyFeatures.map((feat) => (
                <div
                  key={feat}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#7ED321] dark:text-[#A6F03A] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA to Contact */}
        <div className="mt-16 pt-10 border-t border-neutral-200 dark:border-neutral-800 text-center">
          <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
            Interested in building something similar?
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 max-w-md mx-auto mb-6">
            I am always open to exploring innovative web projects, engineering collaborations, and internships.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 text-xs sm:text-sm font-semibold shadow-lg hover:scale-105 transition-transform"
          >
            <span>Let&apos;s Connect</span>
            <ArrowUpRight className="w-4 h-4 text-[#A6F03A] dark:text-neutral-950" />
          </Link>
        </div>
      </div>
    </main>
  );
}

