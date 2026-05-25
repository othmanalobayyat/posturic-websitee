"use client";

import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
});

const apkFeatures = [
  "Live posture monitoring via WebSocket",
  "Attention + drowsiness dashboard",
  "AI health coach (LLaMA 3.3 70B)",
  "Session history + performance charts",
  "BLE WiFi provisioning wizard",
  "QR camera pairing",
  "Dark mode + Arabic/English RTL",
  "Offline session queue with retry",
];

const cameraFeatures = [
  "MediaPipe Face Mesh (478 landmarks)",
  "EAR drowsiness detection",
  "4-signal attention scoring (0–100)",
  "MediaPipe Pose body tracking",
  "QR pairing code generation",
  "Standalone Windows application",
  "All inference runs locally (no upload)",
  "Configurable thresholds via config.json",
];

const apkSteps = [
  {
    n: "1",
    title: "Download APK",
    detail: "Download the signed release APK to your Android device",
  },
  {
    n: "2",
    title: "Allow install",
    detail: 'Enable "Install from unknown sources" in Settings → Security',
  },
  {
    n: "3",
    title: "Install & open",
    detail: "Tap the APK file to install, then open Posturic",
  },
  {
    n: "4",
    title: "Register",
    detail: "Create an account, then provision your chair via BLE",
  },
];

const cameraSteps = [
  {
    n: "1",
    title: "Download EXE",
    detail: "Download the Windows installer or portable executable",
  },
  {
    n: "2",
    title: "Run & allow",
    detail: "Run as administrator if prompted — required for webcam access",
  },
  {
    n: "3",
    title: "Position camera",
    detail: "Mount at eye level, 50–100 cm from your face",
  },
  {
    n: "4",
    title: "Pair with QR",
    detail: "Scan the QR code shown in the app → pairing is automatic",
  },
];

