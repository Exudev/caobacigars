import { defineConfig } from 'vite';
import { resolve } from 'path';
import fs from 'fs';

// Helper to find all HTML files
function getHtmlInputs(dir, base = '', inputs = {}) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file === 'node_modules' || file === 'dist' || file === 'public' || file.startsWith('.')) continue;
    
    const path = resolve(dir, file);
    const stat = fs.statSync(path);
    
    if (stat.isDirectory()) {
      getHtmlInputs(path, base + file + '/', inputs);
    } else if (file.endsWith('.html')) {
      const name = (base + file).replace(/\.html$/, '');
      inputs[name] = path;
    }
  }
  return inputs;
}

export default defineConfig({
  build: {
    rollupOptions: {
      input: getHtmlInputs(__dirname)
    }
  }
});
