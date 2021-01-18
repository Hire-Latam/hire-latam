export default {
  head: {
    title: 'Hire Latam',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Hire excellent Product Engineering roles in Latin America'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    link: [{ rel: 'preconnect', href: 'https://fonts.gstatic.com' }],
    link: [{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins&display=swap' }],
  },
  modules: ['@nuxtjs/axios'],
  buildDir: 'nuxt-dist',
  buildModules: ['@nuxtjs/tailwindcss'],
  axios: {
    baseURL: process.env.URL,
  },
}
