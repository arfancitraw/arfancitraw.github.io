<script setup lang="ts">
import { portfolioData } from '~/data/portfolio'
</script>

<template>
  <section
    id="metrics"
    class="border-b py-12 md:py-16 border-[#E5E1D8] bg-[#F4F2EC] dark:border-[#2E2E33] dark:bg-[#141416] transition-colors duration-200"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span class="block font-mono-code text-xs uppercase tracking-widest text-[#1E4D3A] dark:text-[#52B788] mb-1">
            Production Track Record
          </span>
          <h2 class="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#191918] dark:text-[#F5F4F0]">
            Measurable Engineering Impact
          </h2>
        </div>
        <div class="text-xs font-mono-code text-[#57544E] dark:text-[#A3A099]">
          Audited via Google Lighthouse, SpeedCurve RUM, and AWS CloudWatch
        </div>
      </div>

      <!-- Metrics Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div
          v-for="metric in portfolioData.keyMetrics"
          :key="metric.label"
          class="flex flex-col justify-between p-6 border transition-colors border-[#E5E1D8] bg-[#FFFFFF] hover:border-[#191918] dark:border-[#2E2E33] dark:bg-[#18181A] dark:hover:border-[#F5F4F0] shadow-2xs"
        >
          <div>
            <div class="font-mono-code text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#191918] dark:text-[#F5F4F0] mb-2">
              {{ metric.value }}
            </div>
            <h3 class="text-sm font-bold uppercase tracking-wide text-[#1E4D3A] dark:text-[#52B788] mb-2">
              {{ metric.label }}
            </h3>
            <p class="text-xs leading-relaxed text-[#57544E] dark:text-[#A3A099] mb-4">
              {{ metric.detail }}
            </p>
          </div>
          
          <div class="pt-3 border-t border-[#E5E1D8] dark:border-[#2E2E33]">
            <span class="block text-[11px] font-mono-code text-[#57544E] dark:text-[#A3A099]">
              Source: {{ metric.source }}
            </span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
