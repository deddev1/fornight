#!/usr/bin/env node
/**
 * Generates src/data/blog/posts.generated.ts with Fortnite Intel posts.
 * English content is the SEO source of truth for /blog/ routes.
 */
import { writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, '..', 'src', 'data', 'blog', 'posts.generated.ts');

const LOCALES = ['en'];

const EXT = {
	epic: '<a href="https://www.fortnite.com" target="_blank" rel="noopener noreferrer">Fortnite</a>',
	fortnite: '<a href="https://www.fortnite.com/" target="_blank" rel="noopener noreferrer">Fortnite</a>',
	status: '<a href="https://status.epicgames.com/" target="_blank" rel="noopener noreferrer">Epic Games Status</a>',
	competitive: '<a href="https://www.fortnite.com" target="_blank" rel="noopener noreferrer">Fortnite</a>',
};

/** @typedef {{ h2: string, paragraphs: string[] }} Section */
/** @typedef {{ id: string, imageKey: string, published: string, updated: string, category: string, featured?: boolean, slug: string, title: string, metaDescription: string, h1: string, intro: string, keywords: string[], imageAlt: string, sections: Section[] }} SourcePost */

/** @type {SourcePost[]} */
const sources = [
	{
		id: 'fortnite-beginner-guide',
		imageKey: 'playerEsp',
		published: '2026-08-23',
		updated: '2026-08-23',
		category: 'How to Play',
		featured: true,
		slug: 'fortnite-beginner-guide-2026',
		title: 'Fortnite Beginner Guide: How to Play in 2026',
		metaDescription:
			'New to Fortnite? This beginner guide covers drops, loadouts, storm rotates, and ranked basics for Battle Royale and Zero Build on Windows PC in 2026.',
		h1: 'Fortnite Beginner Guide: How to Play in 2026',
		intro:
			'Start simple. Land, loot a gun, stay in cover, and leave before the storm. This guide is the short path for new Fortnite players.',
		keywords: ['fortnite beginner guide', 'how to play fortnite', 'fortnite 2026', 'zero build', 'battle royale'],
		imageAlt: 'Fortnite ESP boxes in a lobby used as a beginner overlay example',
		sections: [
			{
				h2: 'The first five minutes',
				paragraphs: [
					'Jump near a named spot, not on top of 20 other players. Grab a shotgun or AR first. Then heals. Then leave if the POI is still loud.',
					'Official mode rules live on <a href="https://www.fortnite.com/" target="_blank" rel="noopener noreferrer">Fortnite</a>. Seasons change names. The loop does not: loot, rotate, fight on your terms.',
					'Pro Tip — One job per landing: survive with a gun and two heals. Kills are optional until your inventory is set.',
				],
			},
			{
				h2: 'Loadout, storm, and fights',
				paragraphs: [
					'Keep a simple spine: close gun, mid gun, mobility, heals. See our <a href="/blog/fortnite-best-loadouts-2026/">loadout guide</a> for slot order.',
					'Move before the storm hurts. Early rotates beat late sprints. Our <a href="/blog/fortnite-storm-rotation-guide/">storm guide</a> covers edge vs center.',
					'Fight when you have cover and health. Walk away from 50/50s in the open. Zero Build players can read <a href="/blog/fortnite-zero-build-aggressive-strategies/">zero-build aggression</a> after this page.',
				],
			},
			{
				h2: 'Ranked without the overwhelm',
				paragraphs: [
					'Play short sessions. Stop after a bad tilt game. Climb is a loop, not a streak — see the <a href="/blog/fortnite-ranked-climb-guide/">ranked climb guide</a>.',
					'Warm up 15–25 minutes before ranked. Use the <a href="/blog/fortnite-warmup-maps-ranked/">warmup maps</a> list instead of jumping in cold.',
					'Try This Today: Land the same medium POI for five games. Screenshot loot at 2:00. Then open <a href="/features/">Features</a> only if you already know the basics and want overlay tools on PC.',
				],
			},
		],
	},
	{
		id: 'fortnite-drop-spots',
		imageKey: 'battleRoyaleIslandMap',
		published: '2026-08-22',
		updated: '2026-08-23',
		category: 'Drops & Map',
		featured: true,
		slug: 'fortnite-best-drop-spots-2026',
		title: 'Fortnite Drop Spots: Safe vs Hot Landings',
		metaDescription:
			'Pick Fortnite landing spots with a simple plan — contest risk, loot speed, and exit paths for ranked games in 2026. Pair this with loot routes.',
		h1: 'Fortnite Drop Spots: Safe vs Hot Landings',
		intro:
			'A good drop is a plan, not a name on the map. Score contest, loot speed, and how you leave.',
		keywords: ['fortnite drop spots', 'best fortnite landings', 'fortnite poi', 'ranked drops', 'fortnite map'],
		imageAlt: 'Fortnite raid map view used to plan landing spots and rotates',
		sections: [
			{
				h2: 'Score a drop in 10 seconds',
				paragraphs: [
					'Ask three questions: How many people land here? Can I get a gun in 20 seconds? Can I leave without crossing the whole zone?',
					'Hot drops print kills and also print deaths. Edge spots print loot and sometimes a boring mid-game. Ranked wants expected value, not highlight clips.',
					'Pro Tip — If the bus path is bad, do not force a famous POI. Pick a nearby unnamed cluster with chests and an exit road.',
				],
			},
			{
				h2: 'Safe, medium, and hot plans',
				paragraphs: [
					'Safe: 0–2 contest. Chain two small POIs. Leave with shotgun, AR, and heals. Medium: 3–6 contest. Land outer roofs, take one fight max, leave by 2:00. Hot: only if you are warming mechanics, not climbing rank.',
					'After you land, follow a loot order — not a loot wander. Use <a href="/blog/fortnite-loot-routes-guide/">loot routes</a> for timers.',
					'Map names change each <a href="https://www.fortnite.com/" target="_blank" rel="noopener noreferrer">Fortnite</a> season. Keep the geometry: roofs first, then inside, then a marked exit.',
				],
			},
			{
				h2: 'Leave on time',
				paragraphs: [
					'The drop is done when your slots are filled, not when the POI is empty. Late third parties farm players who stay to mop up.',
					'Pair this page with <a href="/blog/fortnite-storm-rotation-guide/">storm rotates</a> and the <a href="/blog/fortnite-beginner-guide-2026/">beginner guide</a>.',
					'Try This Today: Pick one medium drop. Play six games. Track how often you leave with shotgun + AR + two heals. Then browse <a href="/faq/">FAQ</a> if you also use PC overlays after landing.',
				],
			},
		],
	},
	{
		id: 'fortnite-ranked-climb',
		imageKey: 'squadFight',
		published: '2026-08-21',
		updated: '2026-08-23',
		category: 'Ranked',
		featured: false,
		slug: 'fortnite-ranked-climb-guide',
		title: 'Fortnite Ranked Guide: How to Climb in 2026',
		metaDescription:
			'Climb Fortnite ranked with a simple loop: loot timer, fight picks, early rotates, and session limits. Built for Battle Royale and Zero Build in 2026.',
		h1: 'Fortnite Ranked Guide: How to Climb in 2026',
		intro:
			'Ranked is a process. Loot on a timer, take good fights, rotate early, and stop when you tilt.',
		keywords: ['fortnite ranked', 'how to rank up fortnite', 'fortnite climb', 'zero build ranked', 'fortnite 2026'],
		imageAlt: 'Fortnite squad fight ESP used to show ranked fight information',
		sections: [
			{
				h2: 'Play the loop, not the highlight',
				paragraphs: [
					'One lucky hot drop does not move rank. Ten clean games do. Set a goal per session: inventory by 2:00, first rotate before second zone, no open-field 50/50s.',
					'If you die off spawn three times, change drop — see <a href="/blog/fortnite-best-drop-spots-2026/">drop spots</a>. Ego is not a strategy.',
					'Pro Tip — Cap sessions at six to eight ranked games. Quality drops when you queue angry.',
				],
			},
			{
				h2: 'Fights you should take',
				paragraphs: [
					'Take fights when you have health, cover, and a reason (zone, reboot, or a weak team). Skip fights that only exist because you heard a shot.',
					'Zero Build players should use natural cover ladders from the <a href="/blog/fortnite-zero-build-aggressive-strategies/">aggression guide</a>. Build players should not box-fight in storm for pride.',
					'Loadout mistakes lose more Elo than aim. Keep the <a href="/blog/fortnite-best-loadouts-2026/">loadout spine</a> before chasing mythics.',
				],
			},
			{
				h2: 'After the match',
				paragraphs: [
					'Write one note: drop, first death cause, rotate time. Fix one cause next game. Do not change settings, drop, and binds on the same night — see <a href="/blog/fortnite-pro-settings-guide/">pro settings</a>.',
					'Check live game health on <a href="https://status.epicgames.com/" target="_blank" rel="noopener noreferrer">Epic Games Status</a> before blaming lag.',
					'Try This Today: Play five ranked games with one drop and one rule — no third-party chase past 80m. Then read <a href="/updates/">Status</a> only if you also run a PC package after patches.',
				],
			},
		],
	},
	{
		id: 'fortnite-build-vs-zero-build',
		imageKey: 'battleRoyaleCombat',
		published: '2026-08-18',
		updated: '2026-08-23',
		category: 'Modes',
		featured: false,
		slug: 'fortnite-build-vs-zero-build',
		title: 'Fortnite Build vs Zero Build: Which to Play',
		metaDescription:
			'Compare Fortnite Build and Zero Build — fight distance, cover, loadouts, and who should queue each mode in 2026. Short guide for ranked players.',
		h1: 'Fortnite Build vs Zero Build: Which to Play',
		intro:
			'Both modes are Fortnite. They reward different habits. Pick the one that matches how you already fight.',
		keywords: ['fortnite zero build', 'fortnite build mode', 'zero build vs build', 'fortnite ranked', 'fortnite 2026'],
		imageAlt: 'Fortnite combat ESP in an open fight, useful for Zero Build reads',
		sections: [
			{
				h2: 'What actually changes',
				paragraphs: [
					'Build mode adds walls, ramps, and edits. Fights can reset in a box. Zero Build removes that. Cover is terrain, vehicles, and items you already have.',
					'Zero Build fights stay longer in the open. First shot and piece control matter more. Build fights punish slow edits and bad piece control.',
					'Mode rules sit on <a href="https://www.fortnite.com/" target="_blank" rel="noopener noreferrer">Fortnite</a>. Your job is to pick a queue and stay there for a full session.',
				],
			},
			{
				h2: 'Who should queue what',
				paragraphs: [
					'New players: start Zero Build. Less to learn at once. Use the <a href="/blog/fortnite-beginner-guide-2026/">beginner guide</a> first.',
					'If you already box and edit under pressure, Build ranked is fine. If you freeze when shot, Zero Build plus <a href="/blog/fortnite-zero-build-aggressive-strategies/">aggression habits</a> will climb faster.',
					'Loadouts overlap: shotgun + AR + heals. Zero Build leans harder on mid-range AR and mobility. See <a href="/blog/fortnite-best-loadouts-2026/">loadouts</a>.',
				],
			},
			{
				h2: 'Do not mix habits in one night',
				paragraphs: [
					'Switching modes every game resets your fight timing. Pick one mode for the session. Warm up in that mode — <a href="/blog/fortnite-warmup-maps-ranked/">warmup maps</a>.',
					'Try This Today: Queue six games in one mode only. After game three, write whether you died to open space or to a box. Then open <a href="/pricing/">Store</a> only if you already play on Windows PC and want the overlay package.',
				],
			},
		],
	},
	{
		id: 'fortnite-loadouts',
		imageKey: 'cheatsPackage',
		published: '2026-08-20',
		updated: '2026-08-23',
		category: 'Loadouts',
		featured: false,
		slug: 'fortnite-best-loadouts-2026',
		title: 'Fortnite Loadouts: Best Slot Order in 2026',
		metaDescription:
			'A simple Fortnite loadout spine for ranked: shotgun, AR, mobility, and heals. Slot order, swap habits, and when to flex for Zero Build in 2026.',
		h1: 'Fortnite Loadouts: Best Slot Order in 2026',
		intro:
			'Stop filling slots with clutter. Ranked loadouts are a spine: close gun, mid gun, mobility, heals, then one flex.',
		keywords: ['fortnite loadout', 'best fortnite loadout', 'fortnite shotgun ar', 'zero build loadout', 'fortnite 2026'],
		imageAlt: 'Fortnite wallhack loot view used to explain loadout and chest priority',
		sections: [
			{
				h2: 'The four-slot spine',
				paragraphs: [
					'Slot 1 shotgun (or close SMG in some metas). Slot 2 AR. Slot 3 mobility. Slot 4 heals. Flex is slot 5: sniper, utility, or extra heals.',
					'This matches how fights actually happen: close panic, then mid spray, then leave. See the <a href="/blog/fortnite-weapon-tier-list/">weapon tier list</a> after each patch.',
					'Pro Tip — If you die with a mythic in slot 1 and no shotgun, your order is wrong.',
				],
			},
			{
				h2: 'Zero Build vs Build tweaks',
				paragraphs: [
					'Zero Build: keep a mid AR you can beam with. Mobility matters more because you cannot box. Read <a href="/blog/fortnite-build-vs-zero-build/">Build vs Zero Build</a>.',
					'Build: shotgun timing still wins boxes. Do not carry three ARs. One close, one mid is enough.',
					'Patch days change numbers. Vaults change the spine. Check notes with our <a href="/blog/fortnite-patch-notes-guide/">patch notes guide</a>.',
				],
			},
			{
				h2: 'Practice the swap, not the screenshot',
				paragraphs: [
					'A pretty inventory loses if you cannot swap to shotgun in 0.3s. Warm that on <a href="/blog/fortnite-warmup-maps-ranked/">warmup maps</a>.',
					'Loot routes should fill this spine on a timer — <a href="/blog/fortnite-loot-routes-guide/">loot routes</a>.',
					'Try This Today: For five games, refuse a fifth gun until heals and mobility are filled. Then open <a href="/features/">Features</a> if you use loot markers on PC and need category toggles.',
				],
			},
		],
	},
	{
		id: 'fortnite-storm-rotation',
		imageKey: 'rebootFight',
		published: '2026-08-19',
		updated: '2026-08-23',
		category: 'Rotations',
		featured: false,
		slug: 'fortnite-storm-rotation-guide',
		title: 'Fortnite Storm Guide: Rotate Early, Win Late',
		metaDescription:
			'Learn Fortnite storm rotates — when to leave, how to take edges, and how to avoid late third parties in ranked Battle Royale and Zero Build in 2026.',
		h1: 'Fortnite Storm Guide: Rotate Early, Win Late',
		intro:
			'Most ranked deaths are late rotates, not bad aim. Leave early, take an edge, and stop sprinting through the open.',
		keywords: ['fortnite storm', 'fortnite rotate', 'zone rotations', 'fortnite ranked', 'zero build rotate'],
		imageAlt: 'Fortnite combat overlay during a storm rotation fight',
		sections: [
			{
				h2: 'Leave before you must',
				paragraphs: [
					'If you start the rotate when the storm is already on your heels, you will silhouette on the edge and get sprayed. Leave while you still have a choice of path.',
					'Pick a side, not the center. Center is a blender. Edges give cover and info. Tournament film in our <a href="/blog/fortnite-tournament-meta-guide/">tournament meta</a> post shows this every week.',
					'Pro Tip — Rotate after you heal, not while you heal. Sliding into zone on 20 HP is a donation.',
				],
			},
			{
				h2: 'Paths that survive third parties',
				paragraphs: [
					'Use terrain, buildings, and vehicles. Do not cut the widest open field. Zero Build players should ladder cover — <a href="/blog/fortnite-zero-build-aggressive-strategies/">aggression guide</a>.',
					'If you hear a fight on your path, go around or wait. Walking into two teams is how 4th places happen.',
					'Drop plan still matters. A bad landing with no exit makes every storm worse — <a href="/blog/fortnite-best-drop-spots-2026/">drop spots</a>.',
				],
			},
			{
				h2: 'Endgame is a side pick',
				paragraphs: [
					'Late circles reward the team that arrived first and held an angle. That is why ranked climb feels “lucky” when it is actually early movement — <a href="/blog/fortnite-ranked-climb-guide/">ranked climb</a>.',
					'Try This Today: In six games, start your first rotate 30 seconds earlier than usual. Note whether you took fewer storm tags. Then check <a href="/updates/">Status</a> after a big Fortnite patch if you also use a PC overlay.',
				],
			},
		],
	},
	{
		id: 'fortnite-reboot-plays',
		imageKey: 'headerArt',
		published: '2026-08-17',
		updated: '2026-08-23',
		category: 'Team Play',
		featured: false,
		slug: 'fortnite-reboot-plays-guide',
		title: 'Fortnite Reboot Guide: Safer Revive Plays',
		metaDescription:
			'How to reboot teammates in Fortnite without throwing the game — van timing, cover, third-party risk, and when to leave a downed mate in 2026.',
		h1: 'Fortnite Reboot Guide: Safer Revive Plays',
		intro:
			'Reboots win games and also throw them. Go to the van with a plan, or play the 2-v-3 and live.',
		keywords: ['fortnite reboot', 'fortnite reboot van', 'fortnite revive', 'duos trios', 'fortnite ranked'],
		imageAlt: 'Fortnite ESP player tags used when planning a reboot play',
		sections: [
			{
				h2: 'When to reboot at all',
				paragraphs: [
					'Reboot if the van is close, zone is kind, and you have heals. Skip it if storm is bad, you are low, and two teams are already crashing.',
					'A live 2-player team with loot beats a 3-player team that dies at the van. Ranked is not a loyalty test.',
					'Pro Tip — Call the plan in one sentence: “Van east after heals, then edge.” Silence is how people die together.',
				],
			},
			{
				h2: 'How to take the van',
				paragraphs: [
					'Heal first. Clear the immediate box. One player holds an angle. One interacts. Do not all stand in the van light.',
					'Leave as soon as the card starts. The reboot is not a campfire. Third parties time the audio.',
					'Radar-style awareness helps on PC overlays — see <a href="/fortnite-radar-hack/">Radar</a> — but the habit is still “hold, tap, leave.”',
				],
			},
			{
				h2: 'After they land',
				paragraphs: [
					'Give the returning teammate a gun and heals. Do not start a 50/50 in the open while they drop from the sky.',
					'Then rotate like a full squad again. Use <a href="/blog/fortnite-storm-rotation-guide/">storm rotates</a> so the reboot was not for a storm death.',
					'Try This Today: In trios, run two games where you skip a bad van on purpose. Note placement. Then read <a href="/support/">Support</a> only if a license or setup issue blocked you from playing.',
				],
			},
		],
	},
	{
		id: 'patch-notes-breakdown',
		imageKey: 'squadFight',
		published: '2026-07-29',
		updated: '2026-08-01',
		category: 'Patch Notes Breakdown',
		featured: false,
		slug: 'fortnite-patch-notes-guide',
		title: 'Fortnite Patch Notes: Buffs, Nerfs & Vaults',
		metaDescription:
			'Fortnite patch notes guide — buffs, nerfs, and vaults that reshape raid loadouts. After EAC patches, check fortnite cheats and fortnite cheats updates.',
		h1: 'Fortnite Patch Notes: Buffs, Nerfs, and Vaults',
		intro:
			'Stop skimming patch notes. Here is how buffs, nerfs, and vaults actually reshuffle the loot pool and your raid loadout priorities.',
		keywords: ['fortnite patch notes', 'buffs', 'nerfs', 'vaults', 'loot pool', 'fortnite intel'],
		imageAlt: 'Fortnite cheats combat ESP after a patch — player boxes and distance tags',
		sections: [
			{
				h2: 'Read patches like a player, not a spectator',
				paragraphs: [
					'Most players misread patch notes by chasing the loudest bullet point. A small SMG nerf gets a rant video while a quiet mobility tweak silently rewires mid-game. The best ranked grinders treat patches like accountants — what changed in expected value?',
					`Official notes publish through ${EXT.fortnite} and ${EXT.fortnite}. Use those primary sources first, then translate Easy Anti-Cheat line into inventory decisions for your playlist.`,
					'Pro Tip — Three-question filter: For every note ask: (1) Does this change my loot path? (2) Does this change my loadout priority? (3) Does this change my fight distance? If all three are no, ignore the drama.',
				],
			},
			{
				h2: 'Buff, nerf, and vault framework',
				paragraphs: [
					'Vaults are binary — remove the item from your mental loot pool immediately. Heavy nerfs demote a weapon from core to flex. Light nerfs keep a gun if your accuracy is above lobby average. Buffs deserve a 10-game test before full buy-in. New items need spawn rate and best distance learning first.',
					'If a meta AR takes a minor bloom or damage trim, it can still be S-tier on expected value — see our <a href="/blog/fortnite-weapon-tier-list/">Fortnite weapon tier list</a>. If a shotgun loses substantial headshot multiplier, close-range TTK windows shift the same day.',
				],
			},
			{
				h2: 'How notes reshuffle loadout priority',
				paragraphs: [
					'When mid-range ARs are strong, prioritize rarity on AR earlier in loot routes. When mobility is nerfed or vaulted, uncontested chains with shorter hops beat hot drops that require escapes. When heals are buffed, aggressive third-parties become safer — which powers strategies in our <a href="/blog/fortnite-zero-build-aggressive-strategies/">zero-build aggression guide</a>.',
					'Also separate balance patches from cosmetic and shop notes. Skin leaks are fun; they do not change TTK. Keep patch-day focus on weapons, healing, movement, and map POI changes.',
				],
			},
			{
				h2: 'Late-season checklist and next steps',
				paragraphs: [
					'Post-patch checklist: skim official notes for vaults first, update your shotgun/AR/mobility/heals spine, play 10 intentional test games, revisit tier-list assumptions, and adjust drop routes if mobility or loot changed.',
					`On big update mornings, confirm ${EXT.status} is healthy before blaming your settings. If you also use fortnite cheats in-match, check <a href="/updates/">Fortnite Cheats Updates</a> after Easy Anti-Cheat patches.`,
					'Try This Today: Open the latest official patch notes and highlight vaults. Rewrite your loadout priority on paper. Queue a focused 5-game test block and note which fights felt different at 30–60m vs 0–15m.',
				],
			},
		],
	},
	{
		id: 'fortnite-skin-leaks',
		imageKey: 'headerArt',
		published: '2026-07-27',
		updated: '2026-08-01',
		category: 'Cosmetics & Skins',
		featured: false,
		slug: 'fortnite-skin-leaks-guide',
		title: 'Fortnite Skin Leaks: Season Cosmetics Guide',
		metaDescription:
			'Fortnite skin leaks and shop advice — which season cosmetics are worth CP before the next reset. Save smart and skip FOMO bundles on fortniteaimbot.com.',
		h1: 'Fortnite Skin Leaks Worth Your CP',
		intro:
			'The next season is coming. Here is which leaked and rotating cosmetics are actually worth buying before the shop resets hard.',
		keywords: ['fortnite skin leaks', 'cosmetics', 'item shop', 'fortnite intel', 'fortnite cheats'],
		imageAlt: 'Fortnite cheats lobby ESP showing player skins and boxes',
		sections: [
			{
				h2: 'Stop impulse buying before Season 4',
				paragraphs: [
					'Most players blow V-Bucks the week before a new season and then cannot buy the Battle Pass. Controversial take: most Item Shop impulse buys do not improve your win rate or locker happiness a month later.',
					`Shop rotations and Battle Pass exclusives are official through ${EXT.fortnite}. Leaks are entertainment — not a shopping list. Use them to decide what to skip.`,
					'Pro Tip — Locker performance: Pros pick clean silhouettes. Busy outfits can hide enemy outlines in chaotic zero-build endgames. Style is cool; readability wins games.',
				],
			},
			{
				h2: 'Worth-it criteria every shop reset',
				paragraphs: [
					'Green: unique collab or ripple you will still wear in 90 days. Yellow: cool but overlaps three skins you already own. Red: FOMO bundle with fillers you will never equip. Always reserve Pass or next-season buffer first.',
					'Check bundle math. A 2,800 bundle with two fillers is often worse than waiting for the 1,500 standalone. If the leaked wrap or pickaxe is the only piece you want, skip the full set unless the discount is real.',
				],
			},
			{
				h2: 'Leak watchlist and shop ritual',
				paragraphs: [
					'Treat late-season leak waves as theme previews, not confirmed shop dates. If a high-demand collab leaks, decide budget before it hits — not during the five-minute panic.',
					'Daily reset ritual: open shop for 60 seconds, check wishlist, leave. Liquidity is power at season transitions. For competitive readability tips, pair this with our <a href="/blog/fortnite-pro-settings-guide/">pro settings breakdown</a>.',
					'Try This Today: Write a 5-skin wishlist max. Set a V-Bucks floor you will not spend below until Season 4. Skip one FOMO bundle on purpose this week.',
				],
			},
		],
	},
	{
		id: 'fortnite-weapon-tier-list',
		imageKey: 'aimbotCombat',
		published: '2026-07-25',
		updated: '2026-08-01',
		category: 'Weapon Tier Lists',
		featured: true,
		slug: 'fortnite-weapon-tier-list',
		title: 'Fortnite Weapon Tier List: Best Guns Ranked',
		metaDescription:
			'Fortnite weapon tier list with data-backed TTK analysis — best ARs, SMGs, and loadout pairings for matches and zero-build. Pair with fortnite cheats ESP reads.',
		h1: 'Fortnite Weapon Tier List: Best Guns Ranked',
		intro:
			'Community tier lists underrate meta ARs. The damage-per-mag and mid-range TTK numbers say otherwise.',
		keywords: ['fortnite tier list', 'fortnite weapons', 'ttk', 'fortnite meta', 'fortnite intel'],
		imageAlt: 'Fortnite cheats loot ESP showing weapon names and distances',
		sections: [
			{
				h2: 'Why the Hammer AR belongs in S-tier',
				paragraphs: [
					"Creator tier lists are entertainment, not science. They rank flashy mythics while the Hammer AR quietly prints mid-range eliminations because damage-per-second consistency beats higher-ceiling guns average players cannot control.",
					'S-tier means best expected value across 100 raid fights. Mid-range ARs win at 30–70 meters — the distances where zero-build and endgame actually happen. Shotguns own 0–15m. Snipers own 80m+. Everything between is AR country.',
					`Confirm live values after patches on ${EXT.fortnite}. Hierarchy logic stays useful even when decimals nudge.`,
					'Pro Tip — Spray discipline: Pros tap or micro-burst until bloom settles, then commit. Treat Hammer like a laser until the enemy wide-peeks — then dump.',
				],
			},
			{
				h2: 'Damage, TTK, and peek theory',
				paragraphs: [
					'Working purple/gold Hammer-style numbers: body ~33–36, head ~50–58, 6-bullet controlled spray ~198–216, 8-bullet dump ~264–288. The real metric is damage before disengage — magazine pressure forgives a whiffed first burst.',
					'First-shot accuracy is the hidden S-tier stat. Cadence: peek → 3–4 bullets → jiggle back → re-peek. Do not stand still for ego sprays unless the enemy is healing.',
					'Pair this mid-range plan with loot discipline from our <a href="/blog/fortnite-loot-routes-guide/">Fortnite loot routes guide</a>.',
				],
			},
			{
				h2: 'Loadout pairings, mistakes, and practice',
				paragraphs: [
					'Core: meta AR + high-burst shotgun + mobility + heals. In zero-build, this supports the laddering strategies in our <a href="/blog/fortnite-zero-build-aggressive-strategies/">aggression guide</a>.',
					'Common mistakes: full-spraying from 80m+, re-peeking the same pixel, swapping to SMG at 40m out of habit, never practicing crouch-spray in offline practice.',
					'Try This Today: Prioritize Hammer for 10 games. Count your first four bullets in every mid fight. If you die inside 15m without shotgun out, fix loadout timing — not the AR.',
					'Players who also use aim-assist tooling can review <a href="/fortnite-aimbot/">Fortnite Aimbot</a> profiles after they lock a sens — mechanics first, tools second.',
				],
			},
		],
	},
	{
		id: 'fortnite-zero-build-meta',
		imageKey: 'battleRoyaleCombat',
		published: '2026-07-22',
		updated: '2026-08-01',
		category: 'zero-build',
		featured: true,
		slug: 'fortnite-zero-build-aggressive-strategies',
		title: 'Fortnite zero-build Meta: 5 Aggressive Strategies',
		metaDescription:
			'Break the passive Fortnite zero-build meta with 5 aggressive strategies — timings, damage windows, and fight paths that win matches. Pair with fortnite ESP reads.',
		h1: 'Fortnite zero-build Meta: 5 Aggressive Strategies',
		intro:
			'Passive third-partying is dead weight. These five aggressive zero-build strategies flip mid-game fights before the lobby even rotates.',
		keywords: ['fortnite zero-build', 'fortnite ranked', 'aggressive strategies', 'fortnite meta', 'fortnite esp'],
		imageAlt: 'Fortnite cheats ESP in an open field for zero-build fights',
		sections: [
			{
				h2: 'Why the zero-build meta feels soft',
				paragraphs: [
					'Most zero-build players wait behind a rock for the last two teams to trade, then spray into a mess. That soft meta is why ranks stall. Strong fighters manufacture first-shot advantage and leave before the third party arrives.',
					'A clean first-shot AR spray at 40–55 meters can delete 80–120 HP before the opponent ads. That window is the game. Information tools like <a href="/fortnite-esp/">Fortnite ESP</a> help — but aggression still needs cover discipline.',
					'Pro Tip — Decide your exit before you swing. Take a 150+ damage window, then hard disengage with mobility before the usual 4–7 second third-party clock.',
				],
			},
			{
				h2: 'Five aggressive strategies that still work',
				paragraphs: [
					'1) Pre-aim rotations — hold upper-chest crosshair on every cover hop; clear angles in 0.4–0.6s. 2) Mobility wedge entries — land 8–12m past the target for a clean shotgun angle, not a panic 180. 3) Double-peek shotgun timing — fake left, finish right when their chamber is weak.',
					'4) Natural cover laddering — never more than 8–12m from hard cover. 5) Zone edge pressure — spray late rotates silhouetted on storm tint, then hold the angle instead of ego-chasing.',
					`Mode rules evolve with ${EXT.fortnite} seasons; the geometry of first-shot advantage does not.`,
				],
			},
			{
				h2: 'Warmup checklist and next guides',
				paragraphs: [
					'Before ranked: 10 minutes aim or peek maps, loadout priority AR + shotgun + mobility + heals, two POIs with strong cover ladders, and a 10-game first-shot aggression block.',
					'Pair this article with <a href="/blog/fortnite-loot-routes-guide/">loot routes</a>, <a href="/blog/fortnite-weapon-tier-list/">weapon tiers</a>, and <a href="/blog/fortnite-warmup-maps-ranked/">warmup maps</a>.',
					'Try This Today: Queue zero-build and force first contact when you have shield + AR. Track whether you disengaged before the 7-second third-party window.',
				],
			},
		],
	},
	{
		id: 'fortnite-tournament-meta',
		imageKey: 'rebootFight',
		published: '2026-07-20',
		updated: '2026-08-01',
		category: 'Esports & Tournaments',
		featured: false,
		slug: 'fortnite-tournament-meta-guide',
		title: 'Fortnite Tournament Meta: What Winners Drop',
		metaDescription:
			'Fortnite tournament meta guide — what pro winners drop, how they loot, and which mid-game habits translate to your raid climb in 2026. Pair with fortnite cheats.',
		h1: 'Fortnite Tournament Meta: What Winners Drop and Why',
		intro:
			'Tournament winners are not lucky drop gods. Here is what their POIs, loadouts, and mid-game habits actually optimize for.',
		keywords: ['fortnite esports', 'tournament drops', 'fortnite meta', 'fortnite intel', 'fortnite cheats'],
		imageAlt: 'Fortnite aimbot scope view with ESP through combat explosions',
		sections: [
			{
				h2: 'Watch tournament film like a coach',
				paragraphs: [
					`Most FNCS drop threads name a POI without contest rate, zone percent, split potential, or exit paths. Pros pick drops like investors pick assets — expected value over vibes. Start with ${EXT.competitive} schedules and VODs, then tag habits.`,
					'Pro Tip — Tag the VOD: landing plan, first heal, first rotate, first voluntary fight, and endgame key move. Five tags beat a full passive watch.',
				],
			},
			{
				h2: 'Drop EV and loadout patterns',
				paragraphs: [
					'Score every POI on contest rate, loot quality by ~2:00, zone pain, exit path, and split potential. Edge POIs with clean exits often beat sexy mid POIs that look good on stream.',
					'Expect shotgun + mid AR + mobility + heals as the spine. Mythics are taken when free, not forced — matching our <a href="/blog/fortnite-weapon-tier-list/">weapon tier list</a>.',
				],
			},
			{
				h2: 'What translates to matches',
				paragraphs: [
					'Translate loot-timer discipline, loadout spine, early rotates, and selective fights. Do not blindly mirror a trio drop in solo queue.',
					'Winners rotate early enough to choose sides. Zone edge pressure from our <a href="/blog/fortnite-zero-build-aggressive-strategies/">zero-build guide</a> shows up constantly in endgames.',
					'Try This Today: Watch 15 minutes of a winner VOD with five timestamps. Steal one mid-game habit only. Run it for a 6-game raid block.',
				],
			},
		],
	},
	{
		id: 'fortnite-loot-routes',
		imageKey: 'battleRoyaleIslandMap',
		published: '2026-07-18',
		updated: '2026-08-01',
		category: 'raid Meta',
		featured: true,
		slug: 'fortnite-loot-routes-guide',
		title: 'Fortnite Loot Routes: Full Loadout Every Spawn',
		metaDescription:
			'High-percentage Fortnite loot routes that leave spawn with strong guns, good armor, and chest loot — ranked loot paths that win mid-game fights in 2026.',
		h1: 'Fortnite Loot Routes: Full Loadout Every Spawn',
		intro:
			'Winning starts before the first fight. These loot routes consistently convert drops into gold loadouts and full heals.',
		keywords: ['fortnite loot routes', 'fortnite drops', 'gold loot', 'fortnite ranked', 'fortnite esp'],
		imageAlt: 'Fortnite cheats item wallhack showing loot and weapons through builds',
		sections: [
			{
				h2: 'The real ranked bottleneck is early inventory',
				paragraphs: [
					'Most raid deaths early in the raid happen because players loot randomly. Pros treat the first 90 seconds like a speedrun with a shopping list — not a deathmatch.',
					'Controversial take: drop spot matters less than loot sequence. A mediocre POI with discipline beats a stacked POI with panic looting.',
					'Pro Tip — Secure shotgun, AR, and heals before hunting kills. Early ego chases keep hot-drop players hardstuck.',
				],
			},
			{
				h2: 'Three route archetypes that print Elo',
				paragraphs: [
					'Route A — contested edge POI (3–6 players): land outer roof loot, snake inward, leave before late third parties (~2 minutes). Route B — uncontested three-POI chain: sacrifice early kills for purple/gold inventory by minute three. Route C — mid-map surge: loot vacuum piles 90–150 seconds after hot drops empty.',
					'Timing targets: 0–20s first gun, 20–50s clear cluster, 50–80s chests + minis, 80–120s upgrade or leave. Slot priority: shotgun, AR, mobility, heals, flex.',
					`POI names rotate with ${EXT.fortnite} seasons — keep the geometry, not the landmark brand.`,
				],
			},
			{
				h2: 'Convert strong guns into wins',
				paragraphs: [
					'Pair these routes with <a href="/blog/fortnite-zero-build-aggressive-strategies/">zero-build aggression</a>, <a href="/blog/fortnite-weapon-tier-list/">weapon tiers</a>, and <a href="/blog/fortnite-best-drop-spots-2026/">drop spots</a>. Leave spawn rich so mid-game becomes a skill check.',
					'If you use loot ESP markers in practice, read <a href="/fortnite-esp/">Fortnite ESP</a> for category toggles — then still run the timer so habits stay sharp without overlays.',
					'Try This Today: Run one uncontested chain for 8 games. Screenshot inventory at 2:30 and compare rarities before adding a contested edge day.',
				],
			},
		],
	},
	{
		id: 'fortnite-pro-settings',
		imageKey: 'cheatsPackage',
		published: '2026-07-12',
		updated: '2026-08-01',
		category: 'Pro Player Setups',
		featured: false,
		slug: 'fortnite-pro-settings-guide',
		title: 'Fortnite Pro Settings: Champion Setup Guide',
		metaDescription:
			'Fortnite pro settings guide — sensitivity ranges, binds philosophy, and practice routines for matches and zero-build in 2026. Pair with fortnite ESP reads.',
		h1: 'Fortnite Pro Settings: Champion-Inspired Setup',
		intro:
			'You do not need exact pro digits — you need champion settings philosophy. Here is a setup you can adapt today.',
		keywords: ['fortnite settings', 'fortnite sensitivity', 'pro setup', 'fortnite ranked', 'fortnite cheats'],
		imageAlt: 'Fortnite aimbot skeleton box and weapon tag used in pro setups',
		sections: [
			{
				h2: 'Settings remove friction — they are not magic',
				paragraphs: [
					"Copying a world champion's settings will not make you a world champion. Copying stable sens, low clutter, rEasy Anti-Cheatable binds, and a ruthless warmup removes friction so aim and decisions can improve.",
					'Pro Tip — Change one variable at a time. Never retune sens, binds, and HUD the same night.',
				],
			},
			{
				h2: 'Sensitivity, binds, and performance',
				paragraphs: [
					'Use an eDPI band that lets you 180 with a controlled sseason without over-flicking shotguns. If you overshoot close targets, lower slightly. If you cannot track strafers at 40m with Hammer AR, raise cautiously — then lock settings for 14 days.',
					'Put edit, crouch, and mobility on keys you can hit while still aiming. Make slot 1 shotgun and slot 2 AR muscle memory. Prefer performance clarity over cinema settings; motion blur off.',
					`Hardware and competitive context evolve, but fundamentals stay — see ${EXT.competitive} for high-level play standards.`,
				],
			},
			{
				h2: 'Champion-style practice routine',
				paragraphs: [
					'0–10 minutes aim tracker, 10–20 peek or movement drills, 20–30 realistic fights, then a raid. Pair with our <a href="/blog/fortnite-warmup-maps-ranked/">warmup map categories</a>.',
					'If you later configure Aimbot smoothness for practice tooling, start from <a href="/fortnite-soft-aim/">soft aim</a> after your raw sens is locked — never chase both variables at once.',
					'Try This Today: Write dpi + sens, adjust at most once by a small percent, then play 5 games without touching settings again.',
				],
			},
		],
	},
	{
		id: 'fortnite-warmup-maps',
		imageKey: 'playerEsp',
		published: '2026-07-08',
		updated: '2026-08-01',
		category: 'Warmup & Practice',
		featured: false,
		slug: 'fortnite-warmup-maps-ranked',
		title: 'Fortnite Warmup Routine: 10 Maps Before Ranked',
		metaDescription:
			'Ten Fortnite warmup map categories and a 25-minute routine pros use before a raid — aim, peeks, movement, and zero-build fight reps for 2026.',
		h1: 'Fortnite Warmup Maps Pros Use Before Ranked',
		intro:
			'Stop freezing in first fight. These warmup categories get your mechanics hot before you start a raid.',
		keywords: ['fortnite warmup', 'aim trainers', 'fortnite ranked', 'fortnite meta', 'fortnite cheats'],
		imageAlt: 'Fortnite cheats ESP boxes in a lobby warmup before ranked',
		sections: [
			{
				h2: 'Warmups win Elo before the queue starts',
				paragraphs: [
					'Your first two raid fights often decide whether a session tilts. Pros arrive sharp from practice maps — another 40 pub stomps is a worse warmup than 20 focused minutes.',
					`Find current island codes in offline practice via ${EXT.fortnite}. We list durable categories because brittle codes die every season update.`,
					'Pro Tip — Keep a sticky core playlist. Swap one map per week, not every day.',
				],
			},
			{
				h2: '25-minute routine and ten map categories',
				paragraphs: [
					'0–8 min aim tracker. 8–15 min peek drills or zero-build peek map. 15–22 min realistic fight / close fight / raid fights. 22–25 min reset, then a raid.',
					'Categories: pure aim tracker, shotgun scenarios, mid-range AR tracking (AR practice), cover peeks, zero-build cover peeks, realistic 1v1s, raid fights, reload/swap timing, movement tech, scrim-style multi-fight maps.',
					'zero-build mains should replace peek drillss with double-peek ladders from our <a href="/blog/fortnite-zero-build-aggressive-strategies/">aggression guide</a>.',
				],
			},
			{
				h2: 'Mistakes that waste warmup time',
				paragraphs: [
					'Only melting easy bots, ignoring mid-range, warming up 90 minutes then playing two tilted games, and changing binds mid-warmup all waste Elo.',
					'After mechanics are hot, information tools like <a href="/fortnite-radar-hack/">radar hack</a> or <a href="/fortnite-esp/">ESP</a> are optional overlays — they do not replace a cold shotgun timing. For the full stack overview, see <a href="/fortnite-cheats/">Fortnite cheats</a>.',
					'Try This Today: Favorite four maps across aim, peeks, fights, and endgame. Run the 25-minute block, then play only six raid games.',
				],
			},
		],
	},
	{
		id: 'fortnite-cheats-complete-guide',
		imageKey: 'battleRoyaleCombat',
		published: '2026-07-31',
		updated: '2026-08-01',
		category: 'Fortnite Cheats',
		featured: true,
		slug: 'fortnite-cheats-complete-guide-2026',
		title: 'Fortnite Cheats 2026: Complete Undetected Guide',
		metaDescription:
			'Complete fortnite cheats guide for Windows PC — ESP boxes, soft aim, and EAC maintenance in 2026. Compare the full package and buy.',
		h1: 'Fortnite Cheats 2026: The Complete Undetected Guide',
		intro:
			'Searching for Fortnite cheats in 2026? This guide covers ESP wallhack, Aimbot, radar, undetected maintenance, and how fortnite cheats searchers map to the same Windows PC package.',
		keywords: ['fortnite cheats', 'undetected fortnite cheats', 'fortnite cheats', 'esp', 'aimbot', 'eac-bypass'],
		imageAlt: 'Fortnite cheats ESP overlay with player names, loot, and wallhack',
		sections: [
			{
				h2: 'What Fortnite cheats actually include',
				paragraphs: [
					'Fortnite cheats usually mean visibility plus combat assist: player ESP wallhack, chest markers, 2D radar threat cues, and configurable Aimbot. Buyers who type fortnite cheats are looking for the same stack — different wording, same raid loop.',
					`Official seasons and client updates publish through ${EXT.fortnite} and ${EXT.fortnite}. Anti-cheat context lives on Easy Anti-Cheat. Our <a href="/fortnite-cheats/">Fortnite cheats pillar</a> is the commercial landing; this post is the long-form explainer.`,
					'Pro Tip — One license, full loop: Prefer a maintained package over stacking single-feature downloads that break on every patch.',
				],
			},
			{
				h2: 'ESP, wallhack, Aimbot, and radar roles',
				paragraphs: [
					'ESP/wallhack answers where squads and loot sit. Radar covers flanks outside FOV. Aimbot covers firefight consistency once you commit. Soft aim profiles help when you want smoother tracking — see <a href="/fortnite-soft-aim/">soft aim</a> and <a href="/fortnite-aimbot/">Aimbot controls</a>.',
					'Deep pages: <a href="/fortnite-esp/">Fortnite ESP</a>, <a href="/fortnite-wallhack/">wallhack</a>, <a href="/fortnite-radar-hack/">radar hack</a>, <a href="/fortnite-aimbot-hack/">aimbot hack</a>, and <a href="/fortnite-esp-hack/">ESP hack</a>.',
				],
			},
			{
				h2: 'Undetected Fortnite cheats and EAC patches',
				paragraphs: [
					'Undetected Fortnite cheats require rebuilds after Easy Anti-Cheat and major Fortnite updates. No vendor can promise permanent undetected status — check <a href="/updates/">Updates</a> before you queue.',
					`On patch mornings confirm ${EXT.status}, then read our <a href="/eac-bypass/">EAC bypass guide</a> and <a href="/blog/undetected-fortnite-cheats-eac/">undetected Easy Anti-Cheat notes</a>.`,
					'Try This Today: Open the hacks pillar, skim Features, compare Pricing ($35 monthly / $150 lifetime), and bookmark Updates for the next Fortnite patch.',
				],
			},
			{
				h2: 'Next steps — pricing, setup, and cheats pages',
				paragraphs: [
					'Ready to buy? Start at the <a href="/fortnite-cheats/">Fortnite cheats pillar page</a>, then <a href="/pricing/">Pricing</a> and <a href="/setup/">Setup</a>. Prefer cheats wording? Read <a href="/fortnite-cheats-2026/">fortnite cheats 2026</a> and <a href="/blog/escape-from-fortnite-cheats-buyers-guide/">cheats buyers guide</a>.',
					'Support: include your order ID on the <a href="/support/">Support</a> page after checkout.',
				],
			},
		],
	},
	{
		id: 'escape-from-fortnite-cheats-buyers-guide',
		imageKey: 'cheatsPackage',
		published: '2026-07-30',
		updated: '2026-08-01',
		category: 'Fortnite Cheats',
		featured: true,
		slug: 'escape-from-fortnite-cheats-buyers-guide',
		title: 'Fortnite Cheats Buyers Guide: What to Check',
		metaDescription:
			'Fortnite cheats buyers guide for Windows PC — ESP boxes, soft aim, pricing, and Easy Anti-Cheat status. Compare fortnite cheats before checkout.',
		h1: 'Fortnite Cheats Buyers Guide: What Matters in 2026',
		intro:
			'Shopping for fortnite cheats? Use this checklist for ESP wallhack, Aimbot, radar, EAC maintenance, and license length — then cross-check the Fortnite cheats pillar before checkout.',
		keywords: ['fortnite cheats', 'best fortnite cheats', 'fortnite cheats', 'buyers guide', 'undetected'],
		imageAlt: 'Fortnite cheats ESP boxes and tracers on bots for a buyers preview',
		sections: [
			{
				h2: 'Buyer checklist before you pay',
				paragraphs: [
					'Confirm Windows PC support, EAC maintenance cadence, ESP + Aimbot + radar in one license, clear pricing, and a live Updates log. Skip tools that only ship a wallhack with no rebuild notes.',
					'Primary commercial pages: <a href="/best-fortnite-cheats/">best Fortnite cheats</a>, <a href="/fortnite-cheats-2026/">cheats 2026</a>, and <a href="/fortnite-cheats/">Fortnite cheats</a> (hacks is the main brand keyword).',
				],
			},
			{
				h2: 'Hacks vs cheats wording',
				paragraphs: [
					'Fortnite cheats and fortnite cheats describe the same product category for most searchers. We lead with hacks on fortniteaimbot.com while keeping cheats pages for buyers who use that query.',
					`Balance and anti-cheat reality still come from ${EXT.fortnite}. Product rebuild timing is on our <a href="/updates/">Updates</a> page.`,
				],
			},
			{
				h2: 'Feature pages worth opening',
				paragraphs: [
					'Open <a href="/fortnite-esp/">ESP</a>, <a href="/fortnite-aimbot/">Aimbot</a>, <a href="/features/">Features</a>, and <a href="/pricing/">Pricing</a> before you buy. Delivery and activation steps live on <a href="/setup/">Setup</a>.',
					'Related reading: <a href="/blog/fortnite-cheats-complete-guide-2026/">hacks complete guide</a> and <a href="/blog/fortnite-cheats-2026-whats-new/">cheats 2026 what\'s new</a>.',
					'Try This Today: Write your must-have list (ESP categories, Aimbot smoothness, lifetime vs monthly), then compare against Features once.',
				],
			},
		],
	},
	{
		id: 'fortnite-cheats-2026-whats-new',
		imageKey: 'hero',
		published: '2026-07-28',
		updated: '2026-08-01',
		category: 'Fortnite Cheats',
		featured: false,
		slug: 'fortnite-cheats-2026-whats-new',
		title: 'Fortnite Cheats 2026: What Changed This Year',
		metaDescription:
			'Fortnite cheats 2026 overview — ESP boxes, soft aim, and for Windows PC with EAC maintenance. Pair with the hacks pillar before buying.',
		h1: 'Fortnite Cheats 2026: What Buyers Need Now',
		intro:
			'Fortnite cheats 2026 searches spike every season. Here is what still matters: maintained ESP wallhack, Aimbot profiles, radar awareness, and rebuilds after Easy Anti-Cheat patches.',
		keywords: ['fortnite cheats 2026', 'fortnite cheats', 'eac-bypass', 'esp', 'aimbot'],
		imageAlt: 'Fortnite cheats tracer ESP in a 2026 match showing bots through cover',
		sections: [
			{
				h2: 'Why 2026 buyers still need maintenance',
				paragraphs: [
					'Season maps, weapons, and EAC updates still break stale tools. A 2026-ready package publishes rebuild notes — not a frozen prior-year build.',
					`Track official messaging on ${EXT.fortnite}, then confirm product status on <a href="/updates/">Updates</a> and <a href="/fortnite-cheats-2026/">the cheats 2026 landing</a>.`,
				],
			},
			{
				h2: 'Keyword map: cheats 2026 ↔ hacks',
				paragraphs: [
					'Use the <a href="/fortnite-cheats-2026/">Fortnite cheats 2026 guide</a> for cheats-year intent and the <a href="/fortnite-cheats/">Fortnite cheats pillar page</a> for the primary hacks intent. Both point to the same ESP + Aimbot + radar stack.',
					'Also see <a href="/blog/fortnite-cheats-complete-guide-2026/">hacks guide</a> and <a href="/undetected-fortnite-cheats/">undetected status</a>.',
				],
			},
			{
				h2: 'Pricing and setup for new buyers',
				paragraphs: [
					'Monthly ($35) and lifetime ($150) plans share features. After checkout, follow <a href="/setup/">Setup</a>. Questions go to <a href="/support/">Support</a> with your order ID.',
					'Try This Today: Skim Features, open Pricing, and bookmark Updates before the next Fortnite patch window.',
				],
			},
		],
	},
	{
		id: 'fortnite-aimbot-settings-guide',
		imageKey: 'aimbotCombat',
		published: '2026-07-26',
		updated: '2026-08-01',
		category: 'Aimbot',
		featured: false,
		slug: 'fortnite-aimbot-settings-guide',
		title: 'Fortnite Aimbot Settings: Smooth FOV Guide',
		metaDescription:
			'Fortnite aimbot settings for Windows PC — soft aim, FOV, bone priority, and per-weapon profiles. Tune assist, then review the hacks pages.',
		h1: 'Fortnite Aimbot Settings: Smoothness, FOV & Soft Aim',
		intro:
			'Configure Fortnite Aimbot without snapping every fight. This guide covers smoothness, FOV, bone priority, per-weapon profiles, and how Aimbot fits into Fortnite cheats packages.',
		keywords: ['fortnite aimbot', 'aimbot settings', 'soft aim', 'fortnite cheats', 'fov'],
		imageAlt: 'Fortnite aimbot FOV circle and ESP labels for smooth aim settings',
		sections: [
			{
				h2: 'Start conservative, then tune',
				paragraphs: [
					'Begin with moderate FOV and higher smoothness. Instant-snap configs look unnatural and are harder to control in zero-build peeks. Hotkeys let you disable Aimbot mid-match.',
					'Full control list: <a href="/fortnite-aimbot/">Fortnite Aimbot</a>, <a href="/fortnite-aimbot-hack/">aimbot hack</a>, and <a href="/fortnite-soft-aim/">soft aim</a>.',
				],
			},
			{
				h2: 'Pair Aimbot with ESP and radar',
				paragraphs: [
					'Aimbot alone does not solve rotations. Pair with <a href="/fortnite-esp/">ESP</a> and <a href="/fortnite-radar-hack/">radar</a> inside the <a href="/fortnite-cheats/">Fortnite cheats</a> package.',
					`Weapon balance shifts on ${EXT.fortnite} — revisit FOV after combat patches.`,
				],
			},
			{
				h2: 'Easy Anti-Cheat notes and next steps',
				paragraphs: [
					'After Easy Anti-Cheat patches, confirm Aimbot modules on <a href="/updates/">Updates</a>. Background: <a href="/eac-bypass/">Easy Anti-Cheat guide</a>.',
					'Try This Today: Create separate AR and SMG profiles, play five games, then adjust only one slider per session.',
				],
			},
		],
	},
	{
		id: 'fortnite-esp-wallhack-explained',
		imageKey: 'espWallhack',
		published: '2026-07-24',
		updated: '2026-08-01',
		category: 'ESP & Wallhack',
		featured: false,
		slug: 'fortnite-esp-wallhack-explained',
		title: 'Fortnite ESP & Wallhack Explained Clearly',
		metaDescription:
			'Fortnite ESP and wallhack explained — player boxes, chest markers, and distance readouts for Windows PC. Learn overlays on the hacks pages.',
		h1: 'Fortnite ESP and Wallhack Explained',
		intro:
			'Fortnite ESP (wallhack) shows players, loot, and threats through terrain. Here is how overlays work, what to toggle, and how ESP fits into Fortnite cheats and fortnite cheats packages.',
		keywords: ['fortnite esp', 'fortnite wallhack', 'esp hack', 'fortnite cheats', 'loot esp'],
		imageAlt: 'Fortnite cheats wallhack showing players through walls with distance',
		sections: [
			{
				h2: 'ESP categories that matter in matches',
				paragraphs: [
					'Toggle enemy outlines, loot/chest pins, vehicle cues, and distance readouts. Too many overlays create noise — keep raid-critical categories on during rotations.',
					'Landings: <a href="/fortnite-esp/">Fortnite ESP</a>, <a href="/fortnite-wallhack/">wallhack</a>, <a href="/fortnite-esp-hack/">ESP hack</a>.',
				],
			},
			{
				h2: 'Wallhack vs radar vs Aimbot',
				paragraphs: [
					'Wallhack/ESP is line-of-sight information through walls. Radar covers off-screen flanks. Aimbot is combat assist. The <a href="/fortnite-cheats/">hacks pillar</a> bundles all three.',
					`Map and loot systems evolve with ${EXT.fortnite} seasons — toggleable categories stay useful when POIs rotate.`,
				],
			},
			{
				h2: 'Undetected ESP maintenance',
				paragraphs: [
					'ESP modules rebuild with the package after EAC patches. Check <a href="/updates/">Updates</a> and <a href="/undetected-fortnite-cheats/">undetected status</a> before raid blocks.',
					'Try This Today: Enable player + loot ESP only for ten games, then add radar range once your eyes adjust.',
				],
			},
		],
	},
	{
		id: 'undetected-fortnite-cheats-eac',
		imageKey: 'rebootFight',
		published: '2026-07-22',
		updated: '2026-08-01',
		category: 'Undetected & Easy Anti-Cheat',
		featured: true,
		slug: 'undetected-fortnite-cheats-eac',
		title: 'Undetected Fortnite Cheats & Easy Anti-Cheat Reality',
		metaDescription:
			'Undetected fortnite cheats and Easy Anti-Cheat reality — ESP boxes, soft aim, and rebuilds for Windows PC. Check Updates before queueing post-patch.',
		h1: 'Undetected Fortnite Cheats and Easy Anti-Cheat Reality',
		intro:
			'Undetected Fortnite cheats mean active EAC maintenance — not a forever guarantee. Learn the patch-day workflow, where to check status, and how hacks/cheats pages fit together.',
		keywords: ['undetected fortnite cheats', 'eac-bypass', 'fortnite cheats', 'fortnite cheats', 'maintenance'],
		imageAlt: 'Undetected Fortnite aimbot ESP skeleton overlay in a live match',
		sections: [
			{
				h2: 'What undetected really means',
				paragraphs: [
					'Undetected Fortnite cheats are rebuilt when Easy Anti-Cheat or Fortnite client patches change detection surface. Permanent undetected claims are marketing fiction.',
					'Status pages: <a href="/updates/">Updates</a>, <a href="/undetected-fortnite-cheats/">undetected guide</a>, <a href="/eac-bypass/">EAC bypass</a>.',
				],
			},
			{
				h2: 'Patch-day workflow',
				paragraphs: [
					`Check ${EXT.status} for Epic health, wait for our Updates note, then launch. If services are degraded, do not assume the hack failed.`,
					'Commercial entry points: <a href="/fortnite-cheats/">Fortnite cheats</a> and <a href="/fortnite-cheats-2026/">fortnite cheats 2026</a>.',
				],
			},
			{
				h2: 'Responsible use and support',
				paragraphs: [
					'Using hacks/cheats can violate Epic terms — you assume ban risk. For license or delivery issues, contact <a href="/support/">Support</a> with your order ID.',
					'Try This Today: Bookmark Updates and the hacks pillar. Before your next raid session after a patch, verify build status first.',
				],
			},
		],
	},
	{
		id: 'fortnite-cheats-vs-cheatvault',
		imageKey: 'cheatsPackage',
		published: '2026-07-15',
		updated: '2026-08-01',
		category: 'Comparisons',
		featured: true,
		slug: 'fortnite-cheats-vs-cheatvault-comparison',
		title: 'Fortnite Cheats vs CheatVault: Honest 2026 Comparison',
		metaDescription:
			'Fortnite Cheats vs CheatVault compared — pricing, ESP boxes, soft aim, Easy Anti-Cheat detection history, and which package fits Fortnite players in 2026.',
		h1: 'Fortnite Cheats vs CheatVault: Honest Comparison',
		intro:
			'I ran both CheatVault and Fortnite Cheats through the same raid block last season. Here is the straight comparison — price, features, patch-day behavior, and where Easy Anti-Cheat one actually wins.',
		keywords: ['fortnite cheats vs cheatvault', 'cheatvault comparison', 'fortnite cheats', 'esp', 'eac-bypass', 'pricing'],
		imageAlt: 'Fortnite cheats build-fight ESP with names and weapons through walls',
		sections: [
			{
				h2: 'Why I compared these two in the first place',
				paragraphs: [
					'CheatVault shows up in almost every Fortnite cheat thread alongside Fortnite Cheats. Both promise ESP, aim assist, and undetected status. Both list monthly and lifetime tiers. On paper they look identical — which is exactly why buyers get burned picking the wrong one.',
					'I kept CheatVault for about six weeks in last season, then switched to Fortnite Cheats for the back half of the season. Same PC, same sens, mostly zero-build and some raid squads. This is not a sponsored post — just what I noticed when I stopped reading feature bullets and started tracking patch days.',
					'Fair warning: neither tool makes you invincible. Epic\'s Easy Anti-Cheat still updates. Your account still carries ban risk. This comparison is about which package maintained better and which features I actually used in matches — not which one guarantees wins.',
				],
			},
			{
				h2: 'Price breakdown — monthly, lifetime, and hidden costs',
				paragraphs: [
					'Fortnite Cheats lists $35/month and $150 lifetime on the <a href="/pricing/">pricing page</a>. CheatVault was $42/month and $189 lifetime when I subscribed — prices shift, but CheatVault has consistently sat 15–20% higher in the tiers I saw.',
					'CheatVault\'s lifetime looks cheaper than three years of monthly until you factor downtime. I lost nine days total waiting on CheatVault rebuilds after two EAC patches. Fortnite Cheats had two patch windows where I waited roughly 24–36 hours Easy Anti-Cheat. If you play daily, downtime has a real cost even if the sub fee is lower.',
					'Both deliver digitally. Neither includes hardware. If you want on Fortnite Cheats, you already own or plan to buy compatible hardware — same story for CheatVault\'s DMA tier, which is a separate upsell above their standard sub.',
				],
			},
			{
				h2: 'Feature table — ESP, soft aim, radar, and ',
				paragraphs: [
					'<table><thead><tr><th>Feature</th><th>Fortnite Cheats</th><th>CheatVault</th></tr></thead><tbody><tr><td>Player ESP boxes</td><td>Yes, toggleable categories</td><td>Yes, fewer colour options</td></tr><tr><td>Loot / chest markers</td><td>Yes + distance readouts</td><td>Yes, no distance on loot</td></tr><tr><td>2D radar</td><td>Yes, configurable range</td><td>Yes, fixed size</td></tr><tr><td>Soft aim / Aimbot profiles</td><td>Per-weapon slots</td><td>Global + one profile</td></tr><tr><td>Controller support</td><td>Supported</td><td>Listed, awkward menu UX</td></tr><tr><td>option</td><td>Included path in package</td><td>Premium tier add-on</td></tr><tr><td>In-client mod menu</td><td>Yes</td><td>Yes, heavier overlay</td></tr></tbody></table>',
					'Fortnite Cheats wins on toggles and profile flexibility. I run ESP boxes + chest markers in early game, then drop loot categories after first AR. CheatVault\'s overlay felt busier — fine if you want everything on, noisy if you play ranked and need clean screen space.',
					'Soft aim mattered more than I expected in zero-build. Fortnite Cheats let me run a low-FOV Hammer AR profile and a separate SMG profile for close fights. CheatVault\'s single-profile setup worked, but I was constantly retuning mid-session.',
				],
			},
			{
				h2: 'Detection history and patch-day behavior',
				paragraphs: [
					'Both brands had public downtime after major EAC updates in 2026 — anyone claiming zero detection events is lying. The difference is communication and rebuild speed.',
					'CheatVault\'s Discord would go quiet for 48–72 hours after big patches. No ETA, just "working on it." I know two players in my stack who got flagged during a CheatVault lag window between patch and rebuild — could\'ve been coincidence, but it shook my confidence.',
					'Fortnite Cheats posts on the <a href="/updates/">Updates page</a> within hours on patch mornings. Last major EAC update I tracked: status note same day, rebuild live roughly 30 hours later. Still annoying, but predictable. See also our <a href="/blog/undetected-fortnite-cheats-eac/">Easy Anti-Cheat reality guide</a> for the workflow I use before queueing.',
				],
			},
			{
				h2: 'Where CheatVault still wins',
				paragraphs: [
					'Credit where it\'s due: CheatVault\'s Discord community is larger. More clip sharing, more config screenshots. If you learn best from crowd-sourced settings, that social layer helps — Fortnite Cheats support answered faster for me, but the community volume is smaller.',
					'CheatVault also bundles a standalone replay-style overlay tool in their premium tier. I did not use it much, but content creators might value the extra capture layer.',
					'If you only play once or twice a week and just want basic ESP without caring about patch ETAs, CheatVault\'s feature floor is fine. Casual cadence hides downtime pain.',
				],
			},
			{
				h2: 'Verdict — who should pick which',
				paragraphs: [
					'Pick Fortnite Cheats if you play ranked or zero-build multiple times a week, want per-weapon soft aim profiles, care about without a second upsell, and want a public Updates log before you launch after patches.',
					'Pick CheatVault if community size matters more than rebuild transparency, you want the premium capture extras, and you do not mind paying slightly more for a similar core stack.',
					'Try This Today: Write down your must-haves (ESP categories, radar size, controller, DMA). Open <a href="/features/">Features</a> and CheatVault\'s list side by side, then check both Updates channels before the next Fortnite patch. For the full Fortnite Cheats stack overview, start at <a href="/fortnite-cheats/">Fortnite cheats</a>.',
				],
			},
		],
	},
	{
		id: 'elitefn-two-week-test',
		imageKey: 'aimbotCombat',
		published: '2026-07-10',
		updated: '2026-08-01',
		category: 'Comparisons',
		featured: false,
		slug: 'elitefn-vs-fortnite-cheats-two-week-test',
		title: 'I Tried EliteFN for 2 Weeks Before Switching',
		metaDescription:
			'EliteFN vs Fortnite Cheats — a two-week test of ESP, soft aim, Easy Anti-Cheat downtime, and pricing before switching packages in 2026.',
		h1: 'I Tried EliteFN for 2 Weeks Before Switching to Fortnite Cheats',
		intro:
			'EliteFN was the popular pick in my squad\'s Discord. I gave it fourteen days — same hardware, same playlists — then moved to Fortnite Cheats. This is what actually differed.',
		keywords: ['elitefn vs fortnite cheats', 'elitefn review', 'fortnite cheats comparison', 'soft aim', 'esp boxes'],
		imageAlt: 'Fortnite aimbot lock-on with skeleton ESP during a live elimination',
		sections: [
			{
				h2: 'Week one — setup, first impressions, and the menu learning curve',
				paragraphs: [
					'EliteFN delivery was fast — key in email within twenty minutes. Loader install was standard: disable conflicting overlays, run as admin, paste license. Took about twenty-five minutes my first time, same ballpark as Fortnite Cheats later.',
					'EliteFN\'s menu looked cleaner on screenshots. In game, I spent two evenings just mapping toggles. ESP categories are nested one level deeper than I liked. Soft aim settings made sense once configured, but the docs assume you already know FOV vs smoothness tradeoffs.',
					'First three nights I ran squads with ESP boxes and radar only — no aim assist. EliteFN visibility was good. Player outlines readable at mid range. Chest ESP existed but felt an afterthought compared to player ESP. I died plenty; the tool did its info job fine.',
				],
			},
			{
				h2: 'Soft aim, weapons, and controller testing',
				paragraphs: [
					'Week one weekend I enabled soft aim with a conservative FOV. Worked on AR and SMG in zero-build. Sniping felt off — EliteFN uses one bone-priority stack unless you manually swap configs between matches. Doable, not great for my play style.',
					'I play controller two nights a week. EliteFN lists controller support; menu navigation with a pad was clunky. Fortnite Cheats later felt similar on pad menus honestly — neither is perfect — but EliteFN had no suggested controller baseline in docs. I wasted time guessing.',
					'Hammer AR tracking at 40–50m was the benchmark test. EliteFN smooth aim was slightly snappier out of box. Snappier sounds good until you watch replay clips and notice the robotic corrections. I tuned smoothness up; kills stabilized but so did obviousness in creative 1v1s with friends.',
				],
			},
			{
				h2: 'The patch that ended my EliteFN trial',
				paragraphs: [
					'Day eleven hit a Fortnite + EAC patch. Standard for any cheat user. EliteFN status channel said "investigating." No ETA. I skipped ranked for two days waiting — squad moved on without me.',
					'Day thirteen a rebuild dropped. Loaded in, played two pubs, crashed once, relaunched fine. Day fourteen another mate said his alt caught a ban on EliteFN after that rebuild. Unverified story, but combined with downtime it was my cue to bail.',
					'I switched to Fortnite Cheats lifetime partly because of the <a href="/updates/">Updates</a> cadence — I wanted patch notes in writing, not Discord rumor. Not saying EliteFN is a scam; plenty of players still run it. It just did not match my tolerance for silent patch windows.',
				],
			},
			{
				h2: 'Side-by-side after switching — what improved',
				paragraphs: [
					'Fortnite Cheats ESP let me toggle loot and chest markers independently — huge for off-spawn routes without cluttering endgame. Radar range slider fixed my "radar too small on 1080p" complaint from EliteFN\'s fixed widget.',
					'Per-weapon soft aim profiles meant I stopped retuning between AR and shotgun fights. path was optional for my setup; I stayed on standard loader, but having DMA documented in one package beat EliteFN\'s "ask sales" flow.',
					'Support reply time: EliteFN ticket answered in ~5 hours once. Fortnite Cheats support replied in ~2 hours when I asked about controller baseline settings. Small sample, but matched what I needed during setup week.',
				],
			},
			{
				h2: 'Price and value snapshot',
				paragraphs: [
					'EliteFN cost me $39 for the two-week trial window (weekly sub + a few extra days). Fortnite Cheats monthly is $35; lifetime $150. If you hop tools every month, weekly pricing adds up fast.',
					'Feature-per-dollar favors Fortnite Cheats for my use: combined ESP + radar + soft aim + rebuild notes in one license. EliteFN\'s brand is strong on social proof — I am not arguing that — but I pay for uptime and toggles more than banners.',
					'Compare plans yourself on <a href="/pricing/">Pricing</a> and read the <a href="/blog/fortnite-cheats-vs-cheatvault-comparison/">CheatVault comparison</a> if you are still shopping three-wide.',
				],
			},
			{
				h2: 'Would I recommend EliteFN to anyone?',
				paragraphs: [
					'Yes, with caveats. If you already have friends on EliteFN configs and you play casually, staying is fine — social alignment matters for shared settings.',
					'If you are patch-sensitive, play ranked daily, or want granular ESP and weapon profiles, Fortnite Cheats fit me better after the two-week test. Your mileage varies; run your own patch-day checklist.',
					'Try This Today: Before buying either, list your last three patch days and how many hours you skipped queueing. If downtime frustrates you, prioritize vendors with public Updates pages — then open <a href="/fortnite-cheats/">Fortnite cheats</a> and <a href="/setup/">Setup</a> before checkout.',
				],
			},
		],
	},
	{
		id: 'fortnite-cheats-vs-ghostware',
		imageKey: 'espWallhack',
		published: '2026-07-05',
		updated: '2026-08-01',
		category: 'Comparisons',
		featured: false,
		slug: 'fortnite-cheats-vs-ghostware-features-pricing',
		title: 'Fortnite Cheats vs GhostWare: Features & Pricing',
		metaDescription:
			'Fortnite Cheats vs GhostWare — feature tables, soft aim, ESP boxes, Easy Anti-Cheat history, and honest pros/cons for 2026 buyers.',
		h1: 'Fortnite Cheats vs GhostWare: Features, Pricing, and Detection Notes',
		intro:
			'GhostWare markets hard on "stealth" branding. Fortnite Cheats markets on the full raid stack. I stacked them feature-by-feature — here is the honest read without the logo wars.',
		keywords: ['ghostware vs fortnite cheats', 'ghostware fortnite', 'cheat comparison', 'esp boxes', ''],
		imageAlt: 'Fortnite aimbot tracers and ESP boxes used in a GhostWare comparison',
		sections: [
			{
				h2: 'Two different philosophies — minimal vs full-stack',
				paragraphs: [
					'GhostWare sells a slimmer Fortnite module: ESP-focused with light aim assist, fewer toggles, lower price entry. Fortnite Cheats bundles ESP wallhack, radar, soft aim profiles, controller paths, and documentation in one undetected license.',
					'Neither approach is wrong. Minimal tools break less surface area in theory. Full-stack tools win when you want one menu for matches nights — visibility, flanks, and firefight assist without swapping executables.',
					'I used GhostWare for ten days on an alt account while keeping Fortnite Cheats on main. Same monitor, same sens, different playlists to spread risk. Take ban risk seriously on any tool.',
				],
			},
			{
				h2: 'Feature and pricing comparison table',
				paragraphs: [
					'<table><thead><tr><th></th><th>Fortnite Cheats</th><th>GhostWare</th></tr></thead><tbody><tr><td>Monthly price</td><td>$35</td><td>$28</td></tr><tr><td>Lifetime price</td><td>$150</td><td>$120</td></tr><tr><td>Player ESP boxes</td><td>Yes</td><td>Yes</td></tr><tr><td>Loot / chest ESP</td><td>Yes</td><td>Limited</td></tr><tr><td>2D radar</td><td>Yes</td><td>No</td></tr><tr><td>Soft aim profiles</td><td>Multiple weapon slots</td><td>Basic assist</td></tr><tr><td>Controller support</td><td>Yes</td><td>Partial</td></tr><tr><td>path</td><td>Documented</td><td>Not offered</td></tr><tr><td>Public Updates log</td><td><a href="/updates/">Yes — public updates log</a></td><td>Discord only</td></tr></tbody></table>',
					'GhostWare is cheaper on sticker price. Fortnite Cheats includes radar and richer loot ESP — features I use every session. If you only want player boxes in pub lobbies, GhostWare\'s entry tier covers that.',
					'Lifetime math: GhostWare $120 vs Fortnite Cheats $150. The $30 gap closes if you value radar and rebuild transparency. I kept dying to off-angle flanks on GhostWare until I realized there was no radar equivalent — personal play style thing.',
				],
			},
			{
				h2: 'Detection history — what public signals exist',
				paragraphs: [
					'GhostWare fans cite fewer "mass ban" posts in community threads. That is anecdotal — smaller user bases generate fewer posts by default. Fortnite Cheats had a visible rebuild cycle after the last major Easy Anti-Cheat push; GhostWare\'s Discord announced an update two days later.',
					'No vendor publishes audited detection rates. Treat claims as marketing. My rule: if Updates or Discord status is silent 24h after an EAC patch, I do not queue on that tool.',
					'Fortnite Cheats documents maintenance on <a href="/eac-bypass/">EAC bypass workflow</a> and the <a href="/undetected-fortnite-cheats/">undetected guide</a>. GhostWare relies on pinned messages — fine if you live in Discord, easy to miss if you do not.',
				],
			},
			{
				h2: 'Gameplay feel — zero-build and raid squads',
				paragraphs: [
					'GhostWare ESP boxes were crisp — arguably cleaner outline rendering on low settings PCs. Fortnite Cheats boxes offer more colour and distance data; busier but more informative in squad comms ("220m west" calls).',
					'Soft aim on GhostWare felt like light magnetism — enough for SMG tracking, not enough for consistent AR beams at range. Fortnite Cheats soft aim took tuning time but held Hammer AR fights better once profiles were set.',
					'Controller on GhostWare: aim assist stacked weirdly with their light magnet in my test. Fortnite Cheats suggested baseline FOV values in support docs; less guesswork.',
				],
			},
			{
				h2: 'Pros and cons summary',
				paragraphs: [
					'<strong>Fortnite Cheats pros:</strong> full ESP + radar + soft aim stack, per-weapon profiles, path, public Updates page, controller docs. <strong>Cons:</strong> higher price, menu takes ~20 minutes to learn, radar size could use more presets.',
					'<strong>GhostWare pros:</strong> lower entry price, clean minimal ESP, quick to launch, smaller feature surface. <strong>Cons:</strong> no radar, limited loot ESP, patch status mostly in Discord, no DMA option, lighter aim tools.',
					'Neither replaces game sense. Pair either with fundamentals — see our <a href="/blog/fortnite-zero-build-aggressive-strategies/">zero-build aggression guide</a> and <a href="/blog/fortnite-cheats-complete-guide-2026/">complete hacks guide</a>.',
				],
			},
			{
				h2: 'Which one should you buy?',
				paragraphs: [
					'Choose GhostWare if budget is tight, you only need player ESP in casual pubs, and you are comfortable tracking patch status in Discord.',
					'Choose Fortnite Cheats if you want radar for flanks, chest markers for faster spawns, configurable soft aim, optional and a single Updates URL to check after every Epic patch.',
					'Try This Today: Decide whether radar and loot ESP are must-haves or nice-to-haves. If must-have, open <a href="/fortnite-esp/">ESP</a>, <a href="/fortnite-radar-hack/">radar</a>, and <a href="/pricing/">Pricing</a>. If skipping radar saves you money and matches your style, GhostWare stays in the conversation — just do not skip patch-day checks on either tool.',
				],
			},
		],
	},
];

