'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Ecosystem',     href: '#ecosystem' },
  { label: 'Features',      href: '#features' },
  { label: 'Architecture',  href: '#architecture' },
  { label: 'AI Camera',     href: '#ai-camera' },
  { label: 'Download',      href: '#download' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <div
        className="transition-all duration-500"
        style={{
          background: scrolled
            ? 'rgba(5, 10, 20, 0.85)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px) saturate(1.5)' : 'none',
          borderBottom: scrolled ? '1px solid #1C2E4A80' : '1px solid transparent',
          boxShadow: scrolled ? '0 4px 32px #00000040' : 'none',
        }}
      >
        <nav className="container-site flex items-center justify-between h-16 md:h-[70px]">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-xl flex items-center justify-center transition-shadow duration-300 group-hover:shadow-glow-sm"
              style={{ background: 'linear-gradient(135deg, #0A84FF, #5E5CE6)' }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 2L3 5.5V10.5L8 14L13 10.5V5.5L8 2Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
                <circle cx="8" cy="8" r="2" fill="white" />
              </svg>
            </div>
            <span className="text-[15px] font-bold text-text-primary tracking-tight">Posturic</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                className="px-4 py-2 rounded-lg text-[13px] font-medium text-text-muted hover:text-text-primary hover:bg-bg-raised transition-all duration-200"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="#download" className="btn-ghost text-[13px] px-5 py-2.5">
              Download APK
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-bg-raised transition-all"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              {menuOpen ? (
                <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              ) : (
                <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
            style={{ background: 'rgba(5, 10, 20, 0.98)', backdropFilter: 'blur(20px)', borderBottom: '1px solid #1C2E4A' }}
          >
            <div className="container-site py-4 flex flex-col gap-1">
              {links.map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-[14px] font-medium text-text-secondary hover:text-text-primary hover:bg-bg-raised transition-all"
                >
                  {l.label}
                </a>
              ))}
              <div className="pt-2 border-t border-bg-border mt-2">
                <a href="#download" className="btn-primary text-[14px] px-5 py-3 w-full justify-center">
                  Download APK
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
