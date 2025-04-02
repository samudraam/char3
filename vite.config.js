import { defineConfig } from "vite";

export default defineConfig({
  base: "/char3/", // << important
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        viewer: "viewer.html",
      },
    },
  },
});
