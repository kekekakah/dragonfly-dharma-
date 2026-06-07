/**
 * Post-build script: runs Pagefind to index the static output.
 * Called automatically by `pnpm build` via the package.json build script.
 */
import { createIndex } from 'pagefind';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '../dist');

console.log('🔍 Running Pagefind indexing on:', distDir);

const { index, errors } = await createIndex({
  rootSelector: 'html',
  excludeSelectors: ['.site-header', '.site-footer', '.community-cta', '.filter-bar'],
  forceLanguage: undefined, // auto-detect EN + ZH
  verbose: false,
});

if (errors.length > 0) {
  console.error('Pagefind errors:', errors);
  process.exit(1);
}

await index.addDirectory({ path: distDir });
await index.writeFiles({ outputPath: path.join(distDir, 'pagefind') });

console.log('✅ Pagefind index written to dist/pagefind/');
