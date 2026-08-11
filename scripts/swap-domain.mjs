#!/usr/bin/env node
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SKIP = new Set(['node_modules', 'dist', '.git', '.astro']);
const EXTS = new Set([
	'.ts', '.tsx', '.js', '.mjs', '.astro', '.json', '.toml', '.txt', '.md', '.mdc', '.html',
]);

async function walk(dir, files = []) {
	for (const e of await readdir(dir, { withFileTypes: true })) {
		if (SKIP.has(e.name)) continue;
		const full = path.join(dir, e.name);
		if (e.isDirectory()) await walk(full, files);
		else files.push(full);
	}
	return files;
}

const pairs = [
	['https://www.bestfortnitecheats.com', 'https://www.fortniteaimbot.com'],
	['https://bestfortnitecheats.com', 'https://fortniteaimbot.com'],
	['www.bestfortnitecheats.com', 'www.fortniteaimbot.com'],
	['support@bestfortnitecheats.com', 'support@fortniteaimbot.com'],
	['bestfortnitecheats.com', 'fortniteaimbot.com'],
	['project-name=bestfortnitecheats', 'project-name=fortniteaimbot'],
	['name = "bestfortnitecheats"', 'name = "fortniteaimbot"'],
];

const files = await walk(ROOT);
let n = 0;
for (const file of files) {
	if (!EXTS.has(path.extname(file))) continue;
	if (path.basename(file) === 'swap-domain.mjs') continue;
	let c = await readFile(file, 'utf8');
	const orig = c;
	for (const [from, to] of pairs) c = c.split(from).join(to);
	if (c !== orig) {
		await writeFile(file, c, 'utf8');
		n++;
		console.log(path.relative(ROOT, file));
	}
}
console.log(`updated ${n} files`);
