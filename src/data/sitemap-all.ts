import { getBlogSitemapEntries } from './blog/helpers';
import { getFaqSitemapEntries } from './faq';
import { hreflangLinksXml, resolvePageIdFromPath } from './i18n/routing';
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
		const hreflangBlock = pageId ? `\n${hreflangLinksXml(pageId, escapeXml)}` : '';

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
