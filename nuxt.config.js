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
  buildDir: 'nuxt-dist',
  buildModules: ['@nuxtjs/tailwindcss'],
  modules: [
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: {
            apiKey: "AIzaSyCpB0-I0ZwuJODKBhzmDFcj2EHwLQV6wFo",
            authDomain: "hire-latam.firebaseapp.com",
            projectId: "hire-latam",
            storageBucket: "hire-latam.appspot.com",
            messagingSenderId: "1062476652280",
            appId: "1:1062476652280:web:b2479c70eef4b33c23650d",
            measurementId: "G-0GLY8MBQL0"
          }
        },
        services: {
          firestore: true
        }
      }
    ]
  ],
}
