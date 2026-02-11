
/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['Nasalization', 'Arial Black', 'sans-serif'],
        'body': ['Ubuntu', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        imo: {
          deep: "#0B0F1A",
          navy: "#111827",
          ocean: "#3B82F6",
          wave: "#60A5FA",
          sky: "#93C5FD",
          foam: "#BFDBFE",
          sand: "#FFF8E1",
          coral: "#F472B6",
          teal: "#2DD4BF",
          green: "#34D399",
          neon: "#A78BFA",       // мягкий фиолетовый вместо циана
          magenta: "#C084FC",    // лавандовый
          lime: "#67E8F9",       // мягкий аква
        },
      },
      boxShadow: {
        'brutal': '0 8px 32px rgba(167, 139, 250, 0.15)',
        'brutal-sm': '0 4px 16px rgba(167, 139, 250, 0.1)',
        'brutal-white': '0 8px 32px rgba(255, 255, 255, 0.05)',
        'brutal-coral': '0 8px 32px rgba(244, 114, 182, 0.15)',
        'brutal-lime': '0 8px 32px rgba(103, 232, 249, 0.15)',
        'neon-glow': '0 0 30px rgba(167, 139, 250, 0.2), 0 0 60px rgba(167, 139, 250, 0.05)',
        'neon-glow-sm': '0 0 15px rgba(167, 139, 250, 0.1)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      },
      backgroundImage: {
        'gradient-ocean': 'linear-gradient(135deg, #111827 0%, #1E3A5F 50%, #3B82F6 100%)',
        'gradient-hero': 'linear-gradient(180deg, #0B0F1A 0%, #111827 40%, #1E3A5F 100%)',
        'gradient-neon': 'linear-gradient(135deg, #A78BFA 0%, #60A5FA 50%, #C084FC 100%)',
      },
      borderRadius: {
        'brutal': '1.25rem',
        'brutal-tl': '1.5rem 0.5rem 0.5rem 0.5rem',
        'brutal-br': '0.5rem 0.5rem 1.5rem 0.5rem',
      },
    },
  },
  plugins: [
    plugin(function({ addVariant, addUtilities }) {
      addVariant('light', '.light &');
      addUtilities({
        '.brutal-border': {
          border: '1px solid rgba(255, 255, 255, 0.1)',
        },
        '.brutal-border-neon': {
          border: '1px solid rgba(167, 139, 250, 0.3)',
        },
        '.brutal-border-coral': {
          border: '1px solid rgba(244, 114, 182, 0.3)',
        },
      });
    }),
  ],
};
