<script setup lang="ts">
import TheHeader from '~/components/TheHeader.vue'
import HeroSection from '~/components/HeroSection.vue'
import MetricsBanner from '~/components/MetricsBanner.vue'
import SkillsSection from '~/components/SkillsSection.vue'
import CaseStudiesSection from '~/components/CaseStudiesSection.vue'
import ExperienceSection from '~/components/ExperienceSection.vue'
import ContactSection from '~/components/ContactSection.vue'
import TheFooter from '~/components/TheFooter.vue'

// Script to initialize theme immediately before render to prevent flicker
useHead({
  script: [
    {
      innerHTML: `(function() {
        try {
          var saved = localStorage.getItem('acw-theme');
          var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          if (saved === 'dark' || (!saved && prefersDark)) {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
        } catch (e) {}
      })();`,
      type: 'text/javascript'
    }
  ]
})
</script>

<template>
  <div class="min-h-screen bg-[#FAF9F6] text-[#191918] transition-colors duration-200 dark:bg-[#0F0F10] dark:text-[#F5F4F0]">
    <!-- Skip to main content link for keyboard accessibility (R-32, R-39) -->
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#191918] focus:text-[#FAF9F6] dark:focus:bg-[#F5F4F0] dark:focus:text-[#0F0F10] focus:outline-none"
    >
      Skip to main content
    </a>

    <!-- Header & Navigation -->
    <TheHeader />

    <!-- Main Content Area -->
    <main id="main-content">
      <HeroSection />
      <MetricsBanner />
      <SkillsSection />
      <CaseStudiesSection />
      <ExperienceSection />
      <ContactSection />
    </main>

    <!-- Footer -->
    <TheFooter />
  </div>
</template>
