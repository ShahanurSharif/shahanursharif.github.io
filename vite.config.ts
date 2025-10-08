import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: '',
  build: {
    outDir: 'docs',
    assetsDir: 'assets',
    emptyOutDir: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        interactions: fileURLToPath(new URL('./src/scripts/index.ts', import.meta.url))
      },
      output: {
        manualChunks: undefined,
        entryFileNames: (chunkInfo) => {
          return chunkInfo.name === 'interactions' 
            ? 'assets/interactions.js' 
            : 'assets/app.js';
        },
        chunkFileNames: 'assets/[name].js',
        assetFileNames: (assetInfo: { name?: string }) => {
          if (assetInfo.name?.endsWith('.css')) {
            return 'assets/style.css';
          }
          return 'assets/[name][extname]';
        }
      }
    }
  },
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    crittersOptions: {
      reduceInlineStyles: false
    }
  }
});
