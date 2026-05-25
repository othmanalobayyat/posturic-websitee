'use client'

import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 24 },
  whileInView:{ opacity: 1, y: 0 },
  viewport:   { once: true },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
})

const roadmap = [
  {
    horizon: 'Near-term',
    timeframe: '3–6 months',
    color: '#30D158',
    items: [
      { title: 'Remote push notifications', detail: 'FCM integration for background alerts when the app is closed but the chair is active' },
      { title: 'Calibration wizard', detail: 'Per-user pressure baseline calibration — different body weights create different FSR readings' },
      { title: 'Weekly performance reports', detail: 'Automated email/notification summary with trend analysis and personalized coaching tips' },
      { title: 'Multiple chair support', detail: 'Register multiple chairs per account — home office + work office' },
    ],
  },
  {
    horizon: 'Medium-term',
    timeframe: '6–12 months',
    color: '#0A84FF',
    items: [
      { title: 'BLE bonding (security)', detail: 'Encrypt WiFi credential transmission via GATT bonding for enterprise deployments' },
      { title: 'AI-personalized coaching', detail: 'LLM generates coaching based on historical patterns: "You lean forward after 30 minutes — adjust session reminders"' },
      { title: 'Smartwatch heart rate fusion', detail: 'Cross-reference chair posture + camera attention + heart rate for stress state detection' },
      { title: 'Team ergonomics dashboard', detail: 'Corporate web dashboard with aggregate (anonymized) team posture health scores' },
    ],
  },
  {
    horizon: 'Long-term',
    timeframe: '12+ months',
    color: '#BF5AF2',
    items: [
      { title: 'On-device AI inference', detail: 'MediaPipe tasks SDK on mobile — eliminates desktop camera dependency for personal users' },
      { title: 'Clinical export', detail: 'PDF session data export formatted for physiotherapy consultations' },
      { title: 'RSI risk modeling', detail: 'Wrist accelerometer + posture + session duration → repetitive strain injury risk score' },
      { title: 'Edge AI posture model', detail: 'Trained personal posture model runs on-device with user-specific data for higher accuracy' },
    ],
  },
]

const uniqueness = [
  {
    title: 'Multi-modal sensor fusion',
    detail: 'Most solutions use EITHER pressure sensors OR a camera. Posturic fuses both, enabling correlations that neither sensor alone can produce — like detecting that forward lean predicts drowsiness 15 minutes later.',
    icon: '⊕',
    color: '#0A84FF',
  },
  {
    title: 'Non-intrusive passive monitoring',
    detail: 'No app to open before sitting. No button to start a session. Presence is detected automatically, sessions begin and end without user action. The system is invisible until it has something actionable to say.',
    icon: '◎',
    color: '#30D158',
  },
  {
    title: 'Real production architecture',
    detail: 'Not a mockup. Not simulated data. A real signed APK, a real cloud server with TLS, real sensor hardware, real WebSocket sessions. End-to-end integration at this level is genuinely rare in graduation projects.',
    icon: '△',
    color: '#FF9F0A',
  },
  {
    title: 'Privacy-first by design',
    detail: 'Raw video never leaves the device. Only analyzed labels (attention: 82, drowsy: false) travel over the network. Privacy is in the architecture, not in the privacy policy.',
    icon: '◻',
    color: '#5E5CE6',
  },
]

export default function FutureVision() {
  return (
    <section id="future" className="section-padding relative overflow-hidden">

      <div className="glow-orb w-[600px] h-[600px] right-0 bottom-0 opacity-10"
        style={{ background: 'radial-gradient(circle, #BF5AF210 0%, transparent 70%)' }} />

      <div className="container-site">

        {/* What makes it unique */}
        <div className="mb-24">
          <div className="max-w-3xl mb-14">
            <motion.p {...fadeUp(0)} className="section-label mb-4">
              10 — What Makes This Different
            </motion.p>
            <motion.h2 {...fadeUp(0.1)} className="text-display-xl font-black text-text-primary mb-6">
              Not a university assignment.{' '}
              <span className="text-gradient">A real system.</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {uniqueness.map((u, i) => (
              <motion.div
                key={u.title}
                {...fadeUp(i * 0.1)}
                className="p-7 rounded-3xl border border-bg-border bg-bg-surface relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-40 h-40 opacity-5 rounded-full"
                  style={{ background: u.color, filter: 'blur(40px)', transform: 'translate(30%, -30%)' }} />
                <div className="relative">
                  <div className="text-2xl mb-4" style={{ color: u.color }}>{u.icon}</div>
                  <h3 className="text-[17px] font-bold text-text-primary mb-3">{u.title}</h3>
                  <p className="text-[13px] text-text-muted leading-relaxed">{u.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Roadmap */}
        <div>
          <div className="max-w-3xl mb-14">
            <motion.p {...fadeUp(0)} className="section-label mb-4">
              11 — Future Roadmap
            </motion.p>
            <motion.h2 {...fadeUp(0.1)} className="text-display-xl font-black text-text-primary mb-6">
              This is version one.{' '}
              <span className="text-gradient">The foundation is built.</span>
            </motion.h2>
            <motion.p {...fadeUp(0.2)} className="text-[17px] text-text-secondary leading-relaxed" style={{ fontWeight: 350 }}>
              The architecture was designed to scale horizontally. Every future feature
              slots naturally into the existing hub-and-spoke model.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {roadmap.map((r, ri) => (
              <motion.div key={r.horizon} {...fadeUp(ri * 0.1)} className="flex flex-col gap-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full" style={{ background: r.color }} />
                  <div>
                    <p className="text-[14px] font-bold" style={{ color: r.color }}>{r.horizon}</p>
                    <p className="text-[11px] text-text-muted">{r.timeframe}</p>
                  </div>
                </div>
                {r.items.map(item => (
                  <div key={item.title} className="p-4 rounded-2xl border border-bg-border bg-bg-surface">
                    <p className="text-[12px] font-semibold text-text-primary mb-1.5">{item.title}</p>
                    <p className="text-[11px] text-text-muted leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
