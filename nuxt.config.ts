// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    baseURL: '/nuxt-pages',
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'keywords', content: '关键词1, nuxt3, 关键词3' },
      ]
    },
  },
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@ant-design-vue/nuxt'
  ],
  build: {
    transpile: ['pinia-plugin-persistedstate'],
  },
  plugins: [
    {
      src: '~/plugins/gsap.client.ts',
      mode: "client",
    }
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/css/main.scss" as *;'
        }
      }
    }
  }
    // experimental: {
  //   payloadExtraction: false, // github action部署忽略，关闭后将采用传统的服务器端渲染方式
  // },
})