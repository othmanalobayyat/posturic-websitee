'use client'

import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 24 },
  whileInView:{ opacity: 1, y: 0 },
  viewport:   { once: true },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
})

const features = [
  {
    id: 'posture',
    title: 'Posture Monitoring',
    color: '#30D158',
    icon: '⬛',
    live: true,
    description: 'Four FSR sensors classify your sitting posture into 5 states in real time. A posture score is computed as the fraction of time spent in correct posture, frame by frame.',
    detail: 'Score = (correct frames ÷ total frames) × 100',
    tags: ['ESP32', '10 Hz', '5 classes', 'Pressure map'],
    visual: PostureVisual,
  },
  {
    id: 'attention',
    title: 'Attention Tracking',
    color: '#0A84FF',
    live: true,
    description: 'A weighted 4-signal formula computes a 0–100 attention score every second: gaze direction (40%), head stability (30%), eyes open (20%), and face presence (10%).',
    detail: 'score = gaze×0.4 + stability×0.3 + eyes×0.2 + present×0.1',
    tags: ['MediaPipe', 'Face Mesh', '478 landmarks', '1 Hz'],
    visual: AttentionVisual,
  },
  {
    id: 'drowsiness',
    title: 'Drowsiness Detection',
    color: '#FF9F0A',
    live: true,
    description: 'Eye Aspect Ratio (EAR) measures the geometric ratio of eyelid separation. Sustained EAR < 0.25 for more than 2 seconds triggers a drowsiness alert — distinguishing drowsy blinks from normal ones.',
    detail: 'EAR = (‖p2-p6‖ + ‖p3-p5‖) / (2×‖p1-p4‖)',
    tags: ['EAR algorithm', 'Soukupová & Čech', '2s threshold', 'Instant alert'],
    visual: DrowsinessVisual,
  },
  {
    id: 'coach',
    title: 'AI Health Coach',
    color: '#5E5CE6',
    live: false,
    description: 'A Groq-powered LLaMA 3.3 70B chatbot with full context awareness: it knows your current posture state, session duration, drowsiness level, and historical scores — providing genuinely personalized advice.',
    detail: 'Model: llama-3.3-70b-versatile via Groq API',
    tags: ['LLaMA 3.3 70B', 'Groq API', 'Context-aware', 'Arabic + English'],
    visual: CoachVisual,
  },
  {
    id: 'sessions',
    title: 'Session Analytics',
    color: '#32ADE6',
    live: false,
    description: 'Every sitting session is saved with start/end time, duration, posture score, and alert count. Daily summaries and historical charts reveal long-term behavior trends.',
    detail: 'Stored in Turso (SQLite) cloud via libsql',
    tags: ['Turso SQLite', 'Line charts', 'Session history', 'Daily score'],
    visual: AnalyticsVisual,
  },
  {
    id: 'realtime',
    title: 'Realtime Sync',
    color: '#BF5AF2',
    live: true,
    description: 'WebSocket connections deliver data within 200–500ms from sensor to notification. A keepalive ping every 25 seconds maintains connections through Cloudflare\'s 60-second idle timeout. Automatic reconnect with 6-second backoff.',
    detail: 'WSS on port 443 · Cloudflare TLS termination',
    tags: ['< 500ms latency', 'Auto-reconnect', 'WSS / TLS', 'Hub-and-spoke'],
    visual: RealtimeVisual,
  },
]

