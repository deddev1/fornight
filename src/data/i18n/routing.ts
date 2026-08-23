import { siteConfig } from '../site';
import {
	defaultLocale,
	isLocaleCode,
	localeCodes,
	localeMap,
	type LocaleCode,
	locales,
} from './locales';

/** Canonical page identifiers shared across all locales. */
export type PageId =
	| 'home'
	| 'fortnite-esp'
	| 'fortnite-aimbot'
	| 'features'
	| 'pricing'
	| 'setup'
	| 'updates'
	| 'faq'
	| 'support'
	| 'undetected'
	| 'wallhack'
	| 'radar'
	| 'eac-bypass'
	| 'cheats-2026'
	| 'hacks'
	| 'cheat-download'
	| 'mod-menu'
	| 'soft-aim'
	| 'best-cheats'
	| 'aimbot-hack'
	| 'esp-hack'
	| 'unlock-all'
	| 'privacy'
	| 'refund'
	| 'terms';

/** English (official) paths — served at site root without /en/ prefix. */
export const englishPaths: Record<PageId, string> = {
	home: '/',
	'fortnite-esp': '/fortnite-esp/',
	'fortnite-aimbot': '/fortnite-aimbot/',
	features: '/features/',
	pricing: '/pricing/',
	setup: '/setup/',
	updates: '/updates/',
	faq: '/faq/',
	support: '/support/',
	undetected: '/undetected-fortnite-cheats/',
	wallhack: '/fortnite-wallhack/',
	radar: '/fortnite-radar-hack/',
	'eac-bypass': '/eac-bypass/',
	'cheats-2026': '/fortnite-cheats-2026/',
	hacks: '/fortnite-cheats/',
	'cheat-download': '/fortnite-cheat-download/',
	'mod-menu': '/fortnite-mod-menu/',
	'soft-aim': '/fortnite-soft-aim/',
	'best-cheats': '/best-fortnite-cheats/',
	'aimbot-hack': '/fortnite-aimbot-hack/',
	'esp-hack': '/fortnite-esp-hack/',
	'unlock-all': '/fortnite-unlock-all/',
	privacy: '/privacy-policy/',
	refund: '/refund-policy/',
	terms: '/terms/',
};

/**
 * Localized URL slugs (path after /{lang}/).
 * English uses englishPaths at root; other locales use these slugs under /{lang}/.
 */
export const localizedSlugs: Record<PageId, Record<LocaleCode, string>> = {
	home: {
		en: '',
		es: '',
		fr: '',
		de: '',
		pt: '',
		it: '',
		nl: '',
		pl: '',
		ru: '',
		tr: '',
		ar: '',
		ja: '',
		ko: '',
		zh: '',
		hi: '',
		id: '',
		th: '',
		vi: '',
		uk: '',
		cs: '',
		ro: '',
		sv: '',
	},
	'fortnite-esp': {
		en: 'fortnite-esp',
		es: 'trucos-fortnite-esp',
		fr: 'triche-fortnite-esp',
		de: 'fortnite-esp-wallhack',
		pt: 'cheats-fortnite-esp',
		it: 'trucchi-fortnite-esp',
		nl: 'fortnite-esp-wallhack',
		pl: 'cheaty-fortnite-esp',
		ru: 'fortnite-esp-chity',
		tr: 'fortnite-esp-hile',
		ar: 'fortnite-esp-wallhack',
		ja: 'fortnite-esp-wallhack',
		ko: 'fortnite-esp-wallhack',
		zh: 'fortnite-esp-wallhack',
		hi: 'fortnite-esp-wallhack',
		id: 'fortnite-esp-wallhack',
		th: 'fortnite-esp-wallhack',
		vi: 'fortnite-esp-wallhack',
		uk: 'fortnite-esp-chity',
		cs: 'fortnite-esp-wallhack',
		ro: 'fortnite-esp-wallhack',
		sv: 'fortnite-esp-wallhack',
	},
	'fortnite-aimbot': {
		en: 'fortnite-aimbot',
		es: 'trucos-fortnite-aimbot',
		fr: 'triche-fortnite-aimbot',
		de: 'fortnite-aimbot',
		pt: 'cheats-fortnite-aimbot',
		it: 'trucchi-fortnite-aimbot',
		nl: 'fortnite-aimbot',
		pl: 'cheaty-fortnite-aimbot',
		ru: 'fortnite-aimbot-chity',
		tr: 'fortnite-aimbot-hile',
		ar: 'fortnite-aimbot',
		ja: 'fortnite-aimbot',
		ko: 'fortnite-aimbot',
		zh: 'fortnite-aimbot',
		hi: 'fortnite-aimbot',
		id: 'fortnite-aimbot',
		th: 'fortnite-aimbot',
		vi: 'fortnite-aimbot',
		uk: 'fortnite-aimbot-chity',
		cs: 'fortnite-aimbot',
		ro: 'fortnite-aimbot',
		sv: 'fortnite-aimbot',
	},
	features: {
		en: 'features',
		es: 'caracteristicas-trucos-fortnite',
		fr: 'fonctionnalites-triche-fortnite',
		de: 'escape-from-fortnite-cheats-funktionen',
		pt: 'recursos-cheats-fortnite',
		it: 'funzioni-trucchi-fortnite',
		nl: 'escape-from-fortnite-cheats-functies',
		pl: 'funkcje-cheatow-fortnite',
		ru: 'funkcii-chitov-fortnite',
		tr: 'fortnite-hile-ozellikleri',
		ar: 'escape-from-fortnite-cheats-features',
		ja: 'escape-from-fortnite-cheats-features',
		ko: 'escape-from-fortnite-cheats-features',
		zh: 'escape-from-fortnite-cheats-features',
		hi: 'escape-from-fortnite-cheats-features',
		id: 'escape-from-fortnite-cheats-features',
		th: 'escape-from-fortnite-cheats-features',
		vi: 'escape-from-fortnite-cheats-features',
		uk: 'funkcii-chitiv-fortnite',
		cs: 'escape-from-fortnite-cheats-funkce',
		ro: 'functii-cheats-fortnite',
		sv: 'escape-from-fortnite-cheats-funktioner',
	},
	pricing: {
		en: 'pricing',
		es: 'precios-trucos-fortnite',
		fr: 'prix-triche-fortnite',
		de: 'escape-from-fortnite-cheats-preise',
		pt: 'precos-cheats-fortnite',
		it: 'prezzi-trucchi-fortnite',
		nl: 'escape-from-fortnite-cheats-prijzen',
		pl: 'ceny-cheatow-fortnite',
		ru: 'ceny-chitov-fortnite',
		tr: 'fortnite-hile-fiyatlari',
		ar: 'escape-from-fortnite-cheats-pricing',
		ja: 'escape-from-fortnite-cheats-pricing',
		ko: 'escape-from-fortnite-cheats-pricing',
		zh: 'escape-from-fortnite-cheats-pricing',
		hi: 'escape-from-fortnite-cheats-pricing',
		id: 'escape-from-fortnite-cheats-pricing',
		th: 'escape-from-fortnite-cheats-pricing',
		vi: 'escape-from-fortnite-cheats-pricing',
		uk: 'ciny-chitiv-fortnite',
		cs: 'escape-from-fortnite-cheats-ceny',
		ro: 'preturi-cheats-fortnite',
		sv: 'escape-from-fortnite-cheats-priser',
	},
	setup: {
		en: 'setup',
		es: 'instalacion-trucos-fortnite',
		fr: 'installation-triche-fortnite',
		de: 'escape-from-fortnite-cheats-installation',
		pt: 'instalacao-cheats-fortnite',
		it: 'installazione-trucchi-fortnite',
		nl: 'escape-from-fortnite-cheats-installatie',
		pl: 'instalacja-cheatow-fortnite',
		ru: 'ustanovka-chitov-fortnite',
		tr: 'fortnite-hile-kurulum',
		ar: 'escape-from-fortnite-cheats-setup',
		ja: 'escape-from-fortnite-cheats-setup',
		ko: 'escape-from-fortnite-cheats-setup',
		zh: 'escape-from-fortnite-cheats-setup',
		hi: 'escape-from-fortnite-cheats-setup',
		id: 'escape-from-fortnite-cheats-setup',
		th: 'escape-from-fortnite-cheats-setup',
		vi: 'escape-from-fortnite-cheats-setup',
		uk: 'vstanovka-chitiv-fortnite',
		cs: 'escape-from-fortnite-cheats-instalace',
		ro: 'instalare-cheats-fortnite',
		sv: 'escape-from-fortnite-cheats-installation',
	},
	updates: {
		en: 'updates',
		es: 'actualizaciones-trucos-fortnite',
		fr: 'mises-a-jour-triche-fortnite',
		de: 'escape-from-fortnite-cheats-updates',
		pt: 'atualizacoes-cheats-fortnite',
		it: 'aggiornamenti-trucchi-fortnite',
		nl: 'escape-from-fortnite-cheats-updates',
		pl: 'aktualizacje-cheatow-fortnite',
		ru: 'obnovleniya-chitov-fortnite',
		tr: 'fortnite-hile-guncellemeleri',
		ar: 'escape-from-fortnite-cheats-updates',
		ja: 'escape-from-fortnite-cheats-updates',
		ko: 'escape-from-fortnite-cheats-updates',
		zh: 'escape-from-fortnite-cheats-updates',
		hi: 'escape-from-fortnite-cheats-updates',
		id: 'escape-from-fortnite-cheats-updates',
		th: 'escape-from-fortnite-cheats-updates',
		vi: 'escape-from-fortnite-cheats-updates',
		uk: 'onovlennya-chitiv-fortnite',
		cs: 'escape-from-fortnite-cheats-aktualizace',
		ro: 'actualizari-cheats-fortnite',
		sv: 'escape-from-fortnite-cheats-uppdateringar',
	},
	faq: {
		en: 'faq',
		es: 'preguntas-trucos-fortnite',
		fr: 'faq-triche-fortnite',
		de: 'escape-from-fortnite-cheats-faq',
		pt: 'faq-cheats-fortnite',
		it: 'faq-trucchi-fortnite',
		nl: 'escape-from-fortnite-cheats-faq',
		pl: 'faq-cheatow-fortnite',
		ru: 'faq-chitov-fortnite',
		tr: 'fortnite-hile-sss',
		ar: 'escape-from-fortnite-cheats-faq',
		ja: 'escape-from-fortnite-cheats-faq',
		ko: 'escape-from-fortnite-cheats-faq',
		zh: 'escape-from-fortnite-cheats-faq',
		hi: 'escape-from-fortnite-cheats-faq',
		id: 'escape-from-fortnite-cheats-faq',
		th: 'escape-from-fortnite-cheats-faq',
		vi: 'escape-from-fortnite-cheats-faq',
		uk: 'faq-chitiv-fortnite',
		cs: 'escape-from-fortnite-cheats-faq',
		ro: 'faq-cheats-fortnite',
		sv: 'escape-from-fortnite-cheats-faq',
	},
	support: {
		en: 'support',
		es: 'soporte-trucos-fortnite',
		fr: 'support-triche-fortnite',
		de: 'escape-from-fortnite-cheats-support',
		pt: 'suporte-cheats-fortnite',
		it: 'supporto-trucchi-fortnite',
		nl: 'escape-from-fortnite-cheats-support',
		pl: 'wsparcie-cheatow-fortnite',
		ru: 'podderzhka-chitov-fortnite',
		tr: 'fortnite-hile-destek',
		ar: 'escape-from-fortnite-cheats-support',
		ja: 'escape-from-fortnite-cheats-support',
		ko: 'escape-from-fortnite-cheats-support',
		zh: 'escape-from-fortnite-cheats-support',
		hi: 'escape-from-fortnite-cheats-support',
		id: 'escape-from-fortnite-cheats-support',
		th: 'escape-from-fortnite-cheats-support',
		vi: 'escape-from-fortnite-cheats-support',
		uk: 'pidtrymka-chitiv-fortnite',
		cs: 'escape-from-fortnite-cheats-podpora',
		ro: 'suport-cheats-fortnite',
		sv: 'escape-from-fortnite-cheats-support',
	},
	undetected: {
		en: 'undetected-fortnite-cheats',
		es: 'trucos-fortnite-indetectables',
		fr: 'triche-fortnite-indetectable',
		de: 'unentdeckte-escape-from-fortnite-cheats',
		pt: 'cheats-fortnite-indetectaveis',
		it: 'trucchi-fortnite-indetectabili',
		nl: 'undetected-fortnite-cheats',
		pl: 'niewykrywalne-cheats-fortnite',
		ru: 'nedecektiruemye-chity-fortnite',
		tr: 'tespit-edilemeyen-fortnite-hileleri',
		ar: 'undetected-fortnite-cheats',
		ja: 'undetected-fortnite-cheats',
		ko: 'undetected-fortnite-cheats',
		zh: 'undetected-fortnite-cheats',
		hi: 'undetected-fortnite-cheats',
		id: 'undetected-fortnite-cheats',
		th: 'undetected-fortnite-cheats',
		vi: 'undetected-fortnite-cheats',
		uk: 'nedecektovani-chity-fortnite',
		cs: 'undetected-fortnite-cheats',
		ro: 'cheats-fortnite-nedetectabile',
		sv: 'undetected-fortnite-cheats',
	},
	wallhack: {
		en: 'fortnite-wallhack',
		es: 'wallhack-trucos-fortnite',
		fr: 'wallhack-triche-fortnite',
		de: 'fortnite-wallhack',
		pt: 'wallhack-cheats-fortnite',
		it: 'wallhack-trucchi-fortnite',
		nl: 'fortnite-wallhack',
		pl: 'wallhack-cheatow-fortnite',
		ru: 'wallhack-chity-fortnite',
		tr: 'fortnite-wallhack-hile',
		ar: 'fortnite-wallhack',
		ja: 'fortnite-wallhack',
		ko: 'fortnite-wallhack',
		zh: 'fortnite-wallhack',
		hi: 'fortnite-wallhack',
		id: 'fortnite-wallhack',
		th: 'fortnite-wallhack',
		vi: 'fortnite-wallhack',
		uk: 'wallhack-chity-fortnite',
		cs: 'fortnite-wallhack',
		ro: 'wallhack-cheats-fortnite',
		sv: 'fortnite-wallhack',
	},
	radar: {
		en: 'fortnite-radar-hack',
		es: 'radar-hack-trucos-fortnite',
		fr: 'radar-hack-triche-fortnite',
		de: 'fortnite-radar-hack',
		pt: 'radar-hack-cheats-fortnite',
		it: 'radar-hack-trucchi-fortnite',
		nl: 'fortnite-radar-hack',
		pl: 'radar-hack-cheatow-fortnite',
		ru: 'radar-hack-chity-fortnite',
		tr: 'fortnite-radar-hack',
		ar: 'fortnite-radar-hack',
		ja: 'fortnite-radar-hack',
		ko: 'fortnite-radar-hack',
		zh: 'fortnite-radar-hack',
		hi: 'fortnite-radar-hack',
		id: 'fortnite-radar-hack',
		th: 'fortnite-radar-hack',
		vi: 'fortnite-radar-hack',
		uk: 'radar-hack-chity-fortnite',
		cs: 'fortnite-radar-hack',
		ro: 'radar-hack-cheats-fortnite',
		sv: 'fortnite-radar-hack',
	},
	'eac-bypass': {
		en: 'eac-bypass',
		es: 'eac-bypass-trucos',
		fr: 'eac-bypass-triche',
		de: 'eac-bypass',
		pt: 'eac-bypass-cheats',
		it: 'eac-bypass-trucchi',
		nl: 'eac-bypass',
		pl: 'eac-bypass-cheatow',
		ru: 'eac-bypass-chity',
		tr: 'eac-bypass',
		ar: 'eac-bypass',
		ja: 'eac-bypass',
		ko: 'eac-bypass',
		zh: 'eac-bypass',
		hi: 'eac-bypass',
		id: 'eac-bypass',
		th: 'eac-bypass',
		vi: 'eac-bypass',
		uk: 'eac-bypass-chity',
		cs: 'eac-bypass',
		ro: 'eac-bypass-cheats',
		sv: 'eac-bypass',
	},
	'cheats-2026': {
		en: 'fortnite-cheats-2026',
		es: 'trucos-fortnite-2026',
		fr: 'triche-fortnite-2026',
		de: 'fortnite-cheats-2026',
		pt: 'cheats-fortnite-2026',
		it: 'trucchi-fortnite-2026',
		nl: 'fortnite-cheats-2026',
		pl: 'cheaty-fortnite-2026',
		ru: 'chity-fortnite-2026',
		tr: 'fortnite-hileleri-2026',
		ar: 'fortnite-cheats-2026',
		ja: 'fortnite-cheats-2026',
		ko: 'fortnite-cheats-2026',
		zh: 'fortnite-cheats-2026',
		hi: 'fortnite-cheats-2026',
		id: 'fortnite-cheats-2026',
		th: 'fortnite-cheats-2026',
		vi: 'fortnite-cheats-2026',
		uk: 'chity-fortnite-2026',
		cs: 'fortnite-cheats-2026',
		ro: 'cheats-fortnite-2026',
		sv: 'fortnite-cheats-2026',
	},
	hacks: {
		en: 'fortnite-cheats',
		es: 'hacks-trucos-fortnite',
		fr: 'hacks-triche-fortnite',
		de: 'fortnite-cheats',
		pt: 'hacks-cheats-fortnite',
		it: 'hacks-trucchi-fortnite',
		nl: 'fortnite-cheats',
		pl: 'hacks-cheatow-fortnite',
		ru: 'haksy-chity-fortnite',
		tr: 'fortnite-hile-hacks',
		ar: 'fortnite-cheats',
		ja: 'fortnite-cheats',
		ko: 'fortnite-cheats',
		zh: 'fortnite-cheats',
		hi: 'fortnite-cheats',
		id: 'fortnite-cheats',
		th: 'fortnite-cheats',
		vi: 'fortnite-cheats',
		uk: 'haksy-chity-fortnite',
		cs: 'fortnite-cheats',
		ro: 'hacks-cheats-fortnite',
		sv: 'fortnite-cheats',
	},
	'cheat-download': {
		en: 'fortnite-cheat-download',
		es: 'descarga-trucos-fortnite',
		fr: 'telechargement-triche-fortnite',
		de: 'fortnite-cheat-download',
		pt: 'download-cheats-fortnite',
		it: 'download-trucchi-fortnite',
		nl: 'fortnite-cheat-download',
		pl: 'pobieranie-cheatow-fortnite',
		ru: 'skachat-chity-fortnite',
		tr: 'fortnite-hile-indir',
		ar: 'fortnite-cheat-download',
		ja: 'fortnite-cheat-download',
		ko: 'fortnite-cheat-download',
		zh: 'fortnite-cheat-download',
		hi: 'fortnite-cheat-download',
		id: 'fortnite-cheat-download',
		th: 'fortnite-cheat-download',
		vi: 'fortnite-cheat-download',
		uk: 'zavantazhennya-chitiv-fortnite',
		cs: 'fortnite-cheat-download',
		ro: 'descarcare-cheats-fortnite',
		sv: 'fortnite-cheat-download',
	},
	'mod-menu': {
		en: 'fortnite-mod-menu',
		es: 'menu-mod-trucos-fortnite',
		fr: 'menu-mod-triche-fortnite',
		de: 'fortnite-mod-menu',
		pt: 'menu-mod-cheats-fortnite',
		it: 'menu-mod-trucchi-fortnite',
		nl: 'fortnite-mod-menu',
		pl: 'menu-mod-cheatow-fortnite',
		ru: 'mod-menu-chity-fortnite',
		tr: 'fortnite-mod-menu',
		ar: 'fortnite-mod-menu',
		ja: 'fortnite-mod-menu',
		ko: 'fortnite-mod-menu',
		zh: 'fortnite-mod-menu',
		hi: 'fortnite-mod-menu',
		id: 'fortnite-mod-menu',
		th: 'fortnite-mod-menu',
		vi: 'fortnite-mod-menu',
		uk: 'mod-menu-chity-fortnite',
		cs: 'fortnite-mod-menu',
		ro: 'meniu-mod-cheats-fortnite',
		sv: 'fortnite-mod-menu',
	},
	'soft-aim': {
		en: 'fortnite-soft-aim',
		es: 'soft-aim-trucos-fortnite',
		fr: 'soft-aim-triche-fortnite',
		de: 'fortnite-soft-aim',
		pt: 'soft-aim-cheats-fortnite',
		it: 'soft-aim-trucchi-fortnite',
		nl: 'fortnite-soft-aim',
		pl: 'soft-aim-cheatow-fortnite',
		ru: 'soft-aim-chity-fortnite',
		tr: 'fortnite-soft-aim',
		ar: 'fortnite-soft-aim',
		ja: 'fortnite-soft-aim',
		ko: 'fortnite-soft-aim',
		zh: 'fortnite-soft-aim',
		hi: 'fortnite-soft-aim',
		id: 'fortnite-soft-aim',
		th: 'fortnite-soft-aim',
		vi: 'fortnite-soft-aim',
		uk: 'soft-aim-chity-fortnite',
		cs: 'fortnite-soft-aim',
		ro: 'soft-aim-cheats-fortnite',
		sv: 'fortnite-soft-aim',
	},
	'best-cheats': {
		en: 'best-fortnite-cheats',
		es: 'mejores-trucos-fortnite',
		fr: 'meilleures-triches-fortnite',
		de: 'beste-escape-from-fortnite-cheats',
		pt: 'melhores-cheats-fortnite',
		it: 'migliori-trucchi-fortnite',
		nl: 'beste-escape-from-fortnite-cheats',
		pl: 'najlepsze-cheats-fortnite',
		ru: 'luchshie-chity-fortnite',
		tr: 'en-iyi-fortnite-hileleri',
		ar: 'best-fortnite-cheats',
		ja: 'best-fortnite-cheats',
		ko: 'best-fortnite-cheats',
		zh: 'best-fortnite-cheats',
		hi: 'best-fortnite-cheats',
		id: 'best-fortnite-cheats',
		th: 'best-fortnite-cheats',
		vi: 'best-fortnite-cheats',
		uk: 'naykrashchi-chity-fortnite',
		cs: 'nejlepsi-escape-from-fortnite-cheats',
		ro: 'cele-mai-bune-cheats-fortnite',
		sv: 'basta-escape-from-fortnite-cheats',
	},
	'aimbot-hack': {
		en: 'fortnite-aimbot-hack',
		es: 'aimbot-hack-trucos-fortnite',
		fr: 'aimbot-hack-triche-fortnite',
		de: 'fortnite-aimbot-hack',
		pt: 'aimbot-hack-cheats-fortnite',
		it: 'aimbot-hack-trucchi-fortnite',
		nl: 'fortnite-aimbot-hack',
		pl: 'aimbot-hack-cheatow-fortnite',
		ru: 'aimbot-hack-chity-fortnite',
		tr: 'fortnite-aimbot-hack',
		ar: 'fortnite-aimbot-hack',
		ja: 'fortnite-aimbot-hack',
		ko: 'fortnite-aimbot-hack',
		zh: 'fortnite-aimbot-hack',
		hi: 'fortnite-aimbot-hack',
		id: 'fortnite-aimbot-hack',
		th: 'fortnite-aimbot-hack',
		vi: 'fortnite-aimbot-hack',
		uk: 'aimbot-hack-chity-fortnite',
		cs: 'fortnite-aimbot-hack',
		ro: 'aimbot-hack-cheats-fortnite',
		sv: 'fortnite-aimbot-hack',
	},
	'esp-hack': {
		en: 'fortnite-esp-hack',
		es: 'esp-hack-trucos-fortnite',
		fr: 'esp-hack-triche-fortnite',
		de: 'fortnite-esp-hack',
		pt: 'esp-hack-cheats-fortnite',
		it: 'esp-hack-trucchi-fortnite',
		nl: 'fortnite-esp-hack',
		pl: 'esp-hack-cheatow-fortnite',
		ru: 'esp-hack-chity-fortnite',
		tr: 'fortnite-esp-hack',
		ar: 'fortnite-esp-hack',
		ja: 'fortnite-esp-hack',
		ko: 'fortnite-esp-hack',
		zh: 'fortnite-esp-hack',
		hi: 'fortnite-esp-hack',
		id: 'fortnite-esp-hack',
		th: 'fortnite-esp-hack',
		vi: 'fortnite-esp-hack',
		uk: 'esp-hack-chity-fortnite',
		cs: 'fortnite-esp-hack',
		ro: 'esp-hack-cheats-fortnite',
		sv: 'fortnite-esp-hack',
	},
	'unlock-all': {
		en: 'fortnite-unlock-all',
		es: 'unlock-all-trucos-fortnite',
		fr: 'unlock-all-triche-fortnite',
		de: 'fortnite-unlock-all',
		pt: 'unlock-all-cheats-fortnite',
		it: 'unlock-all-trucchi-fortnite',
		nl: 'fortnite-unlock-all',
		pl: 'unlock-all-cheatow-fortnite',
		ru: 'unlock-all-chity-fortnite',
		tr: 'fortnite-unlock-all',
		ar: 'fortnite-unlock-all',
		ja: 'fortnite-unlock-all',
		ko: 'fortnite-unlock-all',
		zh: 'fortnite-unlock-all',
		hi: 'fortnite-unlock-all',
		id: 'fortnite-unlock-all',
		th: 'fortnite-unlock-all',
		vi: 'fortnite-unlock-all',
		uk: 'unlock-all-chity-fortnite',
		cs: 'fortnite-unlock-all',
		ro: 'unlock-all-cheats-fortnite',
		sv: 'fortnite-unlock-all',
	},
	privacy: {
		en: 'privacy-policy',
		es: 'politica-privacidad',
		fr: 'politique-confidentialite',
		de: 'datenschutz',
		pt: 'politica-privacidade',
		it: 'privacy-policy',
		nl: 'privacybeleid',
		pl: 'polityka-prywatnosci',
		ru: 'politika-konfidencialnosti',
		tr: 'gizlilik-politikasi',
		ar: 'privacy-policy',
		ja: 'privacy-policy',
		ko: 'privacy-policy',
		zh: 'privacy-policy',
		hi: 'privacy-policy',
		id: 'privacy-policy',
		th: 'privacy-policy',
		vi: 'privacy-policy',
		uk: 'polityka-konfidentsijnosti',
		cs: 'ochrana-osobnich-udaju',
		ro: 'politica-confidentialitate',
		sv: 'integritetspolicy',
	},
	refund: {
		en: 'refund-policy',
		es: 'politica-reembolso',
		fr: 'politique-remboursement',
		de: 'rueckerstattung',
		pt: 'politica-reembolso',
		it: 'politica-rimborso',
		nl: 'terugbetalingsbeleid',
		pl: 'polityka-zwrotow',
		ru: 'politika-vozvrata',
		tr: 'iade-politikasi',
		ar: 'refund-policy',
		ja: 'refund-policy',
		ko: 'refund-policy',
		zh: 'refund-policy',
		hi: 'refund-policy',
		id: 'refund-policy',
		th: 'refund-policy',
		vi: 'refund-policy',
		uk: 'polityka-povorennya',
		cs: 'refund-policy',
		ro: 'politica-rambursare',
		sv: 'aterbetalningspolicy',
	},
	terms: {
		en: 'terms',
		es: 'terminos-uso',
		fr: 'conditions-utilisation',
		de: 'nutzungsbedingungen',
		pt: 'termos-uso',
		it: 'termini-uso',
		nl: 'gebruiksvoorwaarden',
		pl: 'regulamin',
		ru: 'usloviya-ispolzovaniya',
		tr: 'kullanim-kosullari',
		ar: 'terms',
		ja: 'terms',
		ko: 'terms',
		zh: 'terms',
		hi: 'terms',
		id: 'terms',
		th: 'terms',
		vi: 'terms',
		uk: 'umovy-vykorystannya',
		cs: 'podminky-uziti',
		ro: 'termeni-utilizare',
		sv: 'anvandarvillkor',
	},
};

