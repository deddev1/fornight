import type { APIRoute } from 'astro';
import { buildPrimarySitemapXml } from '../data/sitemap-all';
import { sitemapResponseHeaders } from '../data/sitemap-xml';

export const prerender = true;

/**
 * Primary sitemap submitted in robots.txt / GSC.
 * Contains every indexable page URL (English + 21 locales).
 */
export const GET: APIRoute = () => {
	return new Response(buildPrimarySitemapXml(), { headers: sitemapResponseHeaders });
};
