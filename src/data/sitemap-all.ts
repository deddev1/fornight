import { getBlogSitemapEntries } from './blog/helpers';
import { getFaqSitemapEntries } from './faq';
import { defaultLocale } from './i18n/locales';
import {
	getFaqArticlePath,
	getReviewArticlePath,
	getReviewsIndexPath,
	hreflangLinksXml,
	pathHreflangLinksXml,
	resolvePageIdFromPath,
} from './i18n/routing';
import { absolutePageUrl, pageSitemapEntries } from './page-sitemap';
import { getReviewSitemapEntries } from './reviews';
import {
	buildAllI18nSitemapEntries,
	renderLocaleSitemapUrlBlock,
} from './sitemap-locale';
import { escapeXml, renderUrlsetXml } from './sitemap-xml';

type SitemapRow = {
	path: string;
	lastmod: string;
	changefreq: string;
	priority: number;
	images: { url: string; title: string; caption: string }[];
};

function englishRows(): SitemapRow[] {
	const blogEntries = getBlogSitemapEntries()
		.filter((entry) => !entry.path.match(/^\/[a-z]{2}\//))
		.map((entry) => ({
			path: entry.path,
			lastmod: entry.lastmod,
			changefreq: entry.changefreq,
			priority: entry.priority,
			images: entry.images,
		}));

	return [...pageSitemapEntries, ...blogEntries, ...getReviewSitemapEntries(), ...getFaqSitemapEntries()];
}

function pathHreflangBlock(path: string): string {
	if (path.startsWith('/faq/') && path !== '/faq/') {
		const slug = path.slice('/faq/'.length).replace(/\/$/, '');
		return `\n${pathHreflangLinksXml((code) => getFaqArticlePath(slug, code), escapeXml, defaultLocale)}`;
	}
	if (path === '/reviews/') {
		return `\n${pathHreflangLinksXml(getReviewsIndexPath, escapeXml, defaultLocale)}`;
	}
	if (path.startsWith('/reviews/')) {
		const slug = path.slice('/reviews/'.length).replace(/\/$/, '');
		return `\n${pathHreflangLinksXml((code) => getReviewArticlePath(slug, code), escapeXml, defaultLocale)}`;
	}
	return '';
}

export function buildEnglishSitemapUrlBlocks(): string[] {
	return englishRows().map((entry) => {
		const images = entry.images
			.map(
				(image) => `    <image:image>
      <image:loc>${escapeXml(image.url)}</image:loc>
      <image:title>${escapeXml(image.title)}</image:title>
      <image:caption>${escapeXml(image.caption)}</image:caption>
    </image:image>`,
			)
			.join('\n');

		const imageBlock = images ? `\n${images}` : '';
		const pageId = resolvePageIdFromPath(entry.path);
		const hreflangBlock = pageId
			? `\n${hreflangLinksXml(pageId, escapeXml)}`
			: pathHreflangBlock(entry.path);

		return `  <url>
    <loc>${escapeXml(absolutePageUrl(entry.path))}</loc>
    <lastmod>${escapeXml(entry.lastmod)}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority.toFixed(2)}</priority>${hreflangBlock}${imageBlock}
  </url>`;
	});
}

/** Primary GSC sitemap — every indexable EN + locale page URL in one urlset. */
export function buildPrimarySitemapXml(): string {
	const english = buildEnglishSitemapUrlBlocks();
	const localized = buildAllI18nSitemapEntries().map(renderLocaleSitemapUrlBlock);
	return renderUrlsetXml([...english, ...localized]);
}
