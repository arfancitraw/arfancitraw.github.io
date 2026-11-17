import { ref, onMounted } from 'vue'

export const useTheme = () => {
  const isDark = ref(false)

  const toggleTheme = () => {
    isDark.value = !isDark.value
    applyTheme(isDark.value)
  }

  const setTheme = (dark: boolean) => {
    isDark.value = dark
    applyTheme(dark)
  }

  const applyTheme = (dark: boolean) => {
    if (typeof document === 'undefined') return
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
      localStorage.setItem('acw-theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('acw-theme', 'light')
    }
  }

  onMounted(() => {
    const saved = localStorage.getItem('acw-theme')
    if (saved === 'dark') {
      isDark.value = true
      document.documentElement.classList.add('dark')
    } else if (saved === 'light') {
      isDark.value = false
      document.documentElement.classList.remove('dark')
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      isDark.value = prefersDark
      if (prefersDark) {
        document.documentElement.classList.add('dark')
      }
    }
  })

  return {
    isDark,
    toggleTheme,
    setTheme
  }
}
