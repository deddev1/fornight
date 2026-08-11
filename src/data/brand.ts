/**
 * SINGLE SOURCE OF TRUTH for template rebrands.
 * Employees: use Brand Studio at http://localhost:4321/brand-studio/ during `astro dev`.
 * Do not scatter brand strings across components.
 */
export const brand = {
	/** Public brand name (nav, footer, H1 hero, schema Organization) */
	name: 'Fortnite Aimbot',
	/** Short product label if needed */
	shortName: 'Fortnite',
	/** Canonical origin — no trailing slash */
	url: 'https://fortniteaimbot.com',
	locale: 'en',
	market: 'Worldwide',
	supportEmail: 'support@fortniteaimbot.com',
	checkoutUrl: 'https://zadeyo.com/go/QRH?to=%2Fproducts%2Ffortnite',

	/** Game this template instance targets */
	game: 'Fortnite',
	/** Anti-cheat name used in Status / FAQ copy */
	antiCheat: 'Easy Anti-Cheat',

	logo: '/images/fortnite-cheats-logo.webp',
	logoRaster: '/images/fortnite-cheats-logo.png',
	logoRasterWidth: 512,
	logoRasterHeight: 512,
	logoAlt: 'fortnite aimbot logo',
	defaultOgImage: '/images/fortnite-hero-banner.png',
	heroImage: '/images/fortnite-hero-banner.png',

	plans: [
		{ id: 'monthly', label: 'Monthly', price: 35, duration: 'P30D' },
		{ id: 'lifetime', label: 'Lifetime', price: 150, duration: 'P99Y' },
	] as const,
	currency: 'USD',
	platforms: ['Windows PC'] as const,

	/**
	 * Site color tones — accent + canvas + soft/deep/hover/panel.
	 * Edit in Brand Studio → Colors (tones are fully customizable).
	 */
	theme: {
		accent: '#5311ee',
		bg: '#0a0811',
		soft: '#c3aef4',
		deep: '#4907df',
		hover: '#a07bf4',
		panel: '#0a080c',
	},

	/**
	 * Keyword system — primary drives titles; list feeds schema / meta keywords.
	 */
	keywords: {
		primary: 'fortnite aimbot',
		list: [
			'fortnite aimbot',
			'fortnite hacks',
			'cheat on fortnite',
			'aimbot for fortnite',
			'fortnite cheats',
			'aimbot fortnite',
			'download aimbot for fortnite',
			'aimbot for fortnite download',
			'download fortnite aimbot',
			'fortnite aimbot download',
			'hacks for fortnite',
			'free cheat fortnite',
			'aimbot in fortnite',
			'fortnite free cheats',
			'fortnite hacks free',
			'free hacks fortnite',
			'fortnite aimbot free',
			'fortnite hacks for free',
			'fortnite aimbot free download',
			'aimbot for fortnite pc',
			'free fortnite aimbot',
			'fortnite hacks ps4',
			'fortnite aimbot pc',
			'fortnite aimbot ps5',
			'fortnite hacks pc',
			'best fortnite cheat',
			'fortnite wall hacks',
			'best fortnite hacks',
			'fortnite external cheat',
			'undetectable fortnite cheats',
		] as const,
	},

	/**
	 * Editable SEO meta — tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 * Aim ~50–60 chars titles, ~140–160 chars descriptions.
	 */
	seo: {
		homeTitle: 'Fortnite Aimbot | Undetected PC Hacks',
		homeDescription: 'Buy undetected fortnite aimbot for Windows PC. ESP, soft aim, and EAC updates in one license.',
		featuresTitle: '{game} Features | {brand}',
		featuresDescription: 'Everything in one {game} license for Windows PC — ESP, aimbot, Cheats, and patch updates.',
		storeTitle: '{game} Store | {brand}',
		storeDescription: 'Monthly and lifetime {game} plans. Same features. Instant delivery after payment.',
		statusTitle: '{game} Status | {brand}',
		statusDescription: 'Live status for {brand} after {game} or {antiCheat} patches. Check before you queue.',
		previewTitle: '{game} Preview | {brand}',
		previewDescription: 'Quick preview of {brand} — ESP, aimbot, zone tracking, and updates after {game} patches.',
		setupTitle: '{game} Setup | {brand}',
		setupDescription: 'Install and launch {brand} on Windows PC. Short setup steps after you buy.',
		supportTitle: '{game} Support | {brand}',
		supportDescription: 'Get help with {brand}. Email {email} with your order ID.',
		faqTitle: '{game} FAQ | {brand}',
		faqDescription: 'Short answers about {brand} — delivery, setup, updates, and refunds.',
		reviewsTitle: '{brand} Reviews | Buyer Feedback',
		reviewsDescription: 'Real buyer reviews for {brand} — ESP, soft aim, zone tracking, and patch updates on Windows PC.',
		blogTitle: '{game} Intel | {brand}',
		blogDescription: 'Guides and notes for {game} — match tips, ESP, aimbot, and {antiCheat} updates.',
	},

	/** On-page marketing copy (tokens allowed) */
	copy: {
		tagline: 'Undetected {primaryKeyword} — ESP, aimbot, and radar for PC',
		summary: '{brand} is an undetected {game} cheat package for Windows PC. Includes ESP, soft aim, and zone tracking, with {antiCheat} maintenance after patches.',
		heroLede: 'Fortnite aimbot for PC — ESP, soft aim, and radar in one license.',
		blogLabel: 'Fortnite Intel',
		ctaBuy: 'Get Access',
		ctaBuyShort: 'Buy',
		featuresIntro: 'Everything included in one license for {game} on Windows PC.',
		storeIntro: 'Pick a plan. Same features on both. Instant delivery after payment.',
		statusIntro: 'Check here after a {game} or {antiCheat} patch before you queue.',
		previewIntro: 'A quick look at {brand} — ESP, aimbot, radar, and updates after patches.',
		setupIntro: 'Install {brand} on Windows PC after you buy. Follow these short steps.',
		supportIntro: 'Need help with {brand}? Email {email} with your order ID.',
		faqIntro: 'Short answers about delivery, setup, updates, and refunds.',
		reviewsIntro: 'Real feedback from {brand} buyers — ESP, soft aim, radar, and support.',
		chipEsp: 'ESP / wallhack',
		chipAim: 'Soft aim',
		chipRadar: '2D ESP',
		chipUpdates: 'Patch updates',
		navPreview: 'Preview',
		navFeatures: 'Features',
		navStore: 'Store',
		navStatus: 'Status',
		navReviews: 'Reviews',
	},

	/**
	 * Sitemap labels — XML is generated at build/dev from routes + these strings.
	 * Domain comes from `url` (also written to robots.txt via sync:brand).
	 * Tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 */
	sitemap: {
		/** YYYY-MM-DD — Brand Studio can bump this on save to refresh crawl dates */
		contentLastmod: '2026-08-12',
		blogImageTitle: '{brand} blog',
		blogImageCaption: 'Tips and updates for {primaryKeyword}',
		reviewsImageTitle: '{brand} reviews',
		reviewsImageCaption: 'What buyers say about {primaryKeyword}',
		images: [
			{
				src: '/images/fortnite-hero-banner.png',
				title: 'fortnite aimbot',
				caption: 'fortnite aimbot hero banner for Windows PC',
			},
			{
				src: '/images/fortnite-aimbot-sniper-esp.png',
				title: 'fortnite aimbot ESP',
				caption: 'fortnite aimbot sniper ESP skeleton overlay',
			},
			{
				src: '/images/fortnite-cheats-esp-wallhack.png',
				title: 'fortnite cheats wallhack',
				caption: 'fortnite cheats ESP wallhack through walls',
			},
			{
				src: '/images/fortnite-aimbot-tracers.png',
				title: 'fortnite aimbot tracers',
				caption: 'fortnite aimbot tracers and player boxes',
			},
			{
				src: '/images/fortnite-cheats-combat-esp.png',
				title: 'fortnite cheats combat ESP',
				caption: 'fortnite cheats combat ESP player boxes',
			},
			{
				src: '/images/fortnite-cheats-lobby-esp.png',
				title: 'fortnite cheats lobby ESP',
				caption: 'fortnite cheats lobby ESP and player skins',
			},
			{
				src: '/images/fortnite-cheats-weapon-loot-esp.png',
				title: 'fortnite cheats loot ESP',
				caption: 'fortnite cheats loot ESP weapon names',
			},
			{
				src: '/images/fortnite-cheats-zero-build-esp.png',
				title: 'fortnite cheats zero-build ESP',
				caption: 'fortnite cheats ESP in zero-build fights',
			},
			{
				src: '/images/fortnite-aimbot-scope-combat.png',
				title: 'fortnite aimbot scope',
				caption: 'fortnite aimbot scope ESP in combat',
			},
			{
				src: '/images/fortnite-cheats-item-wallhack.png',
				title: 'fortnite cheats item wallhack',
				caption: 'fortnite cheats item wallhack through builds',
			},
			{
				src: '/images/fortnite-aimbot-skeleton-box.png',
				title: 'fortnite aimbot skeleton',
				caption: 'fortnite aimbot skeleton box and weapon tag',
			},
			{
				src: '/images/fortnite-cheats-warmup-esp.png',
				title: 'fortnite cheats warmup ESP',
				caption: 'fortnite cheats ESP boxes in warmup',
			},
			{
				src: '/images/fortnite-cheats-esp-overlay.png',
				title: 'fortnite cheats ESP overlay',
				caption: 'fortnite cheats ESP overlay names and loot',
			},
			{
				src: '/images/fortnite-cheats-bot-esp.png',
				title: 'fortnite cheats bot ESP',
				caption: 'fortnite cheats bot ESP and tracers',
			},
			{
				src: '/images/fortnite-cheats-tracer-wave.png',
				title: 'fortnite cheats tracer ESP',
				caption: 'fortnite cheats tracer ESP through cover',
			},
			{
				src: '/images/fortnite-aimbot-fov-settings.png',
				title: 'fortnite aimbot FOV',
				caption: 'fortnite aimbot FOV circle and ESP labels',
			},
			{
				src: '/images/fortnite-cheats-wallhack-distance.png',
				title: 'fortnite cheats wallhack distance',
				caption: 'fortnite cheats wallhack with distance tags',
			},
			{
				src: '/images/fortnite-cheats-build-esp.png',
				title: 'fortnite cheats build ESP',
				caption: 'fortnite cheats ESP in a build fight',
			},
			{
				src: '/images/fortnite-aimbot-lock.png',
				title: 'fortnite aimbot lock',
				caption: 'fortnite aimbot lock-on with skeleton ESP',
			},
		],
	},
} as const;

