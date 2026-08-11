#!/usr/bin/env node
/**
 * One-time migration: Tarkov Cheats → Fortnite Cheats.
 * Domain: fortniteaimbot.com
 * Run from project root: node scripts/adapt-from-tarkov-to-fortnite.mjs
 */
import { readFile, writeFile, readdir, rename } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const RENAME_PAGE_DIRS = [
	['tarkov-aimbot', 'fortnite-aimbot'],
	['tarkov-esp', 'fortnite-esp'],
	['tarkov-wallhack', 'fortnite-wallhack'],
	['tarkov-radar-hack', 'fortnite-radar-hack'],
	['undetected-tarkov-cheats', 'undetected-fortnite-cheats'],
	['tarkov-cheats-2026', 'fortnite-cheats-2026'],
	['battleye-bypass', 'eac-bypass'],
	['tarkov-cheats', 'fortnite-cheats'],
	['tarkov-cheat-download', 'fortnite-cheat-download'],
	['tarkov-mod-menu', 'fortnite-mod-menu'],
	['tarkov-soft-aim', 'fortnite-soft-aim'],
	['best-tarkov-cheats', 'best-fortnite-cheats'],
	['tarkov-aimbot-hack', 'fortnite-aimbot-hack'],
	['tarkov-esp-hack', 'fortnite-esp-hack'],
	['tarkov-unlock-all', 'fortnite-unlock-all'],
];

