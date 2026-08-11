#!/usr/bin/env node
/** Adapt pages-en.mjs and pages-i18n.mjs from Fortnite source. */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const REMOVE_PAGE_KEYS = [
	'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all',
];

const REPLACEMENTS = [
	['fortnite-esp', 'fortnite-esp'],
	['fortnite-aimbot', 'fortnite-aimbot'],
	["'eac-bypass'", "'eac-bypass'"],
	['eac-bypass', 'eac-bypass'],
	['undetected-fortnite-cheats', 'undetected-fortnite-cheats'],
	['fortnite-wallhack', 'fortnite-wallhack'],
	['fortnite-radar-hack', 'fortnite-radar-hack'],
	['fortnite-cheats-2026', 'fortnite-cheats-2026'],
	['escape-from-fortnite-cheats', 'escape-from-fortnite-cheats'],
	['fortnite', 'fortnite'],
	['Fortnite', 'Fortnite'],
	['Fortnite', 'Fortnite'],
	['Fortnite Cheats', 'Fortnite Cheats'],
	['Fortnite cheats', 'Fortnite cheats'],
	['Fortnite cheat', 'Fortnite cheat'],
	['Fortnite ESP', 'Fortnite ESP'],
	['Fortnite Aimbot', 'Fortnite Aimbot'],
	['Fortnite wallhack', 'Fortnite wallhack'],
	['Fortnite radar', 'Fortnite radar'],
	['Fortnite firefights', 'Fortnite firefights'],
	['Fortnite combat', 'Fortnite combat'],
	['Fortnite patches', 'Fortnite patches'],
	['Fortnite updates', 'Fortnite updates'],
	['Fortnite setup', 'Fortnite setup'],
	['Fortnite license', 'Fortnite license'],
	['Fortnite licenses', 'Fortnite licenses'],
	['Fortnite sessions', 'Fortnite sessions'],
	['in Fortnite', 'in Fortnite'],
	['for Fortnite', 'for Fortnite'],
	['Fortnite on', 'Fortnite on'],
	['Fortnite or', 'Fortnite or'],
	['Fortnite\'s', 'Fortnite\'s'],
	['Fortnite ', 'Fortnite '],
	['Easy Anti-Cheat', 'Easy Anti-Cheat'],
	['EAC maintenance', 'EAC maintenance'],
	['EAC bypass', 'EAC bypass'],
	['EAC Bypass', 'EAC Bypass'],
	['Easy Anti-Cheat', 'Easy Anti-Cheat'],
	['eac-bypass', 'eac-bypass'],
	['support@bestfortnitecheats.com', 'support@bestfortnitecheats.com'],
	['Battle Royale island, Zero Build, and Ranked', 'Battle Royale island, Zero Build, and Ranked'],
	['Battle Royale island, Zero Build and Ranked', 'Battle Royale island, Zero Build and Ranked'],
	['reboot fights', 'reboot fights'],
	['reboot fight', 'reboot fight'],
	['match rounds', 'match rounds'],
	['reboot', 'reboot'],
	['players', 'players'],
	['operator', 'player'],
	['players', 'Players'],
	['Operator', 'Player'],
	['reboot timer', 'reboot timer'],
	['Battle Royale and Zero Build', 'Battle Royale and Zero Build'],
	['Battle Royale and Zero Build', 'Battle Royale and Zero Build'],
	['BR & Zero Build', 'BR & Zero Build'],
	['chest loot', 'chest loot'],
	['chest loot', 'chest loot'],
	['contracts', 'chests'],
	['contract', 'chest'],
	['Activision\'s', 'Epic Games\''],
	['Call of Duty combat pace', 'Fortnite combat pace'],
	['COD', 'Fortnite'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

function removePageObjectBlocks(content) {
	let r = content;
	for (const key of REMOVE_PAGE_KEYS) {
		const quoted = `'${key}'`;
		const patterns = [
			new RegExp(`\\t${quoted}: \\{[\\s\\S]*?\\},\\n`, 'g'),
			new RegExp(`\\t${key.replace(/-/g, '\\-')}: \\{[\\s\\S]*?\\},\\n`, 'g'),
		];
		for (const p of patterns) r = r.replace(p, '');
	}
	return r;
}

async function adaptFile(rel) {
	let content = await readFile(path.join(SRC, rel), 'utf8');
	content = apply(content);
	content = removePageObjectBlocks(content);
	await writeFile(path.join(ROOT, rel), content);
	console.log('Adapted', rel);
}

await adaptFile('scripts/i18n-data/pages-en.mjs');
await adaptFile('scripts/i18n-data/pages-i18n.mjs');
await adaptFile('scripts/i18n-data/phrases.mjs');

// Patch phrases KW object
let phrases = await readFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), 'utf8');
phrases = phrases.replace(
	/const KW = \{[\s\S]*?\};/,
	`const KW = {
	esp: 'ESP wallhack',
	radar: 'radar hack',
	aimbot: 'Aimbot',
	product: 'Fortnite Cheats',
	game: 'Fortnite',
	checkout: 'Zadeyo',
	eac-bypass: 'Easy Anti-Cheat',
};`,
);
phrases = phrases.replace(/KW\.eac/g, 'KW.eac');
phrases = phrases.replace(/maps: '[^']*'/g, "maps: 'Battle Royale island, Zero Build, and Ranked'");
await writeFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), phrases);

console.log('Done adapting i18n pages.');
