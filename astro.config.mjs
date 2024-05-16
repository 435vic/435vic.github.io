import { defineConfig } from 'astro/config';
import topLevelAwait from 'vite-plugin-top-level-await';
import wasm from 'vite-plugin-wasm';

// https://astro.build/config
export default defineConfig({
    site: 'https://435vic.github.io',
    vite: {
        plugins: [wasm(), topLevelAwait()]
    }
});
