'use client'

import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 24 },
  whileInView:{ opacity: 1, y: 0 },
  viewport:   { once: true },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
})

const pipelineStages = [
  {
    step: '01',
    title: 'Webcam Frame Capture',
    detail: '640×480 BGR frame via OpenCV at configurable FPS',
    color: '#8B9EC7',
  },
  {
    step: '02',
    title: 'MediaPipe Face Mesh',
    detail: '478 3D facial landmarks · BlazeFace + landmark regression neural nets · iris refinement model enabled',
    color: '#5E5CE6',
  },
  {
    step: '03',
    title: 'Attention Estimator',
    detail: 'Gaze offset (40%) + head angular velocity (30%) + EAR proxy (20%) + face presence (10%) → score 0–100',
    color: '#0A84FF',
  },
  {
    step: '04',
    title: 'Drowsiness Detector',
    detail: 'EAR = (‖p₂-p₆‖ + ‖p₃-p₅‖) / (2×‖p₁-p₄‖) · Drowsy when EAR < 0.25 for ≥ 2 seconds continuously',
    color: '#FF9F0A',
  },
  {
    step: '05',
    title: 'MediaPipe Pose',
    detail: '33 upper-body landmarks · shoulder/hip/nose geometry → classifies TUP/TLF/TLB/TLL/TLR/NO_PERSON',
    color: '#30D158',
  },
  {
    step: '06',
    title: 'WorkTimer State Machine',
    detail: 'WORK ↔ BREAK transitions based on attention threshold · WORK_ENTRY_DELAY prevents rapid flickering',
    color: '#32ADE6',
  },
  {
    step: '07',
    title: 'WebSocket Payload',
    detail: 'JSON every 1 second: { attention_level, drowsy, posture_label, is_present, working_duration_seconds }',
    color: '#BF5AF2',
  },
]

const landmarks = [
  { label: 'Nose tip',       idx: '[1]',   use: 'Head forward lean detection' },
  { label: 'Left iris',      idx: '[468]', use: 'Gaze x-offset calculation' },
  { label: 'Right iris',     idx: '[473]', use: 'Gaze averaging' },
  { label: 'Left eye top',   idx: '[159]', use: 'EAR vertical distance p2' },
  { label: 'Left eye bottom',idx: '[145]', use: 'EAR vertical distance p6' },
  { label: 'Chin',           idx: '[152]', use: 'Head pose reference point' },
  { label: 'L. shoulder',    idx: '[11]',  use: 'Posture lateral balance' },
  { label: 'R. shoulder',    idx: '[12]',  use: 'Posture lateral balance' },
]

