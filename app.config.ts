import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
	vite: {
		server: {
			proxy: {
				"/script.js": {
					target: "https://cloud.umami.is/script.js",
					changeOrigin: true,
					rewrite: (path: string) => path.replace(/^\/script.js/, ""),
				},
			},
		},
	},
});
