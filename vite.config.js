import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  assetsDir: "src/assets",
  plugins: [react()],
  server: {
    host: true,
  },
});
