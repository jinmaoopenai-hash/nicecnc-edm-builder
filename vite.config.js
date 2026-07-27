import { defineConfig } from "vite";

export default defineConfig({
  base: "/nicecnc-edm-builder/",
  build: {
    target: "es2020",
    sourcemap: true
  }
});
