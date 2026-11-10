export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  summary: string;
  problem: string;
  solution: string;
  architecture: string;
  keyFeatures: string[];
  techStack: string[];
  metrics: { label: string; value: string }[];
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level: number; icon?: string }[];
}

export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  organization: string;
  location: string;
  type: 'education' | 'experience' | 'achievement';
  description: string;
  highlights?: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  organization: string;
  avatar: string;
}

export const portfolioData = {
  personal: {
    name: "Fidha PS",
    greeting: "Hi I'm Fidha",
    role: "Aspiring Developer",
    secondaryRole: "Exploring AI & Technology",
    tagline: "I'm a first-year Computer Science and Engineering student at Thejus Engineering College, Thrissur, passionate about Artificial Intelligence, web development, and app development. I enjoy learning new technologies, exploring creative ideas, and improving my programming skills every day.",
    shortBio: "Engineering student at Thejus Engineering College building scalable web apps, clean design systems, and modern digital tools.",
    college: "Thejus Engineering College",
    degree: "B.Tech in Computer Science and Engineering",
    graduationYear: "2026",
    location: "Kerala, India",
    email: "fidha.lam@example.com",
    avatarPhoto: "/images/fidha-main-profile.png",
    originalPhoto: "/images/fidha-original.jpg",
    availability: {
      status: "Currently Learning",
      active: true,
      subtext: "Open for summer internships, freelance projects, and collaborations"
    },
    awardBadge: {
      title: "Smart India Hackathon Finalist • KTU Tech 2025",
      subtitle: "Recognized for AI Healthcare Innovation"
    },
    socialLinks: [
      { name: "GitHub", url: "https://github.com", icon: "Github" },
      { name: "LinkedIn", url: "https://linkedin.com", icon: "Linkedin" },
      { name: "Twitter / X", url: "https://x.com", icon: "Twitter" },
      { name: "Instagram", url: "https://instagram.com", icon: "Instagram" },
      { name: "Email", url: "mailto:fidha.lam@example.com", icon: "Mail" }
    ],
    avatarStack: {
      count: "50+",
      text: "Trusted by 50+ classmates, mentors and collaborators across campus & hackathon projects."
    }
  },

  marqueeLogos: [
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Framework" },
    { name: "TypeScript", category: "Language" },
    { name: "Node.js", category: "Backend" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "Python", category: "Language & AI" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Figma", category: "UI/UX Design" },
    { name: "Docker", category: "DevOps" },
    { name: "Git", category: "Version Control" },
    { name: "Supabase", category: "Backend" },
    { name: "GraphQL", category: "API" },
    { name: "Redis", category: "Caching" },
    { name: "Framer Motion", category: "Animation" }
  ],

  aboutFocus: {
    eyebrow: "// ABOUT & FOCUS",
    statement: "Focus is on blending solid engineering, thoughtful design, and creative problem solving to build digital products that make a real difference.",
    secondaryText: "As an engineering student at Thejus Engineering College (B.Tech CSE, Class of 2026), I thrive at the intersection of aesthetic frontend fidelity, reliable distributed backend services, and clean developer experience.",
    floatingTags: [
      { label: "Product Engineering", color: "lime" },
      { label: "Web Development", color: "neutral" },
      { label: "UI / UX Craft", color: "lime" },
      { label: "Cloud Systems", color: "neutral" },
      { label: "Thejus CSE '26", color: "lime" },
      { label: "AI Integrations", color: "neutral" },
      { label: "Open Source", color: "lime" }
    ]
  },

  processSteps: [
    {
      step: "01",
      title: "Discover",
      tagline: "Empathy & System Architecture",
      description: "Understanding core user problems, evaluating technical constraints, and architecting data models before writing the first line of code.",
      points: ["Requirements gathering", "User journey mapping", "Schema & API contract design"]
    },
    {
      step: "02",
      title: "Design",
      tagline: "Aesthetic Precision & Prototyping",
      description: "Transforming insights into resilient component hierarchies, accessible interfaces, and interactive micro-interactions that delight.",
      points: ["Figma design systems", "Fluid responsive layouts", "WCAG 2.1 AA accessibility"]
    },
    {
      step: "03",
      title: "Deliver",
      tagline: "Performance & Reliable Deployment",
      description: "Writing maintainable TypeScript, setting up automated CI/CD pipelines, optimizing Core Web Vitals, and shipping production-ready code.",
      points: ["Next.js SSR/Edge optimization", "Automated unit tests", "Zero-downtime Vercel deploy"]
    }
  ],

  projects: [
    {
      id: "medsync-care",
      slug: "medsync-care",
      title: "MedSync Care",
      subtitle: "AI-Driven Clinical Triage & Real-Time Patient Telemetry",
      category: "Full-Stack Healthcare SaaS",
      year: "2025",
      image: "/images/project-1.jpg",
      liveUrl: "https://medsync-preview.demo",
      githubUrl: "https://github.com/example/medsync-care",
      featured: true,
      summary: "An intelligent medical triage system enabling real-time telemetry streaming, automated urgency scoring, and seamless emergency department handoffs.",
      problem: "Overcrowded hospital outpatient departments face dangerous triage delays and disconnected patient telemetry, leading to critical communication bottlenecks.",
      solution: "Engineered a Next.js and WebSockets platform that ingests physiological telemetry, computes real-time urgency rankings via ICD-11 logic, and synchronizes FHIR records in sub-150ms.",
      architecture: "Next.js App Router, Node.js WebSocket engine, Redis Pub/Sub, PostgreSQL with Prisma ORM, and Tailwind CSS for rapid clinical scanning.",
      keyFeatures: [
        "Real-time vital signs telemetry dashboard with zero CLS",
        "Automated clinical risk stratification & emergency alerts",
        "HL7/FHIR compliant patient record data export",
        "Role-based access control (RBAC) for doctors, nurses, and admins"
      ],
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "WebSockets", "PostgreSQL", "Redis"],
      metrics: [
        { label: "Triage Accuracy", value: "99.8%" },
        { label: "Sync Latency", value: "<140ms" },
        { label: "Active Test Beds", value: "240+" }
      ]
    },
    {
      id: "estate-vista",
      slug: "estate-vista",
      title: "EstateVista",
      subtitle: "Architectural Real Estate Portal with Interactive 3D Spatial Tours",
      category: "Web & Spatial Experience",
      year: "2024",
      image: "/images/project-2.jpg",
      liveUrl: "https://estatevista-preview.demo",
      githubUrl: "https://github.com/example/estate-vista",
      featured: true,
      summary: "A modern real estate showcase designed for contemporary minimalist villas in Kerala, featuring WebGL spatial previews and interactive floorplans.",
      problem: "Traditional property listings are cluttered, slow, and fail to convey the spatial beauty and natural lighting of bespoke architectural residences.",
      solution: "Developed an ultra-minimalist platform with Three.js virtual walk-throughs, smooth inertial scrolling, and instant mortgage calculation tools.",
      architecture: "Next.js, Three.js / React Three Fiber, Framer Motion, Supabase Database & Auth, and Tailwind CSS.",
      keyFeatures: [
        "Interactive 3D model viewer with photorealistic day/night lighting toggles",
        "Dynamic filtering for square footage, topography, and eco-features",
        "Direct scheduling integration with WhatsApp and Google Calendar",
        "Sub-second page loads with edge image optimization"
      ],
      techStack: ["React", "Next.js", "Three.js", "Framer Motion", "Tailwind CSS", "Supabase"],
      metrics: [
        { label: "GLTF Load Time", value: "0.4s" },
        { label: "Properties Cataloged", value: "120+" },
        { label: "Client Satisfaction", value: "4.9/5" }
      ]
    },
    {
      id: "lumina-ui",
      slug: "lumina-ui",
      title: "Lumina UI",
      subtitle: "Accessible React & Tailwind Component Library with Micro-Interactions",
      category: "Design System & Open Source",
      year: "2024",
      image: "/images/project-3.jpg",
      liveUrl: "https://lumina-ui-preview.demo",
      githubUrl: "https://github.com/example/lumina-ui",
      featured: true,
      summary: "A battle-tested component system designed for engineers building modern dark/light mode SaaS products with first-class keyboard navigation.",
      problem: "Many off-the-shelf UI libraries lack accessible keyboard focus traps, fluid motion tokens, or are bloated with heavy bundle weights.",
      solution: "Created 35+ composable accessible primitives powered by Radix UI and Tailwind CSS, complete with interactive docs and automatic reduced-motion fallbacks.",
      architecture: "TypeScript Monorepo, React 19, Radix Primitives, Tailwind CSS v4, Storybook, and Vitest.",
      keyFeatures: [
        "100% WCAG 2.1 AA compliant with screen reader testing",
        "Zero runtime CSS footprint via modern Tailwind compiler",
        "Fluid motion tokens with automatic prefers-reduced-motion honor",
        "Comprehensive documentation with live copy-paste code playground"
      ],
      techStack: ["React", "TypeScript", "Tailwind CSS", "Radix UI", "Storybook", "Vitest"],
      metrics: [
        { label: "Lighthouse A11y", value: "100/100" },
        { label: "Bundle Impact", value: "<8KB" },
        { label: "GitHub Stars", value: "340+" }
      ]
    },
    {
      id: "algoflow",
      slug: "algoflow",
      title: "AlgoFlow",
      subtitle: "Interactive Data Structure & Graph Algorithm Visualizer",
      category: "CS Education & Engineering Tool",
      year: "2024",
      image: "/images/project-4.jpg",
      liveUrl: "https://algoflow-preview.demo",
      githubUrl: "https://github.com/example/algoflow",
      featured: true,
      summary: "An interactive step-through playground for graph traversals, Dijkstra, and sorting algorithms created for Computer Science undergraduates.",
      problem: "Abstract algorithm concepts like recursive backtracking and shortest-path edge relaxation are notoriously difficult to conceptualize from static textbooks.",
      solution: "Built a canvas and SVG visual engine where students can step forward/backward, manipulate node weights dynamically, and visualize Big-O complexity in real time.",
      architecture: "Next.js App Router, HTML5 Canvas, Web Workers for heavy compute isolation, and Tailwind CSS.",
      keyFeatures: [
        "Step-by-step playback with speed scrubbing and time-travel debugging",
        "Interactive canvas graph editor with drag-and-drop nodes and custom edge weights",
        "Side-by-side pseudocode highlighter synced with algorithm state",
        "Used by 300+ students at Thejus Engineering College"
      ],
      techStack: ["TypeScript", "Next.js", "HTML5 Canvas", "Tailwind CSS", "Web Workers"],
      metrics: [
        { label: "College Users", value: "300+" },
        { label: "Algorithms Visualized", value: "16" },
        { label: "Frame Rate", value: "60 FPS" }
      ]
    }
  ],

  skillsData: [
    {
      category: "Frontend & Craft",
      skills: [
        { name: "React / Next.js (App Router)", level: 95 },
        { name: "TypeScript & JavaScript (ES6+)", level: 90 },
        { name: "Tailwind CSS & CSS Architecture", level: 95 },
        { name: "Framer Motion & Web Animations", level: 88 },
        { name: "Responsive & Accessible (a11y) Design", level: 92 }
      ]
    },
    {
      category: "Backend & Systems",
      skills: [
        { name: "Node.js & Express / Fastify", level: 85 },
        { name: "Python (FastAPI / Data Structures)", level: 82 },
        { name: "PostgreSQL & Prisma / Supabase", level: 86 },
        { name: "RESTful APIs & GraphQL", level: 88 },
        { name: "Redis & Caching Strategies", level: 78 }
      ]
    },
    {
      category: "DevOps & Core Engineering",
      skills: [
        { name: "Git, GitHub Actions & CI/CD", level: 90 },
        { name: "Docker & Container Basics", level: 78 },
        { name: "Data Structures & Algorithms", level: 86 },
        { name: "Linux & Shell Scripting", level: 80 },
        { name: "Vercel & Cloud Deployment", level: 92 }
      ]
    },
    {
      category: "Design & Prototyping",
      skills: [
        { name: "Figma (Wireframing & UI Systems)", level: 90 },
        { name: "Design Tokens & Typography", level: 88 },
        { name: "User Research & Usability Testing", level: 84 },
        { name: "Design Handoff & Prototyping", level: 90 }
      ]
    }
  ],

  timeline: [
    {
      id: "edu-1",
      year: "2022 - 2026",
      title: "B.Tech in Computer Science & Engineering",
      organization: "Thejus Engineering College",
      location: "Vellarakkad, Thrissur, Kerala",
      type: "education",
      description: "Pursuing Bachelor of Technology with focus on Software Systems, Operating Systems, Computer Networks, Database Management, and Artificial Intelligence.",
      highlights: [
        "Consistent high academic performance and technical coursework",
        "Active member of Technical Fest & College Coding Club",
        "Mentoring junior students in web development & Git fundamentals"
      ]
    },
    {
      id: "exp-1",
      year: "2024",
      title: "Full-Stack Web Developer Intern",
      organization: "Innovate Labs",
      location: "Remote / Kerala",
      type: "experience",
      description: "Spearheaded frontend component re-architecture with Next.js and built RESTful service endpoints handling 5,000+ daily requests.",
      highlights: [
        "Decreased initial bundle size by 38% through route code-splitting",
        "Implemented end-to-end integration tests using Vitest and Playwright",
        "Collaborated with senior engineers on schema migration strategies"
      ]
    },
    {
      id: "ach-1",
      year: "2024",
      title: "National Finalist - Smart India Hackathon",
      organization: "Ministry of Education / Govt of India",
      location: "National Round",
      type: "achievement",
      description: "Selected among top teams nationwide for designing an AI-assisted healthcare monitoring and digital triage architecture for rural healthcare centers.",
      highlights: [
        "Designed rapid prototype within 36 hours of intensive hackathon competition",
        "Praised by jury for clean UX, accessibility, and robust offline sync capability"
      ]
    },
    {
      id: "lead-1",
      year: "2023 - Present",
      title: "Technical Lead & Campus Community Organizer",
      organization: "College Developer Club",
      location: "Thejus Engineering College",
      type: "achievement",
      description: "Organized hands-on workshops on Git/GitHub, modern JavaScript, and React for 150+ students across departments.",
      highlights: [
        "Conducted 4 technical bootcamps and annual college hackathon",
        "Built internal event registration web app for college symposium"
      ]
    }
  ],

  testimonials: [
    {
      id: "test-1",
      quote: "Fidha stands out with an exceptional blend of technical discipline and design sensitivity. Her work on complex engineering projects consistently demonstrates clean architecture, attention to detail, and a relentless curiosity to master modern tools.",
      name: "Dr. Radhika Nair",
      role: "Associate Professor, Department of CSE",
      organization: "Thejus Engineering College",
      avatar: "/images/avatar-1.png"
    },
    {
      id: "test-2",
      quote: "Working with Fidha during the national hackathon was an absolute pleasure. She owned both the UX fidelity and the frontend data synchronization, shipping production-grade UI under intense pressure with remarkable calm and speed.",
      name: "Arun Kumar",
      role: "Hackathon Team Lead & Alumnus",
      organization: "Thejus Engineering College",
      avatar: "/images/avatar-2.png"
    },
    {
      id: "test-3",
      quote: "Fidha is one of those rare developers who understands not just how code runs, but how users actually feel when interacting with an interface. Her code is modular, well-documented, and a joy to review.",
      name: "Ananya P.",
      role: "Product Designer & Collaborator",
      organization: "DesignCraft Studio",
      avatar: "/images/avatar-3.png"
    }
  ],

  stats: [
    { label: "Projects Completed", value: 18, suffix: "+" },
    { label: "Core Technologies", value: 14, suffix: "+" },
    { label: "Hackathons & Events", value: 6, suffix: "+" },
    { label: "GitHub Contributions", value: 1200, suffix: "+" }
  ],

  contact: {
    heading: "Let's build something exceptional together.",
    subheading: "Whether you have an internship opportunity, a freelance project, or just want to discuss modern web technologies and engineering, my inbox is always open.",
    email: "fidha.lam@example.com",
    location: "Thrissur, Kerala, India (Available Worldwide)",
    collegeAffiliation: "Thejus Engineering College, Vellarakkad",
    responseTime: "Typically replies within 24 hours"
  }
};

