import { fileURLToPath } from 'node:url'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import AutoImport from 'unplugin-auto-import/vite'
import Pages from 'vite-plugin-pages'
import Svgr from 'vite-plugin-svgr'
import UnoCSS from 'unocss/vite'

const root = fileURLToPath(import.meta.url)
const r = (p: string) => resolve(root, '..', p)

export default defineConfig({
  plugins: [
    UnoCSS(),
    react(),
    AutoImport({
      imports: ['react', 'react-router-dom'],
    }),
    Pages(),
    Svgr(),
  ],
  resolve: {
    alias: { '@': r('src') },
  },
  test: {
    include: ['test/**/*.spec.ts'],
  },
})
