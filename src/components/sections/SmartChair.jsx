'use client'

import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 24 },
  whileInView:{ opacity: 1, y: 0 },
  viewport:   { once: true },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
})

const postureMap = [
  { label: 'Correct',   code: 'TUP', cond: 'All 4 sensors within normal range, balanced',               color: '#30D158' },
  { label: 'Forward',   code: 'TLF', cond: 'Front sensors significantly higher than rear',               color: '#FF9F0A' },
  { label: 'Backward',  code: 'TLB', cond: 'Rear sensors significantly higher than front',               color: '#FF9F0A' },
  { label: 'Left Lean', code: 'TLL', cond: 'Left sensors significantly higher than right',               color: '#FF9F0A' },
  { label: 'Right Lean','code': 'TLR', cond: 'Right sensors significantly higher than left',              color: '#FF9F0A' },
  { label: 'No User',   code: 'N/A', cond: 'All sensors below minimum threshold',                        color: '#4A5D7E' },
]

const bleSteps = [
  { n: 1, title: 'BLE Scan', detail: 'Phone scans for devices advertising as "SmartChair-XXXX"' },
  { n: 2, title: 'Select & Enter Credentials', detail: 'User picks chair from list, enters WiFi SSID and password' },
  { n: 3, title: 'BLE Write', detail: 'JSON credential payload base64-encoded → written to GATT characteristic' },
  { n: 4, title: 'ESP32 Connects to WiFi', detail: 'Chair attempts WiFi connection, saves credentials to Preferences' },
  { n: 5, title: 'WebSocket Registration', detail: 'Chair connects to WSS server, sends registration frame' },
  { n: 6, title: 'chair_connected Event', detail: 'Server routes "chair_connected" to mobile app → provisioning complete' },
]

