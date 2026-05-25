import './globals.css'

export const metadata = {
  title: 'Posturic — AI-Powered Smart Ergonomics System',
  description:
    'Real-time posture and attention monitoring through multi-modal sensor fusion. Smart Chair (ESP32), AI Camera (MediaPipe), and mobile coaching — unified by a cloud WebSocket hub.',
  keywords: ['posture monitoring', 'smart chair', 'AI wellness', 'ergonomics', 'health tech', 'ESP32', 'MediaPipe', 'WebSocket'],
  openGraph: {
    title: 'Posturic — AI-Powered Smart Ergonomics System',
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
