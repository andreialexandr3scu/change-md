// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    $production: {
        app: {
            baseURL: '/change-md/'
        },
    },
    $development: {
        // serverDir: '/',
    },
    modules: ["@nuxtjs/tailwindcss"],
    plugins: [
        '~/plugins/vue3-toastify.ts'
    ]
})