"use client";

import { motion } from "framer-motion";

const links = {
  System: [
    { label: "Problem", href: "#problem" },
    { label: "Ecosystem", href: "#ecosystem" },
    { label: "Live Features", href: "#features" },
    { label: "Architecture", href: "#architecture" },
  ],
  Technology: [
    { label: "AI Camera Pipeline", href: "#ai-camera" },
    { label: "Smart Chair", href: "#smart-chair" },
    { label: "Realtime System", href: "#realtime" },
    { label: "Tech Stack", href: "#stack" },
  ],
  Download: [
    { label: "Android APK", href: "#download" },
    { label: "Camera Desktop App", href: "#download" },
    { label: "Future Roadmap", href: "#future" },
  ],
};

const techBadges = [
  "ESP32",
  "React Native",
  "Node.js",
  "MediaPipe",
  "PyQt5",
  "WebSocket",
  "MongoDB",
  "Turso",
  "Cloudflare",
  "Expo SDK 54",
  "LLaMA 3.3 70B",
  "Framer Motion",
];

const socials = [
  {
    label: "Portfolio",
    href: "https://www.othmanalobayyat.online/",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.3" />
        <path
          d="M8 1.5C8 1.5 5.5 4 5.5 8s2.5 6.5 2.5 6.5M8 1.5C8 1.5 10.5 4 10.5 8S8 14.5 8 14.5M1.5 8h13"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/othmanalobayyat",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M8 .5C3.86.5.5 3.86.5 8a7.5 7.5 0 0 0 5.127 7.12c.375.07.512-.163.512-.362 0-.178-.006-.651-.01-1.278-2.086.454-2.527-.996-2.527-.996-.34-.865-.83-1.096-.83-1.096-.679-.464.051-.455.051-.455.75.053 1.145.77 1.145.77.667 1.142 1.75.813 2.177.621.068-.483.26-.813.474-1-1.664-.19-3.414-.832-3.414-3.703 0-.818.292-1.487.771-2.01-.077-.19-.334-.952.073-1.984 0 0 .629-.201 2.06.768A7.178 7.178 0 0 1 8 4.835c.637.003 1.278.086 1.877.253 1.43-.97 2.058-.768 2.058-.768.408 1.032.152 1.794.075 1.983.48.524.77 1.192.77 2.011 0 2.879-1.753 3.512-3.422 3.697.27.232.51.69.51 1.39 0 1.003-.009 1.813-.009 2.06 0 .2.135.435.516.361A7.502 7.502 0 0 0 15.5 8C15.5 3.86 12.14.5 8 .5Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/othman-al-obayyat-51a383268",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M13.5 1h-11A1.5 1.5 0 0 0 1 2.5v11A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 13.5 1ZM5.25 12.5H3.25V6.25h2V12.5Zm-1-7.25a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM12.75 12.5h-2V9.25c0-.75-.25-1.25-1-1.25-.55 0-.875.375-1.025.737-.053.128-.05.306-.05.513V12.5h-2s.025-6.25 0-6.25h2v.887c.265-.41.738-1 1.8-1 1.312 0 2.275.855 2.275 2.7V12.5Z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:alobayyat.othman@gmail.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect
          x="1.5"
          y="3.5"
          width="13"
          height="9"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        <path
          d="M1.5 5l6.5 4L14.5 5"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-bg-border">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] opacity-15"
        style={{
          background: "radial-gradient(ellipse, #0A84FF14 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="container-site pt-20 pb-12 relative">
        {/* Main footer grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-5">
            <a href="#" className="flex items-center gap-2.5 group">
              <img
                src="/logo.png"
                alt="Posturic"
                width="36"
                height="36"
                className="rounded-xl transition-all duration-300 group-hover:shadow-glow-sm"
                style={{ filter: "drop-shadow(0 0 6px #0A84FF22)" }}
              />
              <span className="text-[16px] font-bold text-text-primary">
                Posturic
              </span>
            </a>
            <p className="text-[13px] text-text-muted leading-relaxed">
              Multi-modal ergonomics monitoring through AI vision, pressure
              sensing, and real-time coaching.
            </p>
            <div>
              <span className="badge-live flex items-center gap-1.5 w-fit">
                <span className="live-dot" />
                System live at posturic.online
              </span>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 pt-1">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-text-muted hover:text-text-primary hover:bg-bg-raised transition-all duration-200"
                  style={{ border: "1px solid #1C2E4A" }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <p className="section-label mb-5">{section}</p>
              <ul className="flex flex-col gap-3">
                {items.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-[13px] text-text-muted hover:text-text-primary transition-colors duration-200"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Tech badge strip */}
        <div className="border-t border-bg-border pt-10 mb-10">
          <p className="section-label mb-5">Built with</p>
          <div className="flex flex-wrap gap-2">
            {techBadges.map((t) => (
              <span key={t} className="badge-tech">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Credits section */}
        <div className="border-t border-bg-border pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p
                className="text-[11px] tracking-widest uppercase mb-3"
                style={{ color: "#0A84FF", opacity: 0.7 }}
              >
                Developer
              </p>
              <a
                href="https://www.othmanalobayyat.online/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] font-semibold text-text-primary hover:text-[#0A84FF] transition-colors duration-200"
              >
                Othman Muhammad Al-Obayyat
              </a>
              <p className="text-[12px] text-text-muted mt-1">
                <a
                  href="mailto:alobayyat.othman@gmail.com"
                  className="hover:text-text-primary transition-colors"
                >
                  alobayyat.othman@gmail.com
                </a>
              </p>
            </div>
            <div>
              <p
                className="text-[11px] tracking-widest uppercase mb-3"
                style={{ color: "#5E5CE6", opacity: 0.7 }}
              >
                Supervisor
              </p>
              <p className="text-[14px] font-semibold text-text-primary">
                Dr. Ahmed Abdou
              </p>
              <p className="text-[12px] text-text-muted mt-1 opacity-60">
                With contributions from Rahaf Adeelah
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-bg-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-[12px] text-text-muted">
              Posturic — Graduation Project 2026
            </p>
            <p className="text-[11px] text-text-muted opacity-60">
              Smart Chair · AI Camera · WebSocket Hub · Mobile App
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="#architecture"
              className="text-[12px] text-text-muted hover:text-text-primary transition-colors"
            >
              Architecture
            </a>
            <a
              href="#download"
              className="text-[12px] text-text-muted hover:text-text-primary transition-colors"
            >
              Download
            </a>
            <a
              href="#"
              className="btn-primary text-[12px] px-4 py-2 rounded-full"
            >
              ↑ Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
