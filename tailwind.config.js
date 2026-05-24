/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand core
        brand: {
          blue:    '#0A84FF',
          indigo:  '#5E5CE6',
          teal:    '#32ADE6',
          glow:    '#0A84FF33', // blue at 20% opacity for glows
        },
        // Background layers (dark-first design)
        bg: {
          base:    '#050A14', // deepest background
          surface: '#0C1526', // cards and panels
          raised:  '#111E35', // elevated elements
          border:  '#1C2E4A', // subtle borders
        },
        // Text scale
        text: {
          primary:   '#F0F4FF',
          secondary: '#8B9EC7',
          muted:     '#4A5D7E',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Apple-style large display sizes
        'display-2xl': ['clamp(3rem, 8vw, 6rem)',    { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-xl':  ['clamp(2.25rem, 6vw, 4rem)', { lineHeight: '1.08', letterSpacing: '-0.025em' }],
        'display-lg':  ['clamp(1.75rem, 4vw, 2.75rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md':  ['clamp(1.25rem, 3vw, 1.75rem)', { lineHeight: '1.2', letterSpacing: '-0.015em' }],
      },
      spacing: {
        section: '7rem', // consistent vertical rhythm between sections
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      backgroundImage: {
        // Main page gradient — deep space feel
        'hero-gradient':    'radial-gradient(ellipse 80% 60% at 50% -10%, #0A84FF22 0%, transparent 70%)',
        // Card glow effect
        'card-gradient':    'linear-gradient(135deg, #0C1526 0%, #111E35 100%)',
        // Subtle mesh for sections
        'mesh-gradient':    'radial-gradient(ellipse 60% 40% at 20% 50%, #5E5CE622 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 50%, #0A84FF18 0%, transparent 60%)',
        // Brand accent line
        'brand-gradient':   'linear-gradient(90deg, #0A84FF, #5E5CE6)',
        'brand-gradient-v': 'linear-gradient(180deg, #0A84FF, #5E5CE6)',
      },
      boxShadow: {
        'glow-sm': '0 0 20px #0A84FF22',
        'glow-md': '0 0 40px #0A84FF33',
        'glow-lg': '0 0 80px #0A84FF44',
        'card':    '0 1px 1px #00000040, 0 0 0 1px #1C2E4A',
      },
      animation: {
        'fade-up':    'fadeUp 0.6s ease forwards',
        'fade-in':    'fadeIn 0.4s ease forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
