import type { LocaleCode } from './i18n/locales';
import { defaultLocale } from './i18n/locales';
import { getLocalizedPath, type PageId } from './i18n/routing';

export type InternalLink = {
	label: string;
	href: string;
};

type RelatedTarget = {
	label: string;
	pageId?: PageId;
	href?: string;
};

/**
 * Few related pages per hub. Labels stay short (nav words, not keyword piles).
 * Distinct from primary nav text where the same URL already uses Features / Store / Status.
 */
const relatedByPage: Record<Exclude<PageId, 'home'>, readonly RelatedTarget[]> = {
	features: [
		{ label: 'ESP', pageId: 'fortnite-esp' },
		{ label: 'Aimbot', pageId: 'fortnite-aimbot' },
		{ label: 'Radar', pageId: 'radar' },
		{ label: 'Pricing plans', pageId: 'pricing' },
	],
	pricing: [
		{ label: 'Feature list', pageId: 'features' },
		{ label: 'Setup guide', pageId: 'setup' },
		{ label: 'FAQ', pageId: 'faq' },
		{ label: 'Preview', pageId: 'hacks' },
	],
	updates: [
		{ label: 'Undetected', pageId: 'undetected' },
		{ label: 'Easy Anti-Cheat', pageId: 'eac-bypass' },
		{ label: 'Setup guide', pageId: 'setup' },
		{ label: 'Support', pageId: 'support' },
	],
	hacks: [
		{ label: 'Feature list', pageId: 'features' },
		{ label: 'ESP', pageId: 'fortnite-esp' },
		{ label: 'Aimbot', pageId: 'fortnite-aimbot' },
		{ label: 'Pricing plans', pageId: 'pricing' },
	],
	setup: [
		{ label: 'Live status', pageId: 'updates' },
		{ label: 'FAQ', pageId: 'faq' },
		{ label: 'Support', pageId: 'support' },
		{ label: 'Pricing plans', pageId: 'pricing' },
	],
	support: [
		{ label: 'FAQ', pageId: 'faq' },
		{ label: 'Setup guide', pageId: 'setup' },
		{ label: 'Live status', pageId: 'updates' },
		{ label: 'Refunds', pageId: 'refund' },
	],
	faq: [
		{ label: 'Setup guide', pageId: 'setup' },
		{ label: 'Live status', pageId: 'updates' },
		{ label: 'Pricing plans', pageId: 'pricing' },
		{ label: 'Support', pageId: 'support' },
	],
	'fortnite-esp': [
		{ label: 'Wallhack', pageId: 'wallhack' },
		{ label: 'Radar', pageId: 'radar' },
		{ label: 'Aimbot', pageId: 'fortnite-aimbot' },
		{ label: 'Feature list', pageId: 'features' },
	],
	'fortnite-aimbot': [
		{ label: 'Soft aim', pageId: 'soft-aim' },
		{ label: 'ESP', pageId: 'fortnite-esp' },
		{ label: 'Feature list', pageId: 'features' },
		{ label: 'Pricing plans', pageId: 'pricing' },
	],
	undetected: [
		{ label: 'Live status', pageId: 'updates' },
		{ label: 'Easy Anti-Cheat', pageId: 'eac-bypass' },
		{ label: 'Preview', pageId: 'hacks' },
		{ label: 'Pricing plans', pageId: 'pricing' },
	],
	wallhack: [
		{ label: 'ESP', pageId: 'fortnite-esp' },
		{ label: 'Radar', pageId: 'radar' },
		{ label: 'Feature list', pageId: 'features' },
		{ label: 'Pricing plans', pageId: 'pricing' },
	],
	radar: [
		{ label: 'ESP', pageId: 'fortnite-esp' },
		{ label: 'Wallhack', pageId: 'wallhack' },
		{ label: 'Aimbot', pageId: 'fortnite-aimbot' },
		{ label: 'Feature list', pageId: 'features' },
	],
	'eac-bypass': [
		{ label: 'Live status', pageId: 'updates' },
		{ label: 'Undetected', pageId: 'undetected' },
		{ label: 'Setup guide', pageId: 'setup' },
		{ label: 'FAQ', pageId: 'faq' },
	],
	'cheats-2026': [
		{ label: 'Preview', pageId: 'hacks' },
		{ label: 'Feature list', pageId: 'features' },
		{ label: 'Undetected', pageId: 'undetected' },
		{ label: 'Pricing plans', pageId: 'pricing' },
	],
	'cheat-download': [
		{ label: 'Setup guide', pageId: 'setup' },
		{ label: 'Pricing plans', pageId: 'pricing' },
		{ label: 'Preview', pageId: 'hacks' },
		{ label: 'FAQ', pageId: 'faq' },
	],
	'mod-menu': [
		{ label: 'Feature list', pageId: 'features' },
		{ label: 'Unlock all', pageId: 'unlock-all' },
		{ label: 'Preview', pageId: 'hacks' },
		{ label: 'Pricing plans', pageId: 'pricing' },
	],
	'soft-aim': [
		{ label: 'Aimbot', pageId: 'fortnite-aimbot' },
		{ label: 'ESP', pageId: 'fortnite-esp' },
		{ label: 'Feature list', pageId: 'features' },
		{ label: 'Pricing plans', pageId: 'pricing' },
	],
	'best-cheats': [
		{ label: 'Preview', pageId: 'hacks' },
		{ label: 'Feature list', pageId: 'features' },
		{ label: 'Undetected', pageId: 'undetected' },
		{ label: 'Pricing plans', pageId: 'pricing' },
	],
	'aimbot-hack': [
		{ label: 'Aimbot', pageId: 'fortnite-aimbot' },
		{ label: 'Soft aim', pageId: 'soft-aim' },
		{ label: 'Feature list', pageId: 'features' },
		{ label: 'Pricing plans', pageId: 'pricing' },
	],
	'esp-hack': [
		{ label: 'ESP', pageId: 'fortnite-esp' },
		{ label: 'Wallhack', pageId: 'wallhack' },
		{ label: 'Feature list', pageId: 'features' },
		{ label: 'Pricing plans', pageId: 'pricing' },
	],
	'unlock-all': [
		{ label: 'Mod menu', pageId: 'mod-menu' },
		{ label: 'Feature list', pageId: 'features' },
		{ label: 'Preview', pageId: 'hacks' },
		{ label: 'Pricing plans', pageId: 'pricing' },
	],
	privacy: [
		{ label: 'Terms', pageId: 'terms' },
		{ label: 'Refunds', pageId: 'refund' },
		{ label: 'Support', pageId: 'support' },
	],
	refund: [
		{ label: 'Support', pageId: 'support' },
		{ label: 'FAQ', pageId: 'faq' },
		{ label: 'Terms', pageId: 'terms' },
		{ label: 'Pricing plans', pageId: 'pricing' },
	],
	terms: [
		{ label: 'Privacy', pageId: 'privacy' },
		{ label: 'Refunds', pageId: 'refund' },
		{ label: 'Support', pageId: 'support' },
	],
};

