import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader(), tsconfigPaths()],
  base: '/cardbrands-vue/',
  build: {
    outDir: 'dist-web',
  }
})
