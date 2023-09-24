import path from "path"
import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './src/') },
      { find: '@/components', replacement: path.resolve(__dirname, './src/components/') },
      { find: '@/lib', replacement: path.resolve(__dirname, './src/lib/') },
    ],
  },
})

