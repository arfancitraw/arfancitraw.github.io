<script setup lang="ts">
import { ref, reactive } from 'vue'
import { portfolioData } from '~/data/portfolio'

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const errors = reactive({
  name: '',
  email: '',
  message: ''
})

const formState = ref<'idle' | 'loading' | 'success' | 'error'>('idle')
const errorMessage = ref('')

const validateForm = () => {
  let isValid = true
  errors.name = ''
  errors.email = ''
  errors.message = ''

  if (!form.name.trim()) {
    errors.name = 'Please provide your name.'
    isValid = false
  }

  if (!form.email.trim()) {
    errors.email = 'Please provide your email address.'
    isValid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address.'
    isValid = false
  }

  if (!form.message.trim()) {
    errors.message = 'Please provide a brief message or project inquiry.'
    isValid = false
  } else if (form.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters long.'
    isValid = false
  }

  return isValid
}

const handleSubmit = async () => {
  if (!validateForm()) {
    return
  }

  formState.value = 'loading'
  errorMessage.value = ''

  try {
    await new Promise((resolve) => setTimeout(resolve, 800))
    formState.value = 'success'
    form.name = ''
    form.email = ''
    form.subject = ''
    form.message = ''
  } catch (err) {
    formState.value = 'error'
    errorMessage.value = 'An unexpected error occurred. Please reach out directly via email.'
  }
}

const resetFormState = () => {
  formState.value = 'idle'
}
</script>

