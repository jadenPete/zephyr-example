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
      name: "shell",
      exposes: {},
      filename: "remoteEntry.js",
      remotes: {
        edit_pane: {
          name: "edit_pane",
          entry: "http://localhost:3002/remoteEntry.js",
          entryGlobalName: "edit_pane",
          shareScope: "default",
          type: "module",
        },
        navigation_bar: {
          name: "navigation_bar",
          entry: "http://localhost:3001/remoteEntry.js",
          entryGlobalName: "navigation_bar",
          shareScope: "default",
          type: "module",
        },
        selection_pane: {
          name: "selection_pane",
          entry: "http://localhost:3003/remoteEntry.js",
          entryGlobalName: "selection_pane",
          shareScope: "default",
          type: "module",
        },
      },
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
    port: 3000,
  },
});
