const sharp = require('sharp');
const path = require('path');

const publicImages = path.join(__dirname, '..', 'public', 'images');

async function generateProjectAssets() {
  // Project 1: MedSync Care (Clinical Triage & Health Dashboard - like the medical screenshot in Image 1/3)
  const medSvg = `
  <svg width="1200" height="800" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#F4F8FA"/>
        <stop offset="100%" stop-color="#E2EEF4"/>
      </linearGradient>
      <linearGradient id="cardG" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#ffffff"/>
        <stop offset="100%" stop-color="#f8fafc"/>
      </linearGradient>
      <linearGradient id="limeG" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#A6F03A"/>
        <stop offset="100%" stop-color="#7ED321"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="800" rx="32" fill="url(#bg)"/>
    
    <!-- Header Bar -->
    <rect x="40" y="40" width="1120" height="70" rx="20" fill="#ffffff" filter="drop-shadow(0 4px 20px rgba(0,0,0,0.04))"/>
    <circle cx="80" cy="75" r="14" fill="#0284C7"/>
    <rect x="110" y="66" width="140" height="18" rx="6" fill="#0F172A"/>
    <rect x="780" y="58" width="180" height="34" rx="17" fill="#F1F5F9"/>
    <rect x="980" y="58" width="140" height="34" rx="17" fill="#0284C7"/>
    
    <!-- Hero Box in Dashboard -->
    <rect x="40" y="140" width="700" height="380" rx="28" fill="url(#cardG)" stroke="#E2E8F0" stroke-width="1.5"/>
    <text x="80" y="210" font-family="system-ui, sans-serif" font-size="32" font-weight="700" fill="#0F172A">Healthcare You Can Trust</text>
    <text x="80" y="250" font-family="system-ui, sans-serif" font-size="16" fill="#64748B">Real-time intelligent patient triage, vitals monitoring, and telemetry.</text>
    
    <!-- Stats inside -->
    <rect x="80" y="300" width="180" height="90" rx="18" fill="#F8FAFC" stroke="#E2E8F0"/>
    <text x="100" y="340" font-family="system-ui, sans-serif" font-size="28" font-weight="800" fill="#0284C7">99.8%</text>
    <text x="100" y="365" font-family="system-ui, sans-serif" font-size="13" fill="#64748B">Triage Accuracy</text>

    <rect x="280" y="300" width="180" height="90" rx="18" fill="#F8FAFC" stroke="#E2E8F0"/>
    <text x="300" y="340" font-family="system-ui, sans-serif" font-size="28" font-weight="800" fill="#10B981">&lt; 140ms</text>
    <text x="300" y="365" font-family="system-ui, sans-serif" font-size="13" fill="#64748B">Telemetry Latency</text>

    <rect x="480" y="300" width="180" height="90" rx="18" fill="#F8FAFC" stroke="#E2E8F0"/>
    <text x="500" y="340" font-family="system-ui, sans-serif" font-size="28" font-weight="800" fill="#6366F1">12,400+</text>
    <text x="500" y="365" font-family="system-ui, sans-serif" font-size="13" fill="#64748B">Active Sessions</text>

    <!-- ECG Graph Line -->
    <path d="M 80 470 L 220 470 L 250 430 L 270 510 L 290 410 L 320 490 L 340 470 L 660 470" fill="none" stroke="#0284C7" stroke-width="4" stroke-linecap="round"/>

    <!-- Right Doctor / AI Assistant Panel -->
    <rect x="760" y="140" width="400" height="380" rx="28" fill="#0F172A"/>
    <rect x="800" y="180" width="180" height="24" rx="12" fill="url(#limeG)"/>
    <text x="815" y="196" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#052E16">AI TRIAGE ENGINE v2.4</text>
    <text x="800" y="240" font-family="system-ui, sans-serif" font-size="22" font-weight="600" fill="#F8FAFC">Smart Diagnostics</text>
    <text x="800" y="275" font-family="system-ui, sans-serif" font-size="14" fill="#94A3B8">Automated ICD-11 coding &amp; urgency prioritization for emergency departments.</text>
    
    <circle cx="840" cy="380" r="30" fill="#1E293B"/>
    <rect x="890" y="360" width="180" height="16" rx="4" fill="#E2E8F0"/>
    <rect x="890" y="386" width="120" height="12" rx="4" fill="#64748B"/>
    
    <!-- Bottom Grid Panels -->
    <rect x="40" y="540" width="540" height="220" rx="24" fill="#ffffff" stroke="#E2E8F0"/>
    <text x="80" y="590" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#0F172A">Bed Allocation &amp; ICU Telemetry</text>
    <rect x="80" y="620" width="460" height="12" rx="6" fill="#F1F5F9"/>
    <rect x="80" y="620" width="380" height="12" rx="6" fill="url(#limeG)"/>
    <rect x="80" y="660" width="460" height="12" rx="6" fill="#F1F5F9"/>
    <rect x="80" y="660" width="260" height="12" rx="6" fill="#0284C7"/>
    <rect x="80" y="700" width="460" height="12" rx="6" fill="#F1F5F9"/>
    <rect x="80" y="700" width="410" height="12" rx="6" fill="#8B5CF6"/>

    <rect x="620" y="540" width="540" height="220" rx="24" fill="#ffffff" stroke="#E2E8F0"/>
    <text x="660" y="590" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#0F172A">Secure FHIR &amp; HL7 Protocol Sync</text>
    <circle cx="700" cy="660" r="36" fill="#EFF6FF"/>
    <circle cx="800" cy="660" r="36" fill="#F0FDF4"/>
    <circle cx="900" cy="660" r="36" fill="#FEF2F2"/>
    <circle cx="1000" cy="660" r="36" fill="#FAF5FF"/>
  </svg>
  `;

  // Project 2: EstateVista (Architectural Real Estate & Spatial Experience)
  const estateSvg = `
  <svg width="1200" height="800" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="villaG" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#263238"/>
        <stop offset="100%" stop-color="#12181B"/>
      </linearGradient>
      <linearGradient id="warmG" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#FAF8F5"/>
        <stop offset="100%" stop-color="#EFECE6"/>
      </linearGradient>
      <linearGradient id="accent" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#D97706"/>
        <stop offset="100%" stop-color="#B45309"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="800" rx="32" fill="url(#warmG)"/>

    <!-- Hero Card -->
    <rect x="50" y="50" width="1100" height="420" rx="28" fill="url(#villaG)"/>
    <circle cx="950" cy="200" r="180" fill="#D97706" opacity="0.15" filter="blur(60px)"/>
    
    <!-- Architectural lines -->
    <path d="M 650 380 L 800 200 L 980 200 L 1080 380 Z" fill="#2E3C43" opacity="0.6"/>
    <path d="M 800 200 L 800 380" stroke="#FAF8F5" stroke-width="2" opacity="0.4"/>
    <path d="M 880 200 L 880 380" stroke="#FAF8F5" stroke-width="2" opacity="0.4"/>

    <text x="110" y="160" font-family="system-ui, sans-serif" font-size="44" font-weight="700" fill="#FAF8F5">Discover Modern Architecture</text>
    <text x="110" y="210" font-family="system-ui, sans-serif" font-size="20" fill="#CBD5E1">Curated minimalist residential spaces with interactive 3D floorplans.</text>

    <!-- Pill Badges -->
    <rect x="110" y="260" width="160" height="44" rx="22" fill="#FAF8F5"/>
    <text x="140" y="288" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#12181B">Explore 3D Tour</text>

    <rect x="290" y="260" width="160" height="44" rx="22" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.3)"/>
    <text x="320" y="288" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="#FAF8F5">Schedule Visit</text>

    <!-- Metrics Bar -->
    <rect x="110" y="350" width="480" height="70" rx="18" fill="rgba(0,0,0,0.4)" stroke="rgba(255,255,255,0.1)"/>
    <text x="140" y="385" font-family="system-ui, sans-serif" font-size="24" font-weight="800" fill="#FAF8F5">120+</text>
    <text x="140" y="405" font-family="system-ui, sans-serif" font-size="12" fill="#94A3B8">Villas Cataloged</text>

    <text x="280" y="385" font-family="system-ui, sans-serif" font-size="24" font-weight="800" fill="#FAF8F5">0.4s</text>
    <text x="280" y="405" font-family="system-ui, sans-serif" font-size="12" fill="#94A3B8">GLTF Render Speed</text>

    <text x="420" y="385" font-family="system-ui, sans-serif" font-size="24" font-weight="800" fill="#A6F03A">4.9★</text>
    <text x="420" y="405" font-family="system-ui, sans-serif" font-size="12" fill="#94A3B8">Client Rating</text>

    <!-- Bottom Showcase Cards -->
    <rect x="50" y="500" width="340" height="250" rx="24" fill="#ffffff" stroke="#E2E8F0"/>
    <rect x="70" y="520" width="300" height="150" rx="16" fill="#E2E8F0"/>
    <text x="70" y="700" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#0F172A">The Glass Pavilion</text>
    <text x="70" y="725" font-family="system-ui, sans-serif" font-size="14" fill="#64748B">Cochin, Kerala • 4,800 sq.ft</text>

    <rect x="430" y="500" width="340" height="250" rx="24" fill="#ffffff" stroke="#E2E8F0"/>
    <rect x="450" y="520" width="300" height="150" rx="16" fill="#CBD5E1"/>
    <text x="450" y="700" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#0F172A">Hillside Brutalist Villa</text>
    <text x="450" y="725" font-family="system-ui, sans-serif" font-size="14" fill="#64748B">Wayanad, Kerala • 6,200 sq.ft</text>

    <rect x="810" y="500" width="340" height="250" rx="24" fill="#ffffff" stroke="#E2E8F0"/>
    <rect x="830" y="520" width="300" height="150" rx="16" fill="#94A3B8"/>
    <text x="830" y="700" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#0F172A">Courtyard Sanctuary</text>
    <text x="830" y="725" font-family="system-ui, sans-serif" font-size="14" fill="#64748B">Thrissur, Kerala • 5,400 sq.ft</text>
  </svg>
  `;

  // Project 3: Lumina UI (Accessible React Component System)
  const luminaSvg = `
  <svg width="1200" height="800" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="darkBg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#090D16"/>
        <stop offset="100%" stop-color="#141E33"/>
      </linearGradient>
      <linearGradient id="codeG" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#1E293B"/>
        <stop offset="100%" stop-color="#0F172A"/>
      </linearGradient>
      <linearGradient id="glowG" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#38BDF8"/>
        <stop offset="100%" stop-color="#818CF8"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="800" rx="32" fill="url(#darkBg)"/>

    <!-- Glow blob -->
    <circle cx="300" cy="300" r="250" fill="#38BDF8" opacity="0.12" filter="blur(80px)"/>
    <circle cx="900" cy="400" r="220" fill="#A6F03A" opacity="0.1" filter="blur(90px)"/>

    <!-- Left UI Showcase -->
    <rect x="60" y="60" width="480" height="680" rx="28" fill="rgba(30, 41, 59, 0.6)" stroke="rgba(255,255,255,0.1)"/>
    <text x="100" y="130" font-family="system-ui, sans-serif" font-size="28" font-weight="700" fill="#F8FAFC">Lumina UI Kit</text>
    <text x="100" y="165" font-family="system-ui, sans-serif" font-size="15" fill="#94A3B8">Accessible, WAI-ARIA compliant design system with micro-interactions.</text>

    <!-- Component Buttons preview -->
    <rect x="100" y="210" width="180" height="48" rx="24" fill="#A6F03A"/>
    <text x="140" y="240" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#090D16">Primary Glow</text>

    <rect x="300" y="210" width="180" height="48" rx="24" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.2)"/>
    <text x="340" y="240" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#F8FAFC">Ghost Button</text>

    <!-- Sliders and Toggles -->
    <rect x="100" y="300" width="380" height="80" rx="20" fill="rgba(15, 23, 42, 0.8)" stroke="rgba(255,255,255,0.08)"/>
    <text x="125" y="335" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="#F8FAFC">Reduced Motion Detection</text>
    <text x="125" y="358" font-family="system-ui, sans-serif" font-size="12" fill="#64748B">Auto-switches to safe zero-motion states</text>
    <rect x="400" y="325" width="56" height="30" rx="15" fill="#A6F03A"/>
    <circle cx="438" cy="340" r="11" fill="#090D16"/>

    <!-- Right Code Panel -->
    <rect x="580" y="60" width="560" height="680" rx="28" fill="url(#codeG)" stroke="rgba(255,255,255,0.12)"/>
    <!-- Code Window Dots -->
    <circle cx="620" cy="100" r="7" fill="#EF4444"/>
    <circle cx="640" cy="100" r="7" fill="#F59E0B"/>
    <circle cx="660" cy="100" r="7" fill="#10B981"/>
    <text x="700" y="105" font-family="monospace" font-size="13" fill="#64748B">Modal.tsx • Lumina Engine</text>

    <!-- Code Lines -->
    <text x="620" y="160" font-family="monospace" font-size="14" fill="#38BDF8">import <tspan fill="#F8FAFC">{ Dialog, Transition } </tspan><tspan fill="#F472B6">from</tspan><tspan fill="#A6F03A"> '@lumina/react'</tspan>;</text>
    <text x="620" y="200" font-family="monospace" font-size="14" fill="#F472B6">export function <tspan fill="#FBBF24">InteractiveModal</tspan>() {</text>
    <text x="640" y="235" font-family="monospace" font-size="14" fill="#64748B">// Accessible focus trapping &amp; portal mounting</text>
    <text x="640" y="270" font-family="monospace" font-size="14" fill="#F472B6">return (</text>
    <text x="660" y="305" font-family="monospace" font-size="14" fill="#38BDF8">&lt;<tspan fill="#F8FAFC">Dialog</tspan> <tspan fill="#FBBF24">role</tspan>=<tspan fill="#A6F03A">"dialog"</tspan> <tspan fill="#FBBF24">aria-modal</tspan>=<tspan fill="#FBBF24">{true}</tspan>&gt;</text>
    <text x="680" y="340" font-family="monospace" font-size="14" fill="#38BDF8">&lt;<tspan fill="#F8FAFC">Dialog.Backdrop</tspan> <tspan fill="#FBBF24">blur</tspan>=<tspan fill="#A6F03A">"glass"</tspan> /&gt;</text>
    <text x="680" y="375" font-family="monospace" font-size="14" fill="#38BDF8">&lt;<tspan fill="#F8FAFC">Dialog.Panel</tspan> <tspan fill="#FBBF24">animate</tspan>=<tspan fill="#A6F03A">"scale-up"</tspan>&gt;</text>
    <text x="700" y="410" font-family="monospace" font-size="14" fill="#F8FAFC">&lt;h3&gt;Seamless Engineering&lt;/h3&gt;</text>
    <text x="680" y="445" font-family="monospace" font-size="14" fill="#38BDF8">&lt;/<tspan fill="#F8FAFC">Dialog.Panel</tspan>&gt;</text>
    <text x="660" y="480" font-family="monospace" font-size="14" fill="#38BDF8">&lt;/<tspan fill="#F8FAFC">Dialog</tspan>&gt;</text>
    <text x="640" y="515" font-family="monospace" font-size="14" fill="#F472B6">);</text>
    <text x="620" y="550" font-family="monospace" font-size="14" fill="#F472B6">}</text>

    <rect x="620" y="600" width="480" height="80" rx="16" fill="rgba(166, 240, 58, 0.1)" stroke="#A6F03A"/>
    <text x="650" y="635" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#A6F03A">Zero Cumulative Layout Shift (CLS)</text>
    <text x="650" y="660" font-family="system-ui, sans-serif" font-size="13" fill="#94A3B8">Passes 100% of Lighthouse Accessibility benchmarks.</text>
  </svg>
  `;

  // Project 4: AlgoFlow (Visual Algorithm & Data Structure Playground)
  const algoSvg = `
  <svg width="1200" height="800" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="algoBg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#18181B"/>
        <stop offset="100%" stop-color="#09090B"/>
      </linearGradient>
      <linearGradient id="neonG" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#A6F03A"/>
        <stop offset="100%" stop-color="#10B981"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="800" rx="32" fill="url(#algoBg)"/>

    <!-- Nodes Graph Grid -->
    <circle cx="200" cy="250" r="32" fill="#27272A" stroke="#A6F03A" stroke-width="3"/>
    <text x="195" y="257" font-family="monospace" font-size="18" font-weight="700" fill="#A6F03A">A</text>

    <circle cx="450" cy="180" r="32" fill="#27272A" stroke="#38BDF8" stroke-width="3"/>
    <text x="445" y="187" font-family="monospace" font-size="18" font-weight="700" fill="#38BDF8">B</text>

    <circle cx="450" cy="380" r="32" fill="#27272A" stroke="#F43F5E" stroke-width="3"/>
    <text x="445" y="387" font-family="monospace" font-size="18" font-weight="700" fill="#F43F5E">C</text>

    <circle cx="750" cy="250" r="32" fill="#27272A" stroke="#FBBF24" stroke-width="3"/>
    <text x="745" y="257" font-family="monospace" font-size="18" font-weight="700" fill="#FBBF24">D</text>

    <circle cx="1000" cy="250" r="32" fill="url(#neonG)"/>
    <text x="993" y="257" font-family="monospace" font-size="18" font-weight="800" fill="#09090B">E</text>

    <!-- Connecting Edges with weights -->
    <line x1="232" y1="240" x2="418" y2="190" stroke="#A6F03A" stroke-width="3" stroke-dasharray="6 4"/>
    <line x1="232" y1="260" x2="418" y2="370" stroke="#52525B" stroke-width="2"/>
    <line x1="482" y1="190" x2="718" y2="240" stroke="#38BDF8" stroke-width="3"/>
    <line x1="482" y1="370" x2="718" y2="260" stroke="#52525B" stroke-width="2"/>
    <line x1="782" y1="250" x2="968" y2="250" stroke="#A6F03A" stroke-width="4"/>

    <!-- Bottom sorting visualizer bars -->
    <rect x="100" y="490" width="1000" height="240" rx="24" fill="#18181B" stroke="#27272A"/>
    <text x="140" y="535" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#FAFAFA">Dijkstra &amp; Quicksort Step-Through Runtime</text>
    <text x="140" y="560" font-family="system-ui, sans-serif" font-size="13" fill="#A1A1AA">Interactive visualization built for CSE students at Thejus Engineering College.</text>

    <!-- Sorting Bars -->
    <rect x="140" y="650" width="40" height="50" rx="6" fill="#3F3F46"/>
    <rect x="200" y="620" width="40" height="80" rx="6" fill="#3F3F46"/>
    <rect x="260" y="590" width="40" height="110" rx="6" fill="#A6F03A"/>
    <rect x="320" y="640" width="40" height="60" rx="6" fill="#3F3F46"/>
    <rect x="380" y="570" width="40" height="130" rx="6" fill="#A6F03A"/>
    <rect x="440" y="610" width="40" height="90" rx="6" fill="#38BDF8"/>
    <rect x="500" y="580" width="40" height="120" rx="6" fill="#3F3F46"/>
    <rect x="560" y="660" width="40" height="40" rx="6" fill="#3F3F46"/>
    <rect x="620" y="600" width="40" height="100" rx="6" fill="#F43F5E"/>
    <rect x="680" y="550" width="40" height="150" rx="6" fill="#A6F03A"/>
    <rect x="740" y="630" width="40" height="70" rx="6" fill="#3F3F46"/>
    <rect x="800" y="570" width="40" height="130" rx="6" fill="#A6F03A"/>
    <rect x="860" y="620" width="40" height="80" rx="6" fill="#38BDF8"/>
    <rect x="920" y="560" width="40" height="140" rx="6" fill="#FBBF24"/>
    <rect x="980" y="540" width="40" height="160" rx="6" fill="#A6F03A"/>
  </svg>
  `;

  // Avatars for hero stack & testimonials
  const avatarSvgs = [
    `<svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="60" fill="#3B82F6"/>
      <circle cx="60" cy="48" r="24" fill="#DBEAFE"/>
      <ellipse cx="60" cy="98" rx="40" ry="24" fill="#DBEAFE"/>
    </svg>`,
    `<svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="60" fill="#10B981"/>
      <circle cx="60" cy="48" r="24" fill="#D1FAE5"/>
      <ellipse cx="60" cy="98" rx="40" ry="24" fill="#D1FAE5"/>
    </svg>`,
    `<svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="60" fill="#8B5CF6"/>
      <circle cx="60" cy="48" r="24" fill="#EDE9FE"/>
      <ellipse cx="60" cy="98" rx="40" ry="24" fill="#EDE9FE"/>
    </svg>`,
    `<svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="60" fill="#F59E0B"/>
      <circle cx="60" cy="48" r="24" fill="#FEF3C7"/>
      <ellipse cx="60" cy="98" rx="40" ry="24" fill="#FEF3C7"/>
    </svg>`
  ];

  await sharp(Buffer.from(medSvg)).jpeg({ quality: 90 }).toFile(path.join(publicImages, 'project-1.jpg'));
  await sharp(Buffer.from(estateSvg)).jpeg({ quality: 90 }).toFile(path.join(publicImages, 'project-2.jpg'));
  await sharp(Buffer.from(luminaSvg)).jpeg({ quality: 90 }).toFile(path.join(publicImages, 'project-3.jpg'));
  await sharp(Buffer.from(algoSvg)).jpeg({ quality: 90 }).toFile(path.join(publicImages, 'project-4.jpg'));

  for (let i = 0; i < avatarSvgs.length; i++) {
    await sharp(Buffer.from(avatarSvgs[i])).png().toFile(path.join(publicImages, `avatar-${i + 1}.png`));
  }

  console.log('Successfully generated all project mockups and avatar graphics!');
}

generateProjectAssets().catch(console.error);

