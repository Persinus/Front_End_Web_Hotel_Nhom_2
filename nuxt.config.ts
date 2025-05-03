
module.exports = defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  plugins: [
    '~/plugins/axios.js',
    '~/plugins/vuestic-ui.ts',
    '~/plugins/qrcode.js',
    '~/plugins/bootstrap.client.ts',
    '~/plugins/pinia.js',
  ],
  pages: true,
  runtimeConfig: {
    public: {
      apiBase: 'http://nhom2webkhachsan.runasp.net/api',
    },
  },
  routeRules: {
    // prerender index route by default
    '/': { prerender: true },
  },

});
