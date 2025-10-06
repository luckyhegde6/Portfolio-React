import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Edit <repo-name> to match your GitHub repo (Portfolio-React)
export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/Portfolio-React/" : "/",
  plugins: [react()],
});
