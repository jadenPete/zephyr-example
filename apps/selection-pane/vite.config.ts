import { federation } from "@module-federation/vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import { dependencies } from "./package.json";

export default defineConfig({
  build: {
    target: "chrome89",
  },
  plugins: [
    federation({
      name: "selection_pane",
      exposes: {
        "./components/SelectionPane": "./src/components/SelectionPane.tsx",
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
  resolve: {
    alias: {
      "@zephyr-example/shared": resolve(
        import.meta.dirname,
        "../../packages/shared/src",
      ),
    },
  },
  server: {
    port: 3003,
  },
});
