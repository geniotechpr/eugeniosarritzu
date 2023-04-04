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
  }
};

export default config;
