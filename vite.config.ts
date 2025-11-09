// vite.config.ts
import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
// Swap to the TanStack-specific Netlify plugin:
import netlify from "@netlify/vite-plugin-tanstack-start";

export default defineConfig({
	plugins: [
		tsconfigPaths({ projects: ["./tsconfig.json"] }),
		tailwindcss(),
		tanstackStart({
			spa: { enabled: true }, // 👈 key line
		}),
		react(),
		netlify(),
	],
});
