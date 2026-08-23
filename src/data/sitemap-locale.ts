import { getPageContent } from './i18n';
import { getBlogSitemapEntriesForLocale } from './blog/helpers';
import { getFaqSitemapEntries } from './faq';
import {
	getFaqArticlePath,
	getLocalizedPath,
	getReviewArticlePath,
	getReviewsIndexPath,
	hreflangLinksXml,
	pageIds,
	pathHreflangLinksXml,
	type PageId,
} from './i18n/routing';
import { defaultLocale, localeCodes, type LocaleCode } from './i18n/locales';
import { getReviewSitemapEntries } from './reviews';
import { siteConfig } from './site';
import { pageSitemapMeta } from './sitemap-meta';
import { escapeXml } from './sitemap-xml';
import { sitemapLastmod } from './brand-sitemap';

export type LocaleSitemapEntry = {
	path: string;
	pageId?: PageId;
	lastmod: string;
	priority: number;
	changefreq: string;
	image?: { url: string; title: string; caption: string };
	hreflangXml?: string;
};

/** Non-English locale codes included in regional sitemaps. */
export const i18nLocaleCodes = localeCodes.filter((code) => code !== defaultLocale);

const BLOG_PAGES_PER_LOCALE = 18; // /blog/ index + 17 posts
const FAQ_PAGES_PER_LOCALE = 11; // FAQ answer pages (index is a product page)
const REVIEW_PAGES_PER_LOCALE = 11; // /reviews/ index + 10 review articles

/** Build sitemap entries for one non-English locale (product + blog + FAQ + reviews). */
export function buildLocaleSitemapEntries(locale: LocaleCode): LocaleSitemapEntry[] {
	if (locale === defaultLocale) {
		throw new Error(`English pages belong in sitemap-en.xml, not sitemap-${locale}.xml`);
	}

	const productEntries: LocaleSitemapEntry[] = pageIds.map((pageId) => {
		const meta = pageSitemapMeta[pageId];
		const page = pageId === 'home' ? null : getPageContent(locale, pageId);

		return {
			path: getLocalizedPath(pageId, locale),
			pageId,
			lastmod: sitemapLastmod(meta.lastmod),
			priority: meta.i18nPriority,
			changefreq: meta.changefreq,
			image:
				pageId === 'home'
					? undefined
					: {
							url: new URL(page!.heroImage, siteConfig.url).href,
							title: page!.title,
							caption: page!.imageAlt,
						},
		};
	});

	const blogEntries: LocaleSitemapEntry[] = getBlogSitemapEntriesForLocale(locale).map((entry) => ({
		path: entry.path,
		lastmod: entry.lastmod,
		priority: entry.priority,
		changefreq: entry.changefreq,
		image: entry.images[0],
	}));

	const faqEntries: LocaleSitemapEntry[] = getFaqSitemapEntries().map((entry) => {
		const slug = entry.path.replace(/^\/faq\//, '').replace(/\/$/, '');
		return {
			path: getFaqArticlePath(slug, locale),
			lastmod: entry.lastmod,
			priority: entry.priority,
			changefreq: entry.changefreq,
			hreflangXml: pathHreflangLinksXml((code) => getFaqArticlePath(slug, code), escapeXml, locale),
		};
	});

	const reviewEntries: LocaleSitemapEntry[] = getReviewSitemapEntries().map((entry) => {
		const isIndex = entry.path === '/reviews/';
		const slug = isIndex ? '' : entry.path.replace(/^\/reviews\//, '').replace(/\/$/, '');
		return {
			path: isIndex ? getReviewsIndexPath(locale) : getReviewArticlePath(slug, locale),
			lastmod: entry.lastmod,
			priority: entry.priority,
			changefreq: entry.changefreq,
			image: entry.images[0],
			hreflangXml: pathHreflangLinksXml(
				isIndex ? getReviewsIndexPath : (code) => getReviewArticlePath(slug, code),
				escapeXml,
				locale,
			),
		};
	});

	return [...productEntries, ...blogEntries, ...faqEntries, ...reviewEntries];
}

export { BLOG_PAGES_PER_LOCALE, FAQ_PAGES_PER_LOCALE, REVIEW_PAGES_PER_LOCALE };

export function localeSitemapFilename(locale: LocaleCode): string {
	return `sitemap-${locale}.xml`;
}

export function localeSitemapUrl(locale: LocaleCode): string {
	return new URL(`/${localeSitemapFilename(locale)}`, siteConfig.url).href;
}

export function renderLocaleSitemapUrlBlock(entry: LocaleSitemapEntry): string {
	const loc = new URL(entry.path, siteConfig.url).href;
	const hreflangBlock = entry.pageId
		? `\n${hreflangLinksXml(entry.pageId, escapeXml)}`
		: entry.hreflangXml
			? `\n${entry.hreflangXml}`
			: '';
	const imageBlock = entry.image
		? `\n    <image:image>
      <image:loc>${escapeXml(entry.image.url)}</image:loc>
      <image:title>${escapeXml(entry.image.title)}</image:title>
      <image:caption>${escapeXml(entry.image.caption)}</image:caption>
    </image:image>`
		: '';

	return `  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${escapeXml(entry.lastmod)}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority.toFixed(2)}</priority>${hreflangBlock}${imageBlock}
  </url>`;
}

/** Combined i18n entries (all 21 locales) — used by sitemap-i18n.xml for backward compatibility. */
export function buildAllI18nSitemapEntries(): LocaleSitemapEntry[] {
	return i18nLocaleCodes.flatMap((locale) => buildLocaleSitemapEntries(locale));
}
