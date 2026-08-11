import { siteConfig } from './site';
import { englishPaths, pageIds, type PageId } from './i18n/routing';
import { pageSitemapMeta } from './sitemap-meta';
import {
	pageSitemapImageLabels,
	resolvedSitemapImages,
	sitemapLastmod,
} from './brand-sitemap';

export type SitemapImage = {
	url: string;
	title: string;
	caption: string;
};

export type PageSitemapEntry = {
	path: string;
	priority: number;
	changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly';
	lastmod: string;
	images: SitemapImage[];
};

const abs = (path: string) => new URL(path, siteConfig.url).href;

const img = (path: string, title: string, caption: string): SitemapImage => ({
	url: abs(path),
	title,
	caption,
});

/**
 * One screenshot per page — paths stay in fortniteImages; titles/captions from brand tokens.
 */
const pageImageSrcById: Record<PageId, string> = {
	home: '/images/fortnite-hero-banner.png',
	'fortnite-esp': '/images/fortnite-cheats-wallhack-distance.png',
	'fortnite-aimbot': '/images/fortnite-aimbot-fov-settings.png',
	features: '/images/fortnite-aimbot-sniper-esp.png',
	pricing: '/images/fortnite-cheats-esp-wallhack.png',
	setup: '/images/fortnite-aimbot-skeleton-box.png',
	updates: '/images/fortnite-aimbot-tracers.png',
	faq: '/images/fortnite-cheats-warmup-esp.png',
	support: '/images/fortnite-cheats-lobby-esp.png',
	undetected: '/images/fortnite-cheats-esp-overlay.png',
	wallhack: '/images/fortnite-cheats-item-wallhack.png',
	radar: '/images/fortnite-cheats-bot-esp.png',
	'eac-bypass': '/images/fortnite-aimbot-lock.png',
	'cheats-2026': '/images/fortnite-cheats-tracer-wave.png',
	hacks: '/images/fortnite-cheats-combat-esp.png',
	'cheat-download': '/images/fortnite-cheats-weapon-loot-esp.png',
	'mod-menu': '/images/fortnite-cheats-build-esp.png',
	'soft-aim': '/images/fortnite-aimbot-scope-combat.png',
	'best-cheats': '/images/fortnite-cheats-zero-build-esp.png',
	'aimbot-hack': '/images/fortnite-aimbot-fov-settings.png',
	'esp-hack': '/images/fortnite-cheats-wallhack-distance.png',
	'unlock-all': '/images/fortnite-cheats-weapon-loot-esp.png',
	privacy: '/images/fortnite-hero-banner.png',
	refund: '/images/fortnite-cheats-bot-esp.png',
	terms: '/images/fortnite-aimbot-sniper-esp.png',
};

for (const pageId of pageIds) {
	if (!pageImageSrcById[pageId]) {
		throw new Error(`[sitemap] No image path configured for pageId: ${pageId}`);
	}
}

/**
 * Canonical English sitemap entries — always includes every pageId from routing.
 * Absolute locs use siteConfig.url (from brand.url).
 */
export const pageSitemapEntries: PageSitemapEntry[] = pageIds.map((pageId) => {
	const meta = pageSitemapMeta[pageId];
	const labels = pageSitemapImageLabels(pageId);
	return {
		path: englishPaths[pageId],
		priority: meta.priority,
		changefreq: meta.changefreq,
		lastmod: sitemapLastmod(meta.lastmod),
		images: [img(pageImageSrcById[pageId], labels.title, labels.caption)],
	};
});

/** Unique keyword images for the dedicated image sitemap (editable in Brand Studio). */
export const imageSitemapEntries: SitemapImage[] = resolvedSitemapImages().map((entry) =>
	img(entry.src, entry.title, entry.caption),
);

export function absolutePageUrl(path: string): string {
	return abs(path);
}

export function absoluteAssetUrl(path: string): string {
	return abs(path);
}