export default function AICamera() {
  return (
    <section id="ai-camera" className="section-padding relative overflow-hidden">

      <div className="glow-orb w-[600px] h-[600px] right-0 top-1/4 opacity-12"
        style={{ background: 'radial-gradient(circle, #5E5CE612 0%, transparent 70%)' }} />

      <div className="container-site">

        <div className="max-w-3xl mb-20">
          <motion.p {...fadeUp(0)} className="section-label mb-4">
            05 — AI Camera Pipeline
          </motion.p>
          <motion.h2 {...fadeUp(0.1)} className="text-display-xl font-black text-text-primary mb-6">
            Local neural networks.{' '}
            <span className="text-gradient-indigo">Zero video upload.</span>
          </motion.h2>
          <motion.p {...fadeUp(0.2)} className="text-[17px] text-text-secondary leading-relaxed" style={{ fontWeight: 350 }}>
            Two MediaPipe neural networks run entirely on the user's Windows PC. Raw video never leaves the device —
            only the analyzed results are sent to the server (~150 bytes/second). This is privacy by architecture, not policy.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">

          {/* Pipeline stages */}
          <motion.div {...fadeUp(0.2)}>
            <p className="section-label mb-6">Processing pipeline · every frame</p>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 top-6 bottom-6 w-[1px]"
                style={{ background: 'linear-gradient(180deg, #5E5CE6, #0A84FF, #30D158)' }} />

              <div className="flex flex-col gap-0">
                {pipelineStages.map((s, i) => (
                  <div key={s.step} className="flex gap-5 relative">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 z-10 mt-3"
                      style={{ background: `${s.color}22`, border: `1px solid ${s.color}55` }}>
                      <span className="text-[9px] font-bold" style={{ color: s.color }}>{s.step}</span>
                    </div>
                    <div className="flex-1 pb-6">
                      <p className="text-[13px] font-semibold text-text-primary pt-3.5">{s.title}</p>
                      <p className="text-[11px] text-text-muted mt-1 leading-relaxed">{s.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Technical details */}
          <div className="flex flex-col gap-6">

            {/* EAR formula */}
            <motion.div {...fadeUp(0.3)} className="card-glass p-6">
              <p className="section-label mb-4">EAR drowsiness formula</p>
              <div className="code-block">
                <span className="cmt"># Eye Aspect Ratio — Soukupová & Čech, 2016</span>{'\n'}
                <span className="kw">def</span> <span className="fn">compute_ear</span>(landmarks, eye_indices):{'\n'}
                {'  '}points = landmarks[eye_indices]{'\n'}
                {'  '}v1 = dist(points[<span className="num">1</span>], points[<span className="num">5</span>]){'\n'}
                {'  '}v2 = dist(points[<span className="num">2</span>], points[<span className="num">4</span>]){'\n'}
                {'  '}h  = dist(points[<span className="num">0</span>], points[<span className="num">3</span>]){'\n'}
                {'  '}<span className="kw">return</span> (v1 + v2) / (<span className="num">2.0</span> * h){'\n\n'}
                <span className="cmt"># Both eyes averaged</span>{'\n'}
                ear = (compute_ear(lm, LEFT_EYE) + compute_ear(lm, RIGHT_EYE)) / <span className="num">2</span>{'\n\n'}
                <span className="cmt"># Drowsy when closed {'>'} 2 continuous seconds</span>{'\n'}
                <span className="kw">if</span> ear {'<'} <span className="num">0.25</span>:{'\n'}
                {'  '}closed_duration += dt{'\n'}
                drowsy = closed_duration {'>'} <span className="num">2.0</span>
              </div>
            </motion.div>

            {/* Attention formula */}
            <motion.div {...fadeUp(0.4)} className="card-glass p-6">
              <p className="section-label mb-4">Attention score computation</p>
              <div className="code-block">
                <span className="fn">attention_level</span> = ({'\n'}
                {'  '}gaze_score      * <span className="num">0.40</span>  +{'\n'}
                {'  '}stability_score * <span className="num">0.30</span>  +{'\n'}
                {'  '}eyes_open_score * <span className="num">0.20</span>  +{'\n'}
                {'  '}presence_score  * <span className="num">0.10</span>{'\n'}
                ) * <span className="num">100</span>  <span className="cmt"># → 0.0 – 100.0</span>{'\n\n'}
                <span className="cmt"># Smoothed with rolling avg (prevents flicker)</span>{'\n'}
                score = np.mean(score_history[-N:])
              </div>
            </motion.div>

            {/* Performance */}
            <motion.div {...fadeUp(0.5)} className="card-glass p-6">
              <p className="section-label mb-4">Model performance · modern CPU</p>
              <div className="flex flex-col gap-3">
                {[
                  { model: 'MediaPipe Face Mesh', time: '15–40ms', landmarks: '478', color: '#5E5CE6' },
                  { model: 'MediaPipe Pose',      time: '20–60ms', landmarks: '33',  color: '#0A84FF' },
                  { model: 'Combined pipeline',   time: '< 120ms', landmarks: '511', color: '#30D158' },
                ].map(m => (
                  <div key={m.model} className="flex items-center justify-between py-2 border-b border-bg-border last:border-b-0">
                    <div>
                      <p className="text-[12px] font-semibold text-text-primary">{m.model}</p>
                      <p className="text-[10px] text-text-muted">{m.landmarks} landmarks</p>
                    </div>
                    <span className="text-[13px] font-mono font-bold" style={{ color: m.color }}>{m.time}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>

        {/* Landmark reference */}
        <motion.div {...fadeUp(0.4)}>
          <p className="section-label mb-6">Key landmark indices used</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {landmarks.map(lm => (
              <div key={lm.label} className="p-4 rounded-2xl border border-bg-border bg-bg-surface">
                <span className="font-mono text-[11px] text-brand-blue">{lm.idx}</span>
                <p className="text-[12px] font-medium text-text-primary mt-1">{lm.label}</p>
                <p className="text-[10px] text-text-muted mt-0.5">{lm.use}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
