'use client'

import { motion } from 'framer-motion'

const emerge = (delay = 0) => ({
  initial:  { opacity: 0, y: 16 },
  animate:  { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1], delay } },
})

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">

      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />

      {/* Ambient glow orbs */}
      <div className="glow-orb w-[700px] h-[700px] -top-60 left-1/2 -translate-x-1/2"
        style={{ background: 'radial-gradient(circle, #0A84FF14 0%, transparent 70%)' }} />
      <div className="glow-orb w-[400px] h-[400px] bottom-20 left-10 opacity-30"
        style={{ background: 'radial-gradient(circle, #5E5CE614 0%, transparent 70%)' }} />
      <div className="glow-orb w-[300px] h-[300px] top-40 right-10 opacity-20"
        style={{ background: 'radial-gradient(circle, #32ADE614 0%, transparent 70%)' }} />

      <div className="relative z-10 container-site flex flex-col items-center text-center gap-8">

        {/* Live badge */}
        <motion.div {...emerge(0.1)}>
          <span className="badge-live flex items-center gap-1.5">
            <span className="live-dot" />
            Live System — Real-time Sensor Fusion Active
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1 {...emerge(0.25)} className="max-w-4xl">
          <span className="block text-display-3xl font-black text-text-primary">
            Your workspace,
          </span>
          <span className="block text-display-3xl font-black">
            <span className="text-gradient">intelligently</span>{' '}
            <span className="text-text-primary">monitored.</span>
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          {...emerge(0.4)}
          className="text-[17px] md:text-xl text-text-secondary leading-relaxed max-w-[52ch]"
          style={{ fontWeight: 350 }}
        >
          Multi-modal sensor fusion across a smart pressure chair, AI camera vision, and mobile coaching —
          delivering real-time posture and attention monitoring, every second.
        </motion.p>

        {/* CTA buttons */}
        <motion.div {...emerge(0.55)} className="flex flex-wrap items-center justify-center gap-3">
          <a href="#download" className="btn-primary text-[14px]">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M8 1v9M4 7l4 4 4-4M2 13h12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Download APK
          </a>
          <a href="#download" className="btn-ghost text-[14px]">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <rect x="2" y="2" width="12" height="10" rx="2" stroke="currentColor" strokeWidth="1.4" />
              <path d="M5 14h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
            </svg>
            Download Camera App
          </a>
          <a href="#architecture" className="btn-ghost text-[14px]">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <circle cx="3" cy="8" r="1.5" stroke="currentColor" strokeWidth="1.4"/>
              <circle cx="13" cy="3" r="1.5" stroke="currentColor" strokeWidth="1.4"/>
              <circle cx="13" cy="13" r="1.5" stroke="currentColor" strokeWidth="1.4"/>
              <path d="M4.5 8h4M11.5 3H9a1 1 0 00-1 1v8a1 1 0 001 1h2.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
            </svg>
            View Architecture
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          {...emerge(0.7)}
          className="mt-6 flex flex-wrap items-center justify-center gap-8 md:gap-12"
        >
          {[
            { value: '< 500ms', label: 'End-to-End Latency' },
            { value: '478',     label: 'Face Mesh Landmarks' },
            { value: '10 Hz',   label: 'Sensor Sample Rate' },
            { value: '4',       label: 'Posture Dimensions' },
          ].map(s => (
            <div key={s.label} className="flex flex-col items-center gap-1">
              <span className="text-2xl md:text-3xl font-black text-gradient">{s.value}</span>
              <span className="text-[11px] tracking-wider uppercase text-text-muted">{s.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Ecosystem diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.9 }}
          className="mt-16 w-full max-w-4xl"
        >
          <EcosystemDiagram />
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="section-label">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3 5l4 4 4-4" stroke="#4A5D7E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Fade to next section */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bg-base to-transparent pointer-events-none" />
    </section>
  )
}

