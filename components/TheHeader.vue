<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { portfolioData } from '~/data/portfolio'
import { useTheme } from '~/composables/useTheme'

const { isDark, toggleTheme } = useTheme()
const isMobileMenuOpen = ref(false)

const navLinks = [
  { href: '#overview', label: 'Overview' },
  { href: '#metrics', label: 'Impact' },
  { href: '#skills', label: 'Skills' },
  { href: '#case-studies', label: 'Case Studies' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' }
]

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && isMobileMenuOpen.value) {
    closeMobileMenu()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <header
    class="sticky top-0 z-50 w-full border-b backdrop-blur-md transition-colors duration-200 border-[#E5E1D8] bg-[#FAF9F6]/95 dark:border-[#2E2E33] dark:bg-[#0F0F10]/95"
  >
    <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
      <!-- Brand & Name -->
      <a
        href="#overview"
        class="group flex items-center gap-3 text-left focus-visible:ring-2 focus-visible:ring-[#1E4D3A] dark:focus-visible:ring-[#52B788]"
        aria-label="Arfan Citra Wibowo Overview"
      >
        <span
          class="flex h-9 w-9 items-center justify-center border font-mono-code text-sm font-bold transition-colors border-[#191918] bg-[#FFFFFF] text-[#191918] group-hover:bg-[#191918] group-hover:text-[#FAF9F6] dark:border-[#F5F4F0] dark:bg-[#18181A] dark:text-[#F5F4F0] dark:group-hover:bg-[#F5F4F0] dark:group-hover:text-[#0F0F10]"
        >
          AC
        </span>
        <div class="flex flex-col">
          <span class="text-sm font-bold tracking-tight text-[#191918] dark:text-[#F5F4F0]">
            {{ portfolioData.personal.name }}
          </span>
          <span class="text-xs text-[#57544E] dark:text-[#A3A099]">
            Full Stack Developer
          </span>
        </div>
      </a>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center gap-6" aria-label="Main Navigation">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="text-sm font-medium transition-colors hover:text-[#1E4D3A] text-[#57544E] dark:text-[#A3A099] dark:hover:text-[#52B788]"
        >
          {{ link.label }}
        </a>
      </nav>

      <!-- Actions: Theme Toggle & Contact CTA -->
      <div class="flex items-center gap-3">
        <!-- Theme Toggle -->
        <button
          type="button"
          @click="toggleTheme"
          class="flex h-10 w-10 items-center justify-center border transition-colors border-[#E5E1D8] bg-[#FFFFFF] text-[#191918] hover:border-[#191918] dark:border-[#2E2E33] dark:bg-[#18181A] dark:text-[#F5F4F0] dark:hover:border-[#F5F4F0]"
          :aria-label="isDark ? 'Switch to light theme' : 'Switch to dark theme'"
          title="Toggle light and dark theme"
        >
          <!-- Sun icon when dark -->
          <svg
            v-if="isDark"
            class="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
          </svg>
          <!-- Moon icon when light -->
          <svg
            v-else
            class="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
          </svg>
        </button>

        <!-- Direct Email CTA (Desktop) -->
        <a
          href="#contact"
          class="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors border border-[#191918] bg-[#191918] text-[#FAF9F6] hover:bg-[#1E4D3A] hover:border-[#1E4D3A] dark:border-[#F5F4F0] dark:bg-[#F5F4F0] dark:text-[#0F0F10] dark:hover:bg-[#52B788] dark:hover:border-[#52B788]"
        >
          Get in Touch
        </a>

        <!-- Mobile Menu Trigger -->
        <button
          type="button"
          @click="toggleMobileMenu"
          class="flex h-10 w-10 md:hidden items-center justify-center border transition-colors border-[#E5E1D8] bg-[#FFFFFF] text-[#191918] hover:border-[#191918] dark:border-[#2E2E33] dark:bg-[#18181A] dark:text-[#F5F4F0] dark:hover:border-[#F5F4F0]"
          :aria-expanded="isMobileMenuOpen"
          aria-controls="mobile-nav-drawer"
          aria-label="Toggle navigation menu"
        >
          <svg
            v-if="!isMobileMenuOpen"
            class="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
          <svg
            v-else
            class="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Drawer -->
    <div
      v-if="isMobileMenuOpen"
      id="mobile-nav-drawer"
      class="md:hidden border-b px-4 py-4 transition-all duration-200 border-[#E5E1D8] bg-[#FAF9F6] dark:border-[#2E2E33] dark:bg-[#0F0F10]"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Drawer"
    >
      <nav class="flex flex-col space-y-3">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          @click="closeMobileMenu"
          class="flex h-11 items-center px-3 text-base font-medium border border-transparent transition-colors hover:border-[#E5E1D8] hover:bg-[#FFFFFF] text-[#191918] dark:hover:border-[#2E2E33] dark:hover:bg-[#18181A] dark:text-[#F5F4F0]"
        >
          {{ link.label }}
        </a>
        <div class="pt-2">
          <a
            href="#contact"
            @click="closeMobileMenu"
            class="flex h-11 w-full items-center justify-center font-semibold uppercase tracking-wider text-xs border border-[#191918] bg-[#191918] text-[#FAF9F6] dark:border-[#F5F4F0] dark:bg-[#F5F4F0] dark:text-[#0F0F10]"
          >
            Get in Touch
          </a>
        </div>
      </nav>
    </div>
  </header>
</template>
