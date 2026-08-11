#!/usr/bin/env node
/** Rebuild routing.ts and constants.mjs from clean Fortnite source. */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const REMOVE_IDS = [
	'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all',
];

const REPLACEMENTS = [
	['fortnite-esp', 'fortnite-esp'],
	['fortnite-aimbot', 'fortnite-aimbot'],
	['eac-bypass', 'eac-bypass'],
	['undetected-fortnite-cheats', 'undetected-fortnite-cheats'],
	['fortnite-wallhack', 'fortnite-wallhack'],
	['fortnite-radar-hack', 'fortnite-radar-hack'],
	['fortnite-cheats-2026', 'fortnite-cheats-2026'],
	['eac-bypass', 'eac-bypass'],
	['bestfortnitecheats.com', 'bestfortnitecheats.com'],
	['trucos-fortnite', 'trucos-fortnite'],
	['triche-fortnite', 'triche-fortnite'],
	['fortnite-cheats', 'escape-from-fortnite-cheats'],
	['cheats-fortnite', 'cheats-fortnite'],
	['trucchi-fortnite', 'trucchi-fortnite'],
	['cheaty-fortnite', 'cheaty-fortnite'],
	['chity-fortnite', 'chity-fortnite'],
	['chitov-fortnite', 'chitov-fortnite'],
	['chitiv-fortnite', 'chitiv-fortnite'],
	['cheatow-fortnite', 'cheatow-fortnite'],
	['hile-fortnite', 'hile-fortnite'],
	['fortnite-hile', 'fortnite-hile'],
	['fortnite-esp-chity', 'fortnite-esp-chity'],
	['fortnite-aimbot-chity', 'fortnite-aimbot-chity'],
	['unentdeckte-fortnite-cheats', 'unentdeckte-escape-from-fortnite-cheats'],
	['cheats-fortnite-indetectaveis', 'cheats-fortnite-indetectaveis'],
	['trucchi-fortnite-indetectabili', 'trucchi-fortnite-indetectabili'],
	['niewykrywalne-cheats-fortnite', 'niewykrywalne-cheats-fortnite'],
	['nedecektiruemye-chity-fortnite', 'nedecektiruemye-chity-fortnite'],
	['tespit-edilemeyen-fortnite-hileleri', 'tespit-edilemeyen-fortnite-hileleri'],
	['nedecektovani-chity-fortnite', 'nedecektovani-chity-fortnite'],
	['cheats-fortnite-nedetectabile', 'cheats-fortnite-nedetectabile'],
	['basta-fortnite-cheats', 'basta-escape-from-fortnite-cheats'],
	['eac-bypass-trucos-fortnite', 'eac-bypass-trucos-fortnite'],
	['eac-bypass-triche-fortnite', 'eac-bypass-triche-fortnite'],
	['eac-bypass-cheats-fortnite', 'eac-bypass-cheats-fortnite'],
	['eac-bypass-chity-fortnite', 'eac-bypass-chity-fortnite'],
	['eac-bypass-fortnite', 'eac-bypass'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

function removePageBlocks(content, pageId) {
	const keyPatterns = [
		new RegExp(`\\t${pageId.replace(/-/g, '\\-')}: \\{[\\s\\S]*?\\},\\n`, 'g'),
		new RegExp(`\\t'${pageId.replace(/-/g, '\\-')}': \\{[\\s\\S]*?\\},\\n`, 'g'),
	];
	let r = content;
	for (const p of keyPatterns) r = r.replace(p, '');
	// Remove from PageId union
	r = r.replace(new RegExp(`\\s*\\|\\s*'${pageId}'`, 'g'), '');
	// Remove from englishPaths single line
	r = r.replace(new RegExp(`\\t${pageId.replace(/-/g, '\\-')}: '[^']*',\\n`, 'g'), '');
	r = r.replace(new RegExp(`\\t'${pageId.replace(/-/g, '\\-')}': '[^']*',\\n`, 'g'), '');
	return r;
}

async function fixRouting() {
	let content = await readFile(path.join(SRC, 'src/data/i18n/routing.ts'), 'utf8');
	content = apply(content);
	for (const id of REMOVE_IDS) content = removePageBlocks(content, id);
	// Fix eac key in englishPaths
	content = content.replace(/\teac-bypass: '/, "\t'eac-bypass': '");
	await writeFile(path.join(ROOT, 'src/data/i18n/routing.ts'), content);
	console.log('Fixed routing.ts');
}

async function fixConstants() {
	const heroImages = `/** Hero image per page topic — keyword-rich escape-from-fortnite-cheats paths. */
export const HERO_IMAGES = {
	home: '/images/escape-from-fortnite-cheats-hero.webp',
	'fortnite-esp': '/images/escape-from-fortnite-cheats-esp-wallhack.webp',
	'fortnite-aimbot': '/images/escape-from-fortnite-cheats-aimbot-combat.webp',
	features: '/images/escape-from-fortnite-cheats-package.webp',
	pricing: '/images/escape-from-fortnite-cheats-cover.webp',
	setup: '/images/fortnite-loadout-builder.webp',
	updates: '/images/fortnite-header-art.webp',
	faq: '/images/fortnite-squad-fight.webp',
	support: '/images/escape-from-fortnite-cheats-package.webp',
	undetected: '/images/fortnite-battle-royale-combat.webp',
	wallhack: '/images/escape-from-fortnite-cheats-esp-wallhack.webp',
	radar: '/images/fortnite-player-esp.webp',
	'eac-bypass': '/images/fortnite-reboot-van-fight.webp',
	'cheats-2026': '/images/escape-from-fortnite-cheats-hero.webp',
	privacy: '/images/escape-from-fortnite-cheats-aimbot-combat.webp',
	refund: '/images/escape-from-fortnite-cheats-cover.webp',
	terms: '/images/escape-from-fortnite-cheats-package.webp',
};`;

	let content = await readFile(path.join(SRC, 'scripts/i18n-data/constants.mjs'), 'utf8');
	content = apply(content);
	for (const id of REMOVE_IDS) {
		content = content.replace(new RegExp(`'${id}',\\s*`, 'g'), '');
	}
	content = content.replace(
		/export const PAGE_IDS = \[[\s\S]*?\];/,
		`export const PAGE_IDS = [\n\t'home', 'fortnite-esp', 'fortnite-aimbot', 'features', 'pricing', 'setup',\n\t'updates', 'faq', 'support', 'undetected', 'wallhack', 'radar', 'eac-bypass',\n\t'cheats-2026', 'privacy', 'refund', 'terms',\n];`,
	);
	content = content.replace(/\/\*\* Hero image[\s\S]*?};/, heroImages);
	content = content.replace(
		/export type PageId = [^;]+;/,
		"export type PageId = 'home' | 'fortnite-esp' | 'fortnite-aimbot' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'wallhack' | 'radar' | 'eac-bypass' | 'cheats-2026' | 'privacy' | 'refund' | 'terms';",
	);
	content = content.replace(/operatorEsp/g, 'playerEsp');
	content = content.replace(/rebootFight/g, 'rebootFight');
	content = content.replace(/alMazrah/g, 'battleRoyaleIsland');
	await writeFile(path.join(ROOT, 'scripts/i18n-data/constants.mjs'), content);
	console.log('Fixed constants.mjs');
}

await fixRouting();
await fixConstants();
