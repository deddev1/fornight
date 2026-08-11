import { HERO_IMAGES, clampTitle, clampDesc, section, stripZadeyoFromMeta } from './constants.mjs';
import { phrases } from './phrases.mjs';

/** Page-specific translated meta for home across locales. */
const PAGE_META_HOME = {
	es: { title: 'Fortnite Cheats 2026 | ESP, Wallhack y Aimbot', desc: 'Trucos Fortnite indetectables para Fortnite en PC. ESP wallhack, radar hack y Aimbot con mantenimiento Easy Anti-Cheat. Entrega digital instantánea.', h1: 'Fortnite Cheats — ESP, Wallhack y Aimbot indetectables', intro: 'Paquete undetected para Fortnite en Windows PC: ESP wallhack, radar y Aimbot con mantenimiento Easy Anti-Cheat tras cada parche.', imageAlt: 'Fortnite ESP player tags hack', gallery: 'Galería Fortnite Cheats — ESP, Aimbot y wallhack', cta2: 'Ver funciones', h2a: 'Por qué eligen Fortnite Cheats en 2026', h2b: 'ESP wallhack, radar y Aimbot en una licencia', topicA: 'Ideal para leer escuadrones enemigos en BR y zero-build.', topicB: 'Una licencia en lugar de herramientas separadas.' },
	fr: { title: 'Fortnite Cheats 2026 | ESP, Wallhack et Aimbot', desc: 'Triches Fortnite indétectables pour Fortnite sur PC. ESP wallhack, radar hack et Aimbot avec maintenance Easy Anti-Cheat. Livraison numérique instantanée.', h1: 'Fortnite Cheats — ESP, Wallhack et Aimbot indétectables', intro: 'Pack undetected pour Fortnite sur PC Windows : ESP wallhack, radar et Aimbot avec maintenance Easy Anti-Cheat après chaque patch.', imageAlt: 'Fortnite ESP player tags hack', gallery: 'Galerie Fortnite Cheats — ESP, Aimbot et wallhack', cta2: 'Voir les fonctions', h2a: 'Pourquoi choisir Fortnite Cheats en 2026', h2b: 'ESP wallhack, radar et Aimbot en une licence', topicA: 'Parfait pour lire les escouades ennemies en BR et zero-build.', topicB: 'Une licence au lieu d\'outils séparés.' },
	de: { title: 'Fortnite Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Fortnite Cheats für Fortnite auf PC. ESP Wallhack, Radar Hack und Aimbot mit Easy Anti-Cheat-Wartung. Sofortige digitale Lieferung.', h1: 'Fortnite Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected Windows PC Paket für Fortnite: ESP Wallhack, Radar und Aimbot mit Easy Anti-Cheat-Wartung nach jedem Patch.', imageAlt: 'Fortnite ESP player tags hack', gallery: 'Fortnite Cheats Galerie — ESP, Aimbot und Wallhack', cta2: 'Features ansehen', h2a: 'Warum Fortnite Cheats 2026 führt', h2b: 'ESP Wallhack, Radar und Aimbot in einer Lizenz', topicA: 'Ideal um feindliche Squads in BR und zero-build zu lesen.', topicB: 'Eine Lizenz statt separater Tools.' },
	pt: { title: 'Fortnite Cheats 2026 | ESP, Wallhack e Aimbot', desc: 'Cheats Fortnite indetectáveis para Fortnite no PC. ESP wallhack, radar hack e Aimbot com manutenção Easy Anti-Cheat. Entrega digital instantánea.', h1: 'Fortnite Cheats — ESP, Wallhack e Aimbot indetectáveis', intro: 'Pacote undetected para Fortnite no Windows PC: ESP wallhack, radar e Aimbot com manutenção Easy Anti-Cheat após cada patch.', imageAlt: 'Fortnite ESP player tags hack', gallery: 'Galeria Fortnite Cheats — ESP, Aimbot e wallhack', cta2: 'Ver recursos', h2a: 'Por que escolher Fortnite Cheats em 2026', h2b: 'ESP wallhack, radar e Aimbot numa licença', topicA: 'Ideal para ler esquadrões inimigos em BR e zero-build.', topicB: 'Uma licença em vez de ferramentas separadas.' },
	it: { title: 'Fortnite Cheats 2026 | ESP, Wallhack e Aimbot', desc: 'Cheat Fortnite indetectable per Fortnite su PC. ESP wallhack, radar hack e Aimbot con manutenzione Easy Anti-Cheat. Consegna digitale istantanea.', h1: 'Fortnite Cheats — ESP, Wallhack e Aimbot indetectable', intro: 'Pacchetto undetected per Fortnite su PC Windows: ESP wallhack, radar e Aimbot con manutenzione Easy Anti-Cheat dopo ogni patch.', imageAlt: 'Fortnite ESP player tags hack', gallery: 'Galleria Fortnite Cheats — ESP, Aimbot e wallhack', cta2: 'Vedi funzioni', h2a: 'Perché scegliere Fortnite Cheats nel 2026', h2b: 'ESP wallhack, radar e Aimbot in una licenza', topicA: 'Ideale per leggere squadre nemiche in BR e zero-build.', topicB: 'Una licenza invece di tool separati.' },
	nl: { title: 'Fortnite Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Fortnite cheats voor Fortnite op PC. ESP wallhack, radar hack en Aimbot met Easy Anti-Cheat-onderhoud. Directe digitale levering.', h1: 'Fortnite Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected Windows PC pakket voor Fortnite: ESP wallhack, radar en Aimbot met Easy Anti-Cheat-onderhoud na elke patch.', imageAlt: 'Fortnite ESP player tags hack', gallery: 'Fortnite Cheats galerij — ESP, Aimbot en wallhack', cta2: 'Bekijk functies', h2a: 'Waarom Fortnite Cheats in 2026', h2b: 'ESP wallhack, radar en Aimbot in één licentie', topicA: 'Ideaal om vijandelijke squads te lezen in BR en zero-build.', topicB: 'Eén licentie in plaats van losse tools.' },
	pl: { title: 'Fortnite Cheats 2026 | ESP, Wallhack i Aimbot', desc: 'Undetected cheaty Fortnite dla Fortnite na PC. ESP wallhack, radar hack i Aimbot z konserwacją Easy Anti-Cheat. Natychmiastowa dostawa cyfrowa.', h1: 'Fortnite Cheats — Undetected ESP, Wallhack i Aimbot', intro: 'Pakiet undetected dla Fortnite na Windows PC: ESP wallhack, radar i Aimbot z konserwacją Easy Anti-Cheat po każdym patchu.', imageAlt: 'Fortnite ESP player tags hack', gallery: 'Galeria Fortnite Cheats — ESP, Aimbot i wallhack', cta2: 'Zobacz funkcje', h2a: 'Dlaczego Fortnite Cheats w 2026', h2b: 'ESP wallhack, radar i Aimbot w jednej licencji', topicA: 'Idealny do czytania wrogich squadów w BR i zero-build.', topicB: 'Jedna licencja zamiast osobnych narzędzi.' },
	ru: { title: 'Fortnite Cheats 2026 | ESP, Wallhack и Aimbot', desc: 'Undetected читы Fortnite для Fortnite на PC. ESP wallhack, radar hack и Aimbot с обслуживанием Easy Anti-Cheat. Мгновенная цифровая доставка.', h1: 'Fortnite Cheats — Undetected ESP, Wallhack и Aimbot', intro: 'Undetected пакет для Fortnite на Windows PC: ESP wallhack, radar и Aimbot с обслуживанием Easy Anti-Cheat после патчей.', imageAlt: 'Fortnite ESP player tags hack', gallery: 'Галерея Fortnite Cheats — ESP, Aimbot и wallhack', cta2: 'Смотреть функции', h2a: 'Почему выбирают Fortnite Cheats в 2026', h2b: 'ESP wallhack, radar и Aimbot в одной лицензии', topicA: 'Идеально для чтения вражеских отрядов в BR и zero-build.', topicB: 'Одна лицензия вместо отдельных инструментов.' },
	tr: { title: 'Fortnite Cheats 2026 | ESP, Wallhack ve Aimbot', desc: 'Fortnite için undetected hileler. ESP wallhack, radar hack ve Aimbot — Easy Anti-Cheat bakımı. Anında dijital teslimat.', h1: 'Fortnite Cheats — Undetected ESP, Wallhack ve Aimbot', intro: 'Fortnite Windows PC undetected paketi: ESP wallhack, radar ve Aimbot — Easy Anti-Cheat bakımı dahil.', imageAlt: 'Fortnite ESP player tags hack', gallery: 'Fortnite Cheats galeri — ESP, Aimbot ve wallhack', cta2: 'Özellikleri gör', h2a: '2026\'da neden Fortnite Cheats', h2b: 'ESP wallhack, radar ve Aimbot tek lisans', topicA: 'BR ve zero-build\'da düşman squad okumak için ideal.', topicB: 'Ayrı araçlar yerine tek lisans.' },
	ar: { title: 'Fortnite Cheats 2026 | ESP وWallhack وAimbot', desc: 'غش Fortnite undetected لـ Fortnite على PC. ESP wallhack ورadar hack وAimbot مع صيانة Easy Anti-Cheat. تسليم رقمي فوري.', h1: 'Fortnite Cheats — ESP وWallhack وAimbot غير مكتشف', intro: 'حزمة undetected لـ Fortnite على Windows PC: ESP wallhack ورadar وAimbot مع صيانة Easy Anti-Cheat.', imageAlt: 'Fortnite ESP player tags hack', gallery: 'معرض Fortnite Cheats — ESP وAimbot وwallhack', cta2: 'عرض الميزات', h2a: 'لماذا Fortnite Cheats في 2026', h2b: 'ESP wallhack ورadar وAimbot في ترخيص واحد', topicA: 'مثالي لقراءة فرق العدو في BR وzero-build.', topicB: 'ترخيص واحد بدلاً من أدوات منفصلة.' },
	ja: { title: 'Fortnite Cheats 2026 | ESP・Wallhack・Aimbot', desc: 'Fortnite向けundetectedチート。ESP wallhack、radar hack、Aimbot、Easy Anti-Cheatメンテナンス。即時デジタル配信。', h1: 'Fortnite Cheats — Undetected ESP・Wallhack・Aimbot', intro: 'Fortnite Windows PC向けundetectedパッケージ：ESP wallhack、radar、Aimbot、Easy Anti-Cheatメンテナンス付き。', imageAlt: 'Fortnite cheats hero ESP aimbot wallhack', gallery: 'Fortnite Cheatsギャラリー — ESP、Aimbot、wallhack', cta2: '機能を見る', h2a: '2026年にFortnite Cheatsを選ぶ理由', h2b: 'ESP wallhack、radar、Aimbotが1ライセンス', topicA: 'BRとzero-buildで敵スクワッドを読むのに最適。', topicB: '別ツールではなく1ライセンス。' },
	ko: { title: 'Fortnite Cheats 2026 | ESP, Wallhack, Aimbot', desc: 'Fortnite undetected 치트. ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat 유지보수. 즉시 디지털 배송.', h1: 'Fortnite Cheats — Undetected ESP, Wallhack, Aimbot', intro: 'Fortnite Windows PC undetected 패키지: ESP wallhack, radar, Aimbot, Easy Anti-Cheat 유지보수 포함.', imageAlt: 'Fortnite cheats hero ESP aimbot wallhack', gallery: 'Fortnite Cheats 갤러리 — ESP, Aimbot, wallhack', cta2: '기능 보기', h2a: '2026년 Fortnite Cheats를 선택하는 이유', h2b: 'ESP wallhack, radar, Aimbot 단일 라이선스', topicA: 'BR 및 zero-build에서 적 분대 읽기에 이상적.', topicB: '별도 도구 대신 단일 라이선스.' },
	zh: { title: 'Fortnite Cheats 2026 | ESP、Wallhack、Aimbot', desc: 'Fortnite undetected作弊。ESP wallhack、radar hack、Aimbot、Easy Anti-Cheat维护。即时数字交付。', h1: 'Fortnite Cheats — Undetected ESP、Wallhack、Aimbot', intro: 'Fortnite Windows PC undetected套餐：ESP wallhack、radar、Aimbot，含Easy Anti-Cheat维护。', imageAlt: 'Fortnite cheats hero ESP aimbot wallhack', gallery: 'Fortnite Cheats图库 — ESP、Aimbot、wallhack', cta2: '查看功能', h2a: '2026年选择Fortnite Cheats的原因', h2b: 'ESP wallhack、radar、Aimbot单一许可证', topicA: '适合在BR和zero-build中读取敌方小队。', topicB: '一个许可证而非多个工具。' },
	hi: { title: 'Fortnite Cheats 2026 | ESP, Wallhack और Aimbot', desc: 'Fortnite undetected cheats. ESP wallhack, radar hack, Aimbot, EAC maintenance. Instant digital delivery.', h1: 'Fortnite Cheats — Undetected ESP, Wallhack और Aimbot', intro: 'Fortnite Windows PC undetected पैकेज: ESP wallhack, radar, Aimbot, EAC maintenance सहित.', imageAlt: 'Fortnite cheats hero ESP aimbot wallhack', gallery: 'Fortnite Cheats gallery — ESP, Aimbot, wallhack', cta2: 'फ़ीचर्स देखें', h2a: '2026 में Fortnite Cheats क्यों', h2b: 'ESP wallhack, radar, Aimbot एक लाइसेंस में', topicA: 'BR और zero-build में दुश्मन squad पढ़ने के लिए आदर्श.', topicB: 'अलग टूल्स के बजाय एक लाइसेंस.' },
	id: { title: 'Fortnite Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat Fortnite undetected untuk Fortnite di PC. ESP wallhack, radar hack, Aimbot, pemeliharaan Easy Anti-Cheat. Pengiriman digital instan.', h1: 'Fortnite Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Paket undetected Fortnite di Windows PC: ESP wallhack, radar, Aimbot dengan pemeliharaan Easy Anti-Cheat.', imageAlt: 'Fortnite ESP player tags hack', gallery: 'Galeri Fortnite Cheats — ESP, Aimbot, wallhack', cta2: 'Lihat fitur', h2a: 'Mengapa Fortnite Cheats di 2026', h2b: 'ESP wallhack, radar, Aimbot dalam satu lisensi', topicA: 'Ideal membaca squad musuh di BR dan zero-build.', topicB: 'Satu lisensi alih-alih alat terpisah.' },
	th: { title: 'Fortnite Cheats 2026 | ESP, Wallhack และ Aimbot', desc: 'Cheat Fortnite undetected สำหรับ Fortnite บน PC. ESP wallhack, radar hack, Aimbot, EAC maintenance. จัดส่งดิจิทัลทันที.', h1: 'Fortnite Cheats — Undetected ESP, Wallhack และ Aimbot', intro: 'แพ็ก undetected สำหรับ Fortnite บน Windows PC: ESP wallhack, radar, Aimbot พร้อม EAC maintenance', imageAlt: 'Fortnite ESP player tags hack', gallery: 'แกลเลอรี Fortnite Cheats — ESP, Aimbot, wallhack', cta2: 'ดูฟีเจอร์', h2a: 'ทำไมเลือก Fortnite Cheats ปี 2026', h2b: 'ESP wallhack, radar, Aimbot ในใบอนุญาตเดียว', topicA: 'เหมาะสำหรับอ่าน squad ศัตรูใน BR และ zero-build', topicB: 'ใบอนุญาตเดียวแทนเครื่องมือแยก' },
	vi: { title: 'Fortnite Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat Fortnite undetected cho Fortnite trên PC. ESP wallhack, radar hack, Aimbot, bảo trì Easy Anti-Cheat. Giao hàng kỹ thuật số tức thì.', h1: 'Fortnite Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Gói undetected Fortnite trên Windows PC: ESP wallhack, radar, Aimbot với bảo trì Easy Anti-Cheat.', imageAlt: 'Fortnite ESP player tags hack', gallery: 'Thư viện Fortnite Cheats — ESP, Aimbot, wallhack', cta2: 'Xem tính năng', h2a: 'Vì sao chọn Fortnite Cheats 2026', h2b: 'ESP wallhack, radar, Aimbot trong một giấy phép', topicA: 'Lý tưởng đọc squad địch trong BR và zero-build.', topicB: 'Một giấy phép thay vì công cụ riêng.' },
	uk: { title: 'Fortnite Cheats 2026 | ESP, Wallhack і Aimbot', desc: 'Undetected чіти Fortnite для Fortnite на PC. ESP wallhack, radar hack, Aimbot, обслуговування Easy Anti-Cheat. Мгновенная цифровая доставка.', h1: 'Fortnite Cheats — Undetected ESP, Wallhack і Aimbot', intro: 'Undetected пакет для Fortnite на Windows PC: ESP wallhack, radar, Aimbot з обслуговуванням Easy Anti-Cheat.', imageAlt: 'Fortnite ESP player tags hack', gallery: 'Галерея Fortnite Cheats — ESP, Aimbot, wallhack', cta2: 'Дивитися функції', h2a: 'Чому Fortnite Cheats у 2026', h2b: 'ESP wallhack, radar і Aimbot в одній ліцензії', topicA: 'Ідеально для читання ворожих загонів у BR і zero-build.', topicB: 'Одна ліцензія замість окремих інструментів.' },
	cs: { title: 'Fortnite Cheats 2026 | ESP, Wallhack a Aimbot', desc: 'Undetected Fortnite cheaty pro Fortnite na PC. ESP wallhack, radar hack, Aimbot, údržba Easy Anti-Cheat. Okamžité digitální doručení.', h1: 'Fortnite Cheats — Undetected ESP, Wallhack a Aimbot', intro: 'Undetected balíček pro Fortnite na Windows PC: ESP wallhack, radar, Aimbot s údržbou Easy Anti-Cheat.', imageAlt: 'Fortnite ESP player tags hack', gallery: 'Galerie Fortnite Cheats — ESP, Aimbot, wallhack', cta2: 'Zobrazit funkce', h2a: 'Proč Fortnite Cheats v roce 2026', h2b: 'ESP wallhack, radar a Aimbot v jedné licenci', topicA: 'Ideální pro čtení nepřátelských squadů v BR a zero-build.', topicB: 'Jedna licence místo samostatných nástrojů.' },
	ro: { title: 'Fortnite Cheats 2026 | ESP, Wallhack și Aimbot', desc: 'Cheats Fortnite undetected pentru Fortnite pe PC. ESP wallhack, radar hack, Aimbot, mentenanță Easy Anti-Cheat. Livrare digitală instantă.', h1: 'Fortnite Cheats — Undetected ESP, Wallhack și Aimbot', intro: 'Pachet undetected Fortnite pe Windows PC: ESP wallhack, radar, Aimbot cu mentenanță Easy Anti-Cheat.', imageAlt: 'Fortnite ESP player tags hack', gallery: 'Galerie Fortnite Cheats — ESP, Aimbot, wallhack', cta2: 'Vezi funcții', h2a: 'De ce Fortnite Cheats în 2026', h2b: 'ESP wallhack, radar și Aimbot într-o licență', topicA: 'Ideal pentru citirea squad-urilor inamice în BR și zero-build.', topicB: 'O licență în loc de instrumente separate.' },
	sv: { title: 'Fortnite Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Fortnite cheats för Fortnite på PC. ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat-underhåll. Omedelbar digital leverans.', h1: 'Fortnite Cheats — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected paket för Fortnite på Windows PC: ESP wallhack, radar, Aimbot med Easy Anti-Cheat-underhåll.', imageAlt: 'Fortnite ESP player tags hack', gallery: 'Fortnite Cheats galleri — ESP, Aimbot, wallhack', cta2: 'Se funktioner', h2a: 'Varför Fortnite Cheats 2026', h2b: 'ESP wallhack, radar och Aimbot i en licens', topicA: 'Ideal för att läsa fiendesquads i BR och zero-build.', topicB: 'En licens istället för separata verktyg.' },
};

