import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/VaradifiVUE/",
  plugins: [vue()],
  server: {
    fs: {
      allow: [".."],
    },
  },
});
