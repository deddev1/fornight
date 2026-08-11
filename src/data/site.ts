export {
	brand,
	blogLabel,
	fillBrandTokens,
	homeSeo,
	seoDescription,
	seoPageTitle,
	seoTitle,
	siteConfig,
	seoKeywords,
	productInfo,
} from './site-core';

import { fillBrandTokens } from './brand';

function faq<T extends { question: string; answer: string; seoTitle: string; seoDescription: string }>(item: T): T {
	return {
		...item,
		question: fillBrandTokens(item.question),
		answer: fillBrandTokens(item.answer),
		seoTitle: fillBrandTokens(item.seoTitle),
		seoDescription: fillBrandTokens(item.seoDescription),
	};
}

function reviewMeta<T extends { seoTitle: string; seoDescription: string }>(item: T): T {
	return {
		...item,
		seoTitle: fillBrandTokens(item.seoTitle),
		seoDescription: fillBrandTokens(item.seoDescription),
	};
}

export const trustSignals = {
	status: 'Online',
	statusNote: fillBrandTokens('{brand} is live for {game} on Windows PC.'),
	delivery: 'Instant digital delivery',
	platform: 'Windows 10 & 11',
	antiCheat: fillBrandTokens('{antiCheat} maintenance supported'),
} as const;

export const seoLandingPages = [
	{ label: fillBrandTokens('{game} hacks'), href: '/fortnite-cheats/' },
	{ label: fillBrandTokens('{game} cheats'), href: '/fortnite-cheats-2026/' },
	{ label: fillBrandTokens('{game} esp'), href: '/fortnite-esp/' },
	{ label: fillBrandTokens('{game} aimbot'), href: '/fortnite-aimbot/' },
	{ label: fillBrandTokens('{game} hack download'), href: '/fortnite-cheat-download/' },
	{ label: fillBrandTokens('Undetected {primaryKeyword}'), href: '/undetected-fortnite-cheats/' },
	{ label: fillBrandTokens('{game} wallhack'), href: '/fortnite-wallhack/' },
	{ label: fillBrandTokens('{game} radar hack'), href: '/fortnite-radar-hack/' },
] as const;

export const mainNav = [
	{ label: 'Home', href: '/' },
	{ label: 'Cheats', href: '/fortnite-cheats/' },
	{ label: 'Aimbot', href: '/fortnite-aimbot/' },
	{ label: 'ESP', href: '/fortnite-esp/' },
	{ label: 'Features', href: '/features/' },
	{ label: 'Pricing', href: '/pricing/' },
	{ label: 'Setup', href: '/setup/' },
	{ label: 'Updates', href: '/updates/' },
	{ label: 'FAQ', href: '/faq/' },
] as const;

export const footerNav = [
	{ label: fillBrandTokens('{game} hack update log'), href: '/updates/' },
	{ label: fillBrandTokens('Contact {brand} support'), href: '/support/' },
	{ label: 'Refund policy details', href: '/refund-policy/' },
	{ label: 'Privacy policy details', href: '/privacy-policy/' },
	{ label: 'Terms of use', href: '/terms/' },
] as const;

export const footerExplore = [
	{ label: fillBrandTokens('{brand} home'), href: '/' },
	{ label: fillBrandTokens('{game} hacks pillar'), href: '/fortnite-cheats/' },
	{ label: fillBrandTokens('Undetected {game} hacks'), href: '/undetected-fortnite-cheats/' },
	{ label: fillBrandTokens('{game} wallhack ESP'), href: '/fortnite-wallhack/' },
	{ label: fillBrandTokens('{game} radar hack'), href: '/fortnite-radar-hack/' },
	{ label: fillBrandTokens('{antiCheat} bypass guide'), href: '/eac-bypass/' },
	{ label: fillBrandTokens('{game} cheats 2026'), href: '/fortnite-cheats-2026/' },
	{ label: fillBrandTokens('{game} Aimbot controls'), href: '/fortnite-aimbot/' },
	{ label: fillBrandTokens('{game} ESP overlays'), href: '/fortnite-esp/' },
	{ label: fillBrandTokens('Full {game} hack feature list'), href: '/features/' },
	{ label: 'Monthly & lifetime pricing', href: '/pricing/' },
	{ label: fillBrandTokens('{game} hack setup guide'), href: '/setup/' },
	{ label: fillBrandTokens('{game} hacks FAQ'), href: '/faq/' },
] as const;

