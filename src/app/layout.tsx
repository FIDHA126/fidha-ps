import type { Metadata } from "next";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fidha Lam — Full-Stack Developer & Engineering Student",
  description:
    "Award-quality personal portfolio of Fidha Lam, Computer Science & Engineering student at Thejus Engineering College. Building modern web systems, resilient architectures, and intuitive human-centric software.",
  keywords: [
    "Fidha Lam",
    "Thejus Engineering College",
    "Full-Stack Developer",
    "Portfolio",
    "Next.js Developer",
    "Computer Science Engineer",
    "Software Engineer Portfolio",
  ],
  authors: [{ name: "Fidha Lam" }],
  openGraph: {
    title: "Fidha Lam — Full-Stack Developer & Engineering Student",
    description:
      "Modern award-quality engineering portfolio of Fidha Lam. Engineering student at Thejus Engineering College.",
    url: "https://fidha-lam.dev",
    siteName: "Fidha Lam Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fidha Lam — Full-Stack Developer & Engineering Student",
    description:
      "Modern award-quality engineering portfolio of Fidha Lam. Engineering student at Thejus Engineering College.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Urbanist:wght@300..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans min-h-screen bg-[#FCFCFC] dark:bg-[#0B0E14] text-neutral-900 dark:text-neutral-100 antialiased selection:bg-[#A6F03A] selection:text-neutral-950">
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
