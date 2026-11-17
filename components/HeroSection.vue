<script setup lang="ts">
import { portfolioData } from '~/data/portfolio'
</script>

<template>
  <section
    id="overview"
    class="relative border-b py-16 sm:py-20 md:py-24 lg:py-28 border-[#E5E1D8] bg-[#FAF9F6] dark:border-[#2E2E33] dark:bg-[#0F0F10] transition-colors duration-200 overflow-hidden"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
        
        <!-- Left Side: Editorial Typography, Simple Bio & CTAs -->
        <div class="lg:col-span-7 flex flex-col justify-center">
          
          <!-- Category Eyebrow with Dot -->
          <div class="mb-4 sm:mb-6 flex items-center gap-2">
            <span class="h-2 w-2 rounded-full bg-[#1E4D3A] dark:bg-[#52B788] animate-pulse" aria-hidden="true"></span>
            <span class="text-xs font-mono-code font-bold uppercase tracking-widest text-[#1E4D3A] dark:text-[#52B788]">
              Full Stack Developer
            </span>
          </div>

          <!-- Big Two-Line Headline with Accent on 2nd Line -->
          <h1 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-[#191918] dark:text-[#F5F4F0] leading-[1.05] mb-6">
            {{ portfolioData.personal.firstName }}<br />
            <span class="text-[#1E4D3A] dark:text-[#52B788]">{{ portfolioData.personal.lastName }}.</span>
          </h1>

          <!-- Clean Role Tagline with Dots -->
          <p class="font-mono-code text-sm sm:text-base font-semibold text-[#57544E] dark:text-[#A3A099] mb-6 flex flex-wrap items-center gap-2">
            <span>Full Stack Developer</span>
            <span>·</span>
            <span>Vue / Nuxt</span>
            <span>·</span>
            <span>Laravel & PHP</span>
            <span>·</span>
            <span>Cloud & APIs</span>
          </p>

          <!-- Simple, Human 2-Line Bio -->
          <p class="text-base sm:text-lg leading-relaxed text-[#57544E] dark:text-[#A3A099] mb-8 max-w-xl">
            {{ portfolioData.personal.shortBio }}
          </p>

          <!-- Action Buttons inspired by reference -->
          <div class="flex flex-wrap items-center gap-4">
            <a
              href="#case-studies"
              class="inline-flex h-12 items-center justify-center px-6 text-xs font-bold uppercase tracking-wider transition-all duration-200 border border-[#191918] bg-[#191918] text-[#FAF9F6] hover:bg-[#1E4D3A] hover:border-[#1E4D3A] dark:border-[#52B788] dark:bg-[#52B788] dark:text-[#0F0F10] dark:hover:bg-[#67C89A] dark:hover:border-[#67C89A] shadow-sm"
            >
              See what I've built →
            </a>
            <a
              href="#contact"
              class="inline-flex h-12 items-center justify-center px-6 text-xs font-semibold uppercase tracking-wider transition-colors border border-[#E5E1D8] bg-[#FFFFFF] text-[#191918] hover:border-[#191918] dark:border-[#2E2E33] dark:bg-[#18181A] dark:text-[#F5F4F0] dark:hover:border-[#F5F4F0]"
            >
              Get in touch ↗
            </a>
          </div>

        </div>

        <!-- Right Side: Portrait Character & Floating Speech Bubble -->
        <div class="lg:col-span-5 flex flex-col items-center justify-center relative pt-8 lg:pt-0">
          
          <!-- Floating Speech Bubble above portrait -->
          <div class="relative mb-4 flex flex-col items-center z-10 animate-bounce duration-1000">
            <div
              class="px-4 py-2 rounded-lg border text-xs font-mono-code font-semibold tracking-wide shadow-md border-[#E5E1D8] bg-[#FFFFFF] text-[#191918] dark:border-[#2E2E33] dark:bg-[#18181A] dark:text-[#F5F4F0]"
            >
              {{ portfolioData.personal.speechBubble }}
            </div>
            <!-- Speech bubble arrow / connector -->
            <div class="w-0.5 h-3 bg-[#E5E1D8] dark:bg-[#2E2E33]"></div>
            <div class="w-1.5 h-1.5 rounded-full bg-[#1E4D3A] dark:bg-[#52B788]"></div>
          </div>

          <!-- Portrait Image Frame -->
          <div class="relative w-64 sm:w-72 md:w-80 max-w-full">
            
            <!-- Soft ambient background aura -->
            <div
              class="absolute -inset-4 rounded-3xl bg-radial from-[#1E4D3A]/10 to-transparent dark:from-[#52B788]/15 dark:to-transparent blur-xl pointer-events-none"
              aria-hidden="true"
            ></div>

            <!-- Portrait Card with Smooth Rounded Edges -->
            <div
              class="relative overflow-hidden rounded-2xl border transition-all duration-300 border-[#E5E1D8] bg-[#FFFFFF] shadow-lg dark:border-[#2E2E33] dark:bg-[#18181A]"
            >
              <img
                src="/images/arfan-citra-wibowo.jpg"
                alt="Arfan Citra Wibowo - Full Stack Developer"
                width="320"
                height="400"
                fetchpriority="high"
                class="w-full h-auto object-cover object-top filter hover:scale-102 transition-transform duration-300"
              />

              <!-- Bottom subtle badge -->
              <div class="px-4 py-2.5 border-t flex items-center justify-between border-[#E5E1D8] bg-[#FAF9F6] dark:border-[#2E2E33] dark:bg-[#141416]">
                <span class="text-[11px] font-mono-code font-bold uppercase text-[#191918] dark:text-[#F5F4F0]">
                  {{ portfolioData.personal.name }}
                </span>
                <span class="text-[11px] font-mono-code text-[#1E4D3A] dark:text-[#52B788]">
                  Bandung, ID
                </span>
              </div>
            </div>

            <!-- Soft ground shadow below the image -->
            <div
              class="mx-auto w-3/4 h-3 mt-3 rounded-full bg-black/10 dark:bg-black/40 blur-md pointer-events-none"
              aria-hidden="true"
            ></div>

          </div>

        </div>

      </div>
    </div>
  </section>
</template>