export type FaqItem = {
	question: string;
	answer: string;
	slug: string;
	seoTitle: string;
	seoDescription: string;
};

export const homeFaqs: readonly FaqItem[] = [
	faq({
		question: 'What is {brand}?',
		answer:
			'{brand} is an undetected {primaryKeyword} package for Windows PC — also searched as {game} cheats and {game} hack. It includes ESP wallhack, 2D radar, and aimbot controls, with {antiCheat} maintenance and setup support.',
		slug: 'what-are-fortnite-cheats',
		seoTitle: 'What is {brand}? | FAQ',
		seoDescription:
			'{brand} explained: undetected ESP, radar, and aimbot for {game} on Windows PC with {antiCheat} maintenance.',
	}),
	faq({
		question: 'Are {primaryKeyword} undetected in 2026?',
		answer:
			'{brand} is maintained for {game} with rebuilds after {antiCheat} and game patches. Check the Status page before you queue. No cheat can guarantee permanent undetected status — maintenance and responsible use matter.',
		slug: 'are-fortnite-cheats-undetected-in-2026',
		seoTitle: 'Are {brand} Undetected in 2026? | FAQ',
		seoDescription:
			'How {brand} stays maintained after {antiCheat} patches in 2026 — and why no cheat can promise permanent undetected status.',
	}),
	faq({
		question: 'Does this work in Battle Royale and Zero Build?',
		answer:
			'Yes. ESP, radar, and aimbot are built for {game} match flow — reading enemy squads, spotting chests, and staying aware near reboot vans.',
		slug: 'battle-royale-and-zero-build',
		seoTitle: 'Battle Royale and Zero Build Support | FAQ',
		seoDescription:
			'{brand} works in Battle Royale and Zero Build — ESP, radar, and aimbot for Windows PC.',
	}),
	faq({
		question: 'What is included — ESP, wallhack, radar, or Aimbot?',
		answer:
			'{brand} bundles ESP wallhack, chest markers, 2D radar cues, and configurable Aimbot in one license. See Features for the full list.',
		slug: 'esp-wallhack-radar-or-aimbot',
		seoTitle: 'What Is Included: ESP, Wallhack, Radar, Aimbot | FAQ',
		seoDescription:
			'One {brand} license includes ESP wallhack, chest markers, 2D radar cues, and configurable Aimbot for Windows PC.',
	}),
	faq({
		question: 'How are licenses delivered?',
		answer:
			'After payment is confirmed, {brand} license details are delivered digitally through checkout. Timing can vary by payment method and order review. Keep your order confirmation ready if you contact support.',
		slug: 'how-are-licenses-delivered',
		seoTitle: 'How Are {brand} Licenses Delivered? | FAQ',
		seoDescription:
			'{brand} licenses are delivered digitally after payment confirmation. Timing varies by payment method and order review.',
	}),
	faq({
		question: 'Where do I check updates after a {game} or {antiCheat} patch?',
		answer:
			'Maintenance notes are posted on the Status page when a {game} or {antiCheat} update affects the package. That is the fastest place to confirm whether a new {brand} build is live.',
		slug: 'where-to-check-updates',
		seoTitle: 'Where to Check {game} / {antiCheat} Updates | FAQ',
		seoDescription:
			'Check the Status page after {game} or {antiCheat} patches to confirm the latest {brand} build status.',
	}),
	faq({
		question: 'How do I contact support?',
		answer:
			'Use the Support page or email {email}. Include your order details, package length, and a clear description of the setup issue so replies can be faster.',
		slug: 'how-to-contact-support',
		seoTitle: 'How to Contact {brand} Support | FAQ',
		seoDescription:
			'Contact {brand} support via the Support page or {email} with your order details for faster help.',
	}),
] as const;

