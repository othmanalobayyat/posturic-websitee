/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue:   '#0A84FF',
          indigo: '#5E5CE6',
          teal:   '#32ADE6',
          green:  '#30D158',
          amber:  '#FF9F0A',
          red:    '#FF453A',
          glow:   '#0A84FF33',
        },
        bg: {
          base:    '#050A14',
          surface: '#0C1526',
          raised:  '#111E35',
          border:  '#1C2E4A',
          grid:    '#0A84FF08',
        },
        text: {
          primary:   '#F0F4FF',
          secondary: '#8B9EC7',
          muted:     '#4A5D7E',
        },
      },
      fontFamily: {
        sans:  ['Inter', 'system-ui', 'sans-serif'],
        mono:  ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        'display-3xl': ['clamp(3.5rem, 10vw, 7.5rem)', { lineHeight: '0.95', letterSpacing: '-0.04em' }],
        'display-2xl': ['clamp(3rem, 8vw, 6rem)',      { lineHeight: '1.0',  letterSpacing: '-0.03em' }],
        'display-xl':  ['clamp(2.25rem, 6vw, 4rem)',   { lineHeight: '1.08', letterSpacing: '-0.025em' }],
        'display-lg':  ['clamp(1.75rem, 4vw, 2.75rem)',{ lineHeight: '1.1',  letterSpacing: '-0.02em' }],
        'display-md':  ['clamp(1.25rem, 3vw, 1.75rem)',{ lineHeight: '1.2',  letterSpacing: '-0.015em' }],
      },
      spacing: {
        section: '7rem',
        'section-sm': '4rem',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      backgroundImage: {
        'hero-gradient':  'radial-gradient(ellipse 80% 60% at 50% -10%, #0A84FF18 0%, transparent 70%)',
        'hero-grid':      'linear-gradient(#0A84FF06 1px, transparent 1px), linear-gradient(90deg, #0A84FF06 1px, transparent 1px)',
        'card-gradient':  'linear-gradient(135deg, #0C1526 0%, #111E35 100%)',
        'mesh-gradient':  'radial-gradient(ellipse 60% 40% at 20% 50%, #5E5CE614 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 50%, #0A84FF0F 0%, transparent 60%)',
        'brand-gradient': 'linear-gradient(90deg, #0A84FF, #5E5CE6)',
        'brand-gradient-v':'linear-gradient(180deg, #0A84FF, #5E5CE6)',
        'green-gradient': 'linear-gradient(90deg, #30D158, #00C7BE)',
        'amber-gradient': 'linear-gradient(90deg, #FF9F0A, #FF6B35)',
        'indigo-gradient':'linear-gradient(90deg, #5E5CE6, #BF5AF2)',
      },
      boxShadow: {
        'glow-sm':    '0 0 20px #0A84FF22',
        'glow-md':    '0 0 40px #0A84FF33',
        'glow-lg':    '0 0 80px #0A84FF44',
        'glow-green': '0 0 30px #30D15822',
        'glow-indigo':'0 0 30px #5E5CE622',
        'card':       '0 1px 1px #00000040, 0 0 0 1px #1C2E4A',
        'card-hover': '0 4px 24px #0A84FF18, 0 0 0 1px #2A4A7A',
        'float':      '0 20px 60px #00000060',
      },
      animation: {
        'fade-up':     'fadeUp 0.7s ease forwards',
        'fade-in':     'fadeIn 0.4s ease forwards',
        'float':       'float 6s ease-in-out infinite',
        'float-slow':  'float 10s ease-in-out infinite',
        'pulse-slow':  'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-glow':  'pulseGlow 2s ease-in-out infinite',
        'scan':        'scan 3s linear infinite',
        'flow':        'flow 2s linear infinite',
        'spin-slow':   'spin 8s linear infinite',
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
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 8px #30D15840' },
          '50%':      { opacity: '0.7', boxShadow: '0 0 20px #30D15880' },
        },
        scan: {
          '0%':   { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        flow: {
          '0%':   { strokeDashoffset: '100' },
          '100%': { strokeDashoffset: '0' },
        },
      },
    },
  },
  plugins: [],
}
