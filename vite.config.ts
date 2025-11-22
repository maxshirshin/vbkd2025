import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  build: {
    lib: {
      entry: 'src/main.tsx',
      name: 'VBKDGallery',
      fileName: (format) => `vbkd-gallery.${format}.js`,
    },
    // Do not treat react/react-dom as externals so the UMD build is self-contained.
    // This avoids runtime mismatches on host pages that load different React versions.
    rollupOptions: {
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  server: {
    middlewareMode: false,
  },
})
