'use client'

import { motion } from 'framer-motion'

const links = {
  System: [
    { label: 'Problem', href: '#problem' },
    { label: 'Ecosystem', href: '#ecosystem' },
    { label: 'Live Features', href: '#features' },
    { label: 'Architecture', href: '#architecture' },
  ],
  Technology: [
    { label: 'AI Camera Pipeline', href: '#ai-camera' },
    { label: 'Smart Chair', href: '#smart-chair' },
    { label: 'Realtime System', href: '#realtime' },
    { label: 'Tech Stack', href: '#stack' },
  ],
  Download: [
    { label: 'Android APK', href: '#download' },
    { label: 'Camera Desktop App', href: '#download' },
    { label: 'Future Roadmap', href: '#future' },
  ],
}

const techBadges = [
  'ESP32', 'React Native', 'Node.js', 'MediaPipe', 'PyQt5',
  'WebSocket', 'MongoDB', 'Turso', 'Railway', 'Cloudflare',
  'Expo SDK 54', 'LLaMA 3.3 70B', 'Framer Motion',
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-bg-border">

      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] opacity-15"
        style={{ background: 'radial-gradient(ellipse, #0A84FF14 0%, transparent 70%)', filter: 'blur(40px)' }} />

      <div className="container-site pt-20 pb-12 relative">

        {/* Main footer grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">

          {/* Brand column */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-5">
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #0A84FF, #5E5CE6)' }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 2L3.5 5.75V12.25L9 16L14.5 12.25V5.75L9 2Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
                  <circle cx="9" cy="9" r="2.5" fill="white" />
                </svg>
              </div>
              <span className="text-[16px] font-bold text-text-primary">Posturic</span>
            </a>
            <p className="text-[13px] text-text-muted leading-relaxed">
              Multi-modal ergonomics monitoring through AI vision, pressure sensing, and real-time coaching.
            </p>
            <div>
              <span className="badge-live flex items-center gap-1.5 w-fit">
                <span className="live-dot" />
                System live at posturic.online
              </span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <p className="section-label mb-5">{section}</p>
              <ul className="flex flex-col gap-3">
                {items.map(l => (
                  <li key={l.label}>
                    <a href={l.href}
                      className="text-[13px] text-text-muted hover:text-text-primary transition-colors duration-200">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Tech badge strip */}
        <div className="border-t border-bg-border pt-10 mb-10">
          <p className="section-label mb-5">Built with</p>
          <div className="flex flex-wrap gap-2">
            {techBadges.map(t => (
              <span key={t} className="badge-tech">{t}</span>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-bg-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-[12px] text-text-muted">
              Posturic — Graduation Project 2026
            </p>
            <p className="text-[11px] text-text-muted opacity-60">
              Smart Chair · AI Camera · WebSocket Hub · Mobile App
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a href="#architecture" className="text-[12px] text-text-muted hover:text-text-primary transition-colors">
              Architecture
            </a>
            <a href="#download" className="text-[12px] text-text-muted hover:text-text-primary transition-colors">
              Download
            </a>
            <a href="#" className="btn-primary text-[12px] px-4 py-2 rounded-full">
              ↑ Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
