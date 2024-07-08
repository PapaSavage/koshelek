// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },

	modules: [
		"@nuxtjs/tailwindcss",
		"@nuxtjs/google-fonts",
		"shadcn-nuxt",
		"@nuxt/image",
		"@nuxtjs/i18n",
	],

	tailwindcss: {
		cssPath: "~/assets/css/tailwind.css",
	},

	googleFonts: {
		families: {
			"Golos Text": true,
			Rubik: true,
			Unbounded: true,
		},
	},

	shadcn: {
		prefix: "",
		/**
		 * Directory that the component lives in.
		 * @default "./components/ui"
		 */
		componentDir: "./components/ui",
	},

	css: ["~/assets/css/tailwind.css", "animate.css"],

	i18n: {
		vueI18n: "./i18n.config.ts", // if you are using custom path, default
	},

	compatibilityDate: "2024-07-08",
});
