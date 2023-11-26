import {
  defineConfig,
  transformerDirectives,
  presetUno,
  presetAttributify,
} from "unocss";

export default defineConfig({
  presets: [presetUno(), presetAttributify()],
  transformers: [transformerDirectives()],
});