export const seoFaqs: readonly FaqItem[] = [
	...homeFaqs,
	faq({
		question: 'What is a {game} wallhack?',
		answer:
			'A {game} wallhack is an ESP overlay that shows players, builds, and loot through walls. {brand} includes distance readouts, zone cues, and toggleable categories.',
		slug: 'what-is-a-fortnite-wallhack',
		seoTitle: 'What Is a {game} Wallhack? | FAQ',
		seoDescription:
			'A {game} wallhack is ESP that reveals players and loot through walls — with distance, reboot vans, and category toggles.',
	}),
	faq({
		question: 'Does {brand} include a radar hack?',
		answer:
			'Yes. {brand} includes 2D radar overlays that highlight nearby threats outside your view — useful for flanks and reboot holds.',
		slug: 'does-fortnite-cheats-include-radar-hack',
		seoTitle: 'Does {brand} Include a Radar Hack? | FAQ',
		seoDescription:
			'Yes — {brand} includes 2D radar overlays for nearby threats outside your FOV.',
	}),
	faq({
		question: 'How does {antiCheat} affect {primaryKeyword}?',
		answer:
			'{antiCheat} monitors {game} on Windows PC. {brand} posts maintenance notes after patches that may need a rebuild. Check Status before you queue.',
		slug: 'eac-anti-cheat-and-fortnite-cheats',
		seoTitle: 'How {antiCheat} Affects {brand} | FAQ',
		seoDescription:
			'{antiCheat} may require {brand} rebuilds after patches. Status notes explain the update workflow.',
	}),
	faq({
		question: 'Can I buy undetected {game} cheats for Windows PC?',
		answer:
			'Yes — {brand} sells monthly and lifetime licenses for Windows PC with ESP, radar, and aimbot in one stack. Compare plans on Store before checkout.',
		slug: 'buy-undetected-fortnite-cheats-windows-pc',
		seoTitle: 'Buy Undetected {game} Cheats for Windows PC | FAQ',
		seoDescription:
			'Buy monthly or lifetime {brand} licenses for Windows PC — ESP, radar, and aimbot in one stack. Compare pricing before checkout.',
	}),
] as const;

export type CustomerReview = {
	handle: string;
	rating: 3 | 4 | 5;
	text: string;
	short: string;
	slug: string;
	seoTitle: string;
	seoDescription: string;
	date: string;
	tag?: string;
};

