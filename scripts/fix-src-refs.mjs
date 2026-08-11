#!/usr/bin/env node
/** Final pass: fix remaining Fortnite references in src/. */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'src');
const REMOVE_PAGE_IDS = ['hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats', 'aimbot-hack', 'esp-hack', 'unlock-all'];

const REPLACEMENTS = [
	['fortniteImages', 'fortniteImages'],
	["from '../data/fortnite'", "from '../data/fortnite'"],
	["from './fortnite'", "from './fortnite'"],
	['/undetected-fortnite-cheats/', '/undetected-fortnite-cheats/'],
	['/fortnite-wallhack/', '/fortnite-wallhack/'],
	['/fortnite-radar-hack/', '/fortnite-radar-hack/'],
	['/eac-bypass/', '/eac-bypass/'],
	['/fortnite-cheats-2026/', '/fortnite-cheats-2026/'],
	['/fortnite-aimbot/', '/fortnite-aimbot/'],
	['/fortnite-esp/', '/fortnite-esp/'],
	['/fortnite-cheats/', '/fortnite-esp/'],
	['Fortnite Cheats', 'Fortnite Cheats'],
	['Fortnite cheats', 'Fortnite cheats'],
	['Fortnite wallhack', 'Fortnite wallhack'],
	['Fortnite radar', 'Fortnite radar'],
	['Fortnite Aimbot', 'Fortnite Aimbot'],
	['Fortnite ESP', 'Fortnite ESP'],
	['Fortnite', 'Fortnite'],
	['Easy Anti-Cheat', 'Easy Anti-Cheat'],
	['eac-bypass', 'eac-bypass'],
	['bestfortnitecheats.com', 'bestfortnitecheats.com'],
	['operatorEsp', 'playerEsp'],
	['rebootFight', 'rebootFight'],
	['alMazrah', 'battleRoyaleIsland'],
];

async function walk(dir, files = []) {
	for (const entry of await readdir(dir, { withFileTypes: true })) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) await walk(full, files);
		else if (/\.(ts|astro|js)$/.test(entry.name)) files.push(full);
	}
	return files;
}

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	for (const id of REMOVE_PAGE_IDS) {
		r = r.replace(new RegExp(`\\t'${id}':[^\\n]*\\n`, 'g'), '');
		r = r.replace(new RegExp(`\\{ label:[^}]*href: '/[^']*${id}[^']*/' \\},\\n`, 'g'), '');
	}
	return r;
}

for (const file of await walk(ROOT)) {
	const orig = await readFile(file, 'utf8');
	const updated = apply(orig);
	if (updated !== orig) {
		await writeFile(file, updated);
		console.log('Fixed', path.relative(ROOT, file));
	}
}