<template>
  <section
    id="contact"
    class="border-b py-16 md:py-24 border-[#E5E1D8] bg-[#F4F2EC] dark:border-[#2E2E33] dark:bg-[#141416] transition-colors duration-200"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="mb-12 max-w-3xl">
        <span class="block font-mono-code text-xs uppercase tracking-widest text-[#1E4D3A] dark:text-[#52B788] mb-2">
          Direct Channels
        </span>
        <h2 class="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#191918] dark:text-[#F5F4F0] mb-4">
          Start an Architectural Conversation
        </h2>
        <p class="text-sm sm:text-base text-[#57544E] dark:text-[#A3A099] leading-relaxed">
          Open to senior engineering roles, technical leadership, monolith modernization initiatives, and distributed international contract or permanent opportunities.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <!-- Direct Contacts & Social Presence (Left) -->
        <div class="lg:col-span-5 space-y-4">
          
          <!-- Contact Card -->
          <div class="border p-6 border-[#E5E1D8] bg-[#FFFFFF] dark:border-[#2E2E33] dark:bg-[#18181A] shadow-2xs">
            <h3 class="text-xs font-mono-code font-bold uppercase tracking-wider text-[#57544E] dark:text-[#A3A099] mb-4">
              Direct Contact Details
            </h3>

            <div class="space-y-4">
              <!-- Email -->
              <div>
                <span class="block text-xs text-[#57544E] dark:text-[#A3A099] mb-0.5">Direct Email</span>
                <a
                  :href="`mailto:${portfolioData.personal.email}`"
                  class="font-mono-code text-sm font-bold text-[#191918] hover:text-[#1E4D3A] dark:text-[#F5F4F0] dark:hover:text-[#52B788] transition-colors"
                >
                  {{ portfolioData.personal.email }}
                </a>
              </div>

              <!-- Location & Timezone -->
              <div>
                <span class="block text-xs text-[#57544E] dark:text-[#A3A099] mb-0.5">Location & Collaboration</span>
                <span class="text-sm text-[#191918] dark:text-[#F5F4F0]">
                  {{ portfolioData.personal.location }} (Experienced collaborating across global timezones)
                </span>
              </div>
            </div>
          </div>

          <!-- Social Profiles Block -->
          <div class="border p-6 border-[#E5E1D8] bg-[#FFFFFF] dark:border-[#2E2E33] dark:bg-[#18181A] shadow-2xs">
            <h3 class="text-xs font-mono-code font-bold uppercase tracking-wider text-[#57544E] dark:text-[#A3A099] mb-4">
              Verified Professional Profiles
            </h3>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a
                :href="portfolioData.personal.socials.linkedin"
                target="_blank"
                rel="noopener noreferrer"
                class="flex flex-col items-center justify-center p-3 text-center border transition-colors border-[#E5E1D8] bg-[#FAF9F6] hover:border-[#191918] dark:border-[#2E2E33] dark:bg-[#222225] dark:hover:border-[#F5F4F0]"
                aria-label="Visit LinkedIn Profile"
              >
                <span class="font-mono-code text-xs font-bold text-[#191918] dark:text-[#F5F4F0]">LinkedIn</span>
                <span class="text-[10px] text-[#57544E] dark:text-[#A3A099]">/in/arfancitraw</span>
              </a>

              <a
                :href="portfolioData.personal.socials.github"
                target="_blank"
                rel="noopener noreferrer"
                class="flex flex-col items-center justify-center p-3 text-center border transition-colors border-[#E5E1D8] bg-[#FAF9F6] hover:border-[#191918] dark:border-[#2E2E33] dark:bg-[#222225] dark:hover:border-[#F5F4F0]"
                aria-label="Visit GitHub Profile"
              >
                <span class="font-mono-code text-xs font-bold text-[#191918] dark:text-[#F5F4F0]">GitHub</span>
                <span class="text-[10px] text-[#57544E] dark:text-[#A3A099]">@arfancitraw</span>
              </a>

              <a
                :href="portfolioData.personal.socials.behance"
                target="_blank"
                rel="noopener noreferrer"
                class="flex flex-col items-center justify-center p-3 text-center border transition-colors border-[#E5E1D8] bg-[#FAF9F6] hover:border-[#191918] dark:border-[#2E2E33] dark:bg-[#222225] dark:hover:border-[#F5F4F0]"
                aria-label="Visit Behance Profile"
              >
                <span class="font-mono-code text-xs font-bold text-[#191918] dark:text-[#F5F4F0]">Behance</span>
                <span class="text-[10px] text-[#57544E] dark:text-[#A3A099]">@arfanwibowo</span>
              </a>
            </div>
          </div>

        </div>

        <!-- Interactive Contact Form (Right) -->
        <div class="lg:col-span-7">
          <div class="border p-6 sm:p-8 border-[#E5E1D8] bg-[#FFFFFF] dark:border-[#2E2E33] dark:bg-[#18181A] shadow-2xs">
            
            <h3 class="text-base font-bold uppercase tracking-tight text-[#191918] dark:text-[#F5F4F0] mb-2">
              Send an Engineering Inquiry
            </h3>
            <p class="text-xs text-[#57544E] dark:text-[#A3A099] mb-6">
              Use this form to submit a project consultation request, squad leadership inquiry, or technical availability check.
            </p>

            <!-- Success State -->
            <div
              v-if="formState === 'success'"
              class="p-6 border border-[#1E4D3A] bg-[#FAF9F6] dark:border-[#52B788] dark:bg-[#222225] mb-4 text-center"
              role="alert"
            >
              <div class="flex justify-center mb-2">
                <span class="flex h-8 w-8 items-center justify-center rounded-full border border-[#1E4D3A] text-[#1E4D3A] dark:border-[#52B788] dark:text-[#52B788] font-bold">
                  ✓
                </span>
              </div>
              <h4 class="text-base font-bold text-[#191918] dark:text-[#F5F4F0] mb-1">
                Inquiry Transmitted Successfully
              </h4>
              <p class="text-xs text-[#57544E] dark:text-[#A3A099] mb-4">
                Thank you for reaching out. I review incoming technical communications promptly and will respond to your provided address.
              </p>
              <button
                type="button"
                @click="resetFormState"
                class="px-4 py-2 text-xs font-mono-code uppercase font-semibold border border-[#191918] bg-[#191918] text-[#FAF9F6] dark:border-[#F5F4F0] dark:bg-[#F5F4F0] dark:text-[#0F0F10]"
              >
                Send Another Message
              </button>
            </div>

            <!-- Error State -->
            <div
              v-if="formState === 'error'"
              class="p-4 border border-red-600 bg-red-50 text-red-900 dark:bg-red-950/40 dark:text-red-200 mb-6 text-xs"
              role="alert"
            >
              {{ errorMessage }}
            </div>

            <!-- Form -->
            <form
              v-if="formState !== 'success'"
              @submit.prevent="handleSubmit"
              class="space-y-4"
              novalidate
            >
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <!-- Name -->
                <div>
                  <label for="contact-name" class="block text-xs font-mono-code font-bold uppercase text-[#191918] dark:text-[#F5F4F0] mb-1">
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    v-model="form.name"
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    class="w-full h-11 px-3 text-sm border bg-[#FAF9F6] text-[#191918] placeholder:text-[#57544E]/60 focus:bg-[#FFFFFF] dark:border-[#2E2E33] dark:bg-[#222225] dark:text-[#F5F4F0] dark:placeholder:text-[#A3A099]/60 dark:focus:bg-[#18181A] transition-colors"
                    :class="errors.name ? 'border-red-600 dark:border-red-500' : 'border-[#E5E1D8]'"
                  />
                  <span v-if="errors.name" class="block mt-1 text-[11px] text-red-600 dark:text-red-400 font-mono-code">
                    {{ errors.name }}
                  </span>
                </div>

                <!-- Email -->
                <div>
                  <label for="contact-email" class="block text-xs font-mono-code font-bold uppercase text-[#191918] dark:text-[#F5F4F0] mb-1">
                    Email Address *
                  </label>
                  <input
                    id="contact-email"
                    v-model="form.email"
                    type="email"
                    required
                    placeholder="e.g. alex@company.com"
                    class="w-full h-11 px-3 text-sm border bg-[#FAF9F6] text-[#191918] placeholder:text-[#57544E]/60 focus:bg-[#FFFFFF] dark:border-[#2E2E33] dark:bg-[#222225] dark:text-[#F5F4F0] dark:placeholder:text-[#A3A099]/60 dark:focus:bg-[#18181A] transition-colors"
                    :class="errors.email ? 'border-red-600 dark:border-red-500' : 'border-[#E5E1D8]'"
                  />
                  <span v-if="errors.email" class="block mt-1 text-[11px] text-red-600 dark:text-red-400 font-mono-code">
                    {{ errors.email }}
                  </span>
                </div>
              </div>

              <!-- Subject -->
              <div>
                <label for="contact-subject" class="block text-xs font-mono-code font-bold uppercase text-[#191918] dark:text-[#F5F4F0] mb-1">
                  Subject / Scope (Optional)
                </label>
                <input
                  id="contact-subject"
                  v-model="form.subject"
                  type="text"
                  placeholder="e.g. Technical Squad Architecture Consultation"
                  class="w-full h-11 px-3 text-sm border border-[#E5E1D8] bg-[#FAF9F6] text-[#191918] placeholder:text-[#57544E]/60 focus:bg-[#FFFFFF] dark:border-[#2E2E33] dark:bg-[#222225] dark:text-[#F5F4F0] dark:placeholder:text-[#A3A099]/60 dark:focus:bg-[#18181A] transition-colors"
                />
              </div>

              <!-- Message -->
              <div>
                <label for="contact-message" class="block text-xs font-mono-code font-bold uppercase text-[#191918] dark:text-[#F5F4F0] mb-1">
                  Message & Requirements *
                </label>
                <textarea
                  id="contact-message"
                  v-model="form.message"
                  rows="4"
                  required
                  placeholder="Outline your engineering scope, performance goals, or team timelines..."
                  class="w-full p-3 text-sm border bg-[#FAF9F6] text-[#191918] placeholder:text-[#57544E]/60 focus:bg-[#FFFFFF] dark:border-[#2E2E33] dark:bg-[#222225] dark:text-[#F5F4F0] dark:placeholder:text-[#A3A099]/60 dark:focus:bg-[#18181A] transition-colors"
                  :class="errors.message ? 'border-red-600 dark:border-red-500' : 'border-[#E5E1D8]'"
                ></textarea>
                <span v-if="errors.message" class="block mt-1 text-[11px] text-red-600 dark:text-red-400 font-mono-code">
                  {{ errors.message }}
                </span>
              </div>

              <!-- Submit Button -->
              <div>
                <button
                  type="submit"
                  :disabled="formState === 'loading'"
                  class="inline-flex h-12 w-full sm:w-auto items-center justify-center px-8 text-xs font-bold uppercase tracking-wider transition-colors border border-[#191918] bg-[#191918] text-[#FAF9F6] hover:bg-[#1E4D3A] hover:border-[#1E4D3A] disabled:opacity-60 dark:border-[#F5F4F0] dark:bg-[#F5F4F0] dark:text-[#0F0F10] dark:hover:bg-[#52B788] dark:hover:border-[#52B788]"
                >
                  <span v-if="formState === 'loading'" class="flex items-center gap-2">
                    <span class="h-3 w-3 animate-spin rounded-full border-2 border-current border-t-transparent"></span>
                    Transmitting...
                  </span>
                  <span v-else>
                    Transmit Inquiry
                  </span>
                </button>
              </div>
            </form>

          </div>
        </div>

      </div>

    </div>
  </section>
</template>
