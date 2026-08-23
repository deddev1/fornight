import { fillBrandTokens } from '../brand';
import type { LocaleCode } from './locales';
import type { SimplePageCopy, SimpleSection } from './simple-pages';

function lookup(value: string, dict: Record<string, string>): string {
	if (dict[value]) return fillBrandTokens(dict[value]);
	for (const [key, translated] of Object.entries(dict)) {
		if (fillBrandTokens(key) === value) return fillBrandTokens(translated);
	}
	return value;
}

/** Translate a simple-page tree. Unknown phrases stay as-is so structure never drops. */
export function translateSimplePage(copy: SimplePageCopy, locale: LocaleCode): SimplePageCopy {
	if (locale === 'en') return copy;
	const dict = phrasebook[locale];
	if (!dict) return copy;
	const tr = (value: string) => lookup(value, dict);
	return {
		...copy,
		h1: tr(copy.h1),
		intro: tr(copy.intro),
		ctaPrimary: tr(copy.ctaPrimary),
		ctaSecondary: copy.ctaSecondary ? tr(copy.ctaSecondary) : copy.ctaSecondary,
		galleryTitle: tr(copy.galleryTitle),
		sections: copy.sections.map((section) => translateSection(section, tr)),
	};
}

function translateSection(section: SimpleSection, tr: (value: string) => string): SimpleSection {
	return {
		h2: tr(section.h2),
		paragraphs: section.paragraphs.map(tr),
		list: section.list?.map((item) => translateHtmlPhrase(item, tr)),
	};
}

function translateHtmlPhrase(item: string, tr: (value: string) => string): string {
	return item.replace(/>([^<]+)</g, (_, label: string) => `>${tr(label)}<`);
}