function buildHome(locale) {
	const p = phrases[locale];
	const m = PAGE_META_HOME[locale];
	return {
		title: clampTitle(stripZadeyoFromMeta(m.title)),
		description: clampDesc(stripZadeyoFromMeta(m.desc)),
		h1: m.h1,
		intro: m.intro,
		imageAlt: m.imageAlt,
		galleryTitle: m.gallery,
		heroImage: HERO_IMAGES.home,
		ctaPrimary: p.buy,
		ctaSecondary: m.cta2,
		ctaSecondaryHref: '/features/',
		sections: [
			section(m.h2a, p.s1(m.topicA), p.s2()),
			section(m.h2b, p.s1(m.topicB), p.s3()),
		],
	};
}

/** Unique title/desc tails per page — English base + locale overrides for hero H1/subtitle. */
const PAGE_META_TAILS = {
	'fortnite-esp': { suffix: 'Player Boxes & Wallhack', focus: 'player boxes, chest markers, and wallhack overlays', altKeyword: 'ESP wallhack overlay' },
	'fortnite-aimbot': { suffix: 'Soft Aim Controls', focus: 'soft aim, FOV, and per-weapon Aimbot profiles', altKeyword: 'aimbot combat' },
	features: { suffix: 'Full Feature List', focus: 'ESP, soft aim, radar controls', altKeyword: 'cheats package ESP aimbot' },
	pricing: { suffix: 'Monthly & Lifetime', focus: '$35 monthly or $150 lifetime licenses', altKeyword: 'cheats pricing' },
	setup: { suffix: 'PC Setup Guide', focus: 'Windows PC activation and first-launch setup', altKeyword: 'setup PC activation' },
	updates: { suffix: 'Easy Anti-Cheat Maintenance Log', focus: 'EAC patch status and rebuild notes', altKeyword: 'updates EAC maintenance' },
	faq: { suffix: 'Common Answers', focus: 'ESP, soft aim, delivery, and Easy Anti-Cheat questions', altKeyword: 'FAQ ESP aimbot' },
	support: { suffix: 'Help & Contact', focus: 'order help and license support contact', altKeyword: 'support license help' },
	undetected: { suffix: 'Easy Anti-Cheat Safe Status', focus: 'undetected maintenance after Easy Anti-Cheat patches', altKeyword: 'undetected cheats ESP' },
	wallhack: { suffix: 'ESP Visibility', focus: 'wallhack ESP for players, loot, and distance', altKeyword: 'wallhack ESP visibility' },
	radar: { suffix: '2D Threat Overlay', focus: '2D radar cues for flanks and rotations', altKeyword: 'radar hack overlay' },
	'eac-bypass': { suffix: 'Patch Maintenance', focus: 'how EAC updates are handled for Fortnite hacks', altKeyword: 'EAC bypass ESP aimbot' },
	'cheats-2026': { suffix: 'Buyer Guide', focus: '2026 Fortnite cheats checklist before checkout', altKeyword: 'cheats 2026 ESP aimbot' },
	hacks: { suffix: 'ESP Aimbot Guide', focus: 'the Fortnite hacks pillar for ESP and Aimbot', altKeyword: 'hacks ESP aimbot' },
	'cheat-download': { suffix: 'Instant Access', focus: 'digital license download after payment', altKeyword: 'cheat download ESP aimbot' },
	'mod-menu': { suffix: 'In-Game Toggles', focus: 'in-client ESP and soft aim toggles', altKeyword: 'mod menu ESP aimbot' },
	'soft-aim': { suffix: 'Smooth Aim Settings', focus: 'smooth soft aim settings for Windows PC', altKeyword: 'soft aim aimbot' },
	'best-cheats': { suffix: 'Buyer Checklist', focus: 'what to compare before buying Fortnite cheats', altKeyword: 'best cheats ESP aimbot' },
	'aimbot-hack': { suffix: 'Soft Aim Assist', focus: 'undetected Aimbot hack assist for Fortnite', altKeyword: 'aimbot hack combat' },
	'esp-hack': { suffix: 'Boxes & Loot', focus: 'ESP hack boxes, loot pins, and distance', altKeyword: 'ESP hack wallhack' },
	'unlock-all': { suffix: 'What It Means', focus: 'unlock-all searches vs real ESP and Aimbot tools', altKeyword: 'unlock all ESP aimbot' },
};

