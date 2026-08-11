#!/usr/bin/env node
/**
 * Completes escape-from-fortnite-cheats SEO audit: add missing pages, fix leftovers, strip Zadeyo from meta.
 * Run: node scripts/complete-seo-audit.mjs
 */
import { readFile, writeFile, mkdir, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const NODE = 'C:\\Program Files\\nodejs\\node.exe';

const EXTRA_PAGES = [
	{ id: 'hacks', dir: 'fortnite-cheats', pageId: 'hacks' },
	{ id: 'cheat-download', dir: 'fortnite-cheat-download', pageId: 'cheat-download' },
	{ id: 'mod-menu', dir: 'fortnite-mod-menu', pageId: 'mod-menu' },
	{ id: 'soft-aim', dir: 'fortnite-soft-aim', pageId: 'soft-aim' },
	{ id: 'best-cheats', dir: 'best-fortnite-cheats', pageId: 'best-cheats' },
	{ id: 'aimbot-hack', dir: 'fortnite-aimbot-hack', pageId: 'aimbot-hack' },
	{ id: 'esp-hack', dir: 'fortnite-esp-hack', pageId: 'esp-hack' },
	{ id: 'unlock-all', dir: 'fortnite-unlock-all', pageId: 'unlock-all' },
];

const GLOBAL_REPLACEMENTS = [
	[/fortnite-fortnite/g, 'fortnite'],
	[/eac-bypass-fortnite/g, 'eac-bypass'],
	[/Fortnite/g, 'Fortnite'],
	[/Fortnite/g, 'Fortnite'],
	[/Call of Duty/g, 'Fortnite'],
	[/Fortnite Wallhack/g, 'Fortnite Wallhack'],
	[/Fortnite Radar Hack/g, 'Fortnite Radar Hack'],
	[/Fortnite Cheat Features/g, 'Fortnite Cheat Features'],
	[/Fortnite Cheat Pricing/g, 'Fortnite Cheat Pricing'],
	[/Fortnite Cheat Setup/g, 'Fortnite Cheat Setup'],
	[/Fortnite Cheat Status/g, 'Fortnite Cheat Status'],
	[/Fortnite Cheat Support/g, 'Fortnite Cheat Support'],
	[/Fortnite squad fight/g, 'Fortnite squad fight'],
	[/Fortnite squad builder/g, 'Fortnite loadout builder'],
	[/Fortnite store header/g, 'Fortnite header'],
	[/Fortnite wasteland combat/g, 'Fortnite battle royale combat'],
	[/Fortnite loadout builder/g, 'Fortnite loadout builder'],
	[/Fortnite pricing/g, 'Fortnite pricing'],
	[/Fortnite Easy Anti-Cheat/g, 'Fortnite Easy Anti-Cheat'],
	[/on Fortnite/g, 'on Fortnite'],
	[/for Fortnite/g, 'for Fortnite'],
	[/Fortnite guides/g, 'Fortnite guides'],
	[/Fortnite guide/g, 'Fortnite guide'],
	[/Fortnite hileleri/g, 'Fortnite hileleri'],
	[/Fortnite hile/g, 'Fortnite hile'],
	[/Fortnite hileleri/g, 'Fortnite hileleri'],
	[/cheatów Fortnite/g, 'cheatów Fortnite'],
	[/cheat Fortnite/g, 'cheat Fortnite'],
	[/cheats Fortnite/g, 'cheats Fortnite'],
	[/trucos Fortnite/g, 'trucos Fortnite'],
	[/triche Fortnite/g, 'triche Fortnite'],
	[/trucchi Fortnite/g, 'trucchi Fortnite'],
	[/Wallhack Fortnite/g, 'Fortnite Wallhack'],
	[/cheat Fortnite undetected/g, 'cheat Fortnite undetected'],
	[/cheats Fortnite undetected/g, 'cheats Fortnite undetected'],
	[/Verdansk beams/g, 'long-range AR beams'],
	[/zero-build room clears/g, 'close-quarters room clears'],
	[/Verdansk and Urzikstan/g, 'Verdansk and zero-build'],
	[/Verdansk, Urzikstan/g, 'Verdansk, zero-build'],
	[/raid and zero-build/g, 'raid and zero-build'],
	[/Activision's anti-cheat/g, "Epic Games' anti-cheat"],
	[/Activision anti-cheat/g, 'Epic Games anti-cheat'],
	[/Activision ships/g, 'Epic Games ships'],
	[/Activision security/g, 'Epic Games security'],
	[/Activision bans/g, 'Epic Games bans'],
	[/Activision/g, 'Epic Games'],
	[/eac/gi, 'eac-bypass'],
	[/Easy Anti-Cheat/g, 'Easy Anti-Cheat'],
	[/escape-from-fortnite-cheats/g, 'escape-from-fortnite-cheats'],
	[/fortnite/g, 'fortnite'],
	[/Undetected Wallhack for Call of Duty/g, 'Undetected Wallhack for Fortnite'],
	[/How ESP wallhack, radar, and Aimbot rebuild after Call of Duty anti-cheat/g,
		'How ESP wallhack, radar, and Aimbot rebuild after Fortnite anti-cheat'],
];

/** Remove Zadeyo from meta description/title strings only */
function stripZadeyoFromMeta(text) {
	return text
		.replace(/\s*[—–-]\s*checkout via Zadeyo\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout en Zadeyo\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout via Zadeyo\.?/gi, '.')
		.replace(/\s*with Zadeyo checkout\.?/gi, '.')
		.replace(/\s*via Zadeyo checkout\.?/gi, '.')
		.replace(/\s*Checkout via Zadeyo\.?/gi, '')
		.replace(/\s*Zadeyo checkout,?\s*/gi, ' ')
		.replace(/\s*Zadeyo delivery\.?/gi, 'instant digital delivery.')
		.replace(/\s*and Zadeyo delivery\.?/gi, ' and instant digital delivery.')
		.replace(/\|\s*Instant Zadeyo Delivery/g, '| Instant Digital Delivery')
		.replace(/Buy on Zadeyo/g, 'Buy Fortnite Cheats')
		.replace(/\s{2,}/g, ' ')
		.trim();
}

async function walkFiles(dir, exts, files = []) {
	const entries = await import('node:fs/promises').then((fs) => fs.readdir(dir, { withFileTypes: true }));
	for (const e of entries) {
		if (e.name === 'node_modules' || e.name === 'dist' || e.name === '.git') continue;
		const full = path.join(dir, e.name);
		if (e.isDirectory()) await walkFiles(full, exts, files);
		else if (exts.some((x) => e.name.endsWith(x))) files.push(full);
	}
	return files;
}

async function applyGlobalFixes() {
	const targets = await walkFiles(path.join(ROOT, 'src'), ['.ts', '.astro']);
	targets.push(
		path.join(ROOT, 'scripts', 'i18n-data', 'pages-en.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'pages-i18n.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'ui-strings-part1.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'ui-strings-part2.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'phrases.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'gallery-ui.ts'),
		path.join(ROOT, 'src', 'data', 'i18n', 'gallery-ui.ts'),
		path.join(ROOT, 'functions', '_middleware.js'),
	);

	for (const file of targets) {
		try {
			await access(file);
		} catch {
			continue;
		}
		let content = await readFile(file, 'utf8');
		const original = content;
		for (const [pattern, replacement] of GLOBAL_REPLACEMENTS) {
			content = content.replace(pattern, replacement);
		}
		if (file.endsWith('pages-en.mjs')) {
			// Strip Zadeyo from description: and title: lines
			content = content.replace(/(description:\s*['"])([^'"]+)(['"])/g, (_, pre, body, post) =>
				pre + stripZadeyoFromMeta(body) + post,
			);
			content = content.replace(/(title:\s*['"])([^'"]+)(['"])/g, (_, pre, body, post) =>
				pre + stripZadeyoFromMeta(body) + post,
			);
		}
		if (content !== original) {
			await writeFile(file, content, 'utf8');
			console.log(`Fixed: ${path.relative(ROOT, file)}`);
		}
	}
}

async function createExtraPages() {
	const template = `---
import LocalizedPage from '../../components/LocalizedPage.astro';
---

<LocalizedPage locale="en" pageId="PAGE_ID" />
`;
	for (const page of EXTRA_PAGES) {
		const dir = path.join(ROOT, 'src', 'pages', page.dir);
		await mkdir(dir, { recursive: true });
		const file = path.join(dir, 'index.astro');
		try {
			await access(file);
		} catch {
			await writeFile(file, template.replace('PAGE_ID', page.pageId), 'utf8');
			console.log(`Created page: src/pages/${page.dir}/index.astro`);
		}
	}
}

async function fixLocalesBlogUi() {
	const file = path.join(ROOT, 'src', 'data', 'i18n', 'locales.ts');
	let content = await readFile(file, 'utf8');
	content = content.replace(/Fortnite guides/g, 'Fortnite guides');
	content = content.replace(/Fortnite guide/g, 'Fortnite guide');
	content = content.replace(/Fortnite hileleri/g, 'Fortnite hileleri');
	content = content.replace(/Fortnite hile/g, 'Fortnite hile');
	content = content.replace(/cheat Fortnite/g, 'cheat Fortnite');
	content = content.replace(/cheats Fortnite/g, 'cheats Fortnite');
	content = content.replace(/trucos Fortnite/g, 'trucos Fortnite');
	content = content.replace(/triche Fortnite/g, 'triche Fortnite');
	content = content.replace(/trucchi Fortnite/g, 'trucchi Fortnite');
	content = content.replace(/cheatów Fortnite/g, 'cheatów Fortnite');
	content = content.replace(/читов Fortnite/g, 'читов Fortnite');
	content = content.replace(/читів Fortnite/g, 'читів Fortnite');
	content = content.replace(/Fortniteチート/g, 'Fortniteチート');
	content = content.replace(/Fortnite 치트/g, 'Fortnite 치트');
	content = content.replace(/Fortnite作弊/g, 'Fortnite作弊');
	content = content.replace(/Fortnite rehberleri/g, 'Fortnite rehberleri');
	content = content.replace(/Fortnite gidsen/g, 'Fortnite gidsen');
	content = content.replace(/Fortnite průvodce/g, 'Fortnite průvodce');
	content = content.replace(/Fortnite guider/g, 'Fortnite guider');
	content = content.replace(/Fortnite related/g, 'Fortnite related');
	content = content.replace(/Fortnite ガイド/g, 'Fortnite ガイド');
	content = content.replace(/Fortnite 가이드/g, 'Fortnite 가이드');
	content = content.replace(/Fortnite指南/g, 'Fortnite指南');
	content = content.replace(/Fortnite गाइड/g, 'Fortnite गाइड');
	content = content.replace(/Fortnite panduan/g, 'Fortnite panduan');
	content = content.replace(/Fortnite คู่มือ/g, 'Fortnite คู่มือ');
	content = content.replace(/Fortnite hướng dẫn/g, 'Fortnite hướng dẫn');
	await writeFile(file, content, 'utf8');
	console.log('Fixed locales.ts blogUi');
}

console.log('=== Fortnite Cheats SEO completion ===\n');
await applyGlobalFixes();
await createExtraPages();
await fixLocalesBlogUi();
console.log('\nDone. Next: update routing.ts manually, then run generate:i18n, fetch:images, build:validate');
