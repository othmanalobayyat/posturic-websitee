'use client'

import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 24 },
  whileInView:{ opacity: 1, y: 0 },
  viewport:   { once: true },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
})

const comparison = [
  { label: 'Latency',           polling: '0–1000ms avg',   ws: '~10ms',      winner: 'ws' },
  { label: 'Server requests',   polling: '3,600 / hr / user', ws: '1 connection', winner: 'ws' },
  { label: 'Battery impact',    polling: 'High (CPU wake/s)', ws: 'Low (idle open)', winner: 'ws' },
  { label: 'Connection overhead', polling: 'TCP+HTTP each req', ws: 'Single handshake', winner: 'ws' },
  { label: 'Data freshness',    polling: 'Up to 1s stale', ws: 'Instantaneous', winner: 'ws' },
  { label: 'Bidirectional',     polling: 'Requires 2 endpoints', ws: 'Native', winner: 'ws' },
  { label: 'Scalability',       polling: 'O(n) req/time unit', ws: 'O(1) conn/user', winner: 'ws' },
]

const challenges = [
  {
    title: 'WebSocket stale closures',
    problem: 'The ws.onmessage callback captured initial state values. Session logic compared stale chairOnline — sessions started/ended incorrectly.',
    solution: 'Mirror critical state in refs (tokenRef, chairOnlineRef). Refs always hold the latest value without triggering re-renders.',
    color: '#FF9F0A',
  },
  {
    title: 'BLE + Hermes release crash',
    problem: 'subscription.remove() caused a native crash in release APK (Hermes AOT) but not in debug builds.',
    solution: 'Replace subscription.remove() with manager.destroy(). This is the BLE library\'s recommended cleanup for RN 0.71+.',
    color: '#FF453A',
  },
  {
    title: 'Session double-ending',
    problem: 'Chair idle + app background could both trigger endSession() in the same millisecond window.',
    solution: 'Set sessionStartRef.current = null synchronously as the very first line of endSession(). JS is single-threaded — second call sees null and exits.',
    color: '#5E5CE6',
  },
  {
    title: 'Silent auth failure',
    problem: 'App showed as connected but chair data never appeared. Token was null when initWebSocket() ran at startup.',
    solution: 'useEffect(() => { if (token) initWebSocket() }, [token]) — WebSocket opens only after AuthContext loads the token.',
    color: '#0A84FF',
  },
]

export default function RealtimeSystem() {
  return (
    <section id="realtime" className="section-padding relative">

      <div className="glow-orb w-[600px] h-[600px] right-0 top-1/2 -translate-y-1/2 opacity-12"
        style={{ background: 'radial-gradient(circle, #0A84FF0A 0%, transparent 70%)' }} />

      <div className="container-site">

        <div className="max-w-3xl mb-20">
          <motion.p {...fadeUp(0)} className="section-label mb-4">
            07 — Realtime System
          </motion.p>
          <motion.h2 {...fadeUp(0.1)} className="text-display-xl font-black text-text-primary mb-6">
            WebSocket over REST.{' '}
            <span className="text-gradient">Every time.</span>
          </motion.h2>
          <motion.p {...fadeUp(0.2)} className="text-[17px] text-text-secondary leading-relaxed" style={{ fontWeight: 350 }}>
            For sensor data arriving ten times per second over hours-long sessions, HTTP polling would generate
            3,600 requests per user per hour. WebSocket keeps one persistent connection open.
            The choice isn't about preference — it's about math.
          </motion.p>
        </div>

        {/* WebSocket vs Polling comparison */}
        <motion.div {...fadeUp(0.2)} className="mb-16">
          <p className="section-label mb-6">WebSocket vs HTTP polling · head-to-head</p>
          <div className="rounded-2xl border border-bg-border overflow-hidden" style={{ background: '#060D1E' }}>
            {/* Header */}
            <div className="grid grid-cols-3 border-b border-bg-border px-6 py-3">
              <span className="text-[11px] text-text-muted uppercase tracking-wider">Metric</span>
              <span className="text-[11px] uppercase tracking-wider text-center" style={{ color: '#FF453A' }}>HTTP Polling (1s)</span>
              <span className="text-[11px] uppercase tracking-wider text-center text-brand-blue">WebSocket</span>
            </div>
            {comparison.map((row, i) => (
              <div key={row.label} className="grid grid-cols-3 border-b border-bg-border last:border-b-0 px-6 py-3.5 hover:bg-bg-surface transition-colors">
                <span className="text-[13px] text-text-secondary">{row.label}</span>
                <span className="text-[13px] text-center" style={{ color: '#FF453A88' }}>{row.polling}</span>
                <span className="text-[13px] font-medium text-center text-brand-blue">{row.ws}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Reconnect system */}
        <motion.div {...fadeUp(0.3)} className="mb-16">
          <p className="section-label mb-6">Reconnect & keepalive strategy</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: '6-second reconnect backoff',
                detail: 'Too short (< 2s) spams a restarting server. Too long (> 15s) misses session starts. 6s is the pragmatic middle ground.',
                color: '#0A84FF',
              },
              {
                title: '25-second keepalive ping',
                detail: 'Cloudflare closes idle connections after 60 seconds. A ping every 25s keeps the connection alive — well within the timeout window.',
                color: '#5E5CE6',
              },
              {
                title: 'Primary + backup server',
                detail: 'SERVERS[0] = production WSS. SERVERS[1] = LAN fallback. Mobile and camera both follow this order — and must always stay in sync.',
                color: '#30D158',
              },
            ].map(c => (
              <div key={c.title} className="card-glass p-5">
                <div className="w-2 h-8 rounded-full mb-4" style={{ background: c.color }} />
                <p className="text-[14px] font-bold text-text-primary mb-2">{c.title}</p>
                <p className="text-[12px] text-text-muted leading-relaxed">{c.detail}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Engineering challenges */}
        <motion.div {...fadeUp(0.4)}>
          <p className="section-label mb-6">Hard bugs solved during development</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {challenges.map((c, i) => (
              <motion.div
                key={c.title}
                {...fadeUp(0.4 + i * 0.07)}
                className="p-6 rounded-2xl border bg-bg-surface flex flex-col gap-4"
                style={{ borderColor: `${c.color}33` }}
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full" style={{ background: c.color }} />
                    <p className="text-[14px] font-bold text-text-primary">{c.title}</p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div>
                      <p className="text-[10px] tracking-wider uppercase mb-1" style={{ color: '#FF453A', opacity: 0.7 }}>Problem</p>
                      <p className="text-[12px] text-text-muted leading-relaxed">{c.problem}</p>
                    </div>
                    <div>
                      <p className="text-[10px] tracking-wider uppercase mb-1" style={{ color: '#30D158', opacity: 0.7 }}>Solution</p>
                      <p className="text-[12px] text-text-muted leading-relaxed">{c.solution}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