/** Localized H1 suffixes (title/subtitle language change on product pages). */
const SUFFIX_I18N = {
	es: {
		'fortnite-esp': 'Cajas de jugador y wallhack',
		'fortnite-aimbot': 'Controles soft aim',
		features: 'Lista completa de funciones',
		pricing: 'Mensual y de por vida',
		setup: 'Guía de instalación PC',
		updates: 'Registro Easy Anti-Cheat',
		faq: 'Preguntas frecuentes',
		support: 'Ayuda y contacto',
		undetected: 'Estado indetectable',
		wallhack: 'Visibilidad ESP',
		radar: 'Radar 2D de amenazas',
		'eac-bypass': 'Mantenimiento de parches',
		'cheats-2026': 'Guía del comprador',
		hacks: 'Guía ESP y Aimbot',
		'cheat-download': 'Acceso instantáneo',
		'mod-menu': 'Controles en partida',
		'soft-aim': 'Ajustes soft aim',
		'best-cheats': 'Lista de compra',
		'aimbot-hack': 'Asistencia soft aim',
		'esp-hack': 'Cajas y loot',
		'unlock-all': 'Qué significa',
	},
	fr: {
		'fortnite-esp': 'Boîtes joueur et wallhack',
		'fortnite-aimbot': 'Contrôles soft aim',
		features: 'Liste complète des fonctions',
		pricing: 'Mensuel et à vie',
		setup: 'Guide d\'installation PC',
		updates: 'Journal Easy Anti-Cheat',
		faq: 'Questions fréquentes',
		support: 'Aide et contact',
		undetected: 'Statut indétectable',
		wallhack: 'Visibilité ESP',
		radar: 'Radar 2D des menaces',
		'eac-bypass': 'Maintenance des patchs',
		'cheats-2026': 'Guide acheteur',
		hacks: 'Guide ESP et Aimbot',
		'cheat-download': 'Accès instantané',
		'mod-menu': 'Contrôles en jeu',
		'soft-aim': 'Réglages soft aim',
		'best-cheats': 'Checklist acheteur',
		'aimbot-hack': 'Assistance soft aim',
		'esp-hack': 'Boîtes et loot',
		'unlock-all': 'Ce que ça signifie',
	},
	de: {
		'fortnite-esp': 'Spielerboxen & Wallhack',
		'fortnite-aimbot': 'Soft-Aim Steuerung',
		features: 'Vollständige Feature-Liste',
		pricing: 'Monatlich & Lifetime',
		setup: 'PC Setup-Anleitung',
		updates: 'Easy Anti-Cheat Wartungslog',
		faq: 'Häufige Fragen',
		support: 'Hilfe & Kontakt',
		undetected: 'Undetected Status',
		wallhack: 'ESP Sichtbarkeit',
		radar: '2D Bedrohungsradar',
		'eac-bypass': 'Patch-Wartung',
		'cheats-2026': 'Käuferleitfaden',
		hacks: 'ESP Aimbot Guide',
		'cheat-download': 'Sofortzugang',
		'mod-menu': 'In-Game Toggles',
		'soft-aim': 'Soft-Aim Einstellungen',
		'best-cheats': 'Käufer-Checkliste',
		'aimbot-hack': 'Soft-Aim Assist',
		'esp-hack': 'Boxen & Loot',
		'unlock-all': 'Was es bedeutet',
	},
	pt: {
		'fortnite-esp': 'Caixas de jogador e wallhack',
		'fortnite-aimbot': 'Controles soft aim',
		features: 'Lista completa de recursos',
		pricing: 'Mensal e vitalício',
		setup: 'Guia de instalação PC',
		updates: 'Registro Easy Anti-Cheat',
		faq: 'Perguntas frequentes',
		support: 'Ajuda e contato',
		undetected: 'Status indetectável',
		wallhack: 'Visibilidade ESP',
		radar: 'Radar 2D de ameaças',
		'eac-bypass': 'Manutenção de patches',
		'cheats-2026': 'Guia do comprador',
		hacks: 'Guia ESP e Aimbot',
		'cheat-download': 'Acesso instantâneo',
		'mod-menu': 'Controles in-game',
		'soft-aim': 'Ajustes soft aim',
		'best-cheats': 'Checklist do comprador',
		'aimbot-hack': 'Assistência soft aim',
		'esp-hack': 'Caixas e loot',
		'unlock-all': 'O que significa',
	},
	it: {
		'fortnite-esp': 'Box giocatore e wallhack',
		'fortnite-aimbot': 'Controlli soft aim',
		features: 'Elenco completo funzioni',
		pricing: 'Mensile e lifetime',
		setup: 'Guida setup PC',
		updates: 'Log manutenzione Easy Anti-Cheat',
		faq: 'Domande frequenti',
		support: 'Aiuto e contatto',
		undetected: 'Stato indetectable',
		wallhack: 'Visibilità ESP',
		radar: 'Radar 2D minacce',
		'eac-bypass': 'Manutenzione patch',
		'cheats-2026': 'Guida acquirente',
		hacks: 'Guida ESP e Aimbot',
		'cheat-download': 'Accesso istantaneo',
		'mod-menu': 'Toggle in-game',
		'soft-aim': 'Impostazioni soft aim',
		'best-cheats': 'Checklist acquirente',
		'aimbot-hack': 'Assist soft aim',
		'esp-hack': 'Box e loot',
		'unlock-all': 'Cosa significa',
	},
	ru: {
		'fortnite-esp': 'Боксы игроков и wallhack',
		'fortnite-aimbot': 'Управление soft aim',
		features: 'Полный список функций',
		pricing: 'Месяц и lifetime',
		setup: 'Гайд по установке',
		updates: 'Журнал Easy Anti-Cheat',
		faq: 'Частые вопросы',
		support: 'Помощь и контакт',
		undetected: 'Статус undetected',
		wallhack: 'Видимость ESP',
		radar: '2D радар угроз',
		'eac-bypass': 'Обслуживание патчей',
		'cheats-2026': 'Гайд покупателя',
		hacks: 'Гайд ESP и Aimbot',
		'cheat-download': 'Мгновенный доступ',
		'mod-menu': 'Игровые переключатели',
		'soft-aim': 'Настройки soft aim',
		'best-cheats': 'Чеклист покупателя',
		'aimbot-hack': 'Soft aim ассист',
		'esp-hack': 'Боксы и лут',
		'unlock-all': 'Что это значит',
	},
};

function productPage(locale, pageKey, topicName, cta2href) {
	const p = phrases[locale];
	const home = PAGE_META_HOME[locale];
	const meta = PAGE_META_TAILS[pageKey] ?? { suffix: 'Fortnite Cheats', focus: 'ESP wallhack, radar, and Aimbot', altKeyword: 'ESP aimbot wallhack' };
	const suffix = SUFFIX_I18N[locale]?.[pageKey] ?? meta.suffix;
	let titleBase = topicName.includes('2026')
		? `${topicName} | ${suffix}`
		: `${topicName} 2026 | ${suffix}`;
	// Short topic labels (FAQ, Support, etc.) need brand context for usable SERP titles.
	if (titleBase.length < 35) {
		titleBase = `${topicName} 2026 | Fortnite Cheats ${suffix}`;
	}
	return {
		title: clampTitle(stripZadeyoFromMeta(titleBase)),
		description: clampDesc(
			stripZadeyoFromMeta(
				`${topicName}: ${meta.focus} for Fortnite. ${p.delivery}. EAC maintenance included.`,
			),
		),
		h1: `${topicName} — ${suffix}`,
		intro: p.s1(`${topicName} for ${p.maps}: ${meta.focus}.`),
		imageAlt: 'fortnite cheats',
		galleryTitle: 'fortnite cheats',
		heroImage: HERO_IMAGES[pageKey],
		ctaPrimary: p.buy,
		ctaSecondary: home.cta2,
		ctaSecondaryHref: cta2href,
		sections: [
			section(`${topicName} — ${p.maps}`, p.s1(`Read enemy squads with ESP wallhack.`), p.s2()),
			section(`ESP wallhack & ${p.undetected}`, p.s1('Toggle overlays for Battle Royale and Zero Build.'), p.s3()),
			section(`${p.delivery}`, p.s2(), p.s3()),
		],
	};
}

