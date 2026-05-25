'use client'

import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 24 },
  whileInView:{ opacity: 1, y: 0 },
  viewport:   { once: true },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
})

const components = [
  {
    id: 'chair',
    number: '01',
    title: 'Smart Chair',
    subtitle: 'ESP32 + 4× FSR Pressure Sensors',
    color: '#30D158',
    description:
      'The ESP32 microcontroller reads four Force-Sensitive Resistors 10 times per second, classifying sitting posture into five categories: correct, forward, backward, left-lean, and right-lean. Detected passively — no user action required.',
    specs: ['10 Hz sensor sampling', '12-bit ADC (0–4095)', '5-class posture model', 'WiFi + BLE dual-mode', 'Battery voltage monitor'],
    why: 'Provides objective, ground-truth pressure data that no camera-only system can replicate. The user cannot unconsciously fake good posture on the sensors.',
  },
  {
    id: 'camera',
    number: '02',
    title: 'AI Camera Desktop',
    subtitle: 'Python + MediaPipe + OpenCV',
    color: '#5E5CE6',
    description:
      'A standalone Windows desktop app runs two neural networks simultaneously: MediaPipe Face Mesh (478 landmarks) for attention and drowsiness detection, and MediaPipe Pose (33 landmarks) for upper-body posture estimation. All inference runs locally — no video ever leaves the device.',
    specs: ['478 face mesh landmarks', '33 body pose landmarks', 'EAR drowsiness algorithm', '8 FPS analysis rate', '4-signal attention score', 'Privacy-first: local inference'],
    why: 'Captures cognitive state (drowsiness, attention) that physical sensors cannot. Local inference protects user privacy — raw video never reaches the server.',
  },
  {
    id: 'server',
    number: '03',
    title: 'Cloud Server',
    subtitle: 'Node.js + Express 5 + WebSocket Hub',
    color: '#0A84FF',
    description:
      'A cloud-hosted hub behind Cloudflare. Routes WebSocket frames between all devices in real time, stores session history in Turso (SQLite) and user accounts in MongoDB Atlas, and proxies the Groq AI coach (LLaMA 3.3 70B) for contextual health coaching.',
    specs: ['WebSocket hub routing', 'JWT authentication', 'Cloud deployment', 'Cloudflare TLS/CDN', 'MongoDB Atlas + Turso', 'Groq AI (LLaMA 3.3 70B)'],
    why: 'A central hub solves the fundamental IoT problem: mobile phones change IP addresses constantly. Every device connects outward to one stable address. The hub provides broadcasting, session persistence, and AI proxy.',
  },
  {
    id: 'mobile',
    number: '04',
    title: 'Mobile App',
    subtitle: 'React Native + Expo SDK 54',
    color: '#FF9F0A',
    description:
      'The user-facing application. Displays live posture status, pressure visualization, attention score, and AI coaching in real time via WebSocket. Handles BLE provisioning for WiFi setup, QR-based camera pairing, and stores session history with offline queue fallback.',
    specs: ['React Native (Android)', 'Live WebSocket data', 'BLE WiFi provisioning', 'QR camera pairing', 'Offline session queue', 'Arabic + English (RTL)'],
    why: 'Single codebase covers both iOS and Android. React Native\'s concurrent mode handles 10 Hz sensor updates without UI jank. Expo managed workflow eliminates build complexity.',
  },
]

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="section-padding relative">

      <div className="glow-orb w-[600px] h-[600px] right-0 top-1/2 -translate-y-1/2 opacity-15"
        style={{ background: 'radial-gradient(circle, #0A84FF12 0%, transparent 70%)' }} />

      <div className="container-site">

        <div className="max-w-3xl mb-20">
          <motion.p {...fadeUp(0)} className="section-label mb-4">
            02 — The Solution
          </motion.p>
          <motion.h2 {...fadeUp(0.1)} className="text-display-xl font-black text-text-primary mb-6">
            Four components.{' '}
            <span className="text-gradient">One unified ecosystem.</span>
          </motion.h2>
          <motion.p {...fadeUp(0.2)} className="text-[17px] text-text-secondary leading-relaxed" style={{ fontWeight: 350 }}>
            Each component handles what it does best. Pressure sensors detect sitting position.
            Computer vision captures cognitive state. The cloud routes everything. The mobile app brings it together.
            No single component alone is sufficient — together they form a complete picture.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {components.map((c, i) => (
            <motion.div
              key={c.id}
              {...fadeUp(i * 0.1)}
              className="card-glass-hover p-7 flex flex-col gap-5"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <span className="text-[11px] font-bold tracking-widest pt-1" style={{ color: c.color, opacity: 0.6 }}>
                    {c.number}
                  </span>
                  <div>
                    <h3 className="text-[18px] font-bold text-text-primary">{c.title}</h3>
                    <p className="text-[12px] text-text-muted mt-0.5">{c.subtitle}</p>
                  </div>
                </div>
                <div className="w-2 h-2 rounded-full flex-shrink-0 mt-1.5 animate-pulse-slow"
                  style={{ background: c.color, boxShadow: `0 0 8px ${c.color}60` }} />
              </div>

              {/* Description */}
              <p className="text-[14px] text-text-secondary leading-relaxed">{c.description}</p>

              {/* Specs */}
              <div className="flex flex-wrap gap-2">
                {c.specs.map(s => (
                  <span key={s} className="badge-tech">{s}</span>
                ))}
              </div>

              {/* Why */}
              <div className="pt-4 border-t border-bg-border">
                <p className="text-[11px] tracking-wider uppercase mb-2" style={{ color: c.color, opacity: 0.6 }}>Why this approach</p>
                <p className="text-[13px] text-text-muted leading-relaxed">{c.why}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Multi-modal fusion insight */}
        <motion.div
          {...fadeUp(0.5)}
          className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {[
            { label: 'Chair alone',  limit: 'Cannot detect drowsiness or attention. Can\'t tell if user is stressed.', color: '#FF453A' },
            { label: 'Camera alone', limit: 'No pressure data. Fails in low light. Can\'t detect weight distribution.', color: '#FF453A' },
            { label: 'Fusion',       limit: 'Pressure + vision → complete health model. Detects states neither sensor can alone.', color: '#30D158', positive: true },
          ].map(f => (
            <div key={f.label} className="p-5 rounded-2xl border"
              style={{
                borderColor: `${f.color}33`,
                background: `${f.color}08`,
              }}>
              <p className="text-[12px] font-bold mb-2" style={{ color: f.color }}>{f.label}</p>
              <p className="text-[12px] text-text-muted leading-relaxed">{f.limit}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
