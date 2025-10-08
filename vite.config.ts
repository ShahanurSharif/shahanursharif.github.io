import { defineConfig } from 'vite';

export default defineConfig({
  base: '',
  build: {
    outDir: 'docs',
    emptyOutDir: false,
    rollupOptions: {
      input: {
        main: 'src/main.ts'
      },
      output: {
        entryFileNames: 'assets/app.js',
        assetFileNames: 'assets/[name][extname]'
      }
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  }
});
