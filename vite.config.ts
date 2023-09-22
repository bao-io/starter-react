import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import AutoImport from "unplugin-auto-import/vite";
import Pages from "vite-plugin-pages";
import Svgr from "vite-plugin-svgr";

import { fileURLToPath } from "url";
import { resolve } from "path";

const root = fileURLToPath(import.meta.url);
const r = (p: string) => resolve(root, "..", p);

export default defineConfig(({ command }) => ({
  define: {
    __DEV__: command === "serve",
  },
  plugins: [
    react(),
    AutoImport({
      imports: ["react", "react-router-dom"],
      dirs: [
        r("src/stores"),
        r("src/utils"),
        r("src/apis"),
        r("src/composables"),
      ],
    }),
    Pages(),
    Svgr(),
  ],
  resolve: {
    alias: { "@": r("src") },
  },
  test: {
    include: ["test/**/*.spec.ts"],
  },
}));
