import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader(), tsconfigPaths()],
  build: {
    lib: {
      entry: 'lib/index.ts',
      name: 'CardbrandsVue'
    }
  }
})
