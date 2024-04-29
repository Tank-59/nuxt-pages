// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    baseURL: '/nuxt-pages',
    // buildAssetsDir: 'nuxt_assets', //Github Pages 构建部署时候，会忽略隐藏文件比如.开头文件，_开头的文件
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
  // experimental: {
  //   payloadExtraction: false, // github action部署忽略，关闭后将采用传统的服务器端渲染方式
  // },
})
