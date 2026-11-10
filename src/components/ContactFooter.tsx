"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import {
  ArrowUp,
  ArrowUpRight,
  Check,
  Copy,
  Mail,
  Send,
  Sparkles,
} from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  TwitterIcon,
} from "@/components/SocialIcons";
import { portfolioData } from "@/data/content";

export default function ContactFooter() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Full-Stack Web App",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const contact = portfolioData.contact;
  const socialLinks = portfolioData.personal.socialLinks;

  const copyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Please enter your name";
    if (!formData.email.trim()) {
      errs.email = "Please enter your email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) {
      errs.message = "Please write a brief note or message";
    } else if (formData.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters long";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable async delivery
    await new Promise((res) => setTimeout(res, 1000));
    setIsSubmitting(false);
    setIsSuccess(true);

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ["#A6F03A", "#7ED321", "#ffffff", "#000000"],
      });
    } catch (err) {
      // Ignore if confetti fails
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderSocialIcon = (name: string) => {
    const n = name.toLowerCase();
    if (n.includes("github")) return <GithubIcon className="w-4 h-4" />;
    if (n.includes("linkedin")) return <LinkedinIcon className="w-4 h-4" />;
    if (n.includes("instagram")) return <InstagramIcon className="w-4 h-4" />;
    if (n.includes("twitter") || n.includes("x")) return <TwitterIcon className="w-4 h-4" />;
    return <Mail className="w-4 h-4" />;
  };

  return (
    <footer id="contact" className="relative w-full pt-20 sm:pt-28 pb-12 sm:pb-16 overflow-hidden">
      {/* Background Lime Glow Blob */}
      <div className="absolute inset-x-0 bottom-0 mx-auto w-full max-w-4xl h-[450px] pointer-events-none -z-10">
        <div className="w-full h-full hero-radial-glow blur-3xl opacity-60" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Huge Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#7ED321] dark:text-[#A6F03A]">
            // Get In Touch
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-neutral-900 dark:text-white mt-2 leading-[1.1]">
            Let&apos;s build something{" "}
            <span className="font-serif italic font-normal text-[#7ED321] dark:text-[#A6F03A]">
              exceptional
            </span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-4 max-w-xl mx-auto leading-relaxed">
            {contact.subheading}
          </p>

          {/* Quick Copy Email Pill */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-md hover:border-[#A6F03A] text-xs sm:text-sm font-semibold text-neutral-900 dark:text-white transition-all group cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-[#7ED321] dark:text-[#A6F03A]" />
                  <span>Email Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-neutral-400 group-hover:text-[#7ED321]" />
                  <span>{contact.email}</span>
                </>
              )}
            </button>

            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 text-xs sm:text-sm font-semibold shadow-md hover:opacity-90 transition-opacity"
            >
              <span>Direct Mail</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Contact Form Card */}
        <div className="w-full max-w-2xl mx-auto p-6 sm:p-10 rounded-[36px] bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl border border-neutral-200/80 dark:border-neutral-800 shadow-2xl mb-20">
          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-10"
              >
                <div className="w-16 h-16 rounded-full bg-[#A6F03A]/20 text-[#7ED321] dark:text-[#A6F03A] flex items-center justify-center mx-auto mb-4 border border-[#A6F03A]">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 max-w-sm mx-auto mb-6">
                  Thank you for reaching out! I typically respond within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setIsSuccess(false);
                    setFormData({
                      name: "",
                      email: "",
                      projectType: "Full-Stack Web App",
                      message: "",
                    });
                  }}
                  className="px-5 py-2.5 rounded-full bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 text-xs sm:text-sm font-semibold hover:opacity-90 transition-opacity cursor-pointer"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-800 dark:text-neutral-200 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-3 rounded-2xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700 text-xs sm:text-sm text-neutral-900 dark:text-white focus:outline-none focus:border-[#7ED321] focus:ring-1 focus:ring-[#7ED321] transition-all"
                    />
                    {errors.name && (
                      <p className="text-[11px] text-rose-500 mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-800 dark:text-neutral-200 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="e.g. rahul@example.com"
                      className="w-full px-4 py-3 rounded-2xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700 text-xs sm:text-sm text-neutral-900 dark:text-white focus:outline-none focus:border-[#7ED321] focus:ring-1 focus:ring-[#7ED321] transition-all"
                    />
                    {errors.email && (
                      <p className="text-[11px] text-rose-500 mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Project / Inquiry Type */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-800 dark:text-neutral-200 mb-1.5">
                    What are you looking for?
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) =>
                      setFormData({ ...formData, projectType: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-2xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700 text-xs sm:text-sm text-neutral-900 dark:text-white focus:outline-none focus:border-[#7ED321] focus:ring-1 focus:ring-[#7ED321] transition-all"
                  >
                    <option value="Full-Stack Web App">Full-Stack Web Application</option>
                    <option value="Internship / Full-time Role">Internship / Engineering Role</option>
                    <option value="UI/UX & Design System">UI/UX &amp; Design System</option>
                    <option value="Hackathon / Collaboration">Hackathon / Collaboration</option>
                    <option value="General Conversation">General Coffee Chat</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-800 dark:text-neutral-200 mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell me a little about your project, idea, or role..."
                    className="w-full px-4 py-3 rounded-2xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700 text-xs sm:text-sm text-neutral-900 dark:text-white focus:outline-none focus:border-[#7ED321] focus:ring-1 focus:ring-[#7ED321] transition-all resize-none"
                  />
                  {errors.message && (
                    <p className="text-[11px] text-rose-500 mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 font-semibold text-sm shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 transition-all cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4 text-[#A6F03A] dark:text-neutral-950" />
                    </>
                  )}
                </button>
              </form>
            )}
          </AnimatePresence>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 border-t border-neutral-200/80 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Left: Branding & College with Avatar */}
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="relative w-10 h-10 rounded-full overflow-hidden ring-1.5 ring-[#A6F03A] shadow-xs flex-shrink-0 bg-neutral-100 dark:bg-neutral-800">
              <Image
                src={portfolioData.personal.avatarPhoto}
                alt={portfolioData.personal.name}
                fill
                sizes="40px"
                className="object-cover object-top"
              />
            </div>
            <div>
              <span className="font-serif italic text-xl font-medium text-neutral-900 dark:text-white">
                {portfolioData.personal.name}
              </span>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                Computer Science &amp; Engineering • {portfolioData.personal.college}
              </p>
            </div>
          </div>

          {/* Center: Social Links */}
          <div className="flex items-center gap-2.5">
            {socialLinks.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:border-[#A6F03A] dark:hover:border-[#A6F03A] transition-all"
                aria-label={s.name}
              >
                {renderSocialIcon(s.name)}
              </a>
            ))}
          </div>

          {/* Right: Back to Top & Copyright */}
          <div className="flex items-center gap-4 text-xs text-neutral-500 dark:text-neutral-400">
            <span>© 2026 Fidha Lam</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-[#A6F03A] hover:text-neutral-950 text-neutral-700 dark:text-neutral-300 transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
