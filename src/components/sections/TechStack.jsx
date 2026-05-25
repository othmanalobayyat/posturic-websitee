'use client'

import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 24 },
  whileInView:{ opacity: 1, y: 0 },
  viewport:   { once: true },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
})

const stacks = [
  {
    layer: 'Hardware',
    color: '#30D158',
    techs: [
      { name: 'ESP32',        role: 'Dual-core microcontroller · WiFi + BLE' },
      { name: 'FSR Sensors',  role: '4× Force-Sensitive Resistors (12-bit ADC)' },
      { name: 'Arduino C++',  role: 'Firmware · WebSocket + NVS + BLE GATT' },
      { name: 'ArduinoWebsockets', role: 'WebSocket client library for ESP32' },
    ],
  },
  {
    layer: 'AI / Computer Vision',
    color: '#5E5CE6',
    techs: [
      { name: 'Python 3',     role: 'Camera desktop app runtime' },
      { name: 'MediaPipe',    role: 'Face Mesh (478 pts) + Pose (33 pts) · Google ML' },
      { name: 'OpenCV',       role: 'Frame capture · BGR→RGB · image processing' },
      { name: 'PyQt5',        role: 'Native Windows GUI for camera app' },
      { name: 'NumPy',        role: 'Vector math for EAR, gaze, and landmark analysis' },
    ],
  },
  {
    layer: 'Backend Server',
    color: '#0A84FF',
    techs: [
      { name: 'Node.js ≥20',  role: 'Server runtime (engine-strict enforced)' },
      { name: 'Express 5',    role: 'REST API framework · async/await native' },
      { name: 'ws library',   role: 'WebSocket server · hub-and-spoke routing' },
      { name: 'jsonwebtoken', role: 'JWT generation + verification (HS256)' },
      { name: 'bcrypt',       role: 'Password hashing (salt rounds = 10)' },
      { name: 'Groq API',     role: 'LLaMA 3.3 70B — AI health coach proxy' },
    ],
  },
  {
    layer: 'Databases',
    color: '#32ADE6',
    techs: [
      { name: 'MongoDB Atlas', role: 'Users · auth · profiles · Mongoose ODM' },
      { name: 'Turso (libsql)', role: 'Sessions · daily stats · cloud SQLite' },
      { name: 'AsyncStorage', role: 'Client-side offline queue (PENDING_SESSIONS)' },
    ],
  },
  {
    layer: 'Mobile App',
    color: '#FF9F0A',
    techs: [
      { name: 'React Native', role: 'Single codebase for Android (+ iOS ready)' },
      { name: 'Expo SDK 54',  role: 'Managed workflow · build environment' },
      { name: 'React 19',     role: 'Concurrent mode · improved hook scheduling' },
      { name: 'react-native-ble-plx', role: 'BLE GATT characteristic read/write' },
      { name: 'expo-notifications', role: 'Local push notifications · foreground + background' },
      { name: 'react-native-chart-kit', role: 'Historical performance line charts' },
      { name: 'Cloudinary',   role: 'Avatar upload CDN (direct unsigned upload)' },
    ],
  },
  {
    layer: 'Infrastructure',
    color: '#BF5AF2',
    techs: [
      { name: 'Railway',      role: 'Cloud hosting · containerized Node.js' },
      { name: 'Cloudflare',   role: 'TLS termination · DNS · DDoS protection' },
      { name: 'Let\'s Encrypt', role: 'Auto-renewing SSL certificate (posturic.online)' },
    ],
  },
]

const metrics = [
  { value: '5',   label: 'Programming languages', sub: 'JavaScript, Python, C++, HTML/CSS, SQL' },
  { value: '20+', label: 'Libraries and frameworks', sub: 'across all components' },
  { value: '3',   label: 'Database engines', sub: 'MongoDB, Turso SQLite, AsyncStorage' },
  { value: '2',   label: 'Neural networks', sub: 'MediaPipe Face Mesh + Pose, running concurrently' },
]

export default function TechStack() {
  return (
    <section id="stack" className="section-padding relative">

      <div className="glow-orb w-[500px] h-[500px] left-1/2 -translate-x-1/2 bottom-0 opacity-10"
        style={{ background: 'radial-gradient(circle, #5E5CE60A 0%, transparent 70%)' }} />

      <div className="container-site">

        <div className="max-w-3xl mb-20">
          <motion.p {...fadeUp(0)} className="section-label mb-4">
            09 — Technology Stack
          </motion.p>
          <motion.h2 {...fadeUp(0.1)} className="text-display-xl font-black text-text-primary mb-6">
            Right tool.{' '}
            <span className="text-gradient">Right layer.</span>
          </motion.h2>
          <motion.p {...fadeUp(0.2)} className="text-[17px] text-text-secondary leading-relaxed" style={{ fontWeight: 350 }}>
            Every technology was chosen for a specific reason — not for popularity. Each decision is
            documented in the architecture docs with the alternative that was rejected and why.
          </motion.p>
        </div>

        {/* Stack metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {metrics.map((m, i) => (
            <motion.div key={m.label} {...fadeUp(i * 0.07)} className="card-glass p-5 text-center">
              <span className="text-3xl font-black text-gradient">{m.value}</span>
              <p className="text-[13px] font-medium text-text-primary mt-2">{m.label}</p>
              <p className="text-[11px] text-text-muted mt-1">{m.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Stack layers */}
        <div className="flex flex-col gap-6">
          {stacks.map((s, si) => (
            <motion.div
              key={s.layer}
              {...fadeUp(0.1 + si * 0.07)}
              className="rounded-2xl border border-bg-border overflow-hidden"
              style={{ background: '#060D1E' }}
            >
              {/* Layer header */}
              <div className="flex items-center gap-3 px-6 py-4 border-b border-bg-border">
                <div className="w-2 h-2 rounded-full" style={{ background: s.color }} />
                <span className="text-[12px] font-bold tracking-widest uppercase" style={{ color: s.color }}>
                  {s.layer}
                </span>
              </div>

              {/* Techs grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0">
                {s.techs.map((t, ti) => (
                  <div
                    key={t.name}
                    className="px-6 py-4 border-b sm:border-r border-bg-border last:border-b-0"
                    style={{ borderColor: '#1C2E4A' }}
                  >
                    <p className="text-[13px] font-semibold text-text-primary mb-1">{t.name}</p>
                    <p className="text-[11px] text-text-muted leading-relaxed">{t.role}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
