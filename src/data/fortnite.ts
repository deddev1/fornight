import { siteConfig } from './site';

/** Screenshots used across product pages — simple fortnite cheats keyword alts. */
export const fortniteImages = {
	hero: '/images/fortnite-hero-banner.png',
	espWallhack: '/images/fortnite-cheats-esp-wallhack.png',
	aimbotCombat: '/images/fortnite-aimbot-tracers.png',
	aimbotSkeleton: '/images/fortnite-aimbot-sniper-esp.png',
	playerEsp: '/images/fortnite-aimbot-sniper-esp.png',
	cheatsCombat: '/images/fortnite-cheats-raid.webp',
	logo: siteConfig.logo,
	/** @deprecated Blog / legacy aliases — each maps to one of the six assets above */
	cover: '/images/fortnite-cheats-raid.webp',
	loadoutBuilder: '/images/fortnite-cheats-esp-wallhack.png',
	squadFight: '/images/fortnite-aimbot-tracers.png',
	cheatsPackage: '/images/fortnite-cheats-esp-wallhack.png',
	headerArt: '/images/fortnite-aimbot-sniper-esp.png',
	battleRoyaleCombat: '/images/fortnite-cheats-raid.webp',
	rebootFight: '/images/fortnite-aimbot-tracers.png',
	zeroBuildCombat: '/images/fortnite-cheats-esp-wallhack.png',
	zeroBuildMode: '/images/fortnite-cheats-esp.webp',
	battleRoyaleIsland: '/images/fortnite-cheats-esp.webp',
	matchMap: '/images/fortnite-cheats-esp.webp',
	product: [
		{ src: '/images/fortnite-aimbot-sniper-esp.png', alt: 'fortnite aimbot sniper ESP' },
		{ src: '/images/fortnite-cheats-esp-wallhack.png', alt: 'fortnite cheats ESP wallhack' },
		{ src: '/images/fortnite-aimbot-tracers.png', alt: 'fortnite aimbot tracers' },
		{ src: '/images/fortnite-cheats-esp.webp', alt: 'fortnite cheats esp' },
		{ src: '/images/fortnite-cheats-wallhack.webp', alt: 'fortnite cheats wallhack' },
		{ src: '/images/fortnite-cheats-aimbot.webp', alt: 'fortnite cheats aimbot' },
	],
	gallery: [
		{ src: '/images/fortnite-aimbot-sniper-esp.png', alt: 'fortnite aimbot sniper ESP', featured: true },
		{ src: '/images/fortnite-cheats-esp-wallhack.png', alt: 'fortnite cheats ESP wallhack' },
		{ src: '/images/fortnite-aimbot-tracers.png', alt: 'fortnite aimbot tracers' },
		{ src: '/images/fortnite-cheats-esp.webp', alt: 'fortnite cheats esp' },
		{ src: '/images/fortnite-cheats-wallhack.webp', alt: 'fortnite cheats wallhack' },
	],
	/**
	 * @deprecated Prefer brand.sitemap.images via brand-sitemap / page-sitemap.
	 * Kept as path aliases for older imports; titles come from Brand Studio.
	 */
	sitemap: [
		{ src: '/images/fortnite-hero-banner.png', title: '', caption: '' },
		{ src: '/images/fortnite-aimbot-sniper-esp.png', title: '', caption: '' },
		{ src: '/images/fortnite-cheats-esp-wallhack.png', title: '', caption: '' },
		{ src: '/images/fortnite-aimbot-tracers.png', title: '', caption: '' },
		{ src: '/images/fortnite-cheats-combat-esp.png', title: '', caption: '' },
		{ src: '/images/fortnite-cheats-lobby-esp.png', title: '', caption: '' },
	],
} as const;