export const pageIds = Object.keys(englishPaths) as PageId[];

export function getLocalizedPath(pageId: PageId, locale: LocaleCode): string {
	if (locale === defaultLocale) {
		return englishPaths[pageId];
	}
	const slug = localizedSlugs[pageId][locale];
	return slug ? `/${locale}/${slug}/` : `/${locale}/`;
}

/** Map English root paths to the correct locale URL (for CTAs and inline links). */
export function localizeInternalHref(href: string, locale: LocaleCode): string {
	if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#')) {
		return href;
	}
	const trimmed = href.replace(/\/+$/, '') || '/';
	const withSlash = trimmed === '/' ? '/' : `${trimmed}/`;
	for (const pageId of pageIds) {
		const english = englishPaths[pageId];
		if (english === withSlash || english.replace(/\/+$/, '') === trimmed) {
			return getLocalizedPath(pageId, locale);
		}
	}
	if (withSlash.startsWith('/faq/') && withSlash !== '/faq/') {
		const slug = withSlash.slice('/faq/'.length).replace(/\/+$/, '');
		return getFaqArticlePath(slug, locale);
	}
	if (withSlash === '/reviews/') {
		return getReviewsIndexPath(locale);
	}
	if (withSlash.startsWith('/reviews/')) {
		const slug = withSlash.slice('/reviews/'.length).replace(/\/+$/, '');
		return getReviewArticlePath(slug, locale);
	}
	if (withSlash === '/blog/' || withSlash.startsWith('/blog/')) {
		const rest = withSlash.slice('/blog/'.length);
		const base = getBlogIndexPath(locale);
		return rest ? `${base}${rest}` : base;
	}
	return href;
}

