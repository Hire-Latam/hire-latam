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
          apiKey: process.env.FIREBASE_API_KEY,
          authDomain: process.env.FIREBASE_AUTH_DOMAIN,
          databaseURL: `https://${process.env.FIREBASE_DATABASE_NAME}.firebaseio.com`,
          projectId: process.env.FIREBASE_PROJECT_ID,
          storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
          messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
          appId: process.env.FIREBASE_APP_ID,
          measurementId: process.env.FIREBASE_MEASUREMENT_ID,
          databaseURL: `https://${process.env.FIREBASE_DATABASE_NAME}.firebaseio.com`,
        },
        services: {
          firestore: true
        }
      }
    ]
  ],
}
