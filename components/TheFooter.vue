<script setup lang="ts">
import { portfolioData } from '~/data/portfolio'

const scrollToTop = () => {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
</script>

<template>
  <footer
    class="py-12 border-t border-[#E5E1D8] bg-[#FAF9F6] dark:border-[#2E2E33] dark:bg-[#0F0F10] transition-colors duration-200"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      
      <!-- Top Row -->
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[#E5E1D8] dark:border-[#2E2E33]">
        <div>
          <span class="block text-base font-bold uppercase tracking-tight text-[#191918] dark:text-[#F5F4F0]">
            {{ portfolioData.personal.name }}
          </span>
          <span class="text-xs text-[#57544E] dark:text-[#A3A099]">
            Full Stack Developer
          </span>
        </div>

        <!-- Social Quick Links -->
        <div class="flex flex-wrap items-center gap-4 text-xs font-mono-code">
          <a
            :href="portfolioData.personal.socials.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="text-[#57544E] hover:text-[#191918] dark:text-[#A3A099] dark:hover:text-[#F5F4F0] transition-colors"
          >
            LinkedIn
          </a>
          <span class="text-[#E5E1D8] dark:text-[#2E2E33]">/</span>
          <a
            :href="portfolioData.personal.socials.github"
            target="_blank"
            rel="noopener noreferrer"
            class="text-[#57544E] hover:text-[#191918] dark:text-[#A3A099] dark:hover:text-[#F5F4F0] transition-colors"
          >
            GitHub
          </a>
          <span class="text-[#E5E1D8] dark:text-[#2E2E33]">/</span>
          <a
            :href="portfolioData.personal.socials.behance"
            target="_blank"
            rel="noopener noreferrer"
            class="text-[#57544E] hover:text-[#191918] dark:text-[#A3A099] dark:hover:text-[#F5F4F0] transition-colors"
          >
            Behance
          </a>
          <span class="text-[#E5E1D8] dark:text-[#2E2E33]">/</span>
          <button
            type="button"
            @click="scrollToTop"
            class="text-[#1E4D3A] hover:underline dark:text-[#52B788]"
            aria-label="Scroll back to top of page"
          >
            Back to Top ↑
          </button>
        </div>
      </div>

      <!-- Bottom Row -->
      <div class="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono-code text-[#57544E] dark:text-[#A3A099]">
        <div>
          © 2026 Arfan Citra Wibowo. All rights reserved.
        </div>
      </div>

    </div>
  </footer>
</template>
