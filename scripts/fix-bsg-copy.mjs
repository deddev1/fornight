#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';

const files = ['scripts/i18n-data/pages-en.mjs', 'scripts/generate-blog-posts.mjs'];
const pairs = [
	["Activision's", "Epic Games'"],
	['Activision\u2019', "Epic Games'"],
	['Activision services', 'Epic Games services'],
	['Activision service', 'Epic Games service'],
	['Activision platform', 'Epic Games platform'],
	['Activision outages', 'launcher outages'],
	['Activision bans', 'Epic Games bans'],
	['Activision security', 'Easy Anti-Cheat security'],
	['Activision Status', 'Epic Games Status'],
	['Activision Fortnite', 'Fortnite'],
	['Activision Support', 'Epic Games Status'],
	['Activision', 'Epic Games'],
	['EAC guide', 'Easy Anti-Cheat guide'],
	['undetected EAC notes', 'undetected Easy Anti-Cheat notes'],
	['status.epicgames.com', 'www.fortnite.com/support'],
	['www.epicgames.com/fortnite', 'www.fortnite.com'],
	['www.fortnite.com/competitive', 'www.fortnite.com'],
	['https://www.fortnite.com/', 'https://www.fortnite.com/'],
	['Fortnite.com', 'Fortnite'],
	['Fortnite Competitive', 'Fortnite'],
];

for (const f of files) {
	let c = readFileSync(f, 'utf8');
	const orig = c;
	for (const [a, b] of pairs) c = c.split(a).join(b);
	if (c !== orig) {
		writeFileSync(f, c);
		console.log('updated', f);
	} else {
		console.log('no change', f);
	}
}
