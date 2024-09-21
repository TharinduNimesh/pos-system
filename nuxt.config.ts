import path from 'path';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@pinia/nuxt'],
  tailwindcss: {
    cssPath: path.resolve(__dirname, 'assets/css/tailwind.css'),
  configPath: path.resolve(__dirname, 'tailwind.config.ts'),
  },
  ssr: false,
  target: 'static',
})