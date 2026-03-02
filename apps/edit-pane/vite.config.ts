import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import { withZephyr } from "vite-plugin-zephyr";
import { dependencies } from "./package.json";

export default defineConfig({
  build: {
    target: "chrome89",
  },
  plugins: [
    withZephyr({
      mfConfig: {
        name: "edit_pane",
        exposes: {
          "./components/EditPane": "./src/components/EditPane.tsx",
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
    port: 3002,
  },
});