export default function Features() {
  return (
    <section id="features" className="section-padding relative">

      <div className="glow-orb w-[500px] h-[500px] left-1/2 -translate-x-1/2 top-0 opacity-10"
        style={{ background: 'radial-gradient(circle, #5E5CE612 0%, transparent 70%)' }} />

      <div className="container-site">

        <div className="max-w-3xl mb-20">
          <motion.p {...fadeUp(0)} className="section-label mb-4">
            03 — Live Features
          </motion.p>
          <motion.h2 {...fadeUp(0.1)} className="text-display-xl font-black text-text-primary mb-6">
            Six intelligence layers,{' '}
            <span className="text-gradient">running every second.</span>
          </motion.h2>
          <motion.p {...fadeUp(0.2)} className="text-[17px] text-text-secondary leading-relaxed" style={{ fontWeight: 350 }}>
            Each layer operates independently and continuously. Together they form a complete
            ergonomic monitoring system with no gaps in coverage.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {features.map((f, i) => {
            const Visual = f.visual
            return (
              <motion.div
                key={f.id}
                {...fadeUp(i * 0.07)}
                className="card-glass-hover p-6 flex flex-col gap-5"
              >
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center"
                      style={{ background: `${f.color}14`, border: `1px solid ${f.color}33` }}>
                      <div className="w-3 h-3 rounded-sm" style={{ background: f.color }} />
                    </div>
                    <h3 className="text-[15px] font-bold text-text-primary">{f.title}</h3>
                  </div>
                  {f.live && (
                    <span className="badge-live flex items-center gap-1">
                      <span className="live-dot" />
                      Live
                    </span>
                  )}
                </div>

                {/* Visual */}
                <div className="rounded-2xl overflow-hidden" style={{ height: '90px', background: '#060D1E', border: '1px solid #1C2E4A40' }}>
                  <Visual color={f.color} />
                </div>

                {/* Description */}
                <p className="text-[13px] text-text-secondary leading-relaxed">{f.description}</p>

                {/* Technical detail */}
                <div className="px-3 py-2 rounded-lg" style={{ background: '#060D1E', border: '1px solid #1C2E4A40' }}>
                  <code className="text-[11px]" style={{ color: f.color, fontFamily: 'monospace' }}>{f.detail}</code>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {f.tags.map(t => (
                    <span key={t} className="badge-tech">{t}</span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ─── Mini-visualizations for each feature card ──────────── */

function PostureVisual({ color }) {
  const postures = ['Correct', 'Forward', 'Back', 'Left', 'Right']
  const scores = [0.9, 0.3, 0.6, 0.4, 0.7]
  return (
    <div className="h-full flex items-end justify-around px-4 pb-4 gap-2">
      {postures.map((p, i) => (
        <div key={p} className="flex flex-col items-center gap-1">
          <div className="w-6 rounded-t-sm transition-all duration-500"
            style={{ height: `${scores[i] * 52}px`, background: i === 0 ? color : '#1C2E4A' }} />
          <span className="text-[7px] text-text-muted">{p.slice(0,3)}</span>
        </div>
      ))}
    </div>
  )
}

function AttentionVisual({ color }) {
  const signals = [
    { label: 'Gaze', w: 0.40, val: 0.82 },
    { label: 'Head',  w: 0.30, val: 0.91 },
    { label: 'Eyes',  w: 0.20, val: 0.95 },
    { label: 'Face',  w: 0.10, val: 1.00 },
  ]
  const score = Math.round(signals.reduce((acc, s) => acc + s.w * s.val, 0) * 100)
  return (
    <div className="h-full flex items-center justify-between px-5">
      <div className="flex flex-col gap-1.5">
        {signals.map(s => (
          <div key={s.label} className="flex items-center gap-2">
            <span className="text-[9px] text-text-muted w-8">{s.label}</span>
            <div className="h-1 w-20 rounded-full bg-bg-raised overflow-hidden">
              <div className="h-full rounded-full" style={{ width: `${s.val * 100}%`, background: color }} />
            </div>
            <span className="text-[9px]" style={{ color }}>{Math.round(s.w * 100)}%</span>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center">
        <span className="text-3xl font-black" style={{ color }}>{score}</span>
        <span className="text-[9px] text-text-muted">/ 100</span>
      </div>
    </div>
  )
}

function DrowsinessVisual({ color }) {
  const earValues = [0.32, 0.30, 0.28, 0.18, 0.10, 0.08, 0.22, 0.29]
  const max = 0.40, threshold = 0.25
  return (
    <div className="h-full flex flex-col justify-between px-4 py-3">
      <div className="flex items-end gap-1" style={{ height: '50px' }}>
        {earValues.map((v, i) => (
          <div key={i} className="flex-1 rounded-sm transition-all"
            style={{
              height: `${(v / max) * 46}px`,
              background: v < threshold ? color : '#1C2E4A',
            }} />
        ))}
      </div>
      <div className="flex items-center justify-between">
        <span className="text-[9px] text-text-muted">EAR over time</span>
        <span className="text-[9px] font-semibold" style={{ color }}>threshold: 0.25</span>
      </div>
    </div>
  )
}

function CoachVisual({ color }) {
  return (
    <div className="h-full flex flex-col justify-center px-4 gap-2">
      <div className="flex gap-2">
        <div className="w-6 h-6 rounded-full flex-shrink-0" style={{ background: `${color}22`, border: `1px solid ${color}44` }}>
          <div className="w-full h-full rounded-full flex items-center justify-center text-[8px]">🤖</div>
        </div>
        <div className="flex-1 px-2.5 py-1.5 rounded-xl rounded-tl-sm text-[10px] text-text-secondary"
          style={{ background: '#111E35', border: '1px solid #1C2E4A' }}>
          You've been leaning forward for 8 minutes. Try this neck stretch...
        </div>
      </div>
      <div className="flex justify-end gap-2">
        <div className="px-2.5 py-1.5 rounded-xl rounded-tr-sm text-[10px] text-text-muted"
          style={{ background: '#0C1526', border: '1px solid #1C2E4A' }}>
          Show me the exercise
        </div>
      </div>
    </div>
  )
}

function AnalyticsVisual({ color }) {
  const days = [72, 85, 68, 90, 78, 88, 82]
  const max = 100
  return (
    <div className="h-full flex flex-col justify-between px-4 py-3">
      <div className="flex items-end gap-1.5" style={{ height: '50px' }}>
        {days.map((v, i) => (
          <div key={i} className="flex-1 rounded-t-sm"
            style={{ height: `${(v / max) * 46}px`, background: i === 6 ? color : `${color}44` }} />
        ))}
      </div>
      <div className="flex items-center justify-between">
        <span className="text-[9px] text-text-muted">7-day posture score</span>
        <span className="text-[9px] font-bold" style={{ color }}>↑ +10 pts</span>
      </div>
    </div>
  )
}

function RealtimeVisual({ color }) {
  return (
    <div className="h-full flex items-center justify-center px-4">
      <div className="flex items-center gap-2 flex-wrap justify-center">
        {['Chair', '→', 'Server', '→', 'Phone'].map((step, i) => (
          <span key={i} className={
            step === '→'
              ? 'text-[10px] text-text-muted animate-pulse'
              : 'text-[10px] font-medium px-2 py-0.5 rounded-md'
          }
            style={step !== '→' ? { background: `${color}14`, color, border: `1px solid ${color}33` } : {}}
          >
            {step}
          </span>
        ))}
        <span className="text-[10px] font-bold ml-2" style={{ color }}>~300ms</span>
      </div>
    </div>
  )
}
