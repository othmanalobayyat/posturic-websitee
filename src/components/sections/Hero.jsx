'use client'

import { motion } from 'framer-motion'

// Elements don't fly in — they materialize.
// Slow, minimal. Like something emerging from the background.
const emerge = (delay = 0) => ({
  initial: { opacity: 0, y: 8 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1], delay },
  },
})

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">

      <AmbientLight />
      <Grain />

      {/* ── Content — centered, generous breathing room ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">

        {/* Brand mark — small, quiet, just the name */}
        <motion.p
          {...emerge(0.2)}
          className="text-[11px] font-semibold tracking-[0.3em] uppercase text-text-muted mb-14"
        >
          Posturic
        </motion.p>

        {/* Headline — weight contrast is the visual interest */}
        <motion.h1 {...emerge(0.4)} className="mb-8">
          <span
            className="block text-display-2xl font-extralight tracking-wide text-text-secondary"
            style={{ letterSpacing: '0.02em' }}
          >
            The future of
          </span>
          <span className="block text-display-2xl font-black tracking-tight text-text-primary">
            <em className="text-gradient not-italic">healthy</em> workspaces.
          </span>
        </motion.h1>

        {/* Subline — one statement, nothing extra */}
        <motion.p
          {...emerge(0.6)}
          className="text-[17px] text-text-secondary leading-relaxed max-w-[34ch] mb-12"
          style={{ fontWeight: 350 }}
        >
          Posture and attention monitoring —
          calm, private, and invisible.
        </motion.p>

        {/* Single CTA — an invitation, not a transaction */}
        <motion.div {...emerge(0.8)}>
          <a
            href="#product"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full
                       border border-bg-border text-[14px] font-medium text-text-secondary
                       hover:border-brand-blue/50 hover:text-text-primary
                       transition-all duration-300 group"
          >
            Discover Posturic
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">
              <IconArrow />
            </span>
          </a>
        </motion.div>

      </div>

      <ScrollHint />

      {/* Fade into next section */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-bg-base to-transparent pointer-events-none" />
    </section>
  )
}

// ─── One soft ambient light. Not a feature — a mood. ─────────────────────
function AmbientLight() {
  return (
    <motion.div
      animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
      transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 pointer-events-none"
      style={{
        width: '800px',
        height: '800px',
        borderRadius: '50%',
        background: 'radial-gradient(ellipse, #5E5CE628 0%, #0A84FF14 45%, transparent 72%)',
        filter: 'blur(72px)',
      }}
    />
  )
}

// ─── Grain — invisible to the eye, felt by the brain ─────────────────────
function Grain() {
  return (
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.018]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundSize: '150px 150px',
      }}
    />
  )
}

// ─── Scroll hint — appears after 2s, never before ────────────────────────
function ScrollHint() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.5, duration: 1.2 }}
      className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5"
    >
      <span className="text-[10px] tracking-[0.25em] uppercase text-text-muted">Scroll</span>
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <IconChevronDown />
      </motion.div>
    </motion.div>
  )
}

// ─── Icons ────────────────────────────────────────────────────────────────
function IconArrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconChevronDown() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M3 5l4 4 4-4" stroke="#4A5D7E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
