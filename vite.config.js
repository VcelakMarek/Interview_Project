import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Interview_Project/",
  plugins: [react()],
  root: "src",
});
