import { readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const CONTENT_ROOT = path.resolve(process.cwd(), 'src/content/blog');
const DEFAULT_COVERS_ROOT = path.resolve(process.cwd(), 'src/assets/blog/default-covers');
const WRITE_MODE = process.argv.includes('--write');

function hashString(input) {
	let hash = 5381;
	for (let i = 0; i < input.length; i += 1) {
		hash = ((hash << 5) + hash + input.charCodeAt(i)) >>> 0;
	}
	return hash >>> 0;
}

function normalizePathForFrontmatter(filePath) {
	return filePath.split(path.sep).join('/');
}

async function listDefaultCovers() {
	const entries = await readdir(DEFAULT_COVERS_ROOT, { withFileTypes: true });
	return entries
		.filter((entry) => entry.isFile() && /\.(webp|png|jpe?g)$/i.test(entry.name))
		.map((entry) => path.join(DEFAULT_COVERS_ROOT, entry.name))
		.sort((a, b) => a.localeCompare(b));
}

async function listLocaleFiles() {
	const locales = await readdir(CONTENT_ROOT, { withFileTypes: true });
	const files = [];
	for (const locale of locales) {
		if (!locale.isDirectory()) continue;
		const localeDir = path.join(CONTENT_ROOT, locale.name);
		const entries = await readdir(localeDir, { withFileTypes: true });
		for (const entry of entries) {
			if (!entry.isFile()) continue;
			if (!/\.(md|mdx)$/i.test(entry.name)) continue;
			files.push(path.join(localeDir, entry.name));
		}
	}
	return files.sort((a, b) => a.localeCompare(b));
}

function chooseHeroImage(filePath, covers) {
	const slug = path.basename(filePath, path.extname(filePath));
	const cover = covers[hashString(slug) % covers.length];
	const localeDir = path.dirname(filePath);
	return normalizePathForFrontmatter(path.relative(localeDir, cover));
}

function addHeroImageToFrontmatter(source, heroImage) {
	if (!source.startsWith('---\n')) return null;
	const closingIndex = source.indexOf('\n---\n', 4);
	if (closingIndex === -1) return null;

	const frontmatter = source.slice(4, closingIndex);
	if (/^heroImage\s*:/m.test(frontmatter)) return null;

	const insert = `${frontmatter.endsWith('\n') ? '' : '\n'}heroImage: '${heroImage}'\n`;
	const updated = `---\n${frontmatter}${insert}---\n${source.slice(closingIndex + 5)}`;
	return updated;
}

async function main() {
	const covers = await listDefaultCovers();
	if (covers.length === 0) {
		console.error(`No default covers found in ${DEFAULT_COVERS_ROOT}`);
		process.exit(1);
	}

	const files = await listLocaleFiles();
	const targets = [];

	for (const filePath of files) {
		const source = await readFile(filePath, 'utf8');
		const heroImage = chooseHeroImage(filePath, covers);
		const updated = addHeroImageToFrontmatter(source, heroImage);
		if (updated === null) continue;
		targets.push({ filePath, updated, heroImage });
	}

	if (targets.length === 0) {
		console.log('No files need heroImage backfill.');
		return;
	}

	console.log(`${WRITE_MODE ? 'Will update' : 'Would update'} ${targets.length} file(s):`);
	for (const target of targets) {
		console.log(`- ${target.filePath} -> ${target.heroImage}`);
	}

	if (!WRITE_MODE) {
		console.log('\nDry run only. Re-run with --write to apply changes.');
		return;
	}

	for (const target of targets) {
		await writeFile(target.filePath, target.updated, 'utf8');
	}

	console.log('\nBackfill complete.');
}

main().catch((error) => {
	console.error(error);
	process.exit(1);
});