/** Ordered replacements — specific patterns first. */
const REPLACEMENTS = [
	['https://www.besttarkovcheats.com', 'https://www.fortniteaimbot.com'],
	['https://besttarkovcheats.com', 'https://fortniteaimbot.com'],
	['www.besttarkovcheats.com', 'www.fortniteaimbot.com'],
	['besttarkovcheats.com', 'fortniteaimbot.com'],
	['support@besttarkovcheats.com', 'support@fortniteaimbot.com'],
	['%2Fproducts%2Fescape-from-tarkov', '%2Fproducts%2Ffortnite'],
	['/products/escape-from-tarkov', '/products/fortnite'],
	['/products/tarkov', '/products/fortnite'],
	['project-name=besttarkovcheats', 'project-name=fortniteaimbot'],
	['project-name=tarkovcheats', 'project-name=fortniteaimbot'],
	['name = "tarkovcheats"', 'name = "fortniteaimbot"'],
	['name = "besttarkovcheats"', 'name = "fortniteaimbot"'],
	['"name": "tarkov-cheats"', '"name": "fortnite-cheats"'],
	['repo: tarkovcheats', 'repo: fornight'],
	['repo:tarkovcheats', 'repo:fornight'],

	// Official game / AC links
	['https://www.escapefromtarkov.com/support', 'https://status.epicgames.com/'],
	['https://www.escapefromtarkov.com/', 'https://www.fortnite.com/'],
	['https://www.escapefromtarkov.com', 'https://www.fortnite.com'],
	['https://www.battleye.com/', 'https://easy.ac/'],
	['https://www.battleye.com', 'https://easy.ac'],
	['Escape from Tarkov Support', 'Epic Games Status'],
	['BattlEye Anti-Cheat', 'Easy Anti-Cheat'],
	['Battlestate Games', 'Epic Games'],

	// Image / asset filenames (before generic tarkov→fortnite)
	['tarkov-esp-player-tags', 'fortnite-esp-player-tags'],
	['tarkov-wallhack-skeleton', 'fortnite-wallhack-skeleton'],
	['tarkov-aimbot-sniper', 'fortnite-aimbot-sniper'],
	['tarkov-aimbot-skeleton', 'fortnite-aimbot-skeleton'],
	['tarkov-esp-radar', 'fortnite-esp-radar'],
	['tarkov-cheats-combat', 'fortnite-cheats-combat'],
	['tarkov-cheats-logo', 'fortnite-cheats-logo'],
	['tarkov-cheats-hero-full', 'fortnite-cheats-hero-full'],
	['tarkov-cheats-hero', 'fortnite-cheats-hero'],
	['tarkov-cheats-aimbot-view', 'fortnite-cheats-aimbot-view'],
	['tarkov-cheats-wallhack', 'fortnite-cheats-wallhack'],
	['tarkov-cheats-aimbot', 'fortnite-cheats-aimbot'],
	['tarkov-cheats-radar', 'fortnite-cheats-radar'],
	['tarkov-cheats-raid', 'fortnite-cheats-raid'],
	['tarkov-cheats-esp', 'fortnite-cheats-esp'],
	['tarkov-hero-banner', 'fortnite-hero-banner'],
	['tarkov-hero-ghost', 'fortnite-hero-ghost'],
	['tarkov-hero-source', 'fortnite-hero-source'],

	// URL slugs / page dirs
	['undetected-tarkov-cheats', 'undetected-fortnite-cheats'],
	['best-tarkov-cheats', 'best-fortnite-cheats'],
	['tarkov-cheat-download', 'fortnite-cheat-download'],
	['tarkov-cheats-2026', 'fortnite-cheats-2026'],
	['tarkov-radar-hack', 'fortnite-radar-hack'],
	['tarkov-aimbot-hack', 'fortnite-aimbot-hack'],
	['tarkov-esp-hack', 'fortnite-esp-hack'],
	['tarkov-unlock-all', 'fortnite-unlock-all'],
	['tarkov-soft-aim', 'fortnite-soft-aim'],
	['tarkov-mod-menu', 'fortnite-mod-menu'],
	['tarkov-wallhack', 'fortnite-wallhack'],
	['tarkov-cheats', 'fortnite-cheats'],
	['tarkov-aimbot', 'fortnite-aimbot'],
	['tarkov-esp', 'fortnite-esp'],
	['battleye-bypass', 'eac-bypass'],
	["'battleye'", "'eac-bypass'"],
	['| battleye', '| eac-bypass'],
	['pageId="battleye"', 'pageId="eac-bypass"'],
	["pageId: 'battleye'", "pageId: 'eac-bypass'"],
	['"battleye"', '"eac-bypass"'],
	['battleye:', 'eac-bypass:'],
	['\tbattleye:', '\teac-bypass:'],

	// i18n slug fragments
	['trucos-tarkov', 'trucos-fortnite'],
	['triche-tarkov', 'triche-fortnite'],
	['cheats-tarkov', 'cheats-fortnite'],
	['trucchi-tarkov', 'trucchi-fortnite'],
	['cheaty-tarkov', 'cheaty-fortnite'],
	['chity-tarkov', 'chity-fortnite'],
	['chitov-tarkov', 'chitov-fortnite'],
	['chitiv-tarkov', 'chitiv-fortnite'],
	['cheatow-tarkov', 'cheatow-fortnite'],
	['hile-tarkov', 'hile-fortnite'],
	['tarkov-hile', 'fortnite-hile'],
	['tarkov-esp-chity', 'fortnite-esp-chity'],
	['tarkov-aimbot-chity', 'fortnite-aimbot-chity'],
	['unentdeckte-tarkov-cheats', 'unentdeckte-fortnite-cheats'],
	['cheats-tarkov-indetectaveis', 'cheats-fortnite-indetectaveis'],
	['trucchi-tarkov-indetectabili', 'trucchi-fortnite-indetectabili'],
	['niewykrywalne-cheats-tarkov', 'niewykrywalne-cheats-fortnite'],
	['nedecektiruemye-chity-tarkov', 'nedecektiruemye-chity-fortnite'],
	['tespit-edilemeyen-tarkov-hileleri', 'tespit-edilemeyen-fortnite-hileleri'],
	['nedecektovani-chity-tarkov', 'nedecektovani-chity-fortnite'],
	['cheats-tarkov-nedetectabile', 'cheats-fortnite-nedetectabile'],
	['basta-tarkov-cheats', 'basta-fortnite-cheats'],
	['tarkov-cheats-funktionen', 'fortnite-cheats-funktionen'],
	['tarkov-cheats-functies', 'fortnite-cheats-functies'],
	['caracteristicas-trucos-tarkov', 'caracteristicas-trucos-fortnite'],
	['fonctionnalites-triche-tarkov', 'fonctionnalites-triche-fortnite'],
	['recursos-cheats-tarkov', 'recursos-cheats-fortnite'],
	['escape-from-tarkov-cheats', 'fortnite-cheats'],
	['escape-from-tarkov', 'fortnite'],

	// Brand / keyword phrases
	['Tarkov Cheats', 'Fortnite Cheats'],
	['Tarkov cheats', 'Fortnite cheats'],
	['Tarkov cheat', 'Fortnite cheat'],
	['Tarkov Intel', 'Fortnite Intel'],
	['TarkovCheatsSite', 'FortniteCheatsSite'],
	['tarkov cheats', 'fortnite cheats'],
	['tarkov cheat', 'fortnite cheat'],
	['tarkov hacks', 'fortnite hacks'],
	['tarkov hack', 'fortnite hack'],
	['tarkov esp', 'fortnite esp'],
	['tarkov aimbot', 'fortnite aimbot'],
	['tarkov wallhack', 'fortnite wallhack'],

	// Anti-cheat
	['BattlEye anti-cheat', 'Easy Anti-Cheat'],
	['BattlEye maintenance', 'EAC maintenance'],
	['BattlEye bypass', 'EAC bypass'],
	['BattlEye Bypass', 'EAC Bypass'],
	['BattlEye patches', 'EAC patches'],
	['BattlEye patch', 'EAC patch'],
	['BattlEye updates', 'EAC updates'],
	['BattlEye update', 'EAC update'],
	['after BattlEye', 'after EAC'],
	['BattlEye', 'Easy Anti-Cheat'],
	['battleye', 'eac'],

	// Game-mode / map copy
	['Customs, Woods, and Streets of Tarkov', 'Battle Royale island, Zero Build, and Ranked'],
	['Customs, Woods and Streets of Tarkov', 'Battle Royale island, Zero Build and Ranked'],
	['Customs, Woods et Streets of Tarkov', 'Battle Royale island, Zero Build et Ranked'],
	['Customs, Woods e Streets of Tarkov', 'Battle Royale island, Zero Build e Ranked'],
	['Customs, Woods und Streets of Tarkov', 'Battle Royale island, Zero Build und Ranked'],
	['PMC raids and Scav runs', 'Battle Royale and Zero Build'],
	['PMC raids and scav-runs', 'Battle Royale and Zero Build'],
	['PMC & Scav', 'BR & Zero Build'],
	['PMC and Scav', 'BR and Zero Build'],
	['Works in PMC & Scav', 'Works in BR & Zero Build'],
	['Scav runs', 'Zero Build matches'],
	['Scav run', 'Zero Build'],
	['scav-runs', 'zero-build'],
	['scav-run', 'zero-build'],
	['Scav', 'bot lobby'],
	['scav', 'bot lobby'],
	['PMCs', 'players'],
	['PMC', 'player'],
	['before you raid', 'before you queue'],
	['before you Raid', 'before you queue'],
	['extraction tracking', 'zone tracking'],
	['Extraction tracking', 'Zone tracking'],
	['extract fights', 'reboot fights'],
	['extract fight', 'reboot fight'],
	['extract holds', 'reboot holds'],
	['extract markers', 'reboot markers'],
	['extract cues', 'zone cues'],
	['near extracts', 'near reboot vans'],
	['Extracts', 'Reboots'],
	['extracts', 'reboot vans'],
	['extract', 'reboot'],
	['raid flow', 'match flow'],
	['raid rounds', 'match rounds'],
	['early raids', 'early games'],
	['for raids', 'for matches'],
	['in raids', 'in matches'],
	['Raids', 'Matches'],
	['raids', 'matches'],
	['this wipe', 'this season'],
	['last wipe', 'last season'],
	['wipe', 'season'],
	['in dorms', 'in builds'],
	['dorms', 'builds'],
	['on Woods', 'on Ranked'],
	['on Customs', 'in Battle Royale'],
	['Customs', 'Battle Royale'],
	['Woods', 'Ranked'],
	['Streets of Tarkov', 'Reload'],
	['high-value loot', 'chest loot'],
	['Loot ESP', 'Chest ESP'],
	['loot markers', 'chest markers'],
	['Bolt-action soft aim', 'Sniper soft aim'],
	['xKrypt0_EFT', 'xKrypt0_FN'],
	['vanLifeEFT', 'vanLifeFN'],
	['_EFT', '_FN'],
	['EFT', 'FN'],

	// Module / import renames
	['tarkovImages', 'fortniteImages'],
	["from './tarkov'", "from './fortnite'"],
	["from '../data/tarkov'", "from '../data/fortnite'"],
	["from '../../data/tarkov'", "from '../../data/fortnite'"],
	['fetch-tarkov-images', 'fetch-fortnite-images'],
	['tarkov-hack-overlays', 'fortnite-hack-overlays'],
	['fix-tarkov-copy', 'fix-fortnite-copy'],
	['Buy Tarkov Cheats', 'Buy Fortnite Cheats'],
	['Escape from Tarkov', 'Fortnite'],
	['escape from tarkov', 'fortnite'],

	// Remaining game name (after Escape from Tarkov handled)
	['Tarkov', 'Fortnite'],
	['tarkov', 'fortnite'],
];

