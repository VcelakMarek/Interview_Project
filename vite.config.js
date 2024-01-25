import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

const root = resolve(__dirname, "src");

// prettier-ignore
export default defineConfig({
  base: "/Interview_Project/",
  plugins: [react()],
  root: "src",
  resolve: {
    alias: {
      "types": resolve(root, "types"),
      "components": resolve(root, "components"),
      "context": resolve(root, "context"),
      "api": resolve(root, "api")
    },
  },
});
