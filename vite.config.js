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
      // Name is used as output path, so if base is empty and file is index.html, name is 'index'.
      inputs[name === "index" ? "main" : name] = path;
    }
  }
  return inputs;
}

export default defineConfig({
  root: "src",
  publicDir: "../public",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: getHtmlInputs(resolve(__dirname, "src")),
    },
  },
});