const TEXT_EXTENSIONS = new Set([
	'.ts', '.tsx', '.js', '.mjs', '.astro', '.css', '.json', '.toml', '.txt', '.md', '.html', '.mdc',
]);

const SKIP_DIRS = new Set(['node_modules', 'dist', '.git', '.astro']);
const SKIP_FILES = new Set([
	'adapt-warzone.mjs',
	'adapt-fortnite.mjs',
	'adapt-tarkov.mjs',
	'adapt-from-tarkov-to-fortnite.mjs',
]);

async function walk(dir, files = []) {
	const entries = await readdir(dir, { withFileTypes: true });
	for (const entry of entries) {
		if (SKIP_DIRS.has(entry.name)) continue;
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			await walk(full, files);
		} else {
			files.push(full);
		}
	}
	return files;
}

function applyReplacements(content) {
	let result = content;
	for (const [from, to] of REPLACEMENTS) {
		if (from === to) continue;
		result = result.split(from).join(to);
	}
	return result;
}

async function transformTextFiles() {
	const files = await walk(ROOT);
	let changed = 0;
	for (const file of files) {
		const ext = path.extname(file);
		if (!TEXT_EXTENSIONS.has(ext)) continue;
		if (SKIP_FILES.has(path.basename(file))) continue;
		const original = await readFile(file, 'utf8');
		const updated = applyReplacements(original);
		if (updated !== original) {
			await writeFile(file, updated, 'utf8');
			changed++;
		}
	}
	console.log(`Transformed ${changed} text files`);
}

