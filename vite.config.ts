import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import matter from "gray-matter";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  base: "/blog/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
    }),
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
    mdx({
      remarkPlugins: [
        () => (_, file) => {
          const source =
            typeof file.value === "string"
              ? file.value
              : new TextDecoder("utf-8").decode(file.value);

          const { data } = matter(source);

          file.data.frontmatter = data;
        },
      ],
    }),
    tailwindcss(),
  ],
});