function resolveTarget(target: RelatedTarget, locale: LocaleCode): InternalLink {
	if (target.pageId) {
		return { label: target.label, href: getLocalizedPath(target.pageId, locale) };
	}
	return { label: target.label, href: target.href ?? '/' };
}

/** Related pages for a template page. Empty on home (homepage uses its own category links). */
export function getRelatedPageLinks(pageId: PageId, locale: LocaleCode): InternalLink[] {
	if (pageId === 'home') return [];
	return relatedByPage[pageId].map((target) => resolveTarget(target, locale));
}

/** Hub links for index pages that are not in PageId (reviews, blog, FAQ answers). */
export function getHubLinks(locale: LocaleCode): InternalLink[] {
	return [
		{ label: 'Feature list', href: getLocalizedPath('features', locale) },
		{ label: 'Pricing plans', href: getLocalizedPath('pricing', locale) },
		{ label: 'Live status', href: getLocalizedPath('updates', locale) },
		{ label: 'FAQ', href: getLocalizedPath('faq', locale) },
	];
}

export function getReviewHubLinks(locale: LocaleCode): InternalLink[] {
	return [...getHubLinks(locale), { label: 'Buyer reviews', href: '/reviews/' }];
}

export function getBlogHubLinks(locale: LocaleCode): InternalLink[] {
	const blogHref = locale === defaultLocale ? '/blog/' : `/${locale}/blog/`;
	return [...getHubLinks(locale), { label: 'Blog', href: blogHref }];
}

/** Strip tags from FAQ HTML so schema.org answers stay plain text. */
export function plainTextFromHtml(html: string): string {
	return html
		.replace(/<[^>]+>/g, '')
		.replace(/&amp;/g, '&')
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>')
		.replace(/&quot;/g, '"')
		.replace(/&#39;/g, "'")
		.replace(/\s+/g, ' ')
		.trim();
}
