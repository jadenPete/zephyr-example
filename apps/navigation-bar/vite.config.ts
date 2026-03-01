import { federation } from "@module-federation/vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { dependencies } from "./package.json";

export default defineConfig({
  build: {
    target: "chrome89",
  },
  plugins: [
    federation({
      name: "navigation_bar",
      exposes: {
        "./components/NavigationBar": "./src/components/NavigationBar.tsx",
      },
      filename: "remoteEntry.js",
      remotes: {},
      shared: {
        react: {
          requiredVersion: dependencies.react,
          singleton: true,
        },
        "react-dom": {
          requiredVersion: dependencies["react-dom"],
          singleton: true,
        },
      },
    }),
    react(),
    tailwindcss(),
  ],
  server: {
    port: 3001,
  },
});
