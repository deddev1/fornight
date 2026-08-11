export type LocaleCode =
	| 'en'
	| 'es'
	| 'fr'
	| 'de'
	| 'pt'
	| 'it'
	| 'nl'
	| 'pl'
	| 'ru'
	| 'tr'
	| 'ar'
	| 'ja'
	| 'ko'
	| 'zh'
	| 'hi'
	| 'id'
	| 'th'
	| 'vi'
	| 'uk'
	| 'cs'
	| 'ro'
	| 'sv';

export type LocaleMeta = {
	code: LocaleCode;
	name: string;
	nativeName: string;
	hreflang: string;
	ogLocale: string;
	dir: 'ltr' | 'rtl';
	region: string;
};

/** 22 locales for global Fortnite Cheats blog SEO coverage. */
export const locales: LocaleMeta[] = [
	{ code: 'en', name: 'English', nativeName: 'English', hreflang: 'en', ogLocale: 'en_US', dir: 'ltr', region: 'Worldwide' },
	{ code: 'es', name: 'Spanish', nativeName: 'Español', hreflang: 'es', ogLocale: 'es_ES', dir: 'ltr', region: 'Worldwide' },
	{ code: 'fr', name: 'French', nativeName: 'Français', hreflang: 'fr', ogLocale: 'fr_FR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'de', name: 'German', nativeName: 'Deutsch', hreflang: 'de', ogLocale: 'de_DE', dir: 'ltr', region: 'Worldwide' },
	{ code: 'pt', name: 'Portuguese', nativeName: 'Português', hreflang: 'pt', ogLocale: 'pt_BR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'it', name: 'Italian', nativeName: 'Italiano', hreflang: 'it', ogLocale: 'it_IT', dir: 'ltr', region: 'Worldwide' },
	{ code: 'nl', name: 'Dutch', nativeName: 'Nederlands', hreflang: 'nl', ogLocale: 'nl_NL', dir: 'ltr', region: 'Worldwide' },
	{ code: 'pl', name: 'Polish', nativeName: 'Polski', hreflang: 'pl', ogLocale: 'pl_PL', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ru', name: 'Russian', nativeName: 'Русский', hreflang: 'ru', ogLocale: 'ru_RU', dir: 'ltr', region: 'Worldwide' },
	{ code: 'tr', name: 'Turkish', nativeName: 'Türkçe', hreflang: 'tr', ogLocale: 'tr_TR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ar', name: 'Arabic', nativeName: 'العربية', hreflang: 'ar', ogLocale: 'ar_SA', dir: 'rtl', region: 'Worldwide' },
	{ code: 'ja', name: 'Japanese', nativeName: '日本語', hreflang: 'ja', ogLocale: 'ja_JP', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ko', name: 'Korean', nativeName: '한국어', hreflang: 'ko', ogLocale: 'ko_KR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'zh', name: 'Chinese', nativeName: '中文', hreflang: 'zh', ogLocale: 'zh_CN', dir: 'ltr', region: 'Worldwide' },
	{ code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', hreflang: 'hi', ogLocale: 'hi_IN', dir: 'ltr', region: 'Worldwide' },
	{ code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', hreflang: 'id', ogLocale: 'id_ID', dir: 'ltr', region: 'Worldwide' },
	{ code: 'th', name: 'Thai', nativeName: 'ไทย', hreflang: 'th', ogLocale: 'th_TH', dir: 'ltr', region: 'Worldwide' },
	{ code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt', hreflang: 'vi', ogLocale: 'vi_VN', dir: 'ltr', region: 'Worldwide' },
	{ code: 'uk', name: 'Ukrainian', nativeName: 'Українська', hreflang: 'uk', ogLocale: 'uk_UA', dir: 'ltr', region: 'Worldwide' },
	{ code: 'cs', name: 'Czech', nativeName: 'Čeština', hreflang: 'cs', ogLocale: 'cs_CZ', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ro', name: 'Romanian', nativeName: 'Română', hreflang: 'ro', ogLocale: 'ro_RO', dir: 'ltr', region: 'Worldwide' },
	{ code: 'sv', name: 'Swedish', nativeName: 'Svenska', hreflang: 'sv', ogLocale: 'sv_SE', dir: 'ltr', region: 'Worldwide' },
];

export const defaultLocale: LocaleCode = 'en';

export const localeCodes = locales.map((l) => l.code);

export const localeMap = Object.fromEntries(locales.map((l) => [l.code, l])) as Record<
	LocaleCode,
	LocaleMeta
>;

export function isLocaleCode(value: string): value is LocaleCode {
	return localeCodes.includes(value as LocaleCode);
}

export function getLocale(code: string): LocaleMeta | undefined {
	return isLocaleCode(code) ? localeMap[code] : undefined;
}

/** UI strings for blog index pages per locale. */
export const blogUi: Record<
	LocaleCode,
	{
		blogTitle: string;
		blogDescription: string;
		blogH1: string;
		blogIntro: string;
		readMore: string;
		published: string;
		updated: string;
		relatedPosts: string;
		allPosts: string;
		home: string;
		language: string;
	}
> = {
	en: {
		blogTitle: 'Fortnite Cheats Blog | ESP, Cheats & Meta Tips',
		blogDescription:
			'Fortnite cheats guides — ESP, aimbot, Ranked meta, loot routes, and EAC updates. Global English blog at bestfortnitecheats.com/blog/.',
		blogH1: 'Fortnite Cheats Intel',
		blogIntro:
			'Actionable Fortnite guides for Battle Royale and Zero Build — meta breakdowns, loot routes, weapon tiers, and warmup routines. Pair these tips with our fortnite cheats pages for ESP boxes and soft aim when you need in-match tools.',
		readMore: 'Read guide',
		published: 'Published',
		updated: 'Updated',
		relatedPosts: 'Related Fortnite guides',
		allPosts: 'All blog posts',
		home: 'Fortnite Cheats home',
		language: 'Language',
	},
	es: {
		blogTitle: 'Blog Fortnite Cheats 2026 | Guías en 22 idiomas',
		blogDescription:
			'Blog de Fortnite Cheats con guías de trucos indetectables, ESP wallhack, radar y Aimbot para Fortnite en PC Windows.',
		blogH1: 'Blog Fortnite Cheats — Guías globales',
		blogIntro:
			'Guías SEO de trucos Fortnite indetectables, ESP wallhack, radar hack, Aimbot y mantenimiento Easy Anti-Cheat en 22 idiomas.',
		readMore: 'Leer guía',
		published: 'Publicado',
		updated: 'Actualizado',
		relatedPosts: 'Guías Fortnite relacionadas',
		allPosts: 'Todos los artículos',
		home: 'Inicio Fortnite Cheats',
		language: 'Idioma',
	},
	fr: {
		blogTitle: 'Blog Fortnite Cheats 2026 | Guides en 22 langues',
		blogDescription:
			'Blog Fortnite Cheats : triches indétectables, ESP wallhack, radar et Aimbot pour Fortnite sur PC Windows.',
		blogH1: 'Blog Fortnite Cheats — Guides mondiaux',
		blogIntro:
			'Guides SEO triches Fortnite indétectables, ESP wallhack, radar hack, Aimbot et Easy Anti-Cheat en 22 langues.',
		readMore: 'Lire le guide',
		published: 'Publié',
		updated: 'Mis à jour',
		relatedPosts: 'Guides Fortnite associés',
		allPosts: 'Tous les articles',
		home: 'Accueil Fortnite Cheats',
		language: 'Langue',
	},
	de: {
		blogTitle: 'Fortnite Cheats Blog 2026 | Guides in 22 Sprachen',
		blogDescription:
			'Fortnite Cheats Blog mit undetected ESP, Wallhack, Radar und Aimbot Guides für Fortnite auf Windows PC.',
		blogH1: 'Fortnite Cheats Blog — Globale Guides',
		blogIntro:
			'SEO-Guides für undetected Fortnite Cheats, ESP Wallhack, Radar Hack, Aimbot und Easy Anti-Cheat in 22 Sprachen.',
		readMore: 'Guide lesen',
		published: 'Veröffentlicht',
		updated: 'Aktualisiert',
		relatedPosts: 'Verwandte Fortnite Guides',
		allPosts: 'Alle Beiträge',
		home: 'Fortnite Cheats Start',
		language: 'Sprache',
	},
	pt: {
		blogTitle: 'Blog Fortnite Cheats 2026 | Guias em 22 idiomas',
		blogDescription:
			'Blog Fortnite Cheats com guias de cheats indetectáveis, ESP wallhack, radar e Aimbot para Fortnite no PC.',
		blogH1: 'Blog Fortnite Cheats — Guias globais',
		blogIntro:
			'Guias SEO de cheats Fortnite indetectáveis, ESP wallhack, radar hack, Aimbot e Easy Anti-Cheat em 22 idiomas.',
		readMore: 'Ler guia',
		published: 'Publicado',
		updated: 'Atualizado',
		relatedPosts: 'Guias Fortnite relacionados',
		allPosts: 'Todos os posts',
		home: 'Início Fortnite Cheats',
		language: 'Idioma',
	},
	it: {
		blogTitle: 'Blog Fortnite Cheats 2026 | Guide in 22 lingue',
		blogDescription:
			'Blog Fortnite Cheats con guide cheat indetectable, ESP wallhack, radar e Aimbot per Fortnite su PC Windows.',
		blogH1: 'Blog Fortnite Cheats — Guide globali',
		blogIntro:
			'Guide SEO cheat Fortnite indetectable, ESP wallhack, radar hack, Aimbot e Easy Anti-Cheat in 22 lingue.',
		readMore: 'Leggi guida',
		published: 'Pubblicato',
		updated: 'Aggiornato',
		relatedPosts: 'Guide Fortnite correlate',
		allPosts: 'Tutti gli articoli',
		home: 'Home Fortnite Cheats',
		language: 'Lingua',
	},
	nl: {
		blogTitle: 'Fortnite Cheats Blog 2026 | Gidsen in 22 talen',
		blogDescription:
			'Fortnite Cheats blog met undetected ESP, wallhack, radar en Aimbot gidsen voor Fortnite op Windows PC.',
		blogH1: 'Fortnite Cheats Blog — Wereldwijde gidsen',
		blogIntro:
			'SEO-gidsen voor undetected Fortnite cheats, ESP wallhack, radar hack, Aimbot en Easy Anti-Cheat in 22 talen.',
		readMore: 'Lees gids',
		published: 'Gepubliceerd',
		updated: 'Bijgewerkt',
		relatedPosts: 'Gerelateerde Fortnite gidsen',
		allPosts: 'Alle posts',
		home: 'Fortnite Cheats home',
		language: 'Taal',
	},
	pl: {
		blogTitle: 'Blog Fortnite Cheats 2026 | Poradniki w 22 językach',
		blogDescription:
			'Blog Fortnite Cheats z poradnikami undetected ESP, wallhack, radar i Aimbot dla Fortnite na PC.',
		blogH1: 'Blog Fortnite Cheats — Globalne poradniki',
		blogIntro:
			'Poradniki SEO undetected cheatów Fortnite, ESP wallhack, radar hack, Aimbot i Easy Anti-Cheat w 22 językach.',
		readMore: 'Czytaj poradnik',
		published: 'Opublikowano',
		updated: 'Zaktualizowano',
		relatedPosts: 'Powiązane poradniki Fortnite',
		allPosts: 'Wszystkie artykuły',
		home: 'Strona główna Fortnite Cheats',
		language: 'Język',
	},
	ru: {
		blogTitle: 'Блог Fortnite Cheats 2026 | Гайды на 22 языках',
		blogDescription:
			'Блог Fortnite Cheats: undetected ESP, wallhack, radar и Aimbot для Fortnite на Windows PC.',
		blogH1: 'Блог Fortnite Cheats — Глобальные гайды',
		blogIntro:
			'SEO-гайды по undetected читам Fortnite, ESP wallhack, radar hack, Aimbot и Easy Anti-Cheat на 22 языках.',
		readMore: 'Читать гайд',
		published: 'Опубликовано',
		updated: 'Обновлено',
		relatedPosts: 'Похожие гайды Fortnite',
		allPosts: 'Все статьи',
		home: 'Главная Fortnite Cheats',
		language: 'Язык',
	},
	tr: {
		blogTitle: 'Fortnite Cheats Blog 2026 | 22 dilde rehberler',
		blogDescription:
			'Fortnite Cheats blog: undetected ESP, wallhack, radar ve Aimbot rehberleri Fortnite Windows PC.',
		blogH1: 'Fortnite Cheats Blog — Küresel rehberler',
		blogIntro:
			'Undetected Fortnite hileleri, ESP wallhack, radar hack, Aimbot ve Easy Anti-Cheat SEO rehberleri 22 dilde.',
		readMore: 'Rehberi oku',
		published: 'Yayınlandı',
		updated: 'Güncellendi',
		relatedPosts: 'İlgili Fortnite rehberleri',
		allPosts: 'Tüm yazılar',
		home: 'Fortnite Cheats ana sayfa',
		language: 'Dil',
	},
	ar: {
		blogTitle: 'مدونة Fortnite Cheats 2026 | أدلة بـ 22 لغة',
		blogDescription:
			'مدونة Fortnite Cheats: غش undetected وESP wallhack ورadar وAimbot لـ Fortnite على Windows PC.',
		blogH1: 'مدونة Fortnite Cheats — أدلة عالمية',
		blogIntro:
			'أدلة SEO لغش Fortnite undetected وESP wallhack ورadar hack وAimbot وEasy Anti-Cheat بـ 22 لغة.',
		readMore: 'اقرأ الدليل',
		published: 'نُشر',
		updated: 'تم التحديث',
		relatedPosts: 'أدلة Fortnite ذات صلة',
		allPosts: 'جميع المقالات',
		home: 'الرئيسية Fortnite Cheats',
		language: 'اللغة',
	},
	ja: {
		blogTitle: 'Fortnite Cheats ブログ 2026 | 22言語ガイド',
		blogDescription:
			'Fortnite Cheatsブログ：undetected ESP、wallhack、radar、Aimbotガイド。Fortnite Windows PC向け。',
		blogH1: 'Fortnite Cheats ブログ — グローバルガイド',
		blogIntro:
			'undetected Fortniteチート、ESP wallhack、radar hack、Aimbot、Easy Anti-CheatのSEOガイドを22言語で提供。',
		readMore: 'ガイドを読む',
		published: '公開日',
		updated: '更新日',
		relatedPosts: '関連Fortniteガイド',
		allPosts: 'すべての記事',
		home: 'Fortnite Cheats ホーム',
		language: '言語',
	},
	ko: {
		blogTitle: 'Fortnite Cheats 블로그 2026 | 22개 언어 가이드',
		blogDescription:
			'Fortnite Cheats 블로그: undetected ESP, wallhack, radar, Aimbot 가이드. Fortnite Windows PC.',
		blogH1: 'Fortnite Cheats 블로그 — 글로벌 가이드',
		blogIntro:
			'undetected Fortnite 치트, ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat SEO 가이드를 22개 언어로 제공.',
		readMore: '가이드 읽기',
		published: '게시일',
		updated: '업데이트',
		relatedPosts: '관련 Fortnite 가이드',
		allPosts: '모든 게시물',
		home: 'Fortnite Cheats 홈',
		language: '언어',
	},
	zh: {
		blogTitle: 'Fortnite Cheats 博客 2026 | 22种语言指南',
		blogDescription:
			'Fortnite Cheats博客：undetected ESP、wallhack、radar和Aimbot指南，适用于Fortnite Windows PC。',
		blogH1: 'Fortnite Cheats 博客 — 全球指南',
		blogIntro:
			'undetected Fortnite作弊、ESP wallhack、radar hack、Aimbot和Easy Anti-Cheat的SEO指南，共22种语言。',
		readMore: '阅读指南',
		published: '发布',
		updated: '更新',
		relatedPosts: '相关Fortnite指南',
		allPosts: '所有文章',
		home: 'Fortnite Cheats 首页',
		language: '语言',
	},
	hi: {
		blogTitle: 'Fortnite Cheats ब्लॉग 2026 | 22 भाषाओं में गाइड',
		blogDescription:
			'Fortnite Cheats ब्लॉग: undetected ESP, wallhack, radar और Aimbot गाइड Fortnite Windows PC के लिए।',
		blogH1: 'Fortnite Cheats ब्लॉग — वैश्विक गाइड',
		blogIntro:
			'undetected Fortnite cheats, ESP wallhack, radar hack, Aimbot और Easy Anti-Cheat SEO गाइड 22 भाषाओं में।',
		readMore: 'गाइड पढ़ें',
		published: 'प्रकाशित',
		updated: 'अपडेट',
		relatedPosts: 'संबंधित Fortnite गाइड',
		allPosts: 'सभी पोस्ट',
		home: 'Fortnite Cheats होम',
		language: 'भाषा',
	},
	id: {
		blogTitle: 'Blog Fortnite Cheats 2026 | Panduan 22 bahasa',
		blogDescription:
			'Blog Fortnite Cheats: panduan undetected ESP, wallhack, radar dan Aimbot untuk Fortnite di PC Windows.',
		blogH1: 'Blog Fortnite Cheats — Panduan global',
		blogIntro:
			'Panduan SEO cheat Fortnite undetected, ESP wallhack, radar hack, Aimbot dan Easy Anti-Cheat dalam 22 bahasa.',
		readMore: 'Baca panduan',
		published: 'Dipublikasikan',
		updated: 'Diperbarui',
		relatedPosts: 'Panduan Fortnite terkait',
		allPosts: 'Semua artikel',
		home: 'Beranda Fortnite Cheats',
		language: 'Bahasa',
	},
	th: {
		blogTitle: 'บล็อก Fortnite Cheats 2026 | คู่มือ 22 ภาษา',
		blogDescription:
			'บล็อก Fortnite Cheats: คู่มือ undetected ESP, wallhack, radar และ Aimbot สำหรับ Fortnite บน PC',
		blogH1: 'บล็อก Fortnite Cheats — คู่มือทั่วโลก',
		blogIntro:
			'คู่มือ SEO สำหรับ cheat Fortnite undetected, ESP wallhack, radar hack, Aimbot และ Easy Anti-Cheat 22 ภาษา',
		readMore: 'อ่านคู่มือ',
		published: 'เผยแพร่',
		updated: 'อัปเดต',
		relatedPosts: 'คู่มือ Fortnite ที่เกี่ยวข้อง',
		allPosts: 'บทความทั้งหมด',
		home: 'หน้าแรก Fortnite Cheats',
		language: 'ภาษา',
	},
	vi: {
		blogTitle: 'Blog Fortnite Cheats 2026 | Hướng dẫn 22 ngôn ngữ',
		blogDescription:
			'Blog Fortnite Cheats: hướng dẫn undetected ESP, wallhack, radar và Aimbot cho Fortnite trên PC.',
		blogH1: 'Blog Fortnite Cheats — Hướng dẫn toàn cầu',
		blogIntro:
			'Hướng dẫn SEO cheat Fortnite undetected, ESP wallhack, radar hack, Aimbot và Easy Anti-Cheat bằng 22 ngôn ngữ.',
		readMore: 'Đọc hướng dẫn',
		published: 'Xuất bản',
		updated: 'Cập nhật',
		relatedPosts: 'Hướng dẫn Fortnite liên quan',
		allPosts: 'Tất cả bài viết',
		home: 'Trang chủ Fortnite Cheats',
		language: 'Ngôn ngữ',
	},
	uk: {
		blogTitle: 'Блог Fortnite Cheats 2026 | Гайди 22 мовами',
		blogDescription:
			'Блог Fortnite Cheats: undetected ESP, wallhack, radar та Aimbot для Fortnite на Windows PC.',
		blogH1: 'Блог Fortnite Cheats — Глобальні гайди',
		blogIntro:
			'SEO-гайди з undetected читів Fortnite, ESP wallhack, radar hack, Aimbot та Easy Anti-Cheat 22 мовами.',
		readMore: 'Читати гайд',
		published: 'Опубліковано',
		updated: 'Оновлено',
		relatedPosts: "Пов'язані гайди Fortnite",
		allPosts: 'Усі статті',
		home: 'Головна Fortnite Cheats',
		language: 'Мова',
	},
	cs: {
		blogTitle: 'Blog Fortnite Cheats 2026 | Průvodce ve 22 jazycích',
		blogDescription:
			'Blog Fortnite Cheats: undetected ESP, wallhack, radar a Aimbot pro Fortnite na Windows PC.',
		blogH1: 'Blog Fortnite Cheats — Globální průvodce',
		blogIntro:
			'SEO průvodce undetected Fortnite cheaty, ESP wallhack, radar hack, Aimbot a Easy Anti-Cheat ve 22 jazycích.',
		readMore: 'Číst průvodce',
		published: 'Publikováno',
		updated: 'Aktualizováno',
		relatedPosts: 'Související Fortnite průvodce',
		allPosts: 'Všechny články',
		home: 'Domů Fortnite Cheats',
		language: 'Jazyk',
	},
	ro: {
		blogTitle: 'Blog Fortnite Cheats 2026 | Ghiduri în 22 de limbi',
		blogDescription:
			'Blog Fortnite Cheats: ghiduri undetected ESP, wallhack, radar și Aimbot pentru Fortnite pe PC.',
		blogH1: 'Blog Fortnite Cheats — Ghiduri globale',
		blogIntro:
			'Ghiduri SEO cheat-uri Fortnite undetected, ESP wallhack, radar hack, Aimbot și Easy Anti-Cheat în 22 de limbi.',
		readMore: 'Citește ghidul',
		published: 'Publicat',
		updated: 'Actualizat',
		relatedPosts: 'Ghiduri Fortnite related',
		allPosts: 'Toate articolele',
		home: 'Acasă Fortnite Cheats',
		language: 'Limbă',
	},
	sv: {
		blogTitle: 'Fortnite Cheats Blogg 2026 | Guider på 22 språk',
		blogDescription:
			'Fortnite Cheats blogg med undetected ESP, wallhack, radar och Aimbot guider för Fortnite på PC.',
		blogH1: 'Fortnite Cheats Blogg — Globala guider',
		blogIntro:
			'SEO-guider för undetected Fortnite cheats, ESP wallhack, radar hack, Aimbot och Easy Anti-Cheat på 22 språk.',
		readMore: 'Läs guide',
		published: 'Publicerad',
		updated: 'Uppdaterad',
		relatedPosts: 'Relaterade Fortnite guider',
		allPosts: 'Alla inlägg',
		home: 'Fortnite Cheats hem',
		language: 'Språk',
	},
};
