'use client'

import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 24 },
  whileInView:{ opacity: 1, y: 0 },
  viewport:   { once: true },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
})

const decisions = [
  {
    title: 'Hub-and-spoke over P2P',
    detail: 'Mobile phones change IP constantly. There\'s no stable address for the ESP32 to target. A central server solves routing, broadcasting, session persistence, and AI proxying — in one place.',
  },
  {
    title: 'WebSocket over HTTP polling',
    detail: '3,600 HTTP requests per user per hour vs. 1 persistent connection. WebSocket delivers sensor frames within milliseconds; polling introduces up to 1-second delays with 50× more CPU load.',
  },
  {
    title: 'WSS over WS',
    detail: 'JWT tokens and personal health data travel over the connection. Plaintext WS would expose both to any WiFi observer. WSS encrypts everything end-to-end using the same technology as banking sites.',
  },
  {
    title: 'Local AI inference on camera',
    detail: 'Raw video never leaves the device. MediaPipe runs entirely on the Windows PC CPU. Only the analyzed results (labels, scores) are transmitted — ~150 bytes/second instead of a raw video stream.',
  },
  {
    title: 'BLE for chair provisioning',
    detail: 'When a chair is factory-fresh, it has no WiFi credentials. It can\'t connect to the internet to receive them. BLE is the only channel available before WiFi — it bootstraps the network configuration.',
  },
  {
    title: 'Turso + MongoDB dual DB',
    detail: 'MongoDB Atlas handles user accounts (schemaful, relationship-rich). Turso (libsql, SQLite) handles high-write session data (append-heavy, no joins). Right tool for each data shape.',
  },
]