function EcosystemDiagram() {
  const nodes = [
    {
      id: 'chair', label: 'Smart Chair', sub: 'ESP32 + 4× FSR Sensors',
      x: '10%', y: '50%', icon: ChairIcon, color: '#30D158', badge: '10 Hz',
    },
    {
      id: 'camera', label: 'Camera Desktop', sub: 'Python + MediaPipe AI',
      x: '32%', y: '12%', icon: CameraIcon, color: '#5E5CE6', badge: '8 FPS',
    },
    {
      id: 'server', label: 'Cloud Server', sub: 'Node.js + WebSocket Hub',
      x: '50%', y: '50%', icon: ServerIcon, color: '#0A84FF', badge: 'Hub',
      center: true,
    },
    {
      id: 'mobile', label: 'Mobile App', sub: 'React Native + AI Coach',
      x: '68%', y: '12%', icon: MobileIcon, color: '#FF9F0A', badge: 'Live',
    },
    {
      id: 'db', label: 'Databases', sub: 'MongoDB Atlas + Turso',
      x: '90%', y: '50%', icon: DatabaseIcon, color: '#32ADE6', badge: 'Cloud',
    },
  ]

  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-bg-border"
      style={{ background: '#060D1E', minHeight: '280px' }}>

      {/* Grid inside diagram */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* SVG connection lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 280" preserveAspectRatio="none">
        {/* Chair → Server */}
        <line x1="110" y1="140" x2="400" y2="140" stroke="#30D158" strokeWidth="1" strokeOpacity="0.25" />
        <line className="flow-line" x1="110" y1="140" x2="400" y2="140" stroke="#30D158" strokeWidth="1.5" strokeOpacity="0.7" />

        {/* Camera → Server */}
        <line x1="256" y1="46" x2="400" y2="140" stroke="#5E5CE6" strokeWidth="1" strokeOpacity="0.25" />
        <line className="flow-line-slow" x1="256" y1="46" x2="400" y2="140" stroke="#5E5CE6" strokeWidth="1.5" strokeOpacity="0.7" />

        {/* Server → Mobile */}
        <line x1="400" y1="140" x2="544" y2="46" stroke="#FF9F0A" strokeWidth="1" strokeOpacity="0.25" />
        <line className="flow-line" x1="400" y1="140" x2="544" y2="46" stroke="#FF9F0A" strokeWidth="1.5" strokeOpacity="0.7" style={{ animationDelay: '0.5s' }} />

        {/* Server → DB */}
        <line x1="400" y1="140" x2="692" y2="140" stroke="#32ADE6" strokeWidth="1" strokeOpacity="0.25" />
        <line className="flow-line-slow" x1="400" y1="140" x2="692" y2="140" stroke="#32ADE6" strokeWidth="1.5" strokeOpacity="0.7" style={{ animationDelay: '1s' }} />
      </svg>

      {/* Nodes */}
      <div className="relative z-10 w-full h-full" style={{ minHeight: '280px' }}>
        {nodes.map(n => (
          <NodeCard key={n.id} node={n} />
        ))}
      </div>

      {/* Protocol labels */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-6 z-20">
        {[
          { color: '#30D158', label: 'WebSocket' },
          { color: '#5E5CE6', label: 'WSS / TLS' },
          { color: '#0A84FF', label: 'BLE (setup)' },
          { color: '#FF9F0A', label: 'HTTPS REST' },
        ].map(p => (
          <div key={p.label} className="flex items-center gap-1.5">
            <div className="w-3 h-[1px]" style={{ background: p.color, opacity: 0.7 }} />
            <span className="text-[9px] tracking-widest uppercase" style={{ color: p.color, opacity: 0.6 }}>{p.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function NodeCard({ node }) {
  const Icon = node.icon
  return (
    <div
      className="absolute flex flex-col items-center gap-1.5 cursor-default group"
      style={{ left: node.x, top: node.y, transform: 'translate(-50%, -50%)' }}
    >
      <div
        className="relative flex flex-col items-center justify-center rounded-2xl p-3 transition-all duration-300 group-hover:scale-105"
        style={{
          background: '#0C1526',
          border: `1px solid ${node.color}33`,
          boxShadow: `0 0 20px ${node.color}14`,
          width: node.center ? '88px' : '80px',
          height: node.center ? '88px' : '72px',
        }}
      >
        <Icon color={node.color} size={node.center ? 22 : 18} />
        <span
          className="absolute -top-2 -right-2 text-[8px] font-bold px-1.5 py-0.5 rounded-full"
          style={{ background: `${node.color}22`, color: node.color, border: `1px solid ${node.color}44` }}
        >
          {node.badge}
        </span>
        {node.center && (
          <div className="absolute -inset-1 rounded-2xl animate-pulse-slow pointer-events-none"
            style={{ border: '1px solid #0A84FF22' }} />
        )}
      </div>
      <span className="text-[10px] font-semibold text-text-primary whitespace-nowrap">{node.label}</span>
      <span className="text-[8px] text-text-muted whitespace-nowrap hidden sm:block">{node.sub}</span>
    </div>
  )
}

/* ─── Icons ─────────────────────────────────────────────── */
function ChairIcon({ color, size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <rect x="4" y="3" width="12" height="8" rx="2" stroke={color} strokeWidth="1.4" />
      <path d="M4 11h12M7 11v5M13 11v5M6 16h8" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

function CameraIcon({ color, size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <rect x="1" y="5" width="18" height="12" rx="2" stroke={color} strokeWidth="1.4" />
      <circle cx="10" cy="11" r="3" stroke={color} strokeWidth="1.4" />
      <path d="M7 5l1.5-2h3L13 5" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ServerIcon({ color, size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <rect x="2" y="3" width="16" height="5" rx="1.5" stroke={color} strokeWidth="1.4" />
      <rect x="2" y="10" width="16" height="5" rx="1.5" stroke={color} strokeWidth="1.4" />
      <circle cx="15" cy="5.5" r="1" fill={color} />
      <circle cx="15" cy="12.5" r="1" fill={color} />
    </svg>
  )
}

function MobileIcon({ color, size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <rect x="5" y="1" width="10" height="18" rx="2.5" stroke={color} strokeWidth="1.4" />
      <circle cx="10" cy="16" r="1" fill={color} />
      <path d="M8 5h4" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

function DatabaseIcon({ color, size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <ellipse cx="10" cy="5" rx="7" ry="3" stroke={color} strokeWidth="1.4" />
      <path d="M3 5v5c0 1.66 3.13 3 7 3s7-1.34 7-3V5" stroke={color} strokeWidth="1.4" />
      <path d="M3 10v5c0 1.66 3.13 3 7 3s7-1.34 7-3v-5" stroke={color} strokeWidth="1.4" />
    </svg>
  )
}
