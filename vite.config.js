import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';


export default defineConfig({
  plugins: [sveltekit()],
  server: {
    port: 5173,  // Port pour le développement
    strictPort: true,
  },
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}'],
  },
});
