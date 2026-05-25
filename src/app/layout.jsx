import './globals.css'

export const metadata = {
  title: 'Posturic — AI Smart Ergonomics System',
  description:
    'Real-time posture and attention monitoring through multi-modal sensor fusion. Smart Chair · AI Camera · Mobile App · Cloud WebSocket Hub.',
  keywords: ['posture monitoring', 'smart chair', 'AI wellness', 'ergonomics', 'ESP32', 'MediaPipe', 'WebSocket'],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: 'Posturic — AI Smart Ergonomics System',
    description: 'Real-time posture and attention monitoring. ESP32 smart chair + AI camera + mobile app.',
    type: 'website',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  )
}