const TOPIC_NAMES = {
	'fortnite-esp': { en: 'Fortnite ESP', es: 'ESP Fortnite', fr: 'ESP Fortnite', de: 'Fortnite ESP', pt: 'ESP Fortnite', it: 'ESP Fortnite', nl: 'Fortnite ESP', pl: 'ESP Fortnite', ru: 'ESP Fortnite', tr: 'Fortnite ESP', ar: 'ESP Fortnite', ja: 'Fortnite ESP', ko: 'Fortnite ESP', zh: 'Fortnite ESP', hi: 'Fortnite ESP', id: 'ESP Fortnite', th: 'Fortnite ESP', vi: 'ESP Fortnite', uk: 'ESP Fortnite', cs: 'Fortnite ESP', ro: 'ESP Fortnite', sv: 'Fortnite ESP' },
	'fortnite-aimbot': { en: 'Fortnite Aimbot', es: 'Aimbot Fortnite', fr: 'Aimbot Fortnite', de: 'Fortnite Aimbot', pt: 'Aimbot Fortnite', it: 'Aimbot Fortnite', nl: 'Fortnite Aimbot', pl: 'Aimbot Fortnite', ru: 'Aimbot Fortnite', tr: 'Fortnite Aimbot', ar: 'Aimbot Fortnite', ja: 'Fortnite Aimbot', ko: 'Fortnite Aimbot', zh: 'Fortnite Aimbot', hi: 'Fortnite Aimbot', id: 'Aimbot Fortnite', th: 'Fortnite Aimbot', vi: 'Aimbot Fortnite', uk: 'Aimbot Fortnite', cs: 'Fortnite Aimbot', ro: 'Aimbot Fortnite', sv: 'Fortnite Aimbot' },
	features: { en: 'Features', es: 'Funciones', fr: 'Fonctions', de: 'Features', pt: 'Recursos', it: 'Funzioni', nl: 'Functies', pl: 'Funkcje', ru: 'Функции', tr: 'Özellikler', ar: 'الميزات', ja: '機能', ko: '기능', zh: '功能', hi: 'फ़ीचर्स', id: 'Fitur', th: 'ฟีเจอร์', vi: 'Tính năng', uk: 'Функції', cs: 'Funkce', ro: 'Funcții', sv: 'Funktioner' },
	pricing: { en: 'Pricing', es: 'Precios', fr: 'Tarifs', de: 'Preise', pt: 'Preços', it: 'Prezzi', nl: 'Prijzen', pl: 'Cennik', ru: 'Цены', tr: 'Fiyatlar', ar: 'الأسعار', ja: '料金', ko: '가격', zh: '价格', hi: 'कीमत', id: 'Harga', th: 'ราคา', vi: 'Giá', uk: 'Ціни', cs: 'Ceny', ro: 'Prețuri', sv: 'Priser' },
	setup: { en: 'Setup', es: 'Instalación', fr: 'Installation', de: 'Setup', pt: 'Instalação', it: 'Setup', nl: 'Setup', pl: 'Instalacja', ru: 'Установка', tr: 'Kurulum', ar: 'التثبيت', ja: 'セットアップ', ko: '설치', zh: '安装', hi: 'सेटअप', id: 'Setup', th: 'ติดตั้ง', vi: 'Cài đặt', uk: 'Встановлення', cs: 'Instalace', ro: 'Instalare', sv: 'Installation' },
	updates: { en: 'Updates', es: 'Actualizaciones', fr: 'Mises à jour', de: 'Updates', pt: 'Atualizações', it: 'Aggiornamenti', nl: 'Updates', pl: 'Aktualizacje', ru: 'Обновления', tr: 'Güncellemeler', ar: 'التحديثات', ja: '更新', ko: '업데이트', zh: '更新', hi: 'अपडेट', id: 'Pembaruan', th: 'อัปเดต', vi: 'Cập nhật', uk: 'Оновлення', cs: 'Aktualizace', ro: 'Actualizări', sv: 'Uppdateringar' },
	faq: { en: 'FAQ', es: 'FAQ', fr: 'FAQ', de: 'FAQ', pt: 'FAQ', it: 'FAQ', nl: 'FAQ', pl: 'FAQ', ru: 'FAQ', tr: 'SSS', ar: 'الأسئلة', ja: 'FAQ', ko: 'FAQ', zh: '常见问题', hi: 'FAQ', id: 'FAQ', th: 'FAQ', vi: 'FAQ', uk: 'FAQ', cs: 'FAQ', ro: 'FAQ', sv: 'FAQ' },
	support: { en: 'Support', es: 'Soporte', fr: 'Support', de: 'Support', pt: 'Suporte', it: 'Supporto', nl: 'Support', pl: 'Wsparcie', ru: 'Поддержка', tr: 'Destek', ar: 'الدعم', ja: 'サポート', ko: '지원', zh: '支持', hi: 'सहायता', id: 'Dukungan', th: 'สนับสนุน', vi: 'Hỗ trợ', uk: 'Підтримка', cs: 'Podpora', ro: 'Suport', sv: 'Support' },
	undetected: { en: 'Undetected Cheats', es: 'Trucos indetectables', fr: 'Triches indétectables', de: 'Undetected Cheats', pt: 'Cheats indetectáveis', it: 'Cheat indetectable', nl: 'Undetected Cheats', pl: 'Cheaty undetected', ru: 'Undetected читы', tr: 'Undetected hileler', ar: 'غش undetected', ja: 'Undetectedチート', ko: 'Undetected 치트', zh: 'Undetected作弊', hi: 'Undetected cheats', id: 'Cheat undetected', th: 'Cheats undetected', vi: 'Cheat undetected', uk: 'Undetected чіти', cs: 'Undetected cheaty', ro: 'Cheats undetected', sv: 'Undetected cheats' },
	wallhack: { en: 'Fortnite Wallhack', es: 'Wallhack Fortnite', fr: 'Wallhack Fortnite', de: 'Fortnite Wallhack', pt: 'Wallhack Fortnite', it: 'Wallhack Fortnite', nl: 'Fortnite Wallhack', pl: 'Wallhack Fortnite', ru: 'Wallhack Fortnite', tr: 'Fortnite Wallhack', ar: 'Wallhack Fortnite', ja: 'Fortnite Wallhack', ko: 'Fortnite Wallhack', zh: 'Fortnite Wallhack', hi: 'Fortnite Wallhack', id: 'Wallhack Fortnite', th: 'Fortnite Wallhack', vi: 'Wallhack Fortnite', uk: 'Wallhack Fortnite', cs: 'Fortnite Wallhack', ro: 'Wallhack Fortnite', sv: 'Fortnite Wallhack' },
	radar: { en: 'Radar Hack', es: 'Radar hack', fr: 'Radar hack', de: 'Radar Hack', pt: 'Radar hack', it: 'Radar hack', nl: 'Radar Hack', pl: 'Radar hack', ru: 'Radar hack', tr: 'Radar hack', ar: 'Radar hack', ja: 'Radar Hack', ko: 'Radar Hack', zh: 'Radar Hack', hi: 'Radar Hack', id: 'Radar hack', th: 'Radar Hack', vi: 'Radar hack', uk: 'Radar hack', cs: 'Radar Hack', ro: 'Radar hack', sv: 'Radar Hack' },
	'eac-bypass': { en: 'EAC Bypass', es: 'Bypass Easy Anti-Cheat', fr: 'Bypass Easy Anti-Cheat', de: 'EAC Bypass', pt: 'Bypass Easy Anti-Cheat', it: 'Bypass Easy Anti-Cheat', nl: 'EAC Bypass', pl: 'Bypass Easy Anti-Cheat', ru: 'Bypass Easy Anti-Cheat', tr: 'EAC bypass', ar: 'Bypass Easy Anti-Cheat', ja: 'EAC Bypass', ko: 'EAC Bypass', zh: 'EAC Bypass', hi: 'EAC Bypass', id: 'Bypass Easy Anti-Cheat', th: 'EAC Bypass', vi: 'Bypass Easy Anti-Cheat', uk: 'Bypass Easy Anti-Cheat', cs: 'EAC Bypass', ro: 'Bypass Easy Anti-Cheat', sv: 'EAC Bypass' },
	'cheats-2026': { en: 'Fortnite Cheats 2026', es: 'Trucos Fortnite 2026', fr: 'Triches Fortnite 2026', de: 'Fortnite Cheats 2026', pt: 'Cheats Fortnite 2026', it: 'Cheat Fortnite 2026', nl: 'Fortnite Cheats 2026', pl: 'Cheaty Fortnite 2026', ru: 'Читы Fortnite 2026', tr: 'Fortnite Hileleri 2026', ar: 'غش Fortnite 2026', ja: 'Fortnite Cheats 2026', ko: 'Fortnite Cheats 2026', zh: 'Fortnite作弊 2026', hi: 'Fortnite Cheats 2026', id: 'Cheat Fortnite 2026', th: 'Fortnite Cheats 2026', vi: 'Cheat Fortnite 2026', uk: 'Чіти Fortnite 2026', cs: 'Fortnite cheaty 2026', ro: 'Cheats Fortnite 2026', sv: 'Fortnite Cheats 2026' },
	hacks: { en: 'Fortnite Cheats', es: 'Trucos Fortnite', fr: 'Triches Fortnite', de: 'Fortnite Cheats', pt: 'Cheats Fortnite', it: 'Cheat Fortnite', nl: 'Fortnite Cheats', pl: 'Cheaty Fortnite', ru: 'Читы Fortnite', tr: 'Fortnite Hileleri', ar: 'غش Fortnite', ja: 'Fortnite Cheats', ko: 'Fortnite Cheats', zh: 'Fortnite作弊', hi: 'Fortnite Cheats', id: 'Cheat Fortnite', th: 'Fortnite Cheats', vi: 'Cheat Fortnite', uk: 'Чіти Fortnite', cs: 'Fortnite cheaty', ro: 'Cheats Fortnite', sv: 'Fortnite Cheats' },
	'cheat-download': { en: 'Fortnite Cheat Download', es: 'Descarga Fortnite Cheats', fr: 'Téléchargement Fortnite Cheats', de: 'Fortnite Cheat Download', pt: 'Download Fortnite Cheats', it: 'Download Fortnite Cheats', nl: 'Fortnite Cheat Download', pl: 'Pobieranie Fortnite Cheats', ru: 'Скачать Fortnite Cheats', tr: 'Fortnite Hile İndir', ar: 'تحميل Fortnite Cheats', ja: 'Fortnite Cheat Download', ko: 'Fortnite Cheat Download', zh: 'Fortnite作弊下载', hi: 'Fortnite Cheat Download', id: 'Download Cheat Fortnite', th: 'ดาวน์โหลด Fortnite Cheats', vi: 'Tải Cheat Fortnite', uk: 'Завантаження Fortnite Cheats', cs: 'Stáhnout Fortnite Cheats', ro: 'Descărcare Fortnite Cheats', sv: 'Fortnite Cheat Download' },
	'mod-menu': { en: 'Fortnite Mod Menu', es: 'Menú mod Fortnite', fr: 'Menu mod Fortnite', de: 'Fortnite Mod-Menü', pt: 'Menu mod Fortnite', it: 'Mod menu Fortnite', nl: 'Fortnite Mod Menu', pl: 'Mod menu Fortnite', ru: 'Мод-меню Fortnite', tr: 'Fortnite Mod Menü', ar: 'قائمة مود Fortnite', ja: 'Fortnite Mod Menu', ko: 'Fortnite 모드 메뉴', zh: 'Fortnite修改菜单', hi: 'Fortnite Mod Menu', id: 'Menu mod Fortnite', th: 'เมนูมอด Fortnite', vi: 'Mod menu Fortnite', uk: 'Мод-меню Fortnite', cs: 'Fortnite mod menu', ro: 'Meniu mod Fortnite', sv: 'Fortnite Mod-meny' },
	'soft-aim': { en: 'Fortnite Soft Aim', es: 'Soft aim Fortnite', fr: 'Soft aim Fortnite', de: 'Fortnite Soft Aim', pt: 'Soft aim Fortnite', it: 'Soft aim Fortnite', nl: 'Fortnite Soft Aim', pl: 'Soft aim Fortnite', ru: 'Soft aim Fortnite', tr: 'Fortnite Soft Aim', ar: 'Soft aim Fortnite', ja: 'Fortnite Soft Aim', ko: 'Fortnite Soft Aim', zh: 'Fortnite Soft Aim', hi: 'Fortnite Soft Aim', id: 'Soft aim Fortnite', th: 'Fortnite Soft Aim', vi: 'Soft aim Fortnite', uk: 'Soft aim Fortnite', cs: 'Fortnite Soft Aim', ro: 'Soft aim Fortnite', sv: 'Fortnite Soft Aim' },
	'best-cheats': { en: 'Best Fortnite Cheats', es: 'Mejores trucos Fortnite', fr: 'Meilleures triches Fortnite', de: 'Beste Fortnite Cheats', pt: 'Melhores cheats Fortnite', it: 'Migliori cheat Fortnite', nl: 'Beste Fortnite Cheats', pl: 'Najlepsze cheaty Fortnite', ru: 'Лучшие читы Fortnite', tr: 'En İyi Fortnite Hileleri', ar: 'أفضل غش Fortnite', ja: '最強Fortniteチート', ko: '최고의 Fortnite 치트', zh: '最佳Fortnite作弊', hi: 'सर्वश्रेष्ठ Fortnite Cheats', id: 'Cheat Fortnite terbaik', th: 'Cheat Fortnite ที่ดีที่สุด', vi: 'Cheat Fortnite tốt nhất', uk: 'Найкращі чіти Fortnite', cs: 'Nejlepší Fortnite cheaty', ro: 'Cele mai bune cheats Fortnite', sv: 'Bästa Fortnite Cheats' },
	'aimbot-hack': { en: 'Fortnite Aimbot Hack', es: 'Hack aimbot Fortnite', fr: 'Hack aimbot Fortnite', de: 'Fortnite Aimbot Hack', pt: 'Hack aimbot Fortnite', it: 'Hack aimbot Fortnite', nl: 'Fortnite Aimbot Hack', pl: 'Hack aimbot Fortnite', ru: 'Хак aimbot Fortnite', tr: 'Fortnite Aimbot Hilesi', ar: 'هاك Aimbot Fortnite', ja: 'Fortnite Aimbot Hack', ko: 'Fortnite 에임봇 핵', zh: 'Fortnite自瞄外挂', hi: 'Fortnite Aimbot Hack', id: 'Hack aimbot Fortnite', th: 'Hack Aimbot Fortnite', vi: 'Hack aimbot Fortnite', uk: 'Хак aimbot Fortnite', cs: 'Fortnite aimbot hack', ro: 'Hack aimbot Fortnite', sv: 'Fortnite Aimbot Hack' },
	'esp-hack': { en: 'Fortnite ESP Hack', es: 'Hack ESP Fortnite', fr: 'Hack ESP Fortnite', de: 'Fortnite ESP Hack', pt: 'Hack ESP Fortnite', it: 'Hack ESP Fortnite', nl: 'Fortnite ESP Hack', pl: 'Hack ESP Fortnite', ru: 'Хак ESP Fortnite', tr: 'Fortnite ESP Hilesi', ar: 'هاك ESP Fortnite', ja: 'Fortnite ESP Hack', ko: 'Fortnite ESP 핵', zh: 'Fortnite ESP外挂', hi: 'Fortnite ESP Hack', id: 'Hack ESP Fortnite', th: 'Hack ESP Fortnite', vi: 'Hack ESP Fortnite', uk: 'Хак ESP Fortnite', cs: 'Fortnite ESP hack', ro: 'Hack ESP Fortnite', sv: 'Fortnite ESP Hack' },
	'unlock-all': { en: 'Fortnite Unlock All', es: 'Unlock all Fortnite', fr: 'Unlock all Fortnite', de: 'Fortnite Unlock All', pt: 'Unlock all Fortnite', it: 'Unlock all Fortnite', nl: 'Fortnite Unlock All', pl: 'Unlock all Fortnite', ru: 'Unlock all Fortnite', tr: 'Fortnite Unlock All', ar: 'Unlock all Fortnite', ja: 'Fortnite Unlock All', ko: 'Fortnite Unlock All', zh: 'Fortnite Unlock All', hi: 'Fortnite Unlock All', id: 'Unlock all Fortnite', th: 'Fortnite Unlock All', vi: 'Unlock all Fortnite', uk: 'Unlock all Fortnite', cs: 'Fortnite Unlock All', ro: 'Unlock all Fortnite', sv: 'Fortnite Unlock All' },
};

