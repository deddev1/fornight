#!/usr/bin/env node
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SKIP = new Set(['node_modules', 'dist', '.git', '.astro']);
const EXTS = new Set(['.ts', '.tsx', '.js', '.mjs', '.astro', '.json', '.md', '.mdc', '.txt', '.toml']);

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
	['bot lobbyRunCombat', 'zeroBuildCombat'],
	['bot lobbyRunMode', 'zeroBuildMode'],
	['bot lobbys', 'squads'],
	['bot lobby', 'squad'],
	['Escape from Fortnite', 'Fortnite'],
	['escape from fortnite', 'fortnite'],
	['status.epicgames.com//', 'status.epicgames.com/'],
	['escapefromfortnite.com', 'fortnite.com'],
	['player Raid and squad Support', 'Battle Royale and Zero Build Support'],
	['Extract markers', 'Chest markers'],
	['a EAC update', 'an EAC update'],
	['Hacks or PC', 'radar for PC'],
	['raid tips', 'match tips'],
	['Undetected FN ESP', 'Undetected ESP'],
	['FN ESP', 'Fortnite ESP'],
	['ESP, Aimbot & ESP for Fortnite', 'ESP, Aimbot & radar for Fortnite'],
	['tag: \'Raid\'', "tag: 'Match'"],
	['Raid Soft Aim', 'Match Soft Aim'],
	["'escape from fortnite cheats'", "'fortnite cheat download'"],
];

async function main() {
	const files = await walk(ROOT);
	let n = 0;
	for (const file of files) {
		if (!EXTS.has(path.extname(file))) continue;
		const base = path.basename(file);
		if (base.startsWith('adapt-') || base === 'fix-fortnite-rebrand.mjs') continue;
		let c = await readFile(file, 'utf8');
		const orig = c;
		// Quote bare eac-bypass object keys (not already quoted)
		c = c.replace(/(?<!['"])\beac-bypass\s*:/g, "'eac-bypass':");
		for (const [from, to] of pairs) c = c.split(from).join(to);
		if (c !== orig) {
			await writeFile(file, c, 'utf8');
			n++;
			console.log('fixed', path.relative(ROOT, file));
		}
	}
	console.log('files fixed:', n);
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
