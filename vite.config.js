import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
	plugins: [sveltekit()],

	build: {
		rollupOptions: {
		  input: 'src/app.html' // Ou le fichier d'entrée correct
		}
	  },
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
