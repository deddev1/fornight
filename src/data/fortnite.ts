import { siteConfig } from './site';

/** Screenshots used across product pages — simple fortnite cheats keyword alts. */
export const fortniteImages = {
	hero: '/images/fortnite-cheats-hero-full.png',
	espWallhack: '/images/fortnite-cheats-wallhack.webp',
	aimbotCombat: '/images/fortnite-cheats-aimbot.webp',
	aimbotSkeleton: '/images/fortnite-cheats-aimbot-view.webp',
	playerEsp: '/images/fortnite-cheats-radar.webp',
	cheatsCombat: '/images/fortnite-cheats-raid.webp',
	logo: siteConfig.logo,
	/** @deprecated Blog / legacy aliases — each maps to one of the six assets above */
	cover: '/images/fortnite-cheats-raid.webp',
	loadoutBuilder: '/images/fortnite-cheats-radar.webp',
	squadFight: '/images/fortnite-cheats-aimbot-view.webp',
	cheatsPackage: '/images/fortnite-cheats-radar.webp',
	headerArt: '/images/fortnite-cheats-aimbot-view.webp',
	battleRoyaleCombat: '/images/fortnite-cheats-raid.webp',
	rebootFight: '/images/fortnite-cheats-aimbot.webp',
	zeroBuildCombat: '/images/fortnite-cheats-wallhack.webp',
	zeroBuildMode: '/images/fortnite-cheats-esp.webp',
	battleRoyaleIsland: '/images/fortnite-cheats-esp.webp',
	matchMap: '/images/fortnite-cheats-esp.webp',
	product: [
		{ src: '/images/fortnite-cheats-esp.webp', alt: 'fortnite cheats esp' },
		{ src: '/images/fortnite-cheats-wallhack.webp', alt: 'fortnite cheats wallhack' },
		{ src: '/images/fortnite-cheats-aimbot.webp', alt: 'fortnite cheats aimbot' },
		{ src: '/images/fortnite-cheats-esp.webp', alt: 'fortnite cheats esp' },
		{ src: '/images/fortnite-cheats-wallhack.webp', alt: 'fortnite cheats wallhack' },
		{ src: '/images/fortnite-cheats-aimbot.webp', alt: 'fortnite cheats aimbot' },
	],
	gallery: [
		{ src: '/images/fortnite-cheats-esp.webp', alt: 'fortnite cheats esp', featured: true },
		{ src: '/images/fortnite-cheats-wallhack.webp', alt: 'fortnite cheats wallhack' },
		{ src: '/images/fortnite-cheats-aimbot.webp', alt: 'fortnite cheats aimbot' },
		{ src: '/images/fortnite-cheats-esp.webp', alt: 'fortnite cheats esp' },
		{ src: '/images/fortnite-cheats-wallhack.webp', alt: 'fortnite cheats wallhack' },
	],
	/**
	 * @deprecated Prefer brand.sitemap.images via brand-sitemap / page-sitemap.
	 * Kept as path aliases for older imports; titles come from Brand Studio.
	 */
	sitemap: [
		{ src: '/images/fortnite-cheats-esp.webp', title: '', caption: '' },
		{ src: '/images/fortnite-cheats-wallhack.webp', title: '', caption: '' },
		{ src: '/images/fortnite-cheats-aimbot.webp', title: '', caption: '' },
		{ src: '/images/fortnite-cheats-aimbot-view.webp', title: '', caption: '' },
		{ src: '/images/fortnite-cheats-radar.webp', title: '', caption: '' },
		{ src: '/images/fortnite-cheats-raid.webp', title: '', caption: '' },
	],
} as const;
