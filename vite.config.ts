import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"), // фаил билда
      name: "vortex-ui-kit", // имя библиотеки файла
      fileName: (format) => `vertex-ui-kit.${format}.js`, // имена создаваемых файлов
    },
    rollupOptions: {
      // параметры lib
      external: ["vue"], // исключаем библиотеку при билде
      output: {
        globals: {
          vue: "Vue", // добавляем названия библиотеки в обязательные файлы
        },
      },
    },
  },
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
        silenceDeprecations: [
          "mixed-decls",
          "color-functions",
          "global-builtin",
          "import",
        ],
        additionalData: `
          @use "sass:map";
          @use "@/assets/variables.scss" as *;
          @use "@/assets/mixins.scss" as *;
          @use "@/assets/extends.scss" as *;
        `,
      },
    },
  },
});
