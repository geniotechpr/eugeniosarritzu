import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig as ViteConfig } from 'vite';
import type { UserConfig as VitestConfig } from 'vitest/config';

const config: ViteConfig & VitestConfig = {
  plugins: [sveltekit()],
  ssr: {
    noExternal: ['three', 'troika-three-text']
  },
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}']
  },
  server: {
    proxy: {
      // with options: http://localhost:5173/api/bar-> http://jsonplaceholder.typicode.com/bar
      '/api-hello': {
        target: 'https://python-api-psi.vercel.app',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-hello/, '')
      }
    }
  }
};

export default config;
