import { defineConfig } from "vite";

export default defineConfig({
  base: "/char3/", //name of git repo
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        viewer: "viewer.html",
      },
    },
  },
});
