<script setup lang="ts">
import { ref, computed } from 'vue'
import { portfolioData } from '~/data/portfolio'

const activeCategory = ref('all')

const filteredSkills = computed(() => {
  if (activeCategory.value === 'all') {
    return portfolioData.skills
  }
  return portfolioData.skills.filter((skill) => skill.category === activeCategory.value)
})

const setCategory = (catId: string) => {
  activeCategory.value = catId
}
</script>

<template>
  <section
    id="skills"
    class="border-b py-16 md:py-24 border-[#E5E1D8] bg-[#FAF9F6] dark:border-[#2E2E33] dark:bg-[#0F0F10] transition-colors duration-200"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="mb-10 max-w-3xl">
        <span class="block font-mono-code text-xs uppercase tracking-widest text-[#1E4D3A] dark:text-[#52B788] mb-2">
          Technical Inventory
        </span>
        <h2 class="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#191918] dark:text-[#F5F4F0] mb-4">
          Core Competencies & Stack Mastery
        </h2>
        <p class="text-sm sm:text-base text-[#57544E] dark:text-[#A3A099] leading-relaxed">
          Grounded in 7+ years of engineering across distributed consumer web architectures, high-traffic APIs, and enterprise governance platforms.
        </p>
      </div>

      <!-- Category Filter Tabs -->
      <div
        class="mb-8 flex flex-wrap gap-2"
        role="tablist"
        aria-label="Filter skills by technical domain"
      >
        <button
          v-for="cat in portfolioData.skillCategories"
          :key="cat.id"
          type="button"
          role="tab"
          :aria-selected="activeCategory === cat.id"
          @click="setCategory(cat.id)"
          class="h-10 px-4 text-xs font-mono-code uppercase tracking-wider transition-colors border text-left"
          :class="[
            activeCategory === cat.id
              ? 'border-[#191918] bg-[#191918] text-[#FAF9F6] dark:border-[#F5F4F0] dark:bg-[#F5F4F0] dark:text-[#0F0F10] font-bold shadow-2xs'
              : 'border-[#E5E1D8] bg-[#FFFFFF] text-[#57544E] hover:border-[#191918] dark:border-[#2E2E33] dark:bg-[#18181A] dark:text-[#A3A099] dark:hover:border-[#F5F4F0]'
          ]"
        >
          {{ cat.label }}
        </button>
      </div>

      <!-- Skills Cards Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div
          v-for="skill in filteredSkills"
          :key="skill.name"
          class="group flex flex-col justify-between p-4 border transition-all duration-200 border-[#E5E1D8] bg-[#FFFFFF] hover:border-[#191918] dark:border-[#2E2E33] dark:bg-[#18181A] dark:hover:border-[#F5F4F0] shadow-2xs"
        >
          <div>
            <div class="flex items-start justify-between gap-2 mb-2">
              <h3 class="text-base font-bold text-[#191918] dark:text-[#F5F4F0] group-hover:text-[#1E4D3A] dark:group-hover:text-[#52B788] transition-colors">
                {{ skill.name }}
              </h3>
              <span
                v-if="skill.highlight"
                class="inline-block px-1.5 py-0.5 text-[10px] font-mono-code font-bold uppercase border border-[#1E4D3A] text-[#1E4D3A] dark:border-[#52B788] dark:text-[#52B788]"
                title="Primary architectural pillar"
              >
                Lead
              </span>
            </div>
            <p class="text-xs font-mono-code text-[#57544E] dark:text-[#A3A099]">
              {{ skill.level }}
            </p>
          </div>

          <div class="mt-4 pt-2 border-t border-[#E5E1D8] dark:border-[#2E2E33] flex items-center justify-between">
            <span class="text-[10px] uppercase font-mono-code text-[#57544E] dark:text-[#A3A099]">
              {{ skill.category }}
            </span>
            <span class="text-[10px] text-[#1E4D3A] dark:text-[#52B788] font-mono-code">
              Production Verified
            </span>
          </div>
        </div>
      </div>

      <!-- Architectural Capabilities Summary Strip -->
      <div class="mt-12 p-6 sm:p-8 border border-[#E5E1D8] bg-[#F4F2EC] dark:border-[#2E2E33] dark:bg-[#141416]">
        <h4 class="text-sm font-bold uppercase font-mono-code text-[#191918] dark:text-[#F5F4F0] mb-3">
          Engineering Scope & Architectural Breadth
        </h4>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#57544E] dark:text-[#A3A099] leading-relaxed">
          <div>
            <strong class="block text-[#191918] dark:text-[#F5F4F0] mb-1">Decoupled Systems Architecture:</strong>
            Transitioning legacy monoliths into scalable backend APIs paired with modern Nuxt 3 (SSR/SPA) frontends, minimizing database contention and accelerating feature delivery.
          </div>
          <div>
            <strong class="block text-[#191918] dark:text-[#F5F4F0] mb-1">Core Web Vitals Engineering:</strong>
            Systematic reduction of Largest Contentful Paint (LCP) and Cumulative Layout Shift (CLS) through SSR streaming, resource prioritization, critical asset inlining, and edge caching.
          </div>
          <div>
            <strong class="block text-[#191918] dark:text-[#F5F4F0] mb-1">Asynchronous Resilience & Queues:</strong>
            Architecting AWS SQS message pipelines to buffer high-volume transactions away from critical database engines, ensuring fault tolerance during traffic surges.
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