/** Canonical absolute URL — always https apex with trailing slash (matches Layout.astro). */
export function buildCanonicalUrl(path: string): string {
	const normalized =
		!path || path === '/'
			? '/'
			: path.endsWith('/') || path.includes('.')
				? path
				: `${path}/`;
	return new URL(normalized, siteConfig.url).href;
}

export function absoluteLocalizedUrl(pageId: PageId, locale: LocaleCode): string {
	return buildCanonicalUrl(getLocalizedPath(pageId, locale));
}

export type HreflangAlternate = { hreflang: string; href: string };

/** Self-referential hreflang for single-locale pages (reviews, 404). */
export function getPathHreflangAlternates(
	pathForLocale: (locale: LocaleCode) => string,
	currentLocale: LocaleCode = defaultLocale,
) {
	const byLocale = localeCodes.map((code) => ({
		hreflang: localeMap[code].hreflang,
		href: buildCanonicalUrl(pathForLocale(code)),
		code,
	}));
	const self = byLocale.find((alt) => alt.code === currentLocale)!;
	const others = byLocale.filter((alt) => alt.code !== currentLocale);
	const xDefault = {
		hreflang: 'x-default' as const,
		href: buildCanonicalUrl(pathForLocale(defaultLocale)),
	};
	return [
		{ hreflang: self.hreflang, href: self.href },
		...others.map(({ hreflang, href }) => ({ hreflang, href })),
		xDefault,
	];
}

