'use client'

import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 24 },
  whileInView:{ opacity: 1, y: 0 },
  viewport:   { once: true },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
})

const stats = [
  { value: '6–10 hrs', label: 'Average time seated per day', sub: 'modern knowledge worker' },
  { value: '60–80%',   label: 'of desk workers', sub: 'suffer chronic back/neck pain' },
  { value: '30 min',   label: 'average time until', sub: 'posture begins to deteriorate' },
  { value: '50%',      label: 'reaction time reduction', sub: 'equivalent to alcohol intoxication' },
]

const failedSolutions = [
  { title: 'Ergonomic chairs', reason: 'Passive. Don\'t observe the user. Can\'t change behavior.' },
  { title: 'Reminder apps',    reason: 'Fire blindly on a timer. Not context-aware. Ignored after day one.' },
  { title: 'Wearables',        reason: 'Forgotten, uncharged, and uncomfortable for 8-hour sessions.' },
  { title: 'Wall posters',     reason: 'Seen once, never internalized. Zero real-time feedback.' },
]

export default function Problem() {
  return (
    <section id="problem" className="section-padding relative overflow-hidden">

      <div className="glow-orb w-[500px] h-[500px] left-0 top-1/2 -translate-y-1/2 opacity-20"
        style={{ background: 'radial-gradient(circle, #5E5CE614 0%, transparent 70%)' }} />

      <div className="container-site">

        {/* Header */}
        <div className="max-w-3xl mb-20">
          <motion.p {...fadeUp(0)} className="section-label mb-4">
            01 — The Problem
          </motion.p>
          <motion.h2 {...fadeUp(0.1)} className="text-display-xl font-black text-text-primary mb-6">
            Posture degrades invisibly.{' '}
            <span className="text-text-secondary font-light">Nobody notices until damage is done.</span>
          </motion.h2>
          <motion.p {...fadeUp(0.2)} className="text-[17px] text-text-secondary leading-relaxed" style={{ fontWeight: 350 }}>
            The human body isn't designed for static loading over hours. Posture collapses gradually and unconsciously —
            a person sits correctly at 9 AM and is dangerously hunched by 10 AM without realizing it.
            Traditional solutions all share the same fatal flaw: <strong className="text-text-primary font-medium">they don't observe the user in real time.</strong>
          </motion.p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              {...fadeUp(i * 0.08)}
              className="card-glass p-6 flex flex-col gap-2"
            >
              <span className="text-3xl md:text-4xl font-black text-gradient">{s.value}</span>
              <span className="text-[13px] font-medium text-text-primary leading-snug">{s.label}</span>
              <span className="text-[11px] text-text-muted">{s.sub}</span>
            </motion.div>
          ))}
        </div>

        {/* Why existing solutions fail */}
        <motion.div {...fadeUp(0.3)}>
          <p className="section-label mb-8">Why existing solutions fail</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {failedSolutions.map((f, i) => (
              <motion.div
                key={f.title}
                {...fadeUp(0.3 + i * 0.08)}
                className="flex items-start gap-4 p-5 rounded-2xl border border-bg-border bg-bg-surface"
              >
                <div className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: '#FF453A14', border: '1px solid #FF453A33' }}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 2l6 6M8 2L2 8" stroke="#FF453A" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-text-primary mb-1">{f.title}</p>
                  <p className="text-[12px] text-text-muted leading-relaxed">{f.reason}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* The insight */}
        <motion.div
          {...fadeUp(0.5)}
          className="mt-16 p-8 rounded-3xl relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #0C1526, #111E35)', border: '1px solid #1C2E4A' }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 opacity-10"
            style={{ background: 'radial-gradient(circle, #0A84FF 0%, transparent 70%)' }} />
          <div className="relative">
            <p className="section-label mb-4">The core insight</p>
            <p className="text-display-md font-semibold text-text-primary max-w-2xl leading-snug">
              "The only way to change posture behavior long-term is continuous,
              passive, real-time monitoring — with instant, actionable feedback."
            </p>
            <p className="mt-4 text-[14px] text-text-muted">
              This is what Posturic delivers. Not reminders. Not advice. Observation.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
