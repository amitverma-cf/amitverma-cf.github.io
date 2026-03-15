import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { copyFileSync } from "fs"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),
  {
    name: "copy-cname",
    closeBundle() {
      copyFileSync("CNAME", "docs/CNAME");
    }
  }],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "docs",
    emptyOutDir: true
  },
  base: "/"
})