export default function Architecture() {
  return (
    <section id="architecture" className="section-padding relative overflow-hidden">

      {/* Background glow */}
      <div className="glow-orb w-[800px] h-[800px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 opacity-8"
        style={{ background: 'radial-gradient(circle, #0A84FF0A 0%, transparent 70%)' }} />

      <div className="container-site">

        {/* Header */}
        <div className="max-w-3xl mb-20">
          <motion.p {...fadeUp(0)} className="section-label mb-4">
            04 — Architecture
          </motion.p>
          <motion.h2 {...fadeUp(0.1)} className="text-display-xl font-black text-text-primary mb-6">
            Hub-and-spoke.{' '}
            <span className="text-gradient">Every decision explained.</span>
          </motion.h2>
          <motion.p {...fadeUp(0.2)} className="text-[17px] text-text-secondary leading-relaxed" style={{ fontWeight: 350 }}>
            The architecture mirrors how production IoT systems like Amazon Alexa and Google Nest operate.
            Every decision has a technical reason — not just a preference.
          </motion.p>
        </div>

        {/* Architecture diagram */}
        <motion.div {...fadeUp(0.2)} className="mb-16">
          <ArchDiagram />
        </motion.div>

        {/* Data flow timeline */}
        <motion.div {...fadeUp(0.3)} className="mb-16">
          <p className="section-label mb-8">Real-time data flow · Sensor to notification</p>
          <DataFlowTimeline />
        </motion.div>

        {/* Architecture decisions */}
        <div className="mb-4">
          <motion.p {...fadeUp(0)} className="section-label mb-8">Why each decision was made</motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {decisions.map((d, i) => (
              <motion.div
                key={d.title}
                {...fadeUp(i * 0.07)}
                className="p-6 rounded-2xl border border-bg-border bg-bg-surface flex gap-4"
              >
                <div className="w-1 rounded-full flex-shrink-0"
                  style={{ background: 'linear-gradient(180deg, #0A84FF, #5E5CE6)', minHeight: '100%' }} />
                <div>
                  <p className="text-[14px] font-semibold text-text-primary mb-2">{d.title}</p>
                  <p className="text-[13px] text-text-muted leading-relaxed">{d.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ArchDiagram() {
  return (
    <div className="rounded-3xl border border-bg-border overflow-hidden"
      style={{ background: '#060D1E' }}>

      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-3 border-b border-bg-border">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-brand-red" />
          <div className="w-3 h-3 rounded-full bg-brand-amber" />
          <div className="w-3 h-3 rounded-full bg-brand-green" />
        </div>
        <span className="text-[11px] text-text-muted font-mono">posturic-system-architecture.svg</span>
        <span className="badge-live flex items-center gap-1"><span className="live-dot" />Production</span>
      </div>

      {/* Diagram body */}
      <div className="relative p-8 overflow-x-auto">
        <svg viewBox="0 0 780 420" className="w-full max-w-3xl mx-auto" style={{ minWidth: '580px' }}>

          {/* Cloudflare layer */}
          <rect x="260" y="10" width="260" height="42" rx="8" fill="#FF9F0A14" stroke="#FF9F0A33" strokeWidth="1"/>
          <text x="390" y="27" textAnchor="middle" fill="#FF9F0A" fontSize="10" fontFamily="monospace" fontWeight="600">☁ CLOUDFLARE</text>
          <text x="390" y="42" textAnchor="middle" fill="#FF9F0A88" fontSize="8" fontFamily="monospace">TLS termination · DNS · DDoS protection</text>

          {/* Arrow down to Railway */}
          <path d="M390 52 L390 78" stroke="#FF9F0A44" strokeWidth="1" strokeDasharray="4 3"/>

          {/* Railway/Server box */}
          <rect x="220" y="78" width="340" height="90" rx="10" fill="#0A84FF08" stroke="#0A84FF44" strokeWidth="1.5"/>
          <text x="390" y="98" textAnchor="middle" fill="#0A84FF" fontSize="11" fontFamily="monospace" fontWeight="700">SMARTCHAIRSERVER — RAILWAY</text>
          <text x="310" y="116" textAnchor="middle" fill="#8B9EC7" fontSize="9" fontFamily="monospace">WebSocket Hub</text>
          <text x="390" y="116" textAnchor="middle" fill="#4A5D7E" fontSize="9" fontFamily="monospace">·</text>
          <text x="460" y="116" textAnchor="middle" fill="#8B9EC7" fontSize="9" fontFamily="monospace">REST API (Express 5)</text>
          <text x="310" y="132" textAnchor="middle" fill="#8B9EC7" fontSize="9" fontFamily="monospace">JWT Auth</text>
          <text x="390" y="132" textAnchor="middle" fill="#4A5D7E" fontSize="9" fontFamily="monospace">·</text>
          <text x="460" y="132" textAnchor="middle" fill="#8B9EC7" fontSize="9" fontFamily="monospace">AI Proxy (Groq)</text>
          <text x="390" y="152" textAnchor="middle" fill="#4A5D7E" fontSize="9" fontFamily="monospace">Node.js ≥20  ·  ws library  ·  bcrypt  ·  jsonwebtoken</text>

          {/* DB boxes below server */}
          <path d="M300 168 L250 210" stroke="#32ADE644" strokeWidth="1" strokeDasharray="4 3"/>
          <path d="M480 168 L530 210" stroke="#32ADE644" strokeWidth="1" strokeDasharray="4 3"/>

          <rect x="180" y="210" width="140" height="48" rx="8" fill="#32ADE608" stroke="#32ADE633" strokeWidth="1"/>
          <text x="250" y="230" textAnchor="middle" fill="#32ADE6" fontSize="9" fontFamily="monospace" fontWeight="600">MongoDB Atlas</text>
          <text x="250" y="245" textAnchor="middle" fill="#32ADE688" fontSize="8" fontFamily="monospace">users · auth · profiles</text>

          <rect x="460" y="210" width="140" height="48" rx="8" fill="#32ADE608" stroke="#32ADE633" strokeWidth="1"/>
          <text x="530" y="230" textAnchor="middle" fill="#32ADE6" fontSize="9" fontFamily="monospace" fontWeight="600">Turso (libsql)</text>
          <text x="530" y="245" textAnchor="middle" fill="#32ADE688" fontSize="8" fontFamily="monospace">sessions · daily stats</text>

          {/* ESP32 Chair */}
          <rect x="20" y="168" width="150" height="70" rx="8" fill="#30D15808" stroke="#30D15833" strokeWidth="1"/>
          <text x="95" y="188" textAnchor="middle" fill="#30D158" fontSize="9" fontFamily="monospace" fontWeight="700">ESP32 CHAIR</text>
          <text x="95" y="204" textAnchor="middle" fill="#8B9EC7" fontSize="8" fontFamily="monospace">4× FSR sensors</text>
          <text x="95" y="218" textAnchor="middle" fill="#8B9EC7" fontSize="8" fontFamily="monospace">posture classifier</text>
          <text x="95" y="232" textAnchor="middle" fill="#4A5D7E" fontSize="8" fontFamily="monospace">WiFi + BLE</text>

          {/* Camera Desktop */}
          <rect x="20" y="280" width="150" height="70" rx="8" fill="#5E5CE608" stroke="#5E5CE633" strokeWidth="1"/>
          <text x="95" y="300" textAnchor="middle" fill="#5E5CE6" fontSize="9" fontFamily="monospace" fontWeight="700">CAMERA DESKTOP</text>
          <text x="95" y="316" textAnchor="middle" fill="#8B9EC7" fontSize="8" fontFamily="monospace">Python + MediaPipe</text>
          <text x="95" y="330" textAnchor="middle" fill="#8B9EC7" fontSize="8" fontFamily="monospace">Face Mesh + Pose</text>
          <text x="95" y="344" textAnchor="middle" fill="#4A5D7E" fontSize="8" fontFamily="monospace">local inference</text>

          {/* Mobile App */}
          <rect x="610" y="168" width="150" height="90" rx="8" fill="#FF9F0A08" stroke="#FF9F0A33" strokeWidth="1"/>
          <text x="685" y="188" textAnchor="middle" fill="#FF9F0A" fontSize="9" fontFamily="monospace" fontWeight="700">MOBILE APP</text>
          <text x="685" y="204" textAnchor="middle" fill="#8B9EC7" fontSize="8" fontFamily="monospace">React Native / Expo</text>
          <text x="685" y="218" textAnchor="middle" fill="#8B9EC7" fontSize="8" fontFamily="monospace">live dashboard</text>
          <text x="685" y="232" textAnchor="middle" fill="#8B9EC7" fontSize="8" fontFamily="monospace">AI coach</text>
          <text x="685" y="246" textAnchor="middle" fill="#4A5D7E" fontSize="8" fontFamily="monospace">offline queue</text>

          {/* Connection lines with labels */}
          {/* Chair → Server */}
          <path d="M170 195 L220 150" stroke="#30D158" strokeWidth="1.5" fill="none"/>
          <text x="175" y="168" fill="#30D15888" fontSize="8" fontFamily="monospace">WS</text>

          {/* Camera → Server */}
          <path d="M170 310 L220 160" stroke="#5E5CE6" strokeWidth="1.5" fill="none"/>
          <text x="165" y="248" fill="#5E5CE688" fontSize="8" fontFamily="monospace">WSS</text>

          {/* Server → Mobile */}
          <path d="M560 150 L610 195" stroke="#FF9F0A" strokeWidth="1.5" fill="none"/>
          <text x="572" y="168" fill="#FF9F0A88" fontSize="8" fontFamily="monospace">WSS</text>

          {/* BLE arrow (phone to chair) - dashed */}
          <path d="M610 250 Q390 380 170 230" stroke="#BF5AF2" strokeWidth="1" strokeDasharray="6 4" fill="none"/>
          <text x="390" y="390" textAnchor="middle" fill="#BF5AF244" fontSize="8" fontFamily="monospace">BLE (provisioning only)</text>
        </svg>
      </div>
    </div>
  )
}

function DataFlowTimeline() {
  const steps = [
    { ms: '0ms',     actor: 'ESP32',     action: 'Reads 4 FSR sensors → classifies posture → packs JSON frame',    color: '#30D158' },
    { ms: '~5ms',    actor: 'Server',    action: 'Receives WebSocket frame → identifies user → routes to mobile',    color: '#0A84FF' },
    { ms: '~200ms',  actor: 'Mobile',    action: 'Receives JSON → updates pressure visualization + posture label',   color: '#FF9F0A' },
    { ms: '~220ms',  actor: 'Mobile',    action: 'Checks alert conditions → fires notification if threshold crossed', color: '#FF9F0A' },
    { ms: '~500ms',  actor: 'Camera',    action: 'Sends camera_frame → attention/drowsiness updates on mobile',      color: '#5E5CE6' },
    { ms: 'Session', actor: 'Mobile',    action: 'Chair idle detected → endSession() → POST to Turso via Railway',   color: '#32ADE6' },
  ]
  return (
    <div className="rounded-2xl border border-bg-border overflow-hidden" style={{ background: '#060D1E' }}>
      {steps.map((s, i) => (
        <div key={i} className="flex items-start gap-4 px-6 py-4 border-b border-bg-border last:border-b-0 hover:bg-bg-surface transition-colors">
          <span className="font-mono text-[11px] w-16 flex-shrink-0 pt-0.5" style={{ color: s.color }}>{s.ms}</span>
          <span className="text-[11px] font-semibold w-16 flex-shrink-0 pt-0.5"
            style={{ color: s.color, opacity: 0.7 }}>{s.actor}</span>
          <span className="text-[13px] text-text-secondary">{s.action}</span>
        </div>
      ))}
    </div>
  )
}
