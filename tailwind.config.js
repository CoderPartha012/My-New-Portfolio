/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    // bare `rounded` → pill; all other sizes (sm/md/lg/xl/2xl…) unchanged
    borderRadius: {
      DEFAULT: '9999px',
      none: '0px',
      sm: '0.125rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
      full: '9999px',
    },
    extend: {
      fontFamily: {
        // New liquid-glass design system fonts
        heading: ["'Instrument Serif'", 'serif'],
        body:    ["'Barlow'", 'sans-serif'],
        // Legacy (kept for existing sections)
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
        inter:  ['Inter', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      animation: {
        'fade-in':       'fadeIn 1s ease-in',
        'fade-in-up':    'fadeInUp 0.8s ease-out',
        'slide-up':      'slideUp 0.5s ease-out',
        'slide-down':    'slideDown 0.5s ease-out',
        'slide-in-right':'slideInRight 0.8s ease-out',
        'scale-in':      'scaleIn 0.5s ease-out',
        'bounce-soft':   'bounceSoft 2s infinite',
        gradient:        'gradient 3s ease infinite',
        float:           'float 3s ease-in-out infinite',
        'pulse-soft':    'pulseSoft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-glow':    'pulseGlow 2s ease-in-out infinite',
        typing:          'typing 3.5s steps(40, end), blink .75s step-end infinite',
        morph:           'morph 8s ease-in-out infinite',
        glow:            'glow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn:      { '0%':{ opacity:'0', transform:'translateY(10px)' }, '100%':{ opacity:'1', transform:'translateY(0)' } },
        fadeInUp:    { '0%':{ opacity:'0', transform:'translateY(30px)' }, '100%':{ opacity:'1', transform:'translateY(0)' } },
        slideUp:     { '0%':{ transform:'translateY(100px)', opacity:'0' }, '100%':{ transform:'translateY(0)', opacity:'1' } },
        slideDown:   { '0%':{ transform:'translateY(-100px)', opacity:'0' }, '100%':{ transform:'translateY(0)', opacity:'1' } },
        slideInRight:{ '0%':{ transform:'translateX(-30px)', opacity:'0' }, '100%':{ transform:'translateX(0)', opacity:'1' } },
        scaleIn:     { '0%':{ transform:'scale(0.9)', opacity:'0' }, '100%':{ transform:'scale(1)', opacity:'1' } },
        bounceSoft:  { '0%,100%':{ transform:'translateY(0)' }, '50%':{ transform:'translateY(-20px)' } },
        float:       { '0%,100%':{ transform:'translateY(0px)' }, '50%':{ transform:'translateY(-10px)' } },
        pulseSoft:   { '0%,100%':{ opacity:'1' }, '50%':{ opacity:'0.5' } },
        pulseGlow:   { '0%,100%':{ boxShadow:'0 0 20px rgba(0,212,255,0.25)' }, '50%':{ boxShadow:'0 0 40px rgba(0,212,255,0.5)' } },
        gradient:    { '0%,100%':{ 'background-size':'200% 200%','background-position':'left center' }, '50%':{ 'background-size':'200% 200%','background-position':'right center' } },
        typing:      { from:{ width:'0' }, to:{ width:'100%' } },
        blink:       { 'from,to':{ 'border-color':'transparent' }, '50%':{ 'border-color':'currentColor' } },
        morph:       { '0%,100%':{ 'border-radius':'60% 40% 30% 70%/60% 30% 70% 40%' }, '50%':{ 'border-radius':'30% 60% 70% 40%/50% 60% 30% 60%' } },
        glow:        { '0%,100%':{ boxShadow:'0 0 20px rgba(0,212,255,0.25)' }, '50%':{ boxShadow:'0 0 30px rgba(0,212,255,0.5)' } },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':  'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backdropBlur: { xs: '2px' },
      boxShadow: {
        glow:    '0 0 20px rgba(0, 212, 255, 0.25)',
        'glow-lg':'0 0 40px rgba(0, 212, 255, 0.4)',
      },
    },
  },
  plugins: [],
};