export default function DownloadCenter() {
  return (
    <section id="download" className="section-padding relative overflow-hidden">
      {/* Top glow */}
      <div
        className="glow-orb w-[600px] h-[300px] left-1/2 -translate-x-1/2 top-0 opacity-20"
        style={{
          background: "radial-gradient(ellipse, #0A84FF14 0%, transparent 70%)",
        }}
      />

      <div className="container-site">
        <div className="max-w-3xl mb-20 text-center mx-auto">
          <motion.p {...fadeUp(0)} className="section-label mb-4">
            08 — Download Center
          </motion.p>
          <motion.h2
            {...fadeUp(0.1)}
            className="text-display-xl font-black text-text-primary mb-6"
          >
            Get started in <span className="text-gradient">four steps.</span>
          </motion.h2>
          <motion.p
            {...fadeUp(0.2)}
            className="text-[17px] text-text-secondary leading-relaxed"
            style={{ fontWeight: 350 }}
          >
            Two downloads. One ecosystem. The mobile app connects everything —
            chair, camera, coaching, and history.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* APK Download */}
          <motion.div {...fadeUp(0.2)} className="flex flex-col">
            <div
              className="rounded-3xl border border-bg-border overflow-hidden flex flex-col h-full"
              style={{
                background: "linear-gradient(160deg, #0C1526, #0A1520)",
              }}
            >
              {/* Card header */}
              <div className="p-7 border-b border-bg-border">
                <div className="flex items-start justify-between mb-5">
                  <img
                    src="/logo-app.png"
                    alt="Posturic Mobile App"
                    width="56"
                    height="56"
                    className="rounded-2xl"
                    style={{ filter: "drop-shadow(0 0 12px #30D15833)" }}
                  />
                  <span className="badge-live flex items-center gap-1.5">
                    <span className="live-dot" />
                    Android
                  </span>
                </div>
                <h3 className="text-[22px] font-black text-text-primary mb-1">
                  Posturic Mobile App
                </h3>
                <p className="text-[14px] text-text-muted">
                  React Native · Expo SDK 54 · Android APK
                </p>
              </div>

              {/* Features */}
              <div className="p-7 border-b border-bg-border flex-1">
                <p className="section-label mb-4">What's included</p>
                <ul className="flex flex-col gap-2.5">
                  {apkFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <div
                        className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{
                          background: "#30D15814",
                          border: "1px solid #30D15833",
                        }}
                      >
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                          <path
                            d="M1.5 4L3 5.5L6.5 2"
                            stroke="#30D158"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="text-[13px] text-text-secondary">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Install steps */}
              <div className="p-7 border-b border-bg-border">
                <p className="section-label mb-4">Installation</p>
                <div className="flex flex-col gap-3">
                  {apkSteps.map((s) => (
                    <div key={s.n} className="flex gap-3">
                      <span className="text-[11px] font-bold text-brand-green w-5 flex-shrink-0 pt-0.5">
                        {s.n}.
                      </span>
                      <div>
                        <span className="text-[12px] font-semibold text-text-primary">
                          {s.title}
                        </span>
                        <span className="text-[12px] text-text-muted ml-2">
                          — {s.detail}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="p-7">
                <a
                  href="#"
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-bold text-white text-[15px] transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    background: "linear-gradient(135deg, #30D158, #00C7BE)",
                    boxShadow: "0 0 32px #30D15833",
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M9 1.5v10M5 8l4 5 4-5M2.5 14.5h13"
                      stroke="white"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Download APK
                </a>
                <p className="text-[11px] text-text-muted text-center mt-3">
                  Requires Android 8.0+ · Signed release build
                </p>
              </div>
            </div>
          </motion.div>

          {/* Camera Desktop Download */}
          <motion.div {...fadeUp(0.3)} className="flex flex-col">
            <div
              className="rounded-3xl border border-bg-border overflow-hidden flex flex-col h-full"
              style={{
                background: "linear-gradient(160deg, #0C1526, #0D1525)",
              }}
            >
              {/* Card header */}
              <div className="p-7 border-b border-bg-border">
                <div className="flex items-start justify-between mb-5">
                  <img
                    src="/logo-camera.png"
                    alt="AI Camera Desktop"
                    width="56"
                    height="56"
                    className="rounded-2xl"
                    style={{ filter: "drop-shadow(0 0 12px #5E5CE633)" }}
                  />
                  <span
                    className="badge flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold"
                    style={{
                      background: "#5E5CE614",
                      border: "1px solid #5E5CE633",
                      color: "#5E5CE6",
                    }}
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: "#5E5CE6" }}
                    />
                    Windows
                  </span>
                </div>
                <h3 className="text-[22px] font-black text-text-primary mb-1">
                  AI Camera Desktop
                </h3>
                <p className="text-[14px] text-text-muted">
                  Python · PyQt5 · MediaPipe · Windows EXE
                </p>
              </div>

              {/* Features */}
              <div className="p-7 border-b border-bg-border flex-1">
                <p className="section-label mb-4">What's included</p>
                <ul className="flex flex-col gap-2.5">
                  {cameraFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <div
                        className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{
                          background: "#5E5CE614",
                          border: "1px solid #5E5CE633",
                        }}
                      >
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                          <path
                            d="M1.5 4L3 5.5L6.5 2"
                            stroke="#5E5CE6"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="text-[13px] text-text-secondary">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Install steps */}
              <div className="p-7 border-b border-bg-border">
                <p className="section-label mb-4">Setup</p>
                <div className="flex flex-col gap-3">
                  {cameraSteps.map((s) => (
                    <div key={s.n} className="flex gap-3">
                      <span
                        className="text-[11px] font-bold w-5 flex-shrink-0 pt-0.5"
                        style={{ color: "#5E5CE6" }}
                      >
                        {s.n}.
                      </span>
                      <div>
                        <span className="text-[12px] font-semibold text-text-primary">
                          {s.title}
                        </span>
                        <span className="text-[12px] text-text-muted ml-2">
                          — {s.detail}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="p-7">
                <a
                  href="#"
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-bold text-white text-[15px] transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    background: "linear-gradient(135deg, #5E5CE6, #BF5AF2)",
                    boxShadow: "0 0 32px #5E5CE633",
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M9 1.5v10M5 8l4 5 4-5M2.5 14.5h13"
                      stroke="white"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Download Camera App
                </a>
                <p className="text-[11px] text-text-muted text-center mt-3">
                  Windows 10/11 · 64-bit · Webcam required
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* System requirements / note */}
        <motion.div
          {...fadeUp(0.5)}
          className="mt-8 p-6 rounded-2xl border border-bg-border bg-bg-surface"
        >
          <div className="flex items-start gap-4">
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "#0A84FF14", border: "1px solid #0A84FF33" }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle
                  cx="7"
                  cy="7"
                  r="5.5"
                  stroke="#0A84FF"
                  strokeWidth="1.2"
                />
                <path
                  d="M7 5v3M7 9.5v.5"
                  stroke="#0A84FF"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div>
              <p className="text-[13px] font-semibold text-text-primary mb-1">
                Complete system setup
              </p>
              <p className="text-[12px] text-text-muted leading-relaxed">
                For full functionality: ESP32 Smart Chair (hardware) + Camera
                Desktop app (Windows PC) + Mobile app (Android phone) + internet
                connection for cloud server. The mobile app works standalone for
                AI coaching and session history even without the chair.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AndroidIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M6 18V10h12v8a2 2 0 01-2 2H8a2 2 0 01-2-2z"
        stroke="white"
        strokeWidth="1.5"
      />
      <path d="M8 10V7a4 4 0 018 0v3" stroke="white" strokeWidth="1.5" />
      <circle cx="9" cy="14" r="1" fill="white" />
      <circle cx="15" cy="14" r="1" fill="white" />
      <path
        d="M8.5 6.5L7 5M15.5 6.5L17 5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function WindowsIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect
        x="4"
        y="4"
        width="7"
        height="7"
        rx="1"
        fill="white"
        fillOpacity="0.9"
      />
      <rect
        x="13"
        y="4"
        width="7"
        height="7"
        rx="1"
        fill="white"
        fillOpacity="0.9"
      />
      <rect
        x="4"
        y="13"
        width="7"
        height="7"
        rx="1"
        fill="white"
        fillOpacity="0.9"
      />
      <rect
        x="13"
        y="13"
        width="7"
        height="7"
        rx="1"
        fill="white"
        fillOpacity="0.9"
      />
    </svg>
  );
}