export type Brand = typeof brand;

/** Replace {brand} {game} {antiCheat} {email} {primaryKeyword} {checkout} */
export function fillBrandTokens(input: string): string {
	return input
		.replaceAll('{brand}', brand.name)
		.replaceAll('{game}', brand.game)
		.replaceAll('{antiCheat}', brand.antiCheat)
		.replaceAll('{email}', brand.supportEmail)
		.replaceAll('{primaryKeyword}', brand.keywords.primary)
		.replaceAll('{checkout}', brand.checkoutUrl);
}

/** Locked title formula fallback: `{Game} {Topic} | {Brand}` */
export function seoTitle(topic: string): string {
	const title = `${brand.game} ${topic} | ${brand.name}`;
	return title.length <= 60 ? title : `${topic} | ${brand.name}`;
}

/** Keep descriptions short; tokens allowed. */
export function seoDescription(template: string): string {
	const text = fillBrandTokens(template).trim();
	return text.length <= 160 ? text : `${text.slice(0, 157).trim()}…`;
}

/** Resolved EN home meta from brand.seo (title clamp lives in site-core.seoPageTitle). */
export function homeSeo() {
	return {
		title: fillBrandTokens(brand.seo.homeTitle),
		description: seoDescription(brand.seo.homeDescription),
	};
}