export function getSelfHreflangAlternates(
	path: string,
	locale: LocaleCode = defaultLocale,
): HreflangAlternate[] {
	const href = buildCanonicalUrl(path);
	return [
		{ hreflang: localeMap[locale].hreflang, href },
		{ hreflang: 'x-default', href },
	];
}

export function getHreflangAlternates(pageId: PageId, currentLocale: LocaleCode = defaultLocale) {
	const byLocale = localeCodes.map((code) => ({
		hreflang: localeMap[code].hreflang,
		href: absoluteLocalizedUrl(pageId, code),
		code,
	}));
	const self = byLocale.find((alt) => alt.code === currentLocale)!;
	const others = byLocale.filter((alt) => alt.code !== currentLocale);
	const xDefault = {
		hreflang: 'x-default' as const,
		href: absoluteLocalizedUrl(pageId, defaultLocale),
	};
	// Self-referential hreflang first — required by Google/Seobility for the active locale.
	return [
		{ hreflang: self.hreflang, href: self.href },
		...others.map(({ hreflang, href }) => ({ hreflang, href })),
		xDefault,
	];
}

export function resolvePageIdFromPath(path: string): PageId | undefined {
	const normalized = path.endsWith('/') ? path : `${path}/`;
	for (const id of pageIds) {
		if (englishPaths[id] === normalized) return id;
	}
	return undefined;
}