export default function SmartChair() {
  return (
    <section id="smart-chair" className="section-padding relative overflow-hidden">

      <div className="glow-orb w-[500px] h-[500px] left-0 top-1/2 -translate-y-1/2 opacity-15"
        style={{ background: 'radial-gradient(circle, #30D15810 0%, transparent 70%)' }} />

      <div className="container-site">

        <div className="max-w-3xl mb-20">
          <motion.p {...fadeUp(0)} className="section-label mb-4">
            06 — Smart Chair Hardware
          </motion.p>
          <motion.h2 {...fadeUp(0.1)} className="text-display-xl font-black text-text-primary mb-6">
            ESP32. 4 sensors.{' '}
            <span className="text-gradient-green">Ground-truth pressure data.</span>
          </motion.h2>
          <motion.p {...fadeUp(0.2)} className="text-[17px] text-text-secondary leading-relaxed" style={{ fontWeight: 350 }}>
            The chair delivers what no camera can — objective, body-weight pressure distribution, measured
            ten times per second without requiring any user awareness or action.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">

          {/* Chair specs + pressure visualization */}
          <motion.div {...fadeUp(0.2)} className="flex flex-col gap-6">

            {/* Hardware specs */}
            <div className="card-glass p-6">
              <p className="section-label mb-5">Hardware specifications</p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Microcontroller', value: 'ESP32 (Xtensa LX6)' },
                  { label: 'Sensors',         value: '4× FSR force-sensitive' },
                  { label: 'ADC resolution',  value: '12-bit (0–4095)' },
                  { label: 'Sample rate',     value: '10 Hz (100ms interval)' },
                  { label: 'Connectivity',    value: 'WiFi 802.11 b/g/n + BLE 4.2' },
                  { label: 'Communication',   value: 'WebSocket (ws library)' },
                  { label: 'Config storage',  value: 'ESP32 Preferences (NVS)' },
                  { label: 'Provisioning',    value: 'BLE GATT over react-native-ble-plx' },
                ].map(s => (
                  <div key={s.label} className="py-3 border-b border-bg-border last:border-b-0">
                    <p className="text-[10px] text-text-muted mb-0.5">{s.label}</p>
                    <p className="text-[13px] font-semibold text-text-primary">{s.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pressure visualization */}
            <div className="card-glass p-6">
              <p className="section-label mb-5">Live pressure map · chair top view</p>
              <PressureMap />
            </div>
          </motion.div>

          {/* Posture classification + BLE provisioning */}
          <div className="flex flex-col gap-6">

            <motion.div {...fadeUp(0.3)} className="card-glass p-6">
              <p className="section-label mb-5">Posture classification logic</p>
              <div className="flex flex-col gap-2">
                {postureMap.map(p => (
                  <div key={p.code} className="flex items-center gap-4 py-2.5 border-b border-bg-border last:border-b-0">
                    <div className="flex items-center gap-2 w-28 flex-shrink-0">
                      <div className="w-2 h-2 rounded-full" style={{ background: p.color }} />
                      <span className="text-[12px] font-semibold text-text-primary">{p.label}</span>
                    </div>
                    <span className="font-mono text-[10px] w-10 text-text-muted flex-shrink-0">{p.code}</span>
                    <span className="text-[11px] text-text-muted">{p.cond}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 code-block">
                <span className="cmt"># Posture score calculation</span>{'\n'}
                score = (correctFrames / totalFrames) × <span className="num">100</span>
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.4)} className="card-glass p-6">
              <p className="section-label mb-5">BLE WiFi provisioning flow</p>
              <div className="flex flex-col gap-3">
                {bleSteps.map(s => (
                  <div key={s.n} className="flex gap-3">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: '#0A84FF14', border: '1px solid #0A84FF33' }}>
                      <span className="text-[9px] font-bold text-brand-blue">{s.n}</span>
                    </div>
                    <div>
                      <p className="text-[12px] font-semibold text-text-primary">{s.title}</p>
                      <p className="text-[11px] text-text-muted mt-0.5">{s.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>

        {/* Why ESP32 */}
        <motion.div {...fadeUp(0.5)}>
          <p className="section-label mb-6">Why ESP32 was chosen</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: 'Dual connectivity',
                detail: 'WiFi + BLE in a single chip. WiFi for ongoing data streaming; BLE for initial WiFi provisioning. No external modules needed.',
              },
              {
                title: 'Arduino ecosystem',
                detail: 'Mature library support for WebSocket (ArduinoWebsockets), sensor I/O, and NVS preferences storage. Well-documented for graduates.',
              },
              {
                title: 'Price/power ratio',
                detail: 'Sub-$5 price point with dual-core 240MHz CPU. More than sufficient for pressure sampling, posture classification, and WebSocket at 10 Hz.',
              },
            ].map((r, i) => (
              <div key={r.title} className="p-5 rounded-2xl border border-bg-border bg-bg-surface">
                <p className="text-[13px] font-bold text-text-primary mb-2">{r.title}</p>
                <p className="text-[12px] text-text-muted leading-relaxed">{r.detail}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

function PressureMap() {
  const sensors = [
    { label: 'FL', x: '30%', y: '30%', pressure: 0.82, name: 'Front Left' },
    { label: 'FR', x: '70%', y: '30%', pressure: 0.78, name: 'Front Right' },
    { label: 'BL', x: '30%', y: '70%', pressure: 0.65, name: 'Back Left' },
    { label: 'BR', x: '70%', y: '70%', pressure: 0.60, name: 'Back Right' },
  ]

  return (
    <div className="flex items-center gap-6">
      {/* Chair top view */}
      <div className="relative flex-shrink-0" style={{ width: '140px', height: '140px' }}>
        {/* Chair seat outline */}
        <div className="absolute inset-0 rounded-2xl border border-bg-border"
          style={{ background: '#0C1526' }} />
        <div className="absolute inset-2 rounded-xl border border-bg-border opacity-40"
          style={{ background: '#111E35' }} />

        {sensors.map(s => (
          <div
            key={s.label}
            className="absolute flex items-center justify-center"
            style={{
              left: s.x,
              top: s.y,
              transform: 'translate(-50%, -50%)',
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              background: `rgba(48, 209, 88, ${s.pressure * 0.7})`,
              border: `1px solid rgba(48, 209, 88, ${s.pressure})`,
              boxShadow: `0 0 ${s.pressure * 20}px rgba(48, 209, 88, ${s.pressure * 0.5})`,
            }}
          >
            <span className="text-[10px] font-bold text-white">{s.label}</span>
          </div>
        ))}
      </div>

      {/* Sensor readings */}
      <div className="flex flex-col gap-3 flex-1">
        {sensors.map(s => (
          <div key={s.label} className="flex items-center gap-3">
            <span className="text-[10px] font-mono text-text-muted w-8">{s.label}</span>
            <div className="flex-1 h-2 rounded-full bg-bg-raised overflow-hidden">
              <div className="h-full rounded-full transition-all duration-500"
                style={{ width: `${s.pressure * 100}%`, background: '#30D158' }} />
            </div>
            <span className="text-[11px] font-mono text-brand-green w-16">
              {Math.round(s.pressure * 4095)}
            </span>
          </div>
        ))}
        <p className="text-[9px] text-text-muted mt-1">12-bit ADC · 0–4095 range</p>
      </div>
    </div>
  )
}