const CTA2_HREF = {
	'fortnite-esp': '/fortnite-wallhack/',
	'fortnite-aimbot': '/fortnite-esp/',
	features: '/pricing/',
	pricing: '/setup/',
	setup: '/support/',
	updates: '/undetected-fortnite-cheats/',
	faq: '/support/',
	support: '/setup/',
	undetected: '/eac-bypass/',
	wallhack: '/fortnite-esp/',
	radar: '/fortnite-esp/',
	'eac-bypass': '/updates/',
	'cheats-2026': '/features/',
	hacks: '/undetected-fortnite-cheats/',
	'cheat-download': '/setup/',
	'mod-menu': '/features/',
	'soft-aim': '/fortnite-aimbot/',
	'best-cheats': '/pricing/',
	'aimbot-hack': '/fortnite-aimbot/',
	'esp-hack': '/fortnite-esp/',
	'unlock-all': '/features/',
};

function buildLegal(locale, pageKey, kind) {
	const p = phrases[locale];
	const titles = {
		privacy: { es: 'Política de privacidad', fr: 'Politique de confidentialité', de: 'Datenschutz', pt: 'Política de privacidade', it: 'Informativa privacy', nl: 'Privacybeleid', pl: 'Polityka prywatności', ru: 'Политика конфиденциальности', tr: 'Gizlilik politikası', ar: 'سياسة الخصوصية', ja: 'プライバシーポリシー', ko: '개인정보 처리방침', zh: '隐私政策', hi: 'गोपनीयता नीति', id: 'Kebijakan privasi', th: 'นโยบายความเป็นส่วนตัว', vi: 'Chính sách bảo mật', uk: 'Політика конфіденційності', cs: 'Zásady ochrany soukromí', ro: 'Politica de confidențialitate', sv: 'Integritetspolicy' },
		refund: { es: 'Política de reembolso', fr: 'Politique de remboursement', de: 'Rückerstattung', pt: 'Política de reembolso', it: 'Politica di rimborso', nl: 'Restitutiebeleid', pl: 'Polityka zwrotów', ru: 'Политика возврата', tr: 'İade politikası', ar: 'سياسة الاسترداد', ja: '返金ポリシー', ko: '환불 정책', zh: '退款政策', hi: 'रिफंड नीति', id: 'Kebijakan refund', th: 'นโยบายการคืนเงิน', vi: 'Chính sách hoàn tiền', uk: 'Політика повернення', cs: 'Zásady vrácení peněz', ro: 'Politica de rambursare', sv: 'Återbetalningspolicy' },
		terms: { es: 'Términos de uso', fr: 'Conditions d\'utilisation', de: 'Nutzungsbedingungen', pt: 'Termos de uso', it: 'Termini di utilizzo', nl: 'Gebruiksvoorwaarden', pl: 'Warunki użytkowania', ru: 'Условия использования', tr: 'Kullanım şartları', ar: 'شروط الاستخدام', ja: '利用規約', ko: '이용 약관', zh: '使用条款', hi: 'उपयोग की शर्तें', id: 'Syarat penggunaan', th: 'ข้อกำหนดการใช้งาน', vi: 'Điều khoản sử dụng', uk: 'Умови використання', cs: 'Podmínky použití', ro: 'Termeni de utilizare', sv: 'Användarvillkor' },
	};
	const h1 = titles[kind][locale] ?? (kind === 'privacy' ? 'Privacy Policy' : kind === 'refund' ? 'Refund Policy' : 'Terms of Use');
	return {
		title: clampTitle(stripZadeyoFromMeta(`${h1} | Fortnite Cheats`)),
		description: clampDesc(stripZadeyoFromMeta(`${h1} for Fortnite Cheats — ESP wallhack, Aimbot, ${p.win}.`)),
		h1,
		intro: p.s1(`${h1} for bestfortnitecheats.com and Fortnite licenses.`),
		imageAlt: 'fortnite cheats',
		galleryTitle: 'fortnite cheats',
		heroImage: HERO_IMAGES[pageKey],
		ctaPrimary: locale === 'ar' ? 'مراسلة الدعم' : locale === 'ja' ? 'サポートにメール' : locale === 'ko' ? '지원 이메일' : locale === 'zh' ? '邮件支持' : 'Email support',
		ctaSecondary: kind === 'privacy' ? (locale === 'es' ? 'Leer términos' : locale === 'fr' ? 'Lire conditions' : locale === 'de' ? 'Nutzungsbedingungen' : locale === 'ar' ? 'اقرأ الشروط' : locale === 'ja' ? '利用規約' : 'Read terms') : kind === 'refund' ? (locale === 'es' ? 'Leer privacidad' : 'Read privacy') : (locale === 'es' ? 'Leer privacidad' : 'Read privacy'),
		ctaSecondaryHref: kind === 'privacy' ? '/terms/' : '/privacy-policy/',
		sections: [
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Información que recopilamos' : locale === 'fr' ? 'Informations collectées' : locale === 'de' ? 'Erhobene Daten' : locale === 'ar' ? 'المعلومات التي نجمعها' : locale === 'ja' ? '収集する情報' : 'Information we collect') :
				kind === 'refund' ? (locale === 'es' ? 'Entrega digital' : locale === 'fr' ? 'Livraison numérique' : locale === 'de' ? 'Digitale Lieferung' : locale === 'ar' ? 'التسليم الرقمي' : locale === 'ja' ? 'デジタル配信' : 'Digital delivery') :
				(locale === 'es' ? 'Aceptación de términos' : locale === 'fr' ? 'Acceptation' : locale === 'de' ? 'Annahme' : locale === 'ar' ? 'قبول الشروط' : locale === 'ja' ? '規約への同意' : 'Acceptance of terms'),
				p.s1('Contact email, Zadeyo order references, and basic site security data.'),
				kind === 'privacy' ? 'Payment details are processed by Zadeyo checkout — not stored on bestfortnitecheats.com.' : p.s2(),
			),
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Uso de la información' : locale === 'fr' ? 'Utilisation' : locale === 'de' ? 'Datennutzung' : locale === 'ar' ? 'استخدام المعلومات' : locale === 'ja' ? '情報の利用' : 'How we use data') :
				kind === 'refund' ? (locale === 'es' ? 'Cuándo se aprueba' : locale === 'fr' ? 'Approbation' : locale === 'de' ? 'Genehmigung' : locale === 'ar' ? 'موافقة الاسترداد' : locale === 'ja' ? '返金承認' : 'Refund approval') :
				(locale === 'es' ? 'Riesgos y anti-cheat' : locale === 'fr' ? 'Risques' : locale === 'de' ? 'Risiko' : locale === 'ar' ? 'المخاطر' : locale === 'ja' ? 'リスク' : 'Risk disclaimer'),
				p.s1('Support responses, order resolution, and legal compliance when required.'),
				kind === 'terms' ? 'Using cheats may violate Epic Games terms — you assume all ban risk.' : p.s3(),
			),
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Tus derechos' : locale === 'fr' ? 'Vos droits' : locale === 'de' ? 'Ihre Rechte' : locale === 'ar' ? 'حقوقك' : locale === 'ja' ? 'あなたの権利' : 'Your rights') :
				kind === 'refund' ? (locale === 'es' ? 'Cómo solicitar' : locale === 'fr' ? 'Comment demander' : locale === 'de' ? 'Anfrage stellen' : locale === 'ar' ? 'كيفية الطلب' : locale === 'ja' ? '申請方法' : 'How to request') :
				(locale === 'es' ? 'Cambios' : locale === 'fr' ? 'Modifications' : locale === 'de' ? 'Änderungen' : locale === 'ar' ? 'التغييرات' : locale === 'ja' ? '変更' : 'Policy changes'),
				p.legal(),
				'Email: support@bestfortnitecheats.com',
			),
		],
	};
}

/** Build all pages for a non-English locale. */
export function buildPagesForLocale(locale) {
	const pages = { home: buildHome(locale) };
	for (const [pageKey, names] of Object.entries(TOPIC_NAMES)) {
		pages[pageKey] = productPage(locale, pageKey, names[locale], CTA2_HREF[pageKey]);
	}
	for (const kind of ['privacy', 'refund', 'terms']) {
		pages[kind] = buildLegal(locale, kind, kind);
	}
	return pages;
}
