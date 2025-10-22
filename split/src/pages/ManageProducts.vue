<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">

    <section class="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 items-center text-center md:text-left">

          <div>
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-black tracking-tight">
              Professional
            </h2>
            <h2 class="gradient-text text-3xl sm:text-4xl lg:text-6xl">Telegram Solution</h2>
            <p class="text-gray-500 text-sm sm:text-base mt-4 mb-6 max-w-md mx-auto md:mx-0">
              Secure and fast Telegram marketplace for Stars, Premium, and exclusive usernames — all in one place.
            </p>
            <div class="flex justify-center md:justify-start">
              <a href="https://split.tg" target="_blank" rel="noopener noreferrer">
                <button
                  class="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors flex items-center justify-center text-sm sm:text-base w-full sm:w-auto"
                >
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z"
                    />
                  </svg>
                  Getting started
                </button>
              </a>
            </div>
          </div>

          <div class="flex justify-center md:justify-end">
            <iframe
              src="https://lottie.host/embed/d523fdf4-5e1e-4f2f-a583-32d4dbf8aac0/KuwqlMmWl5.lottie"
              class="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-64 sm:h-80 md:h-96 lg:h-[500px] border-0"
            ></iframe>
          </div>

        </div>
      </div>
    </section>

    <hr class="border-gray-200">

    <section class="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white flex-1">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h3 class="text-2xl sm:text-3xl font-bold text-black mb-3">Our services</h3>
          <p class="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">
            Comprehensive hosting and Telegram solutions designed to grow your
            business with reliability and performance.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <a
            v-for="service in services"
            :key="service.title"
            :href="service.link"
            class="shadcn-card bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all duration-300 block text-center sm:text-left"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mx-auto sm:mx-0 mb-4">
              <component :is="service.icon" class="w-6 h-6 text-gray-700" />
            </div>
            <h4 class="text-lg sm:text-xl font-bold text-gray-900 mb-2">
              {{ service.title }}
            </h4>
            <p class="text-gray-600 text-sm sm:text-base">{{ service.description }}</p>
          </a>
        </div>
      </div>
    </section>

    <footer class="bg-white py-10 sm:py-12 px-4 sm:px-6 lg:px-8 border-t">
      <div class="max-w-7xl mx-auto flex flex-col items-center text-center space-y-4 sm:space-y-5">
        <h5 class="gradient-text1 text-xl sm:text-2xl font-bold">Split</h5>
        <p class="text-gray-600 max-w-xl text-sm sm:text-base leading-relaxed">
          Professional Telegram marketplace for Stars, Premium, and exclusive usernames — fast, secure, and reliable.  
          Everything you need to enhance your Telegram experience in one place.
        </p>
        <div class="flex space-x-4 mt-2">
          <a href="https://steamcommunity.com/profiles/76561199802668743/" target="_blank" class="text-gray-600 hover:text-gray-900">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" />
            </svg>
          </a>
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCKCGmTtLlFNZXQgKvzvZSrsnBSHgQVVXKJHRfVmjsWhFKSQFxntfNGWlXvVDKhCLSBfhmgV" target="_blank" class="text-gray-600 hover:text-gray-900">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 28 28">
              <path d="M2 14C2 7.373 7.373 2 14 2s12 5.373 12 12s-5.373 12-12 12a11.95 11.95 0 0 1-5.637-1.404l-4.77 1.357a1.25 1.25 0 0 1-1.544-1.544l1.356-4.77A11.95 11.95 0 0 1 2 14m7.5-2.25c0 .414.336.75.75.75h7.5a.75.75 0 0 0 0-1.5h-7.5a.75.75 0 0 0-.75.75m.75 3.75a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5z" />
            </svg>
          </a>
        </div>
        <p class="text-gray-500 text-xs sm:text-sm">© 2025 Split Limited</p>
      </div>
    </footer>

  </div>
</template>

<script setup>
import { StarIcon, UserIcon, CheckBadgeIcon } from '@heroicons/vue/24/solid'
const services = [
  {
    title: 'Buy Telegram Stars',
    description: 'Purchase stars for your Telegram account quickly and safely to stand out among others.',
    icon: StarIcon,
    link: 'https://split.tg/store'
  },
  {
    title: 'Buy Unique Usernames',
    description: 'Get your desired username for Telegram or other platforms and stand out from the crowd.',
    icon: UserIcon,
    link: 'https://split.tg/swap'
  },
  {
    title: 'Premium Access',
    description: 'Unlock premium features, special privileges, and priority support with a premium account.',
    icon: CheckBadgeIcon,
    link: 'https://split.tg/store'
  }
];
</script>

<style>
@import url('https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css');

.gradient-text {
  font-weight: bold;
  background: linear-gradient(90deg, #3b82f6, #2563eb, #1d4ed8);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient-animation 3s ease infinite;
  line-height: 1.3;
}

.gradient-text1 {
  font-weight: bold;
  background: linear-gradient(90deg, #3b82f6, #2563eb, #1d4ed8);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient-animation 3s ease infinite;
}

@keyframes gradient-animation {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.shadcn-card {
  border: 1px solid rgb(230, 230, 230);
  box-shadow: 0 2px 5px rgb(0 0 0 / .05);
  border-radius: 10px;
  transition: all 0.2s ease;
}

.shadcn-card:hover {
  transform: translateY(-3px);
}

@media (max-width: 480px) {
  .gradient-text {
    font-size: 1.8rem !important;
  }
  .gradient-text1 {
    font-size: 1.1rem !important;
  }
  iframe{
    display: none;
  }
}
</style>