export const customerReviews = [
	reviewMeta({
		handle: 'xKrypt0_FN',
		rating: 5,
		text: 'Soft aim in Fortnite Cheats feels smooth in Battle Royale. The menu took a few minutes to learn. After that, matches felt easy.',
		short: 'Soft aim in Fortnite Cheats feels smooth in Battle Royale.',
		slug: 'fortnite-soft-aim-review-xkrypt0',
		seoTitle: 'Soft Aim Review by @xKrypt0_FN — 5/5 | {brand}',
		seoDescription: '@xKrypt0_FN rates {brand} soft aim 5/5 for Battle Royale on Windows PC.',
		date: '2026-07-24',
		tag: 'Soft aim',
	}),
	reviewMeta({
		handle: 'buildsR4K',
		rating: 4,
		text: 'ESP boxes help on Zero Build matches. You can see who is holding a hallway before you push. Still worth the price for Fortnite Cheats.',
		short: 'ESP boxes help on Zero Build matches. Still worth the price for Fortnite Cheats.',
		slug: 'fortnite-esp-zero-build-review-buildsr4k',
		seoTitle: 'ESP Review by @buildsR4K — 4/5 | {brand}',
		seoDescription: '@buildsR4K rates {brand} ESP 4/5 for Zero Build matches on Windows PC.',
		date: '2026-07-19',
		tag: 'Zero Build',
	}),
	reviewMeta({
		handle: 'dma_wizard',
		rating: 5,
		text: 'I moved to Fortnite Cheats this season. Setup was simple. It stayed up after the last EAC update when my old cheat failed. Lifetime was a good buy.',
		short: 'Fortnite Cheats stayed up after the last EAC update. Lifetime was a good buy.',
		slug: 'fortnite-cloud-dma-review-dma-wizard',
		seoTitle: 'Update Review by @dma_wizard — 5/5 | {brand}',
		seoDescription: '@dma_wizard rates {brand} 5/5 after a {antiCheat} update on Windows PC.',
		date: '2026-06-27',
		tag: 'Updates',
	}),
	reviewMeta({
		handle: 'ctrl_player99',
		rating: 4,
		text: 'Soft aim in Fortnite Cheats is easy to tune on PC. I changed FOV a little and it felt natural. Menu is clear enough.',
		short: 'Soft aim in Fortnite Cheats is easy to tune on PC.',
		slug: 'fortnite-controller-soft-aim-review-ctrl-player99',
		seoTitle: 'Soft Aim Review by @ctrl_player99 — 4/5 | {brand}',
		seoDescription: '@ctrl_player99 rates {brand} soft aim 4/5 on Windows PC.',
		date: '2026-07-11',
		tag: 'Soft aim',
	}),
	reviewMeta({
		handle: 'stormChaser_07',
		rating: 3,
		text: 'Fortnite Cheats works well once it is running. First launch was slow because Windows Defender flagged the loader. Support replied in about two hours. ESP on Ranked is solid.',
		short: 'ESP on Ranked is solid. Support helped after a slow first launch.',
		slug: 'fortnite-cheat-setup-review-stormchaser07',
		seoTitle: 'Setup Review by @stormChaser_07 — 3/5 | {brand}',
		seoDescription: '@stormChaser_07 rates {brand} setup 3/5. ESP on Ranked is solid after support help.',
		date: '2026-06-15',
		tag: 'Setup',
	}),
	reviewMeta({
		handle: 'lootGoblinx',
		rating: 5,
		text: 'Chest ESP in Fortnite Cheats pays for the monthly plan. Chest markers and distance make early games faster.',
		short: 'Chest ESP in Fortnite Cheats pays for the monthly plan.',
		slug: 'fortnite-loot-esp-review-lootgoblinx',
		seoTitle: 'Chest ESP Review by @lootGoblinx — 5/5 | {brand}',
		seoDescription: '@lootGoblinx rates {brand} loot ESP 5/5 for early games on Windows PC.',
		date: '2026-08-01',
	}),
	reviewMeta({
		handle: 'rankedGrind42',
		rating: 4,
		text: 'I have used Fortnite Cheats since last season. Soft aim per weapon helps in builds. Status updates after EAC patches could be clearer, but it came back the next day.',
		short: 'Soft aim per weapon in Fortnite Cheats helps in builds.',
		slug: 'fortnite-soft-aim-raid-review-rankedgrind42',
		seoTitle: 'Match Soft Aim by @rankedGrind42 — 4/5 | {brand}',
		seoDescription: '@rankedGrind42 rates {brand} soft aim 4/5 for matches on Windows PC.',
		date: '2026-07-07',
		tag: 'Match',
	}),
	reviewMeta({
		handle: 'vanLifeFN',
		rating: 5,
		text: 'Radar in Fortnite Cheats saved me near reboot vans. Seeing the third party early in duos is huge. Boxes plus radar look clean.',
		short: 'Radar in Fortnite Cheats saved me near reboot vans.',
		slug: 'fortnite-radar-hack-review-vanlifeeft',
		seoTitle: 'Radar Review by @vanLifeFN — 5/5 | {brand}',
		seoDescription: '@vanLifeFN rates {brand} radar 5/5 near reboot vans on Windows PC.',
		date: '2026-07-28',
		tag: 'Reboots',
	}),
	reviewMeta({
		handle: 'patchDayMike',
		rating: 4,
		text: 'Most cheats go down on patch day. Fortnite Cheats posted on the status page within a few hours and was back the next morning. My old tool left me waiting for days.',
		short: 'Fortnite Cheats was back the next morning after a patch.',
		slug: 'fortnite-eac-update-review-patchdaymike',
		seoTitle: 'Status Review by @patchDayMike — 4/5 | {brand}',
		seoDescription: '@patchDayMike rates {brand} status updates 4/5 after {antiCheat} patches.',
		date: '2026-06-09',
		tag: 'EAC updates',
	}),
	reviewMeta({
		handle: 'snipezOnly_',
		rating: 5,
		text: 'Sniper soft aim plus ESP in Fortnite Cheats is excellent for long shots. Simple and strong.',
		short: 'Sniper soft aim plus ESP in Fortnite Cheats is excellent.',
		slug: 'fortnite-sniper-soft-aim-review-snipezonly',
		seoTitle: 'Sniper Soft Aim by @snipezOnly_ — 5/5 | {brand}',
		seoDescription: '@snipezOnly_ rates {brand} sniper soft aim 5/5 with ESP on Windows PC.',
		date: '2026-08-01',
	}),
] as const satisfies readonly CustomerReview[];

export const customerReviewStats = {
	averageRating: 4.4,
	totalCount: customerReviews.length,
} as const;
