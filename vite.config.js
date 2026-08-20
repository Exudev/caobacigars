import { defineConfig } from "vite";
import { resolve } from "path";
import fs from "fs";

// Helper to find all HTML files
function getHtmlInputs(dir, base = "", inputs = {}) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (
      file === "node_modules" ||
      file === "dist" ||
      file === "public" ||
      file === "css" ||
      file === "js" ||
      file.startsWith(".")
    )
      continue;

    const path = resolve(dir, file);
    const stat = fs.statSync(path);

    if (stat.isDirectory()) {
      getHtmlInputs(path, base + file + "/", inputs);
    } else if (file.endsWith(".html")) {
      const name = (base + file).replace(/\.html$/, "");
      inputs[name === "index" ? "main" : name] = path;
    }
  }
  return inputs;
}

const basePath =
  process.env.BASE_PATH || (process.env.GITHUB_ACTIONS ? "/caobacigars/" : "/");

function baseHrefPlugin(base) {
  return {
    name: "base-href-plugin",
    transformIndexHtml(html) {
      if (base === "/" || !base) return html;
      const cleanBase = base.replace(/\/$/, "");
      return html.replace(
        /href="(\/(?!\/)[^"]*)"/g,
        (match, path) => `href="${cleanBase}${path}"`
      );
    },
  };
}

export default defineConfig({
  root: "src",
  base: basePath,
  publicDir: "../public",
  plugins: [baseHrefPlugin(basePath)],
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: getHtmlInputs(resolve(import.meta.dirname, "src")),
    },
  },
});
