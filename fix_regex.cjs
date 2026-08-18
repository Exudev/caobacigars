const fs = require('fs');
let code = fs.readFileSync('generate_pages.cjs', 'utf8');
code = code.replace(
  /const regex =\s*\/<div class="card">\[\\s\\S\]\*\?<img src="\\\/images\\\/(\[\^"\]\+)" alt="(\[\^"\]\+)"\[\\s\\S\]\*\?<h2>(\[\^<\]\+)<\/h2>\[\\s\\S\]\*\?<p>(\[\^<\]\+)<\/p>\[\\s\\S\]\*\?<\/div>\/g;/,
  'const regex = /<div class="card">[\\s\\S]*?<img src="\\/images\\/([^"]+)" alt="([^"]+)"[\\s\\S]*?<h2>([\\s\\S]*?)<\\/h2>[\\s\\S]*?<p>([\\s\\S]*?)<\\/p>[\\s\\S]*?<\\/div>/g;'
);
fs.writeFileSync('generate_pages.cjs', code);