const phrasebook: Partial<Record<LocaleCode, Record<string, string>>> = {
	es: {
		Features: 'Funciones',
		Store: 'Tienda',
		Status: 'Estado',
		Preview: 'Vista previa',
		Setup: 'Instalación',
		Support: 'Soporte',
		FAQ: 'FAQ',
		'In-game look': 'Vista en partida',
		'Buy now': 'Comprar ahora',
		'View store': 'Ver tienda',
		'Setup guide': 'Guía de instalación',
		'Undetected guide': 'Guía undetected',
		'View features': 'Ver funciones',
		'Check status': 'Ver estado',
		'Everything included in one license for {game} on Windows PC.':
			'Todo incluido en una licencia para {game} en PC Windows.',
		'Pick a plan. Same features on both. Instant delivery after payment.':
			'Elige un plan. Las mismas funciones en ambos. Entrega instantánea tras el pago.',
		'Check here after a {game} or {antiCheat} patch before you play.':
			'Revisa aquí tras un parche de {game} o {antiCheat} antes de jugar.',
		'A quick look at {brand} — ESP, aimbot, radar, and updates after patches.':
			'Un vistazo rápido a {brand}: ESP, aimbot, radar y updates tras parches.',
		'Install {brand} on Windows PC after you buy. Follow these short steps.':
			'Instala {brand} en PC Windows después de comprar. Sigue estos pasos cortos.',
		'Need help with {brand}? Email {email} with your order ID.':
			'¿Necesitas ayuda con {brand}? Escribe a {email} con tu ID de pedido.',
		'Short answers about delivery, setup, updates, and refunds.':
			'Respuestas cortas sobre entrega, instalación, updates y reembolsos.',
		'ESP & wallhack': 'ESP y wallhack',
		'See players, loot, and vehicles through walls.': 'Ve jugadores, botín y vehículos a través de las paredes.',
		'Player boxes & distance': 'Cajas de jugador y distancia',
		'Loot and reboot markers': 'Marcadores de loot y reboot',
		'Team colours on / off': 'Colores de equipo sí / no',
		'Aimbot & soft aim': 'Aimbot y soft aim',
		'Aim help you can tune to feel natural.': 'Ayuda de puntería que puedes ajustar para que se sienta natural.',
		'Smooth aim strength': 'Fuerza de aim suave',
		'FOV and bone priority': 'FOV y prioridad de hueso',
		'Hotkeys mid-match': 'Teclas rápidas en partida',
		Radar: 'Radar',
		'A simple 2D radar for threats outside your view.': 'Un radar 2D simple para amenazas fuera de tu vista.',
		'Nearby enemy cues': 'Avisos de enemigos cercanos',
		'Adjustable range': 'Rango ajustable',
		'Works in BR & Zero Build': 'Funciona en BR y Zero Build',
		'Updates & support': 'Updates y soporte',
		'We rebuild after big {game} or {antiCheat} patches.':
			'Reconstruimos tras parches grandes de {game} o {antiCheat}.',
		'Status on the Status page': 'Estado en la página Status',
		'Setup guide included': 'Guía de instalación incluida',
		'Email support with your order ID': 'Soporte por email con tu ID de pedido',
		'What you get': 'Qué obtienes',
		'Full package access for Windows 10 / 11.': 'Acceso completo al paquete para Windows 10 / 11.',
		'ESP, aimbot, and radar': 'ESP, aimbot y radar',
		'Patch rebuilds while active': 'Rebuilds de parche mientras esté activo',
		'Digital delivery after checkout': 'Entrega digital tras el checkout',
		'Before you buy': 'Antes de comprar',
		'Read the refund policy if you need it. Contact support with your order ID for help.':
			'Lee la política de reembolso si la necesitas. Contacta soporte con tu ID de pedido.',
		'Refund policy': 'Política de reembolso',
		'Current status': 'Estado actual',
		'We post a note when a new build is live after a game or anti-cheat update.':
			'Publicamos una nota cuando un build nuevo está listo tras un update del juego o anti-cheat.',
		'Check this page before queueing': 'Revisa esta página antes de hacer cola',
		'Monthly and lifetime get rebuilds while active': 'Mensual y lifetime reciben rebuilds mientras estén activos',
		'After a patch': 'Tras un parche',
		'Wait for our rebuild note, then launch. Do not play on an old build after a big update.':
			'Espera nuestra nota de rebuild y luego lanza. No juegues con un build viejo tras un update grande.',
		'Read the latest status note': 'Lee la nota de estado más reciente',
		'Follow setup if something fails': 'Sigue el setup si algo falla',
		Important: 'Importante',
		'No cheat is 100% safe forever. Stay updated and use safe settings.':
			'Ningún cheat es 100% seguro para siempre. Mantente actualizado y usa ajustes seguros.',
		'Status first, then play': 'Primero Status, luego juega',
		'Support for license help': 'Soporte para ayuda de licencia',
		'What it is': 'Qué es',
		'One package for {game} on Windows PC.': 'Un paquete para {game} en PC Windows.',
		'ESP / wallhack': 'ESP / wallhack',
		'Soft aim & aimbot': 'Soft aim y aimbot',
		'2D radar': 'Radar 2D',
		'Patch updates': 'Updates de parche',
		'How to start': 'Cómo empezar',
		'Buy a plan, get your license by email, then follow setup.':
			'Compra un plan, recibe la licencia por email y sigue el setup.',
		'Open store': 'Abrir tienda',
		'Before you install': 'Antes de instalar',
		'Buy a plan first. You get a license by email.': 'Compra un plan primero. Recibes una licencia por email.',
		'Windows 10 / 11 PC': 'PC Windows 10 / 11',
		'Disable conflicting overlays': 'Desactiva overlays en conflicto',
		'Have your order email ready': 'Ten a mano el email del pedido',
		'Install steps': 'Pasos de instalación',
		'Run the loader as admin, paste your license, then launch {game}.':
			'Ejecuta el loader como admin, pega tu licencia y lanza {game}.',
		'Download the loader from your delivery email': 'Descarga el loader desde el email de entrega',
		'Paste license key': 'Pega la clave de licencia',
		'Launch the game': 'Lanza el juego',
		'If something fails': 'Si algo falla',
		'Check Status after a patch. Email {email} with your order ID.':
			'Revisa Status tras un parche. Escribe a {email} con tu ID de pedido.',
		'Status page': 'Página Status',
		'How to contact us': 'Cómo contactarnos',
		'Email {email}. Include your order ID and a short note about the issue.':
			'Escribe a {email}. Incluye tu ID de pedido y una nota breve del problema.',
		'Order ID from your receipt': 'ID de pedido de tu recibo',
		'Windows version': 'Versión de Windows',
		'What you already tried': 'Qué ya intentaste',
		'Faster answers': 'Respuestas más rápidas',
		'Check FAQ and Status before you write. Many setup questions are already covered.':
			'Revisa FAQ y Status antes de escribir. Muchas dudas de setup ya están cubiertas.',
		'Buying & delivery': 'Compra y entrega',
		'You get a digital license by email after payment.': 'Recibes una licencia digital por email tras el pago.',
		'Instant delivery after checkout': 'Entrega instantánea tras el checkout',
		'Keep your order email': 'Guarda el email del pedido',
		'One license per purchase': 'Una licencia por compra',
		'Setup & updates': 'Instalación y updates',
		'Follow Setup after you buy. Check Status after big {game} or {antiCheat} patches.':
			'Sigue Setup después de comprar. Revisa Status tras parches grandes de {game} o {antiCheat}.',
		Refunds: 'Reembolsos',
		'Read the refund policy before you buy if you need details.':
			'Lee la política de reembolso antes de comprar si necesitas detalles.',
	},
	fr: {
		Features: 'Fonctions',
		Store: 'Boutique',
		Status: 'Statut',
		Preview: 'Aperçu',
		Setup: 'Installation',
		Support: 'Support',
		FAQ: 'FAQ',
		'In-game look': 'Aperçu en jeu',
		'Buy now': 'Acheter',
		'View store': 'Voir la boutique',
		'Setup guide': "Guide d'installation",
		'Undetected guide': 'Guide indétectable',
		'View features': 'Voir les fonctions',
		'Check status': 'Voir le statut',
		'Everything included in one license for {game} on Windows PC.':
			'Tout inclus dans une licence pour {game} sur PC Windows.',
		'Pick a plan. Same features on both. Instant delivery after payment.':
			'Choisissez une offre. Mêmes fonctions. Livraison instantanée après paiement.',
		'Check here after a {game} or {antiCheat} patch before you play.':
			'Vérifiez ici après un patch {game} ou {antiCheat} avant de jouer.',
		'A quick look at {brand} — ESP, aimbot, radar, and updates after patches.':
			'Un aperçu de {brand} : ESP, aimbot, radar et mises à jour après patchs.',
		'Install {brand} on Windows PC after you buy. Follow these short steps.':
			'Installez {brand} sur PC Windows après achat. Suivez ces étapes courtes.',
		'Need help with {brand}? Email {email} with your order ID.':
			"Besoin d'aide avec {brand} ? Écrivez à {email} avec votre ID de commande.",
		'Short answers about delivery, setup, updates, and refunds.':
			'Réponses courtes sur la livraison, l’installation, les updates et les remboursements.',
		'ESP & wallhack': 'ESP et wallhack',
		'See players, loot, and vehicles through walls.': 'Voyez joueurs, loot et véhicules à travers les murs.',
		'Player boxes & distance': 'Boîtes joueur et distance',
		'Loot and reboot markers': 'Marqueurs de loot et reboot',
		'Team colours on / off': 'Couleurs d’équipe on / off',
		'Aimbot & soft aim': 'Aimbot et soft aim',
		'Aim help you can tune to feel natural.': 'Aide à la visée réglable pour un feeling naturel.',
		'Smooth aim strength': 'Force de visée fluide',
		'FOV and bone priority': 'FOV et priorité d’os',
		'Hotkeys mid-match': 'Raccourcis en partie',
		Radar: 'Radar',
		'A simple 2D radar for threats outside your view.': 'Un radar 2D simple pour les menaces hors vue.',
		'Nearby enemy cues': 'Alertes ennemis proches',
		'Adjustable range': 'Portée réglable',
		'Works in BR & Zero Build': 'Fonctionne en BR et Zero Build',
		'Updates & support': 'Updates et support',
		'We rebuild after big {game} or {antiCheat} patches.':
			'Nous rebuildons après les gros patchs {game} ou {antiCheat}.',
		'Status on the Status page': 'Statut sur la page Status',
		'Setup guide included': "Guide d'installation inclus",
		'Email support with your order ID': 'Support email avec votre ID de commande',
		'What you get': 'Ce que vous obtenez',
		'Full package access for Windows 10 / 11.': 'Accès complet au pack pour Windows 10 / 11.',
		'ESP, aimbot, and radar': 'ESP, aimbot et radar',
		'Patch rebuilds while active': 'Rebuilds de patch tant que c’est actif',
		'Digital delivery after checkout': 'Livraison digitale après le checkout',
		'Before you buy': 'Avant d’acheter',
		'Read the refund policy if you need it. Contact support with your order ID for help.':
			'Lisez la politique de remboursement si besoin. Contactez le support avec votre ID de commande.',
		'Refund policy': 'Politique de remboursement',
		'Current status': 'Statut actuel',
		'We post a note when a new build is live after a game or anti-cheat update.':
			'Nous publions une note quand un nouveau build est prêt après un update jeu ou anti-cheat.',
		'Check this page before queueing': 'Vérifiez cette page avant de queue',
		'Monthly and lifetime get rebuilds while active': 'Mensuel et lifetime reçoivent des rebuilds tant qu’actifs',
		'After a patch': 'Après un patch',
		'Wait for our rebuild note, then launch. Do not play on an old build after a big update.':
			'Attendez notre note de rebuild, puis lancez. Ne jouez pas sur un vieux build après un gros update.',
		'Read the latest status note': 'Lisez la dernière note de statut',
		'Follow setup if something fails': 'Suivez le setup si quelque chose échoue',
		Important: 'Important',
		'No cheat is 100% safe forever. Stay updated and use safe settings.':
			'Aucun cheat n’est 100 % sûr pour toujours. Restez à jour et utilisez des réglages sûrs.',
		'Status first, then play': 'Status d’abord, puis jouez',
		'Support for license help': 'Support pour l’aide licence',
		'What it is': 'Ce que c’est',
		'One package for {game} on Windows PC.': 'Un pack pour {game} sur PC Windows.',
		'ESP / wallhack': 'ESP / wallhack',
		'Soft aim & aimbot': 'Soft aim et aimbot',
		'2D radar': 'Radar 2D',
		'Patch updates': 'Updates de patch',
		'How to start': 'Comment commencer',
		'Buy a plan, get your license by email, then follow setup.':
			'Achetez une offre, recevez la licence par email, puis suivez le setup.',
		'Open store': 'Ouvrir la boutique',
		'Before you install': 'Avant d’installer',
		'Buy a plan first. You get a license by email.': 'Achetez d’abord une offre. Vous recevez une licence par email.',
		'Windows 10 / 11 PC': 'PC Windows 10 / 11',
		'Disable conflicting overlays': 'Désactivez les overlays en conflit',
		'Have your order email ready': 'Gardez l’email de commande sous la main',
		'Install steps': 'Étapes d’installation',
		'Run the loader as admin, paste your license, then launch {game}.':
			'Lancez le loader en admin, collez votre licence, puis lancez {game}.',
		'Download the loader from your delivery email': 'Téléchargez le loader depuis l’email de livraison',
		'Paste license key': 'Collez la clé de licence',
		'Launch the game': 'Lancez le jeu',
		'If something fails': 'Si quelque chose échoue',
		'Check Status after a patch. Email {email} with your order ID.':
			'Vérifiez Status après un patch. Écrivez à {email} avec votre ID de commande.',
		'Status page': 'Page Status',
		'How to contact us': 'Comment nous contacter',
		'Email {email}. Include your order ID and a short note about the issue.':
			'Écrivez à {email}. Incluez votre ID de commande et une courte note.',
		'Order ID from your receipt': 'ID de commande de votre reçu',
		'Windows version': 'Version de Windows',
		'What you already tried': 'Ce que vous avez déjà essayé',
		'Faster answers': 'Réponses plus rapides',
		'Check FAQ and Status before you write. Many setup questions are already covered.':
			'Vérifiez FAQ et Status avant d’écrire. Beaucoup de questions setup sont déjà couvertes.',
		'Buying & delivery': 'Achat et livraison',
		'You get a digital license by email after payment.': 'Vous recevez une licence digitale par email après paiement.',
		'Instant delivery after checkout': 'Livraison instantanée après checkout',
		'Keep your order email': 'Gardez l’email de commande',
		'One license per purchase': 'Une licence par achat',
		'Setup & updates': 'Installation et updates',
		'Follow Setup after you buy. Check Status after big {game} or {antiCheat} patches.':
			'Suivez Setup après l’achat. Vérifiez Status après les gros patchs {game} ou {antiCheat}.',
		Refunds: 'Remboursements',
		'Read the refund policy before you buy if you need details.':
			'Lisez la politique de remboursement avant d’acheter si vous avez besoin de détails.',
	},
	de: {
		Features: 'Features',
		Store: 'Shop',
		Status: 'Status',
		Preview: 'Vorschau',
		Setup: 'Setup',
		Support: 'Support',
		FAQ: 'FAQ',
		'In-game look': 'Ingame-Ansicht',
		'Buy now': 'Jetzt kaufen',
		'View store': 'Shop ansehen',
		'Setup guide': 'Setup-Anleitung',
		'Undetected guide': 'Undetected Guide',
		'View features': 'Features ansehen',
		'Check status': 'Status prüfen',
		'Everything included in one license for {game} on Windows PC.':
			'Alles in einer Lizenz für {game} auf Windows-PC.',
		'Pick a plan. Same features on both. Instant delivery after payment.':
			'Wähle einen Plan. Gleiche Features. Sofortige Lieferung nach Zahlung.',
		'Check here after a {game} or {antiCheat} patch before you play.':
			'Check hier nach einem {game}- oder {antiCheat}-Patch bevor du spielst.',
		'A quick look at {brand} — ESP, aimbot, radar, and updates after patches.':
			'Ein kurzer Blick auf {brand}: ESP, Aimbot, Radar und Updates nach Patches.',
		'Install {brand} on Windows PC after you buy. Follow these short steps.':
			'Installiere {brand} nach dem Kauf auf Windows-PC. Folge diesen kurzen Schritten.',
		'Need help with {brand}? Email {email} with your order ID.':
			'Hilfe bei {brand}? Mail an {email} mit deiner Bestell-ID.',
		'Short answers about delivery, setup, updates, and refunds.':
			'Kurze Antworten zu Lieferung, Setup, Updates und Erstattungen.',
		'ESP & wallhack': 'ESP & Wallhack',
		'See players, loot, and vehicles through walls.': 'Sieh Spieler, Loot und Fahrzeuge durch Wände.',
		'Player boxes & distance': 'Spielerboxen & Distanz',
		'Loot and reboot markers': 'Loot- und Reboot-Marker',
		'Team colours on / off': 'Teamfarben an / aus',
		'Aimbot & soft aim': 'Aimbot & Soft Aim',
		'Aim help you can tune to feel natural.': 'Aim-Hilfe, die du natürlich einstellen kannst.',
		'Smooth aim strength': 'Smooth-Aim-Stärke',
		'FOV and bone priority': 'FOV und Bone-Priority',
		'Hotkeys mid-match': 'Hotkeys während der Runde',
		Radar: 'Radar',
		'A simple 2D radar for threats outside your view.': 'Ein einfaches 2D-Radar für Threats außerhalb der Sicht.',
		'Nearby enemy cues': 'Hinweise auf nahe Gegner',
		'Adjustable range': 'Einstellbare Reichweite',
		'Works in BR & Zero Build': 'Funktioniert in BR & Zero Build',
		'Updates & support': 'Updates & Support',
		'We rebuild after big {game} or {antiCheat} patches.':
			'Wir rebuilden nach großen {game}- oder {antiCheat}-Patches.',
		'Status on the Status page': 'Status auf der Status-Seite',
		'Setup guide included': 'Setup-Anleitung inklusive',
		'Email support with your order ID': 'E-Mail-Support mit deiner Bestell-ID',
		'What you get': 'Was du bekommst',
		'Full package access for Windows 10 / 11.': 'Voller Paket-Zugang für Windows 10 / 11.',
		'ESP, aimbot, and radar': 'ESP, Aimbot und Radar',
		'Patch rebuilds while active': 'Patch-Rebuilds solange aktiv',
		'Digital delivery after checkout': 'Digitale Lieferung nach Checkout',
		'Before you buy': 'Vor dem Kauf',
		'Read the refund policy if you need it. Contact support with your order ID for help.':
			'Lies die Erstattungsrichtlinie bei Bedarf. Kontaktiere Support mit deiner Bestell-ID.',
		'Refund policy': 'Erstattungsrichtlinie',
		'Current status': 'Aktueller Status',
		'We post a note when a new build is live after a game or anti-cheat update.':
			'Wir posten eine Notiz, wenn ein neuer Build nach einem Game- oder Anti-Cheat-Update live ist.',
		'Check this page before queueing': 'Check diese Seite vor der Queue',
		'Monthly and lifetime get rebuilds while active': 'Monthly und Lifetime bekommen Rebuilds solange aktiv',
		'After a patch': 'Nach einem Patch',
		'Wait for our rebuild note, then launch. Do not play on an old build after a big update.':
			'Warte auf unsere Rebuild-Notiz, dann starten. Spiel nicht auf einem alten Build nach einem großen Update.',
		'Read the latest status note': 'Lies die neueste Status-Notiz',
		'Follow setup if something fails': 'Folge dem Setup, wenn etwas fehlschlägt',
		Important: 'Wichtig',
		'No cheat is 100% safe forever. Stay updated and use safe settings.':
			'Kein Cheat ist für immer 100% safe. Bleib updated und nutze sichere Settings.',
		'Status first, then play': 'Zuerst Status, dann spielen',
		'Support for license help': 'Support für Lizenz-Hilfe',
		'What it is': 'Was es ist',
		'One package for {game} on Windows PC.': 'Ein Paket für {game} auf Windows-PC.',
		'ESP / wallhack': 'ESP / Wallhack',
		'Soft aim & aimbot': 'Soft Aim & Aimbot',
		'2D radar': '2D-Radar',
		'Patch updates': 'Patch-Updates',
		'How to start': 'So startest du',
		'Buy a plan, get your license by email, then follow setup.':
			'Kauf einen Plan, erhalte die Lizenz per E-Mail, dann Setup folgen.',
		'Open store': 'Shop öffnen',
		'Before you install': 'Vor der Installation',
		'Buy a plan first. You get a license by email.': 'Kauf zuerst einen Plan. Du bekommst eine Lizenz per E-Mail.',
		'Windows 10 / 11 PC': 'Windows 10 / 11 PC',
		'Disable conflicting overlays': 'Konflikt-Overlays deaktivieren',
		'Have your order email ready': 'Bestell-E-Mail bereithalten',
		'Install steps': 'Installationsschritte',
		'Run the loader as admin, paste your license, then launch {game}.':
			'Loader als Admin starten, Lizenz einfügen, dann {game} starten.',
		'Download the loader from your delivery email': 'Loader aus der Liefer-E-Mail herunterladen',
		'Paste license key': 'Lizenzkey einfügen',
		'Launch the game': 'Spiel starten',
		'If something fails': 'Wenn etwas fehlschlägt',
		'Check Status after a patch. Email {email} with your order ID.':
			'Status nach einem Patch checken. Mail an {email} mit Bestell-ID.',
		'Status page': 'Status-Seite',
		'How to contact us': 'So erreichst du uns',
		'Email {email}. Include your order ID and a short note about the issue.':
			'Mail an {email}. Bestell-ID und kurze Problembeschreibung angeben.',
		'Order ID from your receipt': 'Bestell-ID aus der Rechnung',
		'Windows version': 'Windows-Version',
		'What you already tried': 'Was du schon versucht hast',
		'Faster answers': 'Schnellere Antworten',
		'Check FAQ and Status before you write. Many setup questions are already covered.':
			'Check FAQ und Status bevor du schreibst. Viele Setup-Fragen sind schon beantwortet.',
		'Buying & delivery': 'Kauf & Lieferung',
		'You get a digital license by email after payment.': 'Du bekommst nach der Zahlung eine digitale Lizenz per E-Mail.',
		'Instant delivery after checkout': 'Sofortige Lieferung nach Checkout',
		'Keep your order email': 'Bestell-E-Mail aufheben',
		'One license per purchase': 'Eine Lizenz pro Kauf',
		'Setup & updates': 'Setup & Updates',
		'Follow Setup after you buy. Check Status after big {game} or {antiCheat} patches.':
			'Folge Setup nach dem Kauf. Check Status nach großen {game}- oder {antiCheat}-Patches.',
		Refunds: 'Erstattungen',
		'Read the refund policy before you buy if you need details.':
			'Lies die Erstattungsrichtlinie vor dem Kauf, wenn du Details brauchst.',
	},
};

export function translatePhrase(value: string, locale: LocaleCode): string {
	if (locale === 'en') return fillBrandTokens(value);
	return fillBrandTokens(phrasebook[locale]?.[value] ?? value);
}