/** Parsed locale + page from any site URL (English root or /{lang}/…). */
export type PageContext = {
	locale: LocaleCode;
	pageId?: PageId;
	isBlogIndex?: boolean;
	blogSlug?: string;
	faqSlug?: string;
	isReviewsIndex?: boolean;
	reviewSlug?: string;
};

export function getFaqArticlePath(slug: string, locale: LocaleCode): string {
	return locale === defaultLocale ? `/faq/${slug}/` : `/${locale}/faq/${slug}/`;
}

export function getReviewsIndexPath(locale: LocaleCode): string {
	return locale === defaultLocale ? '/reviews/' : `/${locale}/reviews/`;
}

export function getReviewArticlePath(slug: string, locale: LocaleCode): string {
	return locale === defaultLocale ? `/reviews/${slug}/` : `/${locale}/reviews/${slug}/`;
}

export function getBlogIndexPath(locale: LocaleCode): string {
	return locale === defaultLocale ? '/blog/' : `/${locale}/blog/`;
}

function normalizePathname(pathname: string): string {
	if (!pathname || pathname === '/') return '/';
	if (pathname.includes('.') || pathname.endsWith('/')) return pathname;
	return `${pathname}/`;
}

/** Resolve locale and page/blog context from the current URL path. */
export function resolvePageContextFromPath(pathname: string): PageContext {
	const path = normalizePathname(pathname);

	if (path === '/') {
		return { locale: defaultLocale, pageId: 'home' };
	}

	const segments = path.split('/').filter(Boolean);
	let locale: LocaleCode = defaultLocale;
	let offset = 0;

	if (segments.length > 0 && isLocaleCode(segments[0]) && segments[0] !== defaultLocale) {
		locale = segments[0];
		offset = 1;
	}

	const rest = segments.slice(offset);

	if (rest.length === 0) {
		return { locale, pageId: 'home' };
	}

	if (rest[0] === 'blog') {
		if (rest.length === 1) {
			return { locale, isBlogIndex: true };
		}
		return { locale, blogSlug: rest[1] };
	}

	if (rest[0] === 'faq' && rest[1]) {
		return { locale, faqSlug: rest[1] };
	}

	if (rest[0] === 'reviews') {
		if (rest.length === 1) {
			return { locale, isReviewsIndex: true };
		}
		return { locale, reviewSlug: rest[1] };
	}

	if (locale === defaultLocale) {
		return { locale, pageId: resolvePageIdFromPath(path) };
	}

	return { locale, pageId: resolvePageFromLocalizedPath(locale, rest[0]) };
}

