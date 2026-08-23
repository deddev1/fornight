import { getPageContent, getUi } from './index';
import { simplePageCopy, type SimpleSection } from './simple-pages';
import { translateSimplePage } from './simple-pages-i18n';
import type { LocaleCode } from './locales';
import type { PageId, PageContent } from './content.generated';

export type ResolvedPageCopy = {
	title: string;
	description: string;
	h1: string;
	intro: string;
	sections: SimpleSection[];
	ctaPrimary: string;
	ctaSecondary?: string;
	ctaSecondaryHref?: string;
	galleryTitle: string;
};

function mergeSections(
	local: PageContent['sections'] | undefined,
	fallback: PageContent['sections'] | undefined,
): SimpleSection[] {
	const a = local ?? [];
	const b = fallback ?? [];
	const count = Math.max(a.length, b.length);
	const sections: SimpleSection[] = [];
	for (let i = 0; i < count; i += 1) {
		const left = a[i];
		const right = b[i];
		if (!left && right) {
			sections.push({ h2: right.h2, paragraphs: right.paragraphs, list: right.list });
			continue;
		}
		if (left && !right) {
			sections.push({ h2: left.h2, paragraphs: left.paragraphs, list: left.list });
			continue;
		}
		if (left && right) {
			sections.push({
				h2: left.h2 || right.h2,
				paragraphs: left.paragraphs?.length ? left.paragraphs : right.paragraphs,
				list: left.list?.length ? left.list : right.list,
			});
		}
	}
	return sections;
}

/** Same page structure in every locale. Missing translations fall back to English, never drop. */
export function resolvePageCopy(locale: LocaleCode, pageId: PageId): ResolvedPageCopy {
	const generated = getPageContent(locale, pageId);
	const english = getPageContent('en', pageId);
	const simple = simplePageCopy[pageId];

	if (simple) {
		const localized = locale === 'en' ? simple : translateSimplePage(simple, locale);
		const ui = getUi(locale);
		const ctaPrimary =
			locale !== 'en' && localized.ctaPrimary === simple.ctaPrimary
				? ui.common.buyNow
				: localized.ctaPrimary;
		return {
			title: locale === 'en' ? localized.title : generated.title || localized.title,
			description: locale === 'en' ? localized.description : generated.description || localized.description,
			h1: localized.h1,
			intro: localized.intro,
			sections: localized.sections,
			ctaPrimary,
			ctaSecondary: localized.ctaSecondary,
			ctaSecondaryHref: localized.ctaSecondaryHref,
			galleryTitle: localized.galleryTitle,
		};
	}

	return {
		title: generated.title || english.title,
		description: generated.description || english.description,
		h1: generated.h1 || english.h1,
		intro: generated.intro || english.intro,
		sections: mergeSections(generated.sections, english.sections),
		ctaPrimary: generated.ctaPrimary || english.ctaPrimary,
		ctaSecondary: generated.ctaSecondary || english.ctaSecondary,
		ctaSecondaryHref: generated.ctaSecondaryHref || english.ctaSecondaryHref,
		galleryTitle: generated.galleryTitle || english.galleryTitle,
	};
}