function translationBlock(src) {
	const sections = src.sections
		.map(
			(s) => `			{
				h2: ${JSON.stringify(s.h2)},
				paragraphs: [
${s.paragraphs.map((p) => `					${JSON.stringify(p)},`).join('\n')}
				],
			}`,
		)
		.join(',\n');

	return `{
		slug: ${JSON.stringify(src.slug)},
		title: ${JSON.stringify(src.title)},
		metaDescription: ${JSON.stringify(src.metaDescription)},
		h1: ${JSON.stringify(src.h1)},
		intro: ${JSON.stringify(src.intro)},
		keywords: ${JSON.stringify(src.keywords)},
		imageAlt: ${JSON.stringify(src.imageAlt)},
		sections: [
${sections}
		],
	}`;
}

function buildPost(src) {
	const translations = LOCALES.map((code) => `\t\t${code}: ${translationBlock(src)},`).join('\n');
	return `	{
		id: ${JSON.stringify(src.id)},
		imageKey: ${JSON.stringify(src.imageKey)},
		published: ${JSON.stringify(src.published)},
		updated: ${JSON.stringify(src.updated)},
		category: ${JSON.stringify(src.category)},
		featured: ${src.featured ? 'true' : 'false'},
		translations: {
${translations}
		},
	}`;
}

const file = `/* Auto-generated by scripts/generate-blog-posts.mjs — do not edit by hand. */
import type { BlogPostDefinition } from './types';

export const blogPosts: BlogPostDefinition[] = [
${sources.map(buildPost).join(',\n')}
];
`;

writeFileSync(OUT, file);

for (const src of sources) {
	const tLen = src.title.length;
	const dLen = src.metaDescription.length;
	if (tLen > 60) console.warn(`WARN title ${src.id}: ${tLen} chars`);
	if (dLen > 160) console.warn(`WARN meta ${src.id}: ${dLen} chars`);
	if (dLen < 140) console.warn(`WARN short meta ${src.id}: ${dLen} chars`);
}

console.log(`Wrote ${sources.length} posts → ${OUT}`);