async function renamePageDirs() {
	for (const [from, to] of RENAME_PAGE_DIRS) {
		const src = path.join(ROOT, 'src', 'pages', from);
		const dest = path.join(ROOT, 'src', 'pages', to);
		try {
			await rename(src, dest);
			console.log(`Renamed page: ${from} → ${to}`);
		} catch (e) {
			console.warn(`Skip rename ${from}: ${e.message}`);
		}
	}
}

async function renameDataModule() {
	const from = path.join(ROOT, 'src', 'data', 'tarkov.ts');
	const to = path.join(ROOT, 'src', 'data', 'fortnite.ts');
	try {
		await rename(from, to);
		console.log('Renamed tarkov.ts → fortnite.ts');
	} catch (e) {
		console.warn(`tarkov.ts rename: ${e.message}`);
	}
}

async function renameScripts() {
	const pairs = [
		['fetch-tarkov-images.mjs', 'fetch-fortnite-images.mjs'],
		['tarkov-hack-overlays.mjs', 'fortnite-hack-overlays.mjs'],
		['fix-tarkov-copy.mjs', 'fix-fortnite-copy.mjs'],
	];
	for (const [from, to] of pairs) {
		try {
			await rename(path.join(ROOT, 'scripts', from), path.join(ROOT, 'scripts', to));
			console.log(`Renamed script: ${from} → ${to}`);
		} catch (e) {
			console.warn(`Skip script rename ${from}: ${e.message}`);
		}
	}
}

async function updatePageAstroFiles() {
	const idMap = {
		'fortnite-aimbot': 'fortnite-aimbot',
		'fortnite-esp': 'fortnite-esp',
		'fortnite-wallhack': 'wallhack',
		'fortnite-radar-hack': 'radar',
		'undetected-fortnite-cheats': 'undetected',
		'fortnite-cheats-2026': 'cheats-2026',
		'eac-bypass': 'eac-bypass',
		'fortnite-cheats': 'hacks',
		'fortnite-cheat-download': 'cheat-download',
		'fortnite-mod-menu': 'mod-menu',
		'fortnite-soft-aim': 'soft-aim',
		'best-fortnite-cheats': 'best-cheats',
		'fortnite-aimbot-hack': 'aimbot-hack',
		'fortnite-esp-hack': 'esp-hack',
		'fortnite-unlock-all': 'unlock-all',
	};

	for (const [dir, pageId] of Object.entries(idMap)) {
		const file = path.join(ROOT, 'src', 'pages', dir, 'index.astro');
		try {
			const content = `---
import LocalizedPage from '../../components/LocalizedPage.astro';
---

<LocalizedPage locale="en" pageId="${pageId}" />
`;
			await writeFile(file, content, 'utf8');
		} catch {
			// ignore missing dirs
		}
	}
}

async function renameImages() {
	const imagesDir = path.join(ROOT, 'public', 'images');
	let files;
	try {
		files = await readdir(imagesDir);
	} catch {
		return;
	}
	for (const file of files) {
		if (!file.includes('tarkov')) continue;
		const newName = file.replace(/tarkov/g, 'fortnite');
		if (newName !== file) {
			try {
				await rename(path.join(imagesDir, file), path.join(imagesDir, newName));
				console.log(`Renamed image: ${file} → ${newName}`);
			} catch (e) {
				console.warn(`Skip image ${file}: ${e.message}`);
			}
		}
	}
}

async function main() {
	console.log('Adapting Tarkov Cheats → Fortnite Cheats (fortniteaimbot.com)...\n');
	await renamePageDirs();
	await renameDataModule();
	await renameScripts();
	await transformTextFiles();
	await updatePageAstroFiles();
	await renameImages();
	console.log('\nDone. Next: polish brand.ts, sync:brand, regenerate i18n/blog.');
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
