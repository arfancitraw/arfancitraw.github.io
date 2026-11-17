<script setup lang="ts">
import { ref } from 'vue'
import { portfolioData } from '~/data/portfolio'

const selectedStudyId = ref(portfolioData.caseStudies[0].id)

const selectStudy = (id: string) => {
  selectedStudyId.value = id
}
</script>

<template>
  <section
    id="case-studies"
    class="border-b py-16 md:py-24 border-[#E5E1D8] bg-[#F4F2EC] dark:border-[#2E2E33] dark:bg-[#141416] transition-colors duration-200"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="mb-12 max-w-3xl">
        <span class="block font-mono-code text-xs uppercase tracking-widest text-[#1E4D3A] dark:text-[#52B788] mb-2">
          Architectural Deep Dives
        </span>
        <h2 class="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#191918] dark:text-[#F5F4F0] mb-4">
          Featured Engineering Implementations
        </h2>
        <p class="text-sm sm:text-base text-[#57544E] dark:text-[#A3A099] leading-relaxed">
          Comprehensive production breakdowns across legacy monolith decoupling, high-throughput cloud pipelines, and enterprise compliance systems.
        </p>
      </div>

      <!-- Quick Selector Pills -->
      <div class="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Select case study">
        <button
          v-for="study in portfolioData.caseStudies"
          :key="study.id"
          type="button"
          role="tab"
          :aria-selected="selectedStudyId === study.id"
          @click="selectStudy(study.id)"
          class="h-11 px-4 text-xs font-mono-code uppercase tracking-wider transition-colors border text-left"
          :class="[
            selectedStudyId === study.id
              ? 'border-[#191918] bg-[#191918] text-[#FAF9F6] dark:border-[#F5F4F0] dark:bg-[#F5F4F0] dark:text-[#0F0F10] font-bold shadow-2xs'
              : 'border-[#E5E1D8] bg-[#FFFFFF] text-[#57544E] hover:border-[#191918] dark:border-[#2E2E33] dark:bg-[#18181A] dark:text-[#A3A099] dark:hover:border-[#F5F4F0]'
          ]"
        >
          {{ study.client }}
        </button>
      </div>

      <!-- Active Case Study Detail Box -->
      <div
        v-for="study in portfolioData.caseStudies"
        :key="study.id"
        v-show="selectedStudyId === study.id"
        class="border p-6 md:p-8 lg:p-10 border-[#E5E1D8] bg-[#FFFFFF] dark:border-[#2E2E33] dark:bg-[#18181A] shadow-sm"
        role="tabpanel"
      >
        <!-- Top Metadata Strip -->
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#E5E1D8] dark:border-[#2E2E33] mb-8">
          <div>
            <span class="block text-xs font-mono-code font-bold uppercase text-[#1E4D3A] dark:text-[#52B788] mb-1">
              {{ study.client }} ({{ study.period }})
            </span>
            <h3 class="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#191918] dark:text-[#F5F4F0]">
              {{ study.title }}
            </h3>
          </div>
          <div class="inline-flex items-center gap-2 px-3 py-1.5 border border-[#E5E1D8] bg-[#FAF9F6] dark:border-[#2E2E33] dark:bg-[#0F0F10]">
            <span class="text-xs font-mono-code text-[#191918] dark:text-[#F5F4F0]">
              Role: <strong>{{ study.role }}</strong>
            </span>
          </div>
        </div>

        <!-- Summary & Challenge vs Solution Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          
          <!-- Summary & Challenge -->
          <div class="lg:col-span-6 space-y-6">
            <div>
              <h4 class="text-xs font-mono-code font-bold uppercase tracking-wider text-[#57544E] dark:text-[#A3A099] mb-2">
                Context & Executive Overview
              </h4>
              <p class="text-sm leading-relaxed text-[#191918] dark:text-[#F5F4F0]">
                {{ study.summary }}
              </p>
            </div>

            <div class="p-4 border border-[#E5E1D8] bg-[#FAF9F6] dark:border-[#2E2E33] dark:bg-[#222225]">
              <h4 class="text-xs font-mono-code font-bold uppercase tracking-wider text-[#191918] dark:text-[#F5F4F0] mb-2">
                The Engineering Challenge
              </h4>
              <p class="text-xs sm:text-sm leading-relaxed text-[#57544E] dark:text-[#A3A099]">
                {{ study.challenge }}
              </p>
            </div>
          </div>

          <!-- Solution & Architecture -->
          <div class="lg:col-span-6 flex flex-col justify-between">
            <div class="p-4 border border-[#191918] bg-[#191918] text-[#FAF9F6] dark:border-[#F5F4F0] dark:bg-[#222225] dark:text-[#F5F4F0] mb-6">
              <h4 class="text-xs font-mono-code font-bold uppercase tracking-wider text-[#52B788] mb-2">
                The Architectural Solution
              </h4>
              <p class="text-xs sm:text-sm leading-relaxed text-[#F4F2EC] dark:text-[#A3A099]">
                {{ study.solution }}
              </p>
            </div>

            <!-- Tech Stack Tags -->
            <div>
              <h4 class="text-xs font-mono-code font-bold uppercase tracking-wider text-[#57544E] dark:text-[#A3A099] mb-2">
                Production Stack Employed
              </h4>
              <div class="flex flex-wrap gap-1.5">
                <span
                  v-for="tech in study.stack"
                  :key="tech"
                  class="px-2.5 py-1 text-xs font-mono-code border border-[#E5E1D8] bg-[#FAF9F6] text-[#191918] dark:border-[#2E2E33] dark:bg-[#222225] dark:text-[#F5F4F0]"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>

        </div>

        <!-- Measurable Outcomes & Impact Checklist -->
        <div class="pt-6 border-t border-[#E5E1D8] dark:border-[#2E2E33]">
          <h4 class="text-xs font-mono-code font-bold uppercase tracking-wider text-[#1E4D3A] dark:text-[#52B788] mb-4">
            Measurable Production Results
          </h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div
              v-for="(result, idx) in study.impact"
              :key="idx"
              class="flex items-start gap-3 p-3 border border-[#E5E1D8] bg-[#FAF9F6] dark:border-[#2E2E33] dark:bg-[#222225]"
            >
              <span class="flex h-5 w-5 shrink-0 items-center justify-center font-mono-code text-xs font-bold border border-[#1E4D3A] text-[#1E4D3A] dark:border-[#52B788] dark:text-[#52B788]">
                ✓
              </span>
              <span class="text-xs sm:text-sm text-[#191918] dark:text-[#F5F4F0] leading-relaxed">
                {{ result }}
              </span>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>
