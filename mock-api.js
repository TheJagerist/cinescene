window.CP_DEMO_TODAY = new Date(2026, 6, 14); // Mardi 14 juillet 2026 — semaine figée de la démo

(function () {
  const DELAY = 300; // latence simulée (ms)
  const PLACEHOLDER = 'images/placeholder-poster.jpg';
  

  // ═══ SEED DATA ═══════════════════════════════════════════
  function getLundiSemaine() {
  const d = new Date(window.CP_DEMO_TODAY);
  const jour = (d.getDay() + 6) % 7; // Lundi=0 ... Dimanche=6
  d.setDate(d.getDate() - jour);
  d.setHours(0, 0, 0, 0);
  return d;
}

function todayPlus(days) {
  const anchor = getLundiSemaine();
  const d = new Date(anchor);
  d.setDate(d.getDate() + days);
  return d.toISOString().split('T')[0];
}


  function seed() {
    return {
      films: [
  {
    id: 1, titre: "L'Odyssée", genre: 'Action, Fantastique',
    synopsis: "L'Odyssée suit le périlleux voyage d'Ulysse pour retourner à Ithaque après la guerre de Troie, confronté à des créatures mythiques et des épreuves extraordinaires.",
    acteurs: "Matt Damon, Tom Holland, Anne Hathaway, Zendaya, Lupita Nyong'o, Robert Pattinson, Charlize Theron",
    duree: '2h52', poster_portrait: 'images/odyssey.png', poster_paysage: 'images/odyssey.jpg',
    bande_annonce: 'videos/odyssey.mp4', type_tarif: 'premiere', age_minimum: 12,nouveau: false,
    actif_cette_semaine: true,
    seances: [
      { id: 101, jour: todayPlus(5), heure: '20:15:00', ville: 'PN', langue: 'VF', places_totales: 100, places_vendues: 0, nouveau: true },
      { id: 102, jour: todayPlus(6), heure: '20:00:00', ville: 'PN', langue: 'VF', places_totales: 100, places_vendues: 0, nouveau: true },
      { id: 103, jour: todayPlus(7), heure: '21:00:00', ville: 'PN', langue: 'VOSTFR', places_totales: 100, places_vendues: 0, nouveau: true },
      { id: 104, jour: todayPlus(5), heure: '20:15:00', ville: 'BZ', langue: 'VF', places_totales: 100, places_vendues: 0, nouveau: true },
      { id: 105, jour: todayPlus(6), heure: '20:00:00', ville: 'BZ', langue: 'VF', places_totales: 100, places_vendues: 0, nouveau: true },
      { id: 106, jour: todayPlus(7), heure: '21:00:00', ville: 'BZ', langue: 'VOSTFR', places_totales: 100, places_vendues: 0, nouveau: true },
    ],
  },
  {
    id: 2, titre: "King's Warden", genre: 'Drame',
    synopsis: "1457, sous la dynastie Joseon. Eom Heung-do, un chef de village accueille dans sa vallée montagneuse le jeune roi déchu Danjong, sans se douter des troubles politiques et des dangers qui s'ensuivent.",
    acteurs: 'Hae-Jin Yoo, Ji Hoon Park, Ji-tae Yoo',
    duree: '1h57', poster_portrait: 'images/kingswarden-por.jpg', poster_paysage: 'images/kingswarden-pay.jpeg',
    bande_annonce: 'videos/kingswarden.mp4', type_tarif: 'standard', age_minimum: null,
    actif_cette_semaine: true, nouveau: true,
    seances: [
      { id: 107, jour: todayPlus(5), heure: '17:40:00', ville: 'PN', langue: 'VOSTFR', places_totales: 100, places_vendues: 0, nouveau: true },
      { id: 108, jour: todayPlus(6), heure: '15:00:00', ville: 'PN', langue: 'VOSTFR', places_totales: 100, places_vendues: 0, nouveau: true },
      { id: 109, jour: todayPlus(5), heure: '17:40:00', ville: 'BZ', langue: 'VOSTFR', places_totales: 100, places_vendues: 0, nouveau: true },
      { id: 110, jour: todayPlus(6), heure: '15:00:00', ville: 'BZ', langue: 'VOSTFR', places_totales: 100, places_vendues: 0, nouveau: true },
    ],
  },
  {
    id: 3, titre: 'VAIANA', genre: 'Action, Aventure, Comédie',
    synopsis: "Répondant à l'appel de l'océan, Vaiana s'aventure pour la première fois par-delà le récif de son île de Motunui. Accompagnée du célèbre demi-dieu Maui, elle embarque pour un voyage inoubliable destiné à permettre à son peuple de retrouver sa prospérité…",
    acteurs: "Laga'aia, Dwayne Johnson,  Rena Owen",
    duree: '1h55', poster_portrait: 'images/vaiana-por.jpg', poster_paysage: 'images/vaiana-pay.jpg',
    bande_annonce: 'videos/vaiana.mp4', type_tarif: 'standard', age_minimum: null, nouveau: false,
    actif_cette_semaine: true,
    seances: [
      { id: 111, jour: todayPlus(4), heure: '16:00:00', ville: 'PN', langue: 'VF', places_totales: 80, places_vendues: 0, nouveau: false },
      { id: 112, jour: todayPlus(5), heure: '15:00:00', ville: 'PN', langue: 'VF', places_totales: 80, places_vendues: 0, nouveau: false },
      { id: 113, jour: todayPlus(6), heure: '12:30:00', ville: 'PN', langue: 'VF', places_totales: 80, places_vendues: 0, nouveau: false },
      { id: 114, jour: todayPlus(7), heure: '15:45:00', ville: 'PN', langue: 'VF', places_totales: 80, places_vendues: 0, nouveau: false },
      { id: 115, jour: todayPlus(4), heure: '16:00:00', ville: 'BZ', langue: 'VF', places_totales: 80, places_vendues: 0, nouveau: false },
      { id: 116, jour: todayPlus(5), heure: '15:00:00', ville: 'BZ', langue: 'VF', places_totales: 80, places_vendues: 0, nouveau: false },
      { id: 117, jour: todayPlus(6), heure: '12:30:00', ville: 'BZ', langue: 'VF', places_totales: 80, places_vendues: 0, nouveau: false },
      { id: 118, jour: todayPlus(7), heure: '15:45:00', ville: 'BZ', langue: 'VF', places_totales: 80, places_vendues: 0, nouveau: false },
    ],
  },
  {
    id: 4, titre: 'EVIL DEAD BURN', genre: 'Fantastique, Horreur',
    synopsis: "Après l'enterrement de son mari, Alice se rend dans la maison isolée de sa belle-famille pour partager un dernier repas à sa mémoire. Mais la réunion familiale bascule dans l'horreur lorsque ses proches se transforment, l'un après l'autre, en créatures démoniaques. Confrontée à cet enfer, Alice découvre que les vœux prononcés autrefois continuent de la lier à son mari… bien au-delà de la mort.",
    acteurs: 'Souheila Yacoub, Hunter Doohan, Luciane Buchanan',
    duree: '1h55', poster_portrait: 'images/evildeadburn-por.jpg', poster_paysage: 'images/evildeadburn-pay.jpg',
    bande_annonce: 'videos/evildeadburn.mp4', type_tarif: 'standard', age_minimum: 16, nouveau: false,
    actif_cette_semaine: true,
    seances: [
      { id: 119, jour: todayPlus(4), heure: '21:00:00', ville: 'PN', langue: 'VF', places_totales: 100, places_vendues: 0, nouveau: false },
      { id: 120, jour: todayPlus(6), heure: '17:30:00', ville: 'PN', langue: 'VF', places_totales: 100, places_vendues: 0, nouveau: false },
      { id: 121, jour: todayPlus(7), heure: '18:20:00', ville: 'PN', langue: 'VF', places_totales: 100, places_vendues: 0, nouveau: false },
      { id: 122, jour: todayPlus(4), heure: '21:00:00', ville: 'BZ', langue: 'VF', places_totales: 100, places_vendues: 0, nouveau: false },
      { id: 123, jour: todayPlus(6), heure: '17:30:00', ville: 'BZ', langue: 'VF', places_totales: 100, places_vendues: 0, nouveau: false },
      { id: 124, jour: todayPlus(7), heure: '18:20:00', ville: 'BZ', langue: 'VF', places_totales: 100, places_vendues: 0, nouveau: false },
    ],
  },
  {
    id: 5, titre: 'LE PASSAGE', genre: 'Drame',
    synopsis: "Le film, qui met en vedette Omar Sy, Yasmine Al Massri et Yahya Mahayni, suit le destin tragique d'une famille syrienne tentant de fuir Alep ravagée par la guerre.",
    acteurs: 'Omar Sy, Yasmine Al Massri, Yahya Mahayni',
    duree: '1h45', poster_portrait: 'images/passage-pay.jpeg', poster_paysage: 'images/passage-pay.jpeg',
    bande_annonce: 'videos/passage.mp4', type_tarif: 'standard', age_minimum: null, nouveau: false,
    actif_cette_semaine: true,
    seances: [
      { id: 125, jour: todayPlus(2), heure: '18:00:00', ville: 'PN', langue: 'VF', places_totales: 100, places_vendues: 0, nouveau: false },
      { id: 126, jour: todayPlus(2), heure: '18:00:00', ville: 'BZ', langue: 'VF', places_totales: 100, places_vendues: 0, nouveau: false },
    ],
  },
  {
    id: 6, titre: 'SUPERGIRL', genre: 'Action, Aventure',
    synopsis: "Lorsqu'un adversaire aussi impitoyable qu'inattendu menace son monde, Kara Zor-El, alias Supergirl, fait équipe à contrecœur avec un improbable compagnon et s'engage dans un périple intergalactique en quête de vengeance et de justice.",
    acteurs: 'Milly Alcock, Matthias Schoenaerts, Eve Ridley',
    duree: '1h47', poster_portrait: 'images/supergirl-por.jpg', poster_paysage: 'images/supergirl-pay.jpg',
    bande_annonce: 'videos/supergirl.mp4', type_tarif: 'standard', age_minimum: null, nouveau: false,
    actif_cette_semaine: true,
    seances: [
      { id: 127, jour: todayPlus(2), heure: '20:20:00', ville: 'PN', langue: 'VF', places_totales: 100, places_vendues: 0, nouveau: false },
      { id: 128, jour: todayPlus(2), heure: '20:20:00', ville: 'BZ', langue: 'VF', places_totales: 100, places_vendues: 0, nouveau: false },
    ],
  },
  {
    id: 7, titre: "On l'appelait Robin des Bois", genre: 'Aventure, Drame',
    synopsis: "Hanté par son passé après une vie de crimes et de violence, Robin des Bois est laissé pour mort à l'issue d'un combat qu'il pensait être le dernier. Recueilli par une femme mystérieuse, il se voit offrir une ultime chance de rédemption",
    acteurs: 'Hugh Jackman, Jodie Comer, Bill Skarsgård',
    duree: '2h02', poster_portrait: 'images/robinhood-por.jpg', poster_paysage: 'images/robinhood-pay.jpg',
    bande_annonce: 'videos/robinhood.mp4', type_tarif: 'standard', age_minimum: 12, nouveau: false,
    actif_cette_semaine: true,
    seances: [
      { id: 129, jour: todayPlus(4), heure: '18:30:00', ville: 'PN', langue: 'VOSTFR', places_totales: 100, places_vendues: 0, nouveau: false },
      { id: 130, jour: todayPlus(4), heure: '18:30:00', ville: 'BZ', langue: 'VOSTFR', places_totales: 100, places_vendues: 0, nouveau: false },
    ],
  },
  {
    id: 8, titre: "LA BATAILLE DE GAULLE-Partie 2: J'écris ton nom", genre: 'Historique, Thriller',
    synopsis: "Il s'agit de la suite du film La Bataille de Gaulle : L'Âge de fer et la deuxième partie du diptyque La Bataille de Gaulle consacré à Charles de Gaulle et la France libre, adapté de l'ouvrage De Gaulle : une certaine idée de la France de l'historien Julian T. Jackson.",
    acteurs: 'Simon Abkarian, Niels Schneider, Anamaria Vartolomei',
    duree: '2h40', poster_portrait: 'images/degaulle-por.jpg', poster_paysage: 'images/degaulle-pay.jpg',
    bande_annonce: 'videos/degaulle.mp4', type_tarif: 'standard', age_minimum: 12, nouveau: false,
    actif_cette_semaine: true,
    seances: [
      { id: 131, jour: todayPlus(3), heure: '20:40:00', ville: 'PN', langue: 'VF', places_totales: 100, places_vendues: 0, nouveau: false },
      { id: 132, jour: todayPlus(3), heure: '20:40:00', ville: 'BZ', langue: 'VF', places_totales: 100, places_vendues: 0, nouveau: false },
    ],
  },
  {
    id: 9, titre: 'MINIONS', genre: 'Animation, Comédie, Famille',
    synopsis: "Une histoire aussi rocambolesque qu'absurde, mais bien sûr totalement véridique, qui raconte comment les Minions, partis à la conquête d'Hollywood, sont devenus des stars de cinéma, pour finalement tout perdre en libérant au passage une bande de monstres déchaînés, avant de s'unir pour tenter de sauver la planète de ce nouveau désastre à leur actif.",
    acteurs: 'Pierre Coffin, Alexandre Astier, Christoph Waltz',
    duree: '1h30', poster_portrait: 'images/minions-por.jpg', poster_paysage: 'images/minions-pay.jpg',
    bande_annonce: 'videos/minions.mp4', type_tarif: 'standard', age_minimum: null, nouveau: false,
    actif_cette_semaine: true,
    seances: [
      { id: 133, jour: todayPlus(2), heure: '16:00:00', ville: 'PN', langue: 'VF', places_totales: 90, places_vendues: 0, nouveau: false },
      { id: 134, jour: todayPlus(6), heure: '10:30:00', ville: 'PN', langue: 'VF', places_totales: 90, places_vendues: 0, nouveau: false },
      { id: 135, jour: todayPlus(7), heure: '13:30:00', ville: 'PN', langue: 'VF', places_totales: 90, places_vendues: 0, nouveau: false },
      { id: 136, jour: todayPlus(2), heure: '16:00:00', ville: 'BZ', langue: 'VF', places_totales: 90, places_vendues: 0, nouveau: false },
      { id: 137, jour: todayPlus(6), heure: '10:30:00', ville: 'BZ', langue: 'VF', places_totales: 90, places_vendues: 0, nouveau: false },
      { id: 138, jour: todayPlus(7), heure: '13:30:00', ville: 'BZ', langue: 'VF', places_totales: 90, places_vendues: 0, nouveau: false },
    ],
  },
  {
    id: 10, titre: 'NOISE', genre: 'Horreur, Thriller',
    synopsis: "Ju-young, malentendante, découvre que sa sœur a mystérieusement disparu de son appartement. En cherchant des réponses, elle se heurte à des voisins terrifiés, obsédés par le silence, et à une atmosphère de plus en plus oppressante. La nuit, des bruits inexpliqués résonnent dans l'immeuble déserté, éveillant une présence invisible. Ce qu'elle croyait être une simple disparition devient une plongée terrifiante dans un cauchemar hanté par le silence",
    acteurs: 'Brendan Cowell, Carole Browne, Kent Clifton-Bligh',
    duree: '1h33', poster_portrait: 'images/noise-por.jpg', poster_paysage: 'images/noise-por.jpg',
    bande_annonce: 'videos/noise.mp4', type_tarif: 'standard', age_minimum: 12, nouveau: false,
    actif_cette_semaine: true,
    seances: [
      { id: 139, jour: todayPlus(3), heure: '18:20:00', ville: 'PN', langue: 'VF', places_totales: 100, places_vendues: 0, nouveau: false },
      { id: 140, jour: todayPlus(3), heure: '18:20:00', ville: 'BZ', langue: 'VF', places_totales: 100, places_vendues: 0, nouveau: false },
    ],
  },
  {
    id: 11, titre: 'Toy Story 5', genre: 'Aventure, Comédie, Animation',
    synopsis: "Buzz, Woody, Jessie et le reste de la bande verront leur travail remis en question lorsqu'ils découvriront que ce qui obsède les enfants d'aujourd'hui s'appelle... l'électronique !",
    acteurs: 'Jean-Philippe Puymartin, Tom Hanks, Richard Darbois',
    duree: '1h42', poster_portrait: 'images/toystory5-por.jpg', poster_paysage: 'images/toystory5-pay.jpg',
    bande_annonce: 'videos/toystory.mp4', type_tarif: 'standard', age_minimum: null, nouveau: false,
    actif_cette_semaine: true,
    seances: [
      { id: 141, jour: todayPlus(3), heure: '16:00:00', ville: 'PN', langue: 'VF', places_totales: 100, places_vendues: 0, nouveau: false },
      { id: 142, jour: todayPlus(7), heure: '11:00:00', ville: 'PN', langue: 'VF', places_totales: 100, places_vendues: 0, nouveau: false },
      { id: 143, jour: todayPlus(3), heure: '16:00:00', ville: 'BZ', langue: 'VF', places_totales: 100, places_vendues: 0, nouveau: false },
      { id: 144, jour: todayPlus(7), heure: '11:00:00', ville: 'BZ', langue: 'VF', places_totales: 100, places_vendues: 0, nouveau: false },
        ],
      },
    ],
        
      evenements: [
  {
    id: 1, titre: 'ARGENTINE vs ESPAGNE (FINALE DE LA COUPE DU MONDE)', type_evenement: 'Sport',
    description: "Vivez la conclusion de la Coupe du Monde 2026 en direct à Culture Parc.",
    poster: 'images/events/cdm.png', ville: 'both', date_event: todayPlus(7), heure_event: '20:00:00',
    entree_libre: false,
    tarifs: [
      { id: 1, label: 'Standard', prix: 1000, places_totales: 300, places_vendues: 40 },
    ],
  },
  {
    id: 2, titre: 'SPIDER-MAN: BRAND NEW DAY', type_evenement: 'Avant-première',
    description: "Réservez dès maintenant vos places pour l'avant-première événement de Spider-Man: Brand New Day.",
    poster: 'images/events/spiderman-bnd.jpg', ville: 'both', date_event: '2026-07-31', heure_event: '20:00:00',
    entree_libre: false,
    tarifs: [
      { id: 3, label: 'Première', prix: 5000, places_totales: 250, places_vendues: 0 },
    ],
  },
],
tarifsFilm: [
  { id: 1, label: 'Standard', prix: 2500, applicable_a: 'standard', necessite_verification: false },
  { id: 2, label: 'Enfant (3-11 ans)', prix: 1000, applicable_a: 'standard', necessite_verification: true },
  { id: 3, label: 'Étudiant', prix: 1500, applicable_a: 'standard', necessite_verification: true },
  { id: 4, label: 'Avant-première', prix: 5000, applicable_a: 'avant-premiere', necessite_verification: false },
  { id: 4, label: 'Première', prix: 5000, applicable_a: 'premiere', necessite_verification: false },
],
tarifsEvent: [
  { id: 1, evenement: 1, label: 'Standard', prix: 8000, places_totales: 300, places_vendues: 40 },
  { id: 2, evenement: 1, label: 'VIP', prix: 20000, places_totales: 50, places_vendues: 12 },
  { id: 3, evenement: 2, label: 'Première', prix: 5000, places_totales: 250, places_vendues: 0 },
],
      programmeAffiches: { both: 'images/Programme/programme-semaine.png', PN: null, BZ: null },
      commandes: [],
      tickets: [],
      historiqueScans: [],
      historiqueScans: [],
      nextId: { film: 3, seance: 106, evenement: 3, tarifEvent: 4, commande: 1, ticket: 1 },
      user: { username: 'demo', password: 'demo1234', first_name: 'demogorgon', last_name: 'demo', email: 'demogorgon@example.com', telephone: '', points_fidelite: 1 },
      admin: { username: 'admin', password: 'admin1234' },
      session: { loggedIn: false, isAdmin: false },
    };
  }

  function logHistoriqueDB(code, resultat, note) {
    DB.historiqueScans.unshift({
      id: Date.now() + Math.random(),
      horodatage: new Date().toISOString(),
      code_scanne: code, resultat, note,
    });
    if (DB.historiqueScans.length > 500) DB.historiqueScans.pop();
    saveDB(DB);
  }
  
  // ═══ CATALOGUE toujours frais depuis le code, SESSION persistée ═══
const SESSION_KEY = 'cp_mock_session';
const CATALOG_KEY = 'cp_mock_catalog';

function loadCatalogue() {
  const vide = { filmsCrees: [], filmsSupprimes: [], filmsModifs: {}, eventsCrees: [], eventsSupprimes: [], eventsModifs: {}, afficheOverrides: { both: null, PN: null, BZ: null } };
  const raw = localStorage.getItem(CATALOG_KEY);
  if (!raw) return vide;
  try { return { ...vide, ...JSON.parse(raw) }; } catch (e) { return vide; }
}

function saveCatalogue() {
  localStorage.setItem(CATALOG_KEY, JSON.stringify(CATALOGUE));
}

// Recalcule le delta (créés / supprimés / modifiés) par rapport au seed d'origine et le persiste.
// C'est ce qui simule une "vraie" table films/événements malgré le catalogue figé dans le code.
function rebuildCatalogueFromDB() {
  const seedData = seed();
  const seedFilmIds = new Set(seedData.films.map(f => f.id));
  const seedEventIds = new Set(seedData.evenements.map(e => e.id));

  CATALOGUE.filmsCrees = DB.films.filter(f => !seedFilmIds.has(f.id));
  CATALOGUE.filmsSupprimes = [...seedFilmIds].filter(id => !DB.films.some(f => f.id === id));
  CATALOGUE.filmsModifs = {};
  DB.films.filter(f => seedFilmIds.has(f.id)).forEach(f => { CATALOGUE.filmsModifs[f.id] = f; });

  CATALOGUE.eventsCrees = DB.evenements.filter(e => !seedEventIds.has(e.id));
  CATALOGUE.eventsSupprimes = [...seedEventIds].filter(id => !DB.evenements.some(e => e.id === id));
  CATALOGUE.eventsModifs = {};
  DB.evenements.filter(e => seedEventIds.has(e.id)).forEach(e => { CATALOGUE.eventsModifs[e.id] = e; });

  saveCatalogue();
}

function loadDB() {
  const fresh = seed();

  const saved = localStorage.getItem(SESSION_KEY);
  if (saved) {
    try {
      const persisted = JSON.parse(saved);
      fresh.session = persisted.session || fresh.session;
      fresh.commandes = persisted.commandes || fresh.commandes;
      fresh.tickets = persisted.tickets || fresh.tickets;
      fresh.historiqueScans = persisted.historiqueScans || fresh.historiqueScans;
      fresh.historiqueScans = persisted.historiqueScans || fresh.historiqueScans;
      fresh.nextId = persisted.nextId || fresh.nextId;
      fresh.user = persisted.user || fresh.user;
    } catch (e) {}
  }

  // Applique le delta catalogue (créés/modifiés/supprimés depuis l'admin) par-dessus le seed frais
  fresh.films = fresh.films
    .filter(f => !CATALOGUE.filmsSupprimes.includes(f.id))
    .map(f => CATALOGUE.filmsModifs[f.id] || f)
    .concat(CATALOGUE.filmsCrees);

  fresh.evenements = fresh.evenements
    .filter(e => !CATALOGUE.eventsSupprimes.includes(e.id))
    .map(e => CATALOGUE.eventsModifs[e.id] || e)
    .concat(CATALOGUE.eventsCrees);
  
  return fresh;
}

function saveDB(db) {
  localStorage.setItem(SESSION_KEY, JSON.stringify({
    session: db.session,
    commandes: db.commandes,
    tickets: db.tickets,
    nextId: db.nextId,
    user: db.user,
    historiqueScans: db.historiqueScans,
  }));
}
let CATALOGUE = loadCatalogue();
let DB = loadDB();

  const FIXED_JETONS = [
    'cp-xcvbgdgdsSQQ_x4yeyou',
    'cp-890xcvbgdgdsSQQ_x4yeyou',
    'cp-123xcvbgdgdsSQQ_x4yeyou',
    'cp-a9f8d7e6g5h4j3k2',
    'cp-z1x2c3v4b5n6m7',
    'cp-qw8er7ty6u5i4o3',
    'cp-4r5t6y7u8i9o0p1',
    'cp-1a2s3d4f5g6h7j8',
    'cp-k9l8m7n6b5v4c3x2',
  ];
  function uid() { return FIXED_JETONS[Math.floor(Math.random() * FIXED_JETONS.length)]; }
  function json(data, status = 200) { return new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json' } }); }
  function empty(status = 204) { return new Response(null, { status }); }
  function delay(fn) { return new Promise(res => setTimeout(() => res(fn()), DELAY)); }

  function findFilmBySeance(seanceId) {
    for (const f of DB.films) {
      const s = f.seances.find(s => s.id === seanceId);
      if (s) return { film: f, seance: s };
    }
    return null;
  }
  function profilPublic() {
    const u = DB.user;
    return { id: 1, prenom: u.first_name, nom: u.last_name, email: u.email, telephone: u.telephone, points_fidelite: u.points_fidelite, date_inscription: '2026-01-15T10:00:00Z' };
  }
  function commandeDetail(c) {
    let titre = '—', poster = PLACEHOLDER, date_seance = null, heure_seance = null, tarif_label = '—';
    if (c.type_objet === 'film') {
      const ctx = findFilmBySeance(c.seance);
      if (ctx) { titre = ctx.film.titre; poster = ctx.film.poster_portrait; date_seance = ctx.seance.jour; heure_seance = ctx.seance.heure; }
      const t = DB.tarifsFilm.find(t => t.id === c.tarif_film);
      if (t) tarif_label = t.label;
    } else {
      const te = DB.tarifsEvent.find(t => t.id === c.tarif_event);
      const ev = te ? DB.evenements.find(e => e.id === te.evenement) : null;
      if (ev) { titre = ev.titre; poster = ev.poster; date_seance = ev.date_event; heure_seance = ev.heure_event; }
      if (te) tarif_label = te.label;
    }
    const tickets = DB.tickets.filter(t => t.commande === c.id);
    return {
      id: c.id, type_objet: c.type_objet, ville: c.ville, ville_label: c.ville === 'PN' ? 'Pointe-Noire' : 'Brazzaville',
      quantite_places: c.quantite_places, montant_total: c.montant_total, montant_paye: c.montant_paye,
      reste_a_payer: c.montant_total - c.montant_paye, statut: c.statut, date_creation: c.date_creation,
      titre, poster, date_seance, heure_seance, tarif_label, tickets,
      points_gagnes: c.statut === 'paye' ? (c._points || 0) : 0,
    };
  }

  function trouverTicketParJeton(jeton) { 
    const matches = DB.tickets.filter(t => t.jeton_uuid === jeton);
    if (matches.length === 0) return null;
    const valides = matches.filter(t => t.statut === 'valide');
    if (valides.length > 0) return valides[valides.length - 1]; // le plus récent encore valide
    return matches[matches.length - 1]; // sinon, le plus récent déjà consommé → déclenche la fraude
  }

  function logHistoriqueDB(code, resultat, note) {
    DB.historiqueScans.unshift({
      id: Date.now() + Math.random(),
      horodatage: new Date().toISOString(),
      code_scanne: code, resultat, note,
    });
    if (DB.historiqueScans.length > 500) DB.historiqueScans.pop();
    saveDB(DB);
  }

  function logHistoriqueDB(code, resultat, note) {
    DB.historiqueScans.unshift({
      id: Date.now() + Math.random(),
      horodatage: new Date().toISOString(),
      code_scanne: code, resultat, note,
    });
    if (DB.historiqueScans.length > 500) DB.historiqueScans.pop();
    saveDB(DB);
  }

  // ═══ ROUTES ═══════════════════════════════════════════════
  const routes = [];
  function route(method, pattern, handler) { routes.push({ method, pattern, handler }); }

  function matchRoute(path, method) {
    for (const r of routes) {
      if (r.method !== method) continue;
      const parts = r.pattern.split('/').filter(Boolean);
      const segs = path.split('/').filter(Boolean);
      if (parts.length !== segs.length) continue;
      const params = {}; let ok = true;
      for (let i = 0; i < parts.length; i++) {
        if (parts[i].startsWith(':')) params[parts[i].slice(1)] = segs[i];
        else if (parts[i] !== segs[i]) { ok = false; break; }
      }
      if (ok) return { r, params };
    }
    return null;
  }

  route('GET', '/api/films/', () => json(DB.films));
  route('GET', '/api/films/:id/', (p) => {
    const f = DB.films.find(f => f.id === +p.id);
    return f ? json(f) : json({ erreur: 'Film introuvable.' }, 404);
  });
  route('POST', '/api/films/creer/', async (p, req) => {
    const fd = await req.formData();
    const ageRaw = fd.get('age_minimum');
    const f = { id: DB.nextId.film++, titre: fd.get('titre'), genre: fd.get('genre') || '—', synopsis: fd.get('synopsis') || '', acteurs: fd.get('acteurs') || '', duree: fd.get('duree') || '—', poster_portrait: PLACEHOLDER, poster_paysage: PLACEHOLDER, bande_annonce: null, type_tarif: fd.get('type_tarif') || 'standard', age_minimum: ageRaw ? parseInt(ageRaw, 10) : null, actif_cette_semaine: true, seances: [] };
    DB.films.push(f); saveDB(DB); rebuildCatalogueFromDB();
    return json(f, 201);
  });
  route('PATCH', '/api/films/:id/modifier/', async (p, req) => {
    const f = DB.films.find(f => f.id === +p.id);
    if (!f) return json({ erreur: 'introuvable' }, 404);
    const fd = await req.formData();
    ['titre','genre','synopsis','acteurs','duree','type_tarif'].forEach(k => { if (fd.get(k) !== null) f[k] = fd.get(k); });
    const ageRaw = fd.get('age_minimum');
    if (ageRaw !== null && ageRaw !== '') f.age_minimum = parseInt(ageRaw, 10);
    saveDB(DB); rebuildCatalogueFromDB();
    return json(f);
  });
  route('DELETE', '/api/films/:id/modifier/', (p) => { DB.films = DB.films.filter(f => f.id !== +p.id); saveDB(DB); rebuildCatalogueFromDB(); return empty(); });

  route('POST', '/api/seances/creer/', async (p, req) => {
    const body = await req.json();
    const f = DB.films.find(f => f.id === +body.film);
    if (!f) return json({ erreur: 'Film introuvable' }, 404);
    const s = { id: DB.nextId.seance++, jour: body.jour, heure: body.heure, ville: body.ville, langue: body.langue, places_totales: body.places_totales || 100, places_vendues: 0, nouveau: false };
    f.seances.push(s); saveDB(DB); rebuildCatalogueFromDB();
    return json(s, 201);
  });
  route('PATCH', '/api/seances/:id/modifier/', async (p, req) => {
    const ctx = findFilmBySeance(+p.id);
    if (!ctx) return json({ erreur: 'introuvable' }, 404);
    Object.assign(ctx.seance, await req.json());
    saveDB(DB); rebuildCatalogueFromDB();
    return json(ctx.seance);
  });
  route('DELETE', '/api/seances/:id/modifier/', (p) => { DB.films.forEach(f => f.seances = f.seances.filter(s => s.id !== +p.id)); saveDB(DB); rebuildCatalogueFromDB(); return empty(); });

  route('GET', '/api/tarifs-film/', () => json(DB.tarifsFilm));

  route('GET', '/api/evenements/', () => json(DB.evenements));
  route('POST', '/api/evenements/creer/', async (p, req) => {
    const fd = await req.formData();
    const e = { id: DB.nextId.evenement++, titre: fd.get('titre'), type_evenement: fd.get('type_evenement') || '—', description: fd.get('description') || '', poster: PLACEHOLDER, ville: fd.get('ville'), date_event: fd.get('date_event'), heure_event: fd.get('heure_event'), entree_libre: fd.get('entree_libre') === 'true', tarifs: [] };
    DB.evenements.push(e); saveDB(DB); rebuildCatalogueFromDB();
    return json(e, 201);
  });
  route('PATCH', '/api/evenements/:id/modifier/', async (p, req) => {
    const e = DB.evenements.find(e => e.id === +p.id);
    if (!e) return json({ erreur: 'introuvable' }, 404);
    const fd = await req.formData();
    ['titre','type_evenement','description','ville','date_event','heure_event'].forEach(k => { if (fd.get(k) !== null) e[k] = fd.get(k); });
    e.entree_libre = fd.get('entree_libre') === 'true';
    saveDB(DB); rebuildCatalogueFromDB();
    return json(e);
  });
  route('DELETE', '/api/evenements/:id/modifier/', (p) => { DB.evenements = DB.evenements.filter(e => e.id !== +p.id); saveDB(DB); rebuildCatalogueFromDB(); return empty(); });

  route('POST', '/api/tarifs-event/creer/', async (p, req) => {
    const body = await req.json();
    const t = { id: DB.nextId.tarifEvent++, evenement: body.evenement, label: body.label, prix: body.prix, places_totales: body.places_totales || 100, places_vendues: 0 };
    DB.tarifsEvent.push(t);
    const e = DB.evenements.find(e => e.id === body.evenement);
    if (e) e.tarifs.push(t);
    saveDB(DB); rebuildCatalogueFromDB();
    return json(t, 201);
  });
  route('PATCH', '/api/tarifs-event/:id/modifier/', async (p, req) => {
    const t = DB.tarifsEvent.find(t => t.id === +p.id);
    if (!t) return json({ erreur: 'introuvable' }, 404);
    Object.assign(t, await req.json());
    const e = DB.evenements.find(e => e.tarifs.some(x => x.id === t.id));
    if (e) e.tarifs = e.tarifs.map(x => x.id === t.id ? t : x);
    saveDB(DB); rebuildCatalogueFromDB();
    return json(t);
  });
  route('DELETE', '/api/tarifs-event/:id/modifier/', (p) => {
    DB.tarifsEvent = DB.tarifsEvent.filter(t => t.id !== +p.id);
    DB.evenements.forEach(e => e.tarifs = e.tarifs.filter(t => t.id !== +p.id));
    saveDB(DB); rebuildCatalogueFromDB();
    return empty();
  });

  route('GET', '/api/programme-affiche/', (p, req, url) => {
    const ville = url.searchParams.get('ville') || 'PN';
    const img = DB.programmeAffiches[ville] || DB.programmeAffiches.both;
    if (!img) return empty(204);
    return json({ id: 1, image: img, ville: DB.programmeAffiches[ville] ? ville : 'both', date_upload: new Date().toISOString() });
  });
  route('POST', '/api/programme-affiche/creer/', async (p, req) => {
    const fd = await req.formData();
    const file = fd.get('image'); const ville = fd.get('ville');
    DB.programmeAffiches[ville] = file ? URL.createObjectURL(file) : PLACEHOLDER;
    saveDB(DB);
    return json({ id: 1, image: DB.programmeAffiches[ville], ville }, 201);
  });

  route('GET', '/api/me/', () => DB.session.loggedIn ? json(profilPublic()) : json({ erreur: 'Non connecté.' }, 401));
  route('POST', '/api/auth/connexion/', async (p, req) => {
    const body = await req.json();
    if (body.username === DB.admin.username) return json({ erreur: 'Ce compte est un compte administrateur.' }, 403);
    if (body.username !== DB.user.username || body.password !== DB.user.password) return json({ erreur: 'Identifiants invalides.' }, 401);
    DB.session.loggedIn = true; saveDB(DB);
    return json(profilPublic());
  });
  route('POST', '/api/auth/inscription/', async (p, req) => {
    const body = await req.json();
    DB.user = { ...DB.user, username: body.username, first_name: body.first_name, last_name: body.last_name, email: body.email, telephone: body.telephone || '', password: body.password, points_fidelite: 0 };
    saveDB(DB);
    return json({ username: body.username }, 201);
  });
  route('POST', '/api/auth/deconnexion/', () => { DB.session.loggedIn = false; DB.session.isAdmin = false; saveDB(DB); return json({ message: 'Déconnecté.' }); });
  route('POST', '/api/auth/admin-connexion/', async (p, req) => {
    const body = await req.json();
    if (body.username !== DB.admin.username || body.password !== DB.admin.password) return json({ erreur: 'Identifiants administrateur invalides.' }, 401);
    DB.session.isAdmin = true; saveDB(DB);
    return json({ message: `Bienvenue ${body.username}`, is_staff: true });
  });

  route('POST', '/api/commandes/', async (p, req) => {
    if (!DB.session.loggedIn) return json({ erreur: 'Authentification requise.' }, 401);
    const body = await req.json();
    let montant_total = 0;
    if (body.type_objet === 'film') { const t = DB.tarifsFilm.find(t => t.id === body.tarif_film); montant_total = (t ? t.prix : 0) * (body.quantite_places || 1); }
    else { const t = DB.tarifsEvent.find(t => t.id === body.tarif_event); montant_total = (t ? t.prix : 0) * (body.quantite_places || 1); }
    const c = { id: DB.nextId.commande++, type_objet: body.type_objet, seance: body.seance || null, tarif_event: body.tarif_event || null, tarif_film: body.tarif_film || null, ville: body.ville, quantite_places: body.quantite_places || 1, montant_total, montant_paye: 0, statut: 'en_attente_paiement', moyen_paiement: body.moyen_paiement || '', telephone_paiement: body.telephone_paiement || '', date_creation: new Date().toISOString(), _points: 0 };
    DB.commandes.push(c); saveDB(DB);
    return json(c, 201);
  });
  route('POST', '/api/commandes/:id/confirmer-paiement/', async (p, req) => {
    const c = DB.commandes.find(c => c.id === +p.id);
    if (!c) return json({ erreur: 'Commande introuvable.' }, 404);
    const body = await req.json();
    const montant_recu = body.montant_recu ?? c.montant_total;
    c.montant_paye = montant_recu;
    const complet = montant_recu >= c.montant_total;
    c.statut = complet ? 'paye' : 'en_attente_solde';

    if (c.type_objet === 'film') { const ctx = findFilmBySeance(c.seance); if (ctx) ctx.seance.places_vendues += c.quantite_places; }
    else { const t = DB.tarifsEvent.find(t => t.id === c.tarif_event); if (t) t.places_vendues += c.quantite_places; }

    if (complet) {
      let pts = c.type_objet === 'evenement' ? 10 : c.quantite_places;
      if (c.type_objet === 'film' && c.quantite_places >= 2) pts += 2;
      c._points = pts;
    }
    const ticket = { id: DB.nextId.ticket++, commande: c.id, jeton_uuid: uid(), type_jeton: complet ? 'entree' : 'solde', statut: 'valide', date_generation: new Date().toISOString() };
    DB.tickets.push(ticket); saveDB(DB);
    return json({ commande: c, ticket }, 201);
  });
  route('GET', '/api/mes-commandes/', () => DB.session.loggedIn ? json(DB.commandes.map(commandeDetail).reverse()) : json({ erreur: 'Authentification requise.' }, 401));

  route('POST', '/api/scan/identifier/', async (p, req) => {
    const body = await req.json();
    const t = trouverTicketParJeton(body.jeton_uuid);
    if (!t) { logHistoriqueDB(body.jeton_uuid, 'inconnu', 'Identification'); return json({ resultat: 'inconnu', message: 'Code inconnu.' }, 404); }
    if (t.statut !== 'valide') { logHistoriqueDB(body.jeton_uuid, 'fraude', 'Déjà consommé'); return json({ resultat: 'fraude', message: 'Déjà consommé.' }, 409); }
    const c = DB.commandes.find(c => c.id === t.commande); const d = commandeDetail(c);
    return json({ resultat: 'valide', type_jeton: t.type_jeton, titre: d.titre, ville: d.ville_label, quantite_places: c.quantite_places, montant_total: c.montant_total, montant_paye: c.montant_paye, reste_a_payer: c.montant_total - c.montant_paye });
  });
  route('POST', '/api/scan/encaisser-solde/', async (p, req) => {
    const body = await req.json();
    const t = trouverTicketParJeton(body.jeton_uuid);
    if (!t) return json({ resultat: 'inconnu', message: 'Code inconnu.' }, 404);
    if (t.type_jeton !== 'solde') return json({ resultat: 'inconnu', message: "Ce n'est pas un ticket de solde." }, 400);
    if (t.statut !== 'valide') return json({ resultat: 'fraude', message: 'Déjà utilisé.' }, 409);
    t.statut = 'consomme';
    const c = DB.commandes.find(c => c.id === t.commande);
    c.montant_paye = c.montant_total; c.statut = 'paye';
    const nouveau = { id: DB.nextId.ticket++, commande: c.id, jeton_uuid: uid(), type_jeton: 'entree', statut: 'valide', date_generation: new Date().toISOString() };
    DB.tickets.push(nouveau); saveDB(DB);
    logHistoriqueDB(body.jeton_uuid, 'valide', "Solde encaissé, billet d'entrée émis");
    return json({ resultat: 'valide', message: "Solde encaissé. Billet d'entrée généré.", nouveau_ticket: nouveau });
  });
  route('POST', '/api/scan/entree/', async (p, req) => {
    const body = await req.json();
    const t = trouverTicketParJeton(body.jeton_uuid);
    if (!t) return json({ resultat: 'inconnu', message: 'Code inconnu.' }, 404);
    if (t.type_jeton !== 'entree') return json({ resultat: 'inconnu', message: "Ce n'est pas un billet d'entrée." }, 400);
    if (t.statut !== 'valide') return json({ resultat: 'fraude', message: "Déjà scanné à l'entrée." }, 409);
    t.statut = 'consomme';
    const c = DB.commandes.find(c => c.id === t.commande);
    let pts = c.type_objet === 'evenement' ? 10 : c.quantite_places;
    if (c.type_objet === 'film' && c.quantite_places >= 2) pts += 2;
    DB.user.points_fidelite += pts; saveDB(DB);
    logHistoriqueDB(body.jeton_uuid, 'valide', `Entrée validée, +${pts} pts`);
    return json({ resultat: 'valide', message: `Accès autorisé. +${pts} points de fidélité crédités.`, points_attribues: pts, points_totaux: DB.user.points_fidelite });
  });

  route('GET', '/api/stock/places/', () => {
    if (!DB.session.isAdmin) return json({ erreur: 'Accès réservé au staff.' }, 403);
    const anchor = getLundiSemaine();
    const lundi = anchor.toISOString().split('T')[0];
    const dimancheDate = new Date(anchor); dimancheDate.setDate(dimancheDate.getDate() + 6);
    const dimanche = dimancheDate.toISOString().split('T')[0];

    const films = DB.films.map(f => {
      const seances = (f.seances || [])
        .filter(s => s.jour >= lundi && s.jour <= dimanche)
        .map(s => ({
          id: s.id, jour: s.jour, heure: s.heure, ville: s.ville, langue: s.langue,
          places_totales: s.places_totales, places_vendues: s.places_vendues,
          places_disponibles: s.places_totales - s.places_vendues,
        }));
      return { id: f.id, titre: f.titre, poster: f.poster_portrait, seances };
    }).filter(f => f.seances.length > 0);

    const evenements = DB.evenements
      .filter(e => e.date_event >= lundi && e.date_event <= dimanche)
      .map(e => ({
        id: e.id, titre: e.titre, ville: e.ville, poster: e.poster,
        tarifs: (e.tarifs || []).map(t => ({
          id: t.id, label: t.label, places_totales: t.places_totales, places_vendues: t.places_vendues,
          places_disponibles: t.places_totales - t.places_vendues,
        })),
      }));
    return json({ films, evenements });
  });

  route('POST', '/api/stock/seance/:id/ajuster/', async (p, req) => {
    if (!DB.session.isAdmin) return json({ erreur: 'Accès réservé au staff.' }, 403);
    const ctx = findFilmBySeance(+p.id);
    if (!ctx) return json({ erreur: 'introuvable' }, 404);
    const body = await req.json();
    const delta = parseInt(body.delta, 10) || 0;
    const nouvelle = ctx.seance.places_vendues + delta;
    if (nouvelle < 0) return json({ erreur: 'Impossible : cela dépasserait le stock disponible.' }, 400);
    if (nouvelle > ctx.seance.places_totales) return json({ erreur: 'Impossible : cela dépasserait la capacité totale.' }, 400);
    ctx.seance.places_vendues = nouvelle;
    saveDB(DB); rebuildCatalogueFromDB();
    return json({ id: ctx.seance.id, places_totales: ctx.seance.places_totales, places_vendues: ctx.seance.places_vendues, places_disponibles: ctx.seance.places_totales - ctx.seance.places_vendues });
  });

  route('POST', '/api/stock/tarif-event/:id/ajuster/', async (p, req) => {
    if (!DB.session.isAdmin) return json({ erreur: 'Accès réservé au staff.' }, 403);
    const t = DB.tarifsEvent.find(t => t.id === +p.id);
    if (!t) return json({ erreur: 'introuvable' }, 404);
    const body = await req.json();
    const delta = parseInt(body.delta, 10) || 0;
    const nouvelle = t.places_vendues + delta;
    if (nouvelle < 0) return json({ erreur: 'Impossible : cela dépasserait le stock disponible.' }, 400);
    if (nouvelle > t.places_totales) return json({ erreur: 'Impossible : cela dépasserait la capacité totale.' }, 400);
    t.places_vendues = nouvelle;
    const e = DB.evenements.find(e => e.tarifs.some(x => x.id === t.id));
    if (e) e.tarifs = e.tarifs.map(x => x.id === t.id ? t : x);
    saveDB(DB); rebuildCatalogueFromDB();
    return json({ id: t.id, places_totales: t.places_totales, places_vendues: t.places_vendues, places_disponibles: t.places_totales - t.places_vendues });
  });

  route('GET', '/api/historique-commandes/', () => {
    if (!DB.session.isAdmin) return json({ erreur: 'Accès réservé au staff.' }, 403);
    const data = DB.commandes.map(c => {
      let titre = '—';
      if (c.type_objet === 'film') {
        const ctx = findFilmBySeance(c.seance);
        titre = ctx ? ctx.film.titre : '—';
      } else {
        const te = DB.tarifsEvent.find(t => t.id === c.tarif_event);
        const ev = te ? DB.evenements.find(e => e.id === te.evenement) : null;
        titre = ev ? ev.titre : '—';
      }
      return {
        id: c.id, username: DB.user.username, type_objet: c.type_objet, titre,
        ville: c.ville === 'PN' ? 'Pointe-Noire' : 'Brazzaville', quantite_places: c.quantite_places,
        montant_total: c.montant_total, montant_paye: c.montant_paye, statut: c.statut,
        date_creation: c.date_creation,
      };
    }).reverse();
    return json(data);
  });

  route('GET', '/api/scans/historique/', () => {
    if (!DB.session.isAdmin) return json({ erreur: 'Accès réservé au staff.' }, 403);
    return json(DB.historiqueScans);
  });

  route('GET', '/api/stats/films/', () => {

    if (!DB.session.isAdmin) return json({ erreur: 'Accès réservé au staff.' }, 403);
    const stats = {};
    DB.commandes.filter(c => c.type_objet === 'film' && c.statut === 'paye').forEach(c => {
      const ctx = findFilmBySeance(c.seance); if (!ctx) return;
      const f = ctx.film;
      if (!stats[f.id]) stats[f.id] = { titre: f.titre, poster: f.poster_portrait, billets: 0, recette: 0 };
      stats[f.id].billets += c.quantite_places; stats[f.id].recette += c.montant_total;
    });
    const arr = Object.values(stats);
    return json({ par_billets: [...arr].sort((a,b) => b.billets - a.billets), par_recette: [...arr].sort((a,b) => b.recette - a.recette) });
  });

  // ═══ INTERCEPTION FETCH ═══════════════════════════════════
  const realFetch = window.fetch.bind(window);
  document.cookie = 'csrftoken=cp_mock_csrf_token; path=/';

  window.fetch = function (input, init = {}) {
    const url = typeof input === 'string' ? input : input.url;
    if (!url.includes('/api/')) return realFetch(input, init);

    const u = new URL(url, window.location.origin);
    const method = (init.method || 'GET').toUpperCase();
    const found = matchRoute(u.pathname, method);

    if (!found) {
      console.warn('[mock-api] Route non gérée :', method, u.pathname);
      return delay(() => json({ erreur: 'Endpoint mock non implémenté.' }, 404));
    }

    const fakeReq = {
      json: async () => (init.body ? JSON.parse(init.body) : {}),
      formData: async () => (init.body instanceof FormData ? init.body : new FormData()),
    };

    return delay(() => {})
      .then(() => { CATALOGUE = loadCatalogue(); DB = loadDB(); })
      .then(() => found.r.handler(found.params, fakeReq, u))
      .catch(err => { console.error('[mock-api] Erreur handler', u.pathname, err); return json({ erreur: 'Erreur mock interne.' }, 500); });
  };

  console.log('%c[mock-api] Interception activée — données simulées, aucun backend réel.', 'color:#ff8c00;font-weight:bold;');
})();