import type { APIRoute } from 'astro';
import { buildEnglishSitemapUrlBlocks } from '../data/sitemap-all';
import { renderUrlsetXml, sitemapResponseHeaders } from '../data/sitemap-xml';

export const prerender = true;

/** English page urlset — also included inside /sitemap.xml. */
export const GET: APIRoute = () => {
	const xml = renderUrlsetXml(buildEnglishSitemapUrlBlocks());
	return new Response(xml, { headers: sitemapResponseHeaders });
};
