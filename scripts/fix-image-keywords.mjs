#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';

const SIMPLE =
	"images: { hero: 'fortnite cheats', espWallhack: 'fortnite cheats wallhack', aimbotCombat: 'fortnite cheats aimbot', squadFight: 'fortnite cheats', playerEsp: 'fortnite cheats esp', headerArt: 'fortnite cheats aimbot', cheatsPackage: 'fortnite cheats radar', rebootFight: 'fortnite cheats aimbot', battleRoyale: 'fortnite cheats', battleRoyaleIsland: 'fortnite cheats esp' }";

const re =
	/images: \{ hero: '[^']+', espWallhack: '[^']+', aimbotCombat: '[^']+', squadFight: '[^']+', playerEsp: '[^']+', headerArt: '[^']+', cheatsPackage: '[^']+', rebootFight: '[^']+', battleRoyale: '[^']+', battleRoyaleIsland: '[^']+' \}/g;

for (const f of ['scripts/i18n-data/ui-strings-part1.mjs', 'scripts/i18n-data/ui-strings-part2.mjs']) {
	const c = readFileSync(f, 'utf8');
	const n = c.replace(re, SIMPLE);
	writeFileSync(f, n);
	console.log(f, (c.match(re) || []).length, 'image blocks simplified');
}

const altMap = [
	["imageAlt: 'Fortnite ESP player tags hack'", "imageAlt: 'fortnite cheats esp'"],
	["imageAlt: 'Fortnite ESP radar hack'", "imageAlt: 'fortnite cheats radar'"],
	["imageAlt: 'Fortnite aimbot sniper kill'", "imageAlt: 'fortnite cheats aimbot'"],
	["imageAlt: 'Fortnite aimbot skeleton targeting'", "imageAlt: 'fortnite cheats aimbot'"],
	["imageAlt: 'Fortnite cheats ADS combat'", "imageAlt: 'fortnite cheats'"],
	["imageAlt: 'Fortnite cheats setup PC activation'", "imageAlt: 'fortnite cheats'"],
	["imageAlt: 'Fortnite cheats updates EAC maintenance'", "imageAlt: 'fortnite cheats'"],
	["imageAlt: 'Fortnite cheats FAQ ESP aimbot'", "imageAlt: 'fortnite cheats'"],
	["imageAlt: 'Fortnite cheats support license help'", "imageAlt: 'fortnite cheats'"],
	["imageAlt: 'Undetected fortnite cheats ESP wallhack'", "imageAlt: 'undetected fortnite cheats'"],
	["imageAlt: 'Fortnite wallhack skeleton ESP'", "imageAlt: 'fortnite cheats wallhack'"],
	["imageAlt: 'EAC bypass fortnite ESP aimbot'", "imageAlt: 'fortnite cheats eac'"],
	["imageAlt: 'Fortnite cheats 2026 ESP aimbot'", "imageAlt: 'fortnite cheats'"],
	["imageAlt: 'Fortnite cheats combat aimbot'", "imageAlt: 'fortnite cheats'"],
	["imageAlt: 'Fortnite cheat download ESP aimbot'", "imageAlt: 'fortnite cheats download'"],
	["imageAlt: 'Fortnite mod menu ESP aimbot'", "imageAlt: 'fortnite cheats mod menu'"],
	["imageAlt: 'Fortnite soft aim aimbot settings'", "imageAlt: 'fortnite cheats soft aim'"],
	["imageAlt: 'Best fortnite cheats 2026 ESP'", "imageAlt: 'best fortnite cheats'"],
	["imageAlt: 'Fortnite aimbot hack combat'", "imageAlt: 'fortnite cheats aimbot'"],
	["imageAlt: 'Fortnite ESP hack wallhack'", "imageAlt: 'fortnite cheats esp'"],
	["imageAlt: 'Fortnite unlock all ESP aimbot guide'", "imageAlt: 'fortnite cheats'"],
	["imageAlt: 'Fortnite cheats privacy policy'", "imageAlt: 'fortnite cheats'"],
	["imageAlt: 'Fortnite cheats refund policy'", "imageAlt: 'fortnite cheats'"],
	["imageAlt: 'Fortnite cheats terms of use'", "imageAlt: 'fortnite cheats'"],
];

let pages = readFileSync('scripts/i18n-data/pages-en.mjs', 'utf8');
for (const [from, to] of altMap) pages = pages.split(from).join(to);
writeFileSync('scripts/i18n-data/pages-en.mjs', pages);
console.log('pages-en imageAlts simplified');

// productPage() imageAlt template in pages-i18n
let i18n = readFileSync('scripts/i18n-data/pages-i18n.mjs', 'utf8');
i18n = i18n
	.split("imageAlt: `Fortnite ${meta.altKeyword}`")
	.join("imageAlt: 'fortnite cheats'")
	.split("galleryTitle: `Fortnite Cheats ${topicName}`")
	.join("galleryTitle: 'fortnite cheats'")
	.split("imageAlt: `Fortnite cheats ${kind} policy`")
	.join("imageAlt: 'fortnite cheats'")
	.split("galleryTitle: `Fortnite Cheats ${kind} resources`")
	.join("galleryTitle: 'fortnite cheats'");
writeFileSync('scripts/i18n-data/pages-i18n.mjs', i18n);
console.log('pages-i18n image alts simplified');
