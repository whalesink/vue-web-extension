import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import eslint from "vite-plugin-eslint";
// @ts-ignore
import ElementPlus from "unplugin-element-plus/vite";
import { execSync } from "child_process";
import { version } from "./package.json";
import { resolve } from "path";
import makeManifest from "./plugins/build-manifest";

const GIT_SHA = execSync("git rev-parse --short HEAD").toString().trim();

// https://vitejs.dev/config/
export default defineConfig({
  envDir: resolve(__dirname),
  plugins: [
    vue(),
    // ElementPlus(),
    makeManifest(),
    eslint(),
  ],
  define: {
    VERSION: JSON.stringify(version),
    GIT_SHA: JSON.stringify(GIT_SHA),
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  css: {
    devSourcemap: true,
  },
  build: {
    outDir: resolve(__dirname, "dist"),
    cssCodeSplit: true,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        popup: resolve(__dirname, "./src/pages/popup/index.html"),
        options: resolve(__dirname, "./src/pages/options/index.html"),
        content: resolve(__dirname, "./src/pages/content/index.ts"),
      },
      output: {
        // format: "iife",
        entryFileNames: (chunk) => `src/pages/${chunk.name}/index.js`,
      },
    },
  },
});