/** Target URL for the same page in another locale (non-blog pages). */
export function getPageLocaleSwitchHref(context: PageContext, targetLocale: LocaleCode): string {
	if (context.pageId) {
		return getLocalizedPath(context.pageId, targetLocale);
	}
	if (context.faqSlug) {
		return getFaqArticlePath(context.faqSlug, targetLocale);
	}
	if (context.isReviewsIndex) {
		return getReviewsIndexPath(targetLocale);
	}
	if (context.reviewSlug) {
		return getReviewArticlePath(context.reviewSlug, targetLocale);
	}
	return getLocalizedPath('home', targetLocale);
}

export function hreflangLinksXml(pageId: PageId, escapeXml: (v: string) => string): string {
	return getHreflangAlternates(pageId)
		.map(
			(alt) =>
				`    <xhtml:link rel="alternate" hreflang="${escapeXml(alt.hreflang)}" href="${escapeXml(alt.href)}"/>`,
		)
		.join('\n');
}

export function resolvePageFromLocalizedPath(
	locale: LocaleCode,
	slug: string | undefined,
): PageId | undefined {
	if (!slug) return 'home';
	for (const pageId of pageIds) {
		if (localizedSlugs[pageId][locale] === slug) return pageId;
	}
	return undefined;
}

/** Map Accept-Language header to preferred locale (region-aware). */
export function localeFromAcceptLanguage(header: string | null): LocaleCode {
	if (!header) return defaultLocale;
	const prefs = header
		.split(',')
		.map((part) => {
			const [tag, qPart] = part.trim().split(';');
			const q = qPart?.startsWith('q=') ? Number.parseFloat(qPart.slice(2)) : 1;
			return { tag: tag.toLowerCase(), q };
		})
		.sort((a, b) => b.q - a.q);

	for (const { tag } of prefs) {
		const primary = tag.split('-')[0];
		if (localeCodes.includes(primary as LocaleCode)) return primary as LocaleCode;
	}
	return defaultLocale;
}

export function getNavForLocale(locale: LocaleCode, labels: Record<string, string>) {
	const items: { label: string; href: string; pageId?: PageId }[] = [
		{ label: labels.home, href: getLocalizedPath('home', locale), pageId: 'home' },
	{ label: labels.hacks ?? 'Hacks', href: getLocalizedPath('hacks', locale), pageId: 'hacks' },
		{ label: labels.aimbot, href: getLocalizedPath('fortnite-aimbot', locale), pageId: 'fortnite-aimbot' },
		{ label: labels.esp, href: getLocalizedPath('fortnite-esp', locale), pageId: 'fortnite-esp' },
		{ label: 'Blog', href: locale === defaultLocale ? '/blog/' : `/${locale}/blog/` },
		{ label: labels.features, href: getLocalizedPath('features', locale), pageId: 'features' },
		{ label: labels.pricing, href: getLocalizedPath('pricing', locale), pageId: 'pricing' },
		{ label: labels.setup, href: getLocalizedPath('setup', locale), pageId: 'setup' },
		{ label: labels.updates, href: getLocalizedPath('updates', locale), pageId: 'updates' },
		{ label: labels.faq, href: getLocalizedPath('faq', locale), pageId: 'faq' },
	];
	return items;
}
