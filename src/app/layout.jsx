import './globals.css'

export const metadata = {
  title: 'Posturic — Smart Ergonomics Ecosystem',
  description:
    'AI-powered posture monitoring and wellness technology. Smart Chair, privacy-first design, and a growing ecosystem of intelligent ergonomic products.',
  keywords: ['posture', 'smart chair', 'AI wellness', 'ergonomics', 'health tech'],
  openGraph: {
    title: 'Posturic — Smart Ergonomics Ecosystem',
    description: 'AI-powered posture and attention monitoring. Privacy-first.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
