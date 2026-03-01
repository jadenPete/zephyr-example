import { federation } from "@module-federation/vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    federation({
      name: "zephyr-example",
    }),

    react(),
    tailwindcss(),
    // withZephyr()
  ],
});
