<template>
  <div class="min-h-screen bg-gray-50">

    <!-- Hero Section -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <!-- Left Content -->
          <div>
            <h2 class="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl text-black">
              Professional
            </h2>
            <h2 class="gradient-text">
              Telegram Solution
            </h2>
            <p class="text-gray-500 text-base mt-4 mb-4">
              Secure and fast Telegram marketplace for Stars, Premium, and exclusive usernames — all in one place.
            </p>
            <div class="flex space-x-4 btn-primary h-8 text-sm">
              <a href="https://split.tg" target="_blank" rel="noopener noreferrer">
  <button
    class="bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors flex items-center"
  >
    <svg
      class="w-5 h-5 mr-2"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
      />
    </svg>
    Getting started
  </button>
</a>

            </div>
          </div>
          <iframe src="https://lottie.host/embed/d523fdf4-5e1e-4f2f-a583-32d4dbf8aac0/KuwqlMmWl5.lottie"></iframe>
        </div>
      </div>
    </section>

    <hr>

    <!-- Services Section -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h3 class="text-2xl font-bold text-foreground mb-4 text-black">Our services</h3>
          <p class="text-muted-foreground max-w-2xl mx-auto text-gray-500">
            Comprehensive hosting and email solutions designed to grow your
            business with reliability and performance.
          </p>
        </div>
        <!-- Service Cards -->
<div class="grid md:grid-cols-3 gap-8">
  <a
    v-for="service in services"
    :key="service.title"
    :href="service.link"
    class="shadcn-card bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all duration-300 block"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div class="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
      <component :is="service.icon" class="w-6 h-6 text-gray-700" />
    </div>
    <h4 class="text-xl font-bold text-gray-900 mb-2">
      {{ service.title }}
    </h4>
    <p class="text-gray-600">{{ service.description }}</p>
  </a>
</div>
      </div>
    </section>

    <!-- Footer -->
<footer class="bg-white py-12 px-4 sm:px-6 lg:px-8 border-t">
  <div class="max-w-7xl mx-auto flex flex-col items-center text-center space-y-4">
    <!-- Company Info -->
    <h5 class="gradient-text1 text-2xl font-bold">Split</h5>
    <p class="text-gray-600 max-w-xl">
      Professional Telegram marketplace for Stars, Premium, and exclusive usernames — fast, secure, and reliable.  
      Everything you need to enhance your Telegram experience in one place.
    </p>
    <!-- Social Icons -->
    <div class="flex space-x-4">
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
    <!-- Copyright -->
    <p class="text-gray-500 text-sm">2025 Split limited</p>
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

<script>
// Icon components
export default {
  components: {
    EmailIcon: {
      template: `
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      `
    },
    DomainIcon: {
      template: `
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      `
    },
    ServerIcon: {
      template: `
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
            d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      `
    }
  }
};
</script>

<style>
@import url('https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css');

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.gradient-text {
  font-size: 2.5rem;
  font-weight: bold;
  background: linear-gradient(90deg, #3b82f6, #2563eb, #1d4ed8);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient-animation 3s ease infinite;
}

.gradient-text1 {
  font-size: 1.2rem;
  font-weight: bold;
  background: linear-gradient(90deg, #3b82f6, #2563eb, #1d4ed8);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient-animation 3s ease infinite;
  margin-bottom: 15px;
}

@keyframes gradient-animation {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

iframe{
  position: absolute;
  right: 400px;
  height: 1000px;
}

.shadcn-card{
  background-color: hsl(var(--card));
    color: hsl(var(--card-foreground));
    border-radius: 10px;
    border: 1px solid rgb(224, 224, 224);
    box-shadow: 0 2px 5px rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);
    transition: all .2s ease-in-out;
    cursor: pointer;
}
</style>