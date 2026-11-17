<script setup lang="ts">
import { portfolioData } from '~/data/portfolio'
</script>

<template>
  <section
    id="experience"
    class="border-b py-16 md:py-24 border-[#E5E1D8] bg-[#FAF9F6] dark:border-[#2E2E33] dark:bg-[#0F0F10] transition-colors duration-200"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="mb-12 max-w-3xl">
        <span class="block font-mono-code text-xs uppercase tracking-widest text-[#1E4D3A] dark:text-[#52B788] mb-2">
          Career Trajectory
        </span>
        <h2 class="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#191918] dark:text-[#F5F4F0] mb-4">
          Professional Work Experience
        </h2>
        <p class="text-sm sm:text-base text-[#57544E] dark:text-[#A3A099] leading-relaxed">
          Seven years of continuous production delivery spanning high-throughput consumer web platforms, distributed cloud backends, and public sector enterprise governance.
        </p>
      </div>

      <!-- Experience Cards -->
      <div class="space-y-8">
        <div
          v-for="(exp, index) in portfolioData.experiences"
          :key="exp.company"
          class="border p-6 sm:p-8 transition-colors border-[#E5E1D8] bg-[#FFFFFF] dark:border-[#2E2E33] dark:bg-[#18181A] shadow-2xs"
        >
          <!-- Top Row -->
          <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-[#E5E1D8] dark:border-[#2E2E33] mb-6">
            <div>
              <div class="flex items-center gap-3 mb-1">
                <span class="font-mono-code text-xs font-bold px-2 py-0.5 border border-[#191918] bg-[#191918] text-[#FAF9F6] dark:border-[#F5F4F0] dark:bg-[#F5F4F0] dark:text-[#0F0F10]">
                  0{{ index + 1 }}
                </span>
                <span class="text-sm font-bold uppercase font-mono-code text-[#1E4D3A] dark:text-[#52B788]">
                  {{ exp.company }}
                </span>
              </div>
              <h3 class="text-xl sm:text-2xl font-extrabold text-[#191918] dark:text-[#F5F4F0]">
                {{ exp.role }}
              </h3>
            </div>
            
            <div class="text-left sm:text-right">
              <span class="block text-xs font-mono-code font-semibold text-[#191918] dark:text-[#F5F4F0]">
                {{ exp.period }}
              </span>
              <span class="block text-xs text-[#57544E] dark:text-[#A3A099]">
                {{ exp.location }}
              </span>
            </div>
          </div>

          <!-- Bullets -->
          <ul class="space-y-3 mb-6">
            <li
              v-for="(bullet, bIdx) in exp.bullets"
              :key="bIdx"
              class="flex items-start gap-3 text-xs sm:text-sm text-[#191918] dark:text-[#F5F4F0] leading-relaxed"
            >
              <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1E4D3A] dark:bg-[#52B788]" aria-hidden="true"></span>
              <span>{{ bullet }}</span>
            </li>
          </ul>

          <!-- Stack Tags -->
          <div class="pt-4 border-t border-[#E5E1D8] dark:border-[#2E2E33] flex flex-wrap items-center gap-2">
            <span class="text-xs font-mono-code text-[#57544E] dark:text-[#A3A099] mr-1">
              Stack:
            </span>
            <span
              v-for="item in exp.stack"
              :key="item"
              class="px-2 py-0.5 text-xs font-mono-code border border-[#E5E1D8] bg-[#FAF9F6] text-[#191918] dark:border-[#2E2E33] dark:bg-[#222225] dark:text-[#F5F4F0]"
            >
              {{ item }}
            </span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
