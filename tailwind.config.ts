import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    './app/**/*.{vue,js,ts,jsx,tsx}',
    './components/**/*.{vue,js,ts,jsx,tsx}',
    './layouts/**/*.{vue,js,ts,jsx,tsx}',
    './pages/**/*.{vue,js,ts,jsx,tsx}',
    './composables/**/*.{vue,js,ts,jsx,tsx}',
    './plugins/**/*.{vue,js,ts,jsx,tsx}',
    './App.{vue,js,ts,jsx,tsx}',
    './app.vue'
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          bg: '#FAF9F6',
          card: '#FFFFFF',
          cardSubtle: '#F4F2EC',
          border: '#E5E1D8',
          text: '#191918',
          muted: '#57544E',
          accent: '#1E4D3A',
          accentHover: '#163B2C'
        },
        obsidian: {
          bg: '#0F0F10',
          card: '#18181A',
          cardSubtle: '#222225',
          border: '#2E2E33',
          text: '#F5F4F0',
          muted: '#A3A099',
          accent: '#52B788',
          accentHover: '#67C89A'
        }
      },
      fontFamily: {
        sans: [
          'Plus Jakarta Sans',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif'
        ],
        mono: [
          'JetBrains Mono',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace'
        ]
      }
    }
  },
  plugins: []
} satisfies Config
