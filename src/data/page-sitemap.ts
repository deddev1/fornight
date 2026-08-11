import { siteConfig } from './site';
import { fortniteImages } from './fortnite';
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
	home: fortniteImages.hero,
	'fortnite-esp': fortniteImages.playerEsp,
	'fortnite-aimbot': fortniteImages.aimbotCombat,
	features: fortniteImages.aimbotSkeleton,
	pricing: fortniteImages.cheatsCombat,
	setup: fortniteImages.playerEsp,
	updates: fortniteImages.hero,
	faq: fortniteImages.aimbotSkeleton,
	support: fortniteImages.cheatsCombat,
	undetected: fortniteImages.espWallhack,
	wallhack: fortniteImages.espWallhack,
	radar: fortniteImages.playerEsp,
	'eac-bypass': fortniteImages.aimbotCombat,
	'cheats-2026': fortniteImages.hero,
	hacks: fortniteImages.cheatsCombat,
	'cheat-download': fortniteImages.cheatsCombat,
	'mod-menu': fortniteImages.playerEsp,
	'soft-aim': fortniteImages.aimbotSkeleton,
	'best-cheats': fortniteImages.hero,
	'aimbot-hack': fortniteImages.aimbotSkeleton,
	'esp-hack': fortniteImages.espWallhack,
	'unlock-all': fortniteImages.playerEsp,
	privacy: fortniteImages.aimbotCombat,
	refund: fortniteImages.cheatsCombat,
	terms: fortniteImages.aimbotSkeleton,
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
