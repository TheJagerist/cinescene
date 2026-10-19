# CinéScène

Plateforme de billetterie pour cinéma et événements : programme de la semaine, achat et réservation de places, billets QR, programme de fidélité et espace d'administration pour le guichet.

> **Projet de démonstration.** Cette version est un **front 100 % statique** : l'API est simulée dans le navigateur (`mock-api.js`). Aucun serveur, aucune base de données, aucun paiement réel.

## Fonctionnalités

### Côté public
- **Accueil** : carrousel des films de la semaine et grille de cartes avec synopsis au survol.
- **Programme** : grille interactive Mardi → Dimanche, filtrable par ville. Un clic sur une affiche ouvre l'achat du film ; un clic sur une séance l'ouvre avec la ville et la séance déjà sélectionnées.
- **Market** : achat en ligne (paiement intégral) ou réservation (50 % maintenant, le solde au guichet), tarifs standard / enfant / étudiant / avant-première, choix de la ville et de la séance, places restantes en direct.
- **Événements** : événements de la semaine et à venir, tarifs multiples, entrée libre.
- **Bande-annonce** : page dédiée par film.
- **Compte** : profil, billets actifs avec QR code, historique des achats, jauge de fidélité à 5 paliers (Novice → Expert).
- **Authentification** : inscription et connexion.

### Côté administration
- **Programme** : création, modification et suppression des films, séances et événements.
- **Caisse & scans** : lecture de QR par caméra (ou saisie), encaissement du solde d'une réservation, validation des billets d'entrée, détection des billets déjà utilisés.
- **Stock & places** : suivi des places par séance et par tarif, ajustement manuel pour les ventes au guichet.
- **Statistiques** : films les plus vus et les plus rémunérateurs.
- **Historique clients** : commandes en temps réel.
- **Visite guidée** : un tutoriel pas à pas du parcours de paiement.

## Parcours de billetterie

1. Le client **achète** (paiement intégral → billet d'entrée) ou **réserve** (50 % → ticket de solde).
2. Au guichet, le scan du **ticket de solde** permet d'encaisser le reste ; un **billet d'entrée** est alors émis.
3. À l'entrée, le scan du **billet d'entrée** valide l'accès et crédite les **points de fidélité**.
4. Un billet déjà consommé est refusé et signalé comme tentative de fraude.

## Lancer le projet

Un serveur statique est nécessaire (l'ouverture directe du fichier ne fonctionne pas, l'API simulée a besoin d'une origine HTTP).

```bash
# Python
python -m http.server 8080

# ou Node
npx serve .
```

Puis ouvrir <http://localhost:8080>. Avec VS Code, l'extension *Live Server* convient aussi.

## Comptes de démonstration

| Rôle | Identifiant | Mot de passe | Page |
|---|---|---|---|
| Client | `demo` | `demo1234` | `authentification.html` |
| Administrateur | `admin` | `admin1234` | `admin-login.html` |

Ces identifiants n'existent que dans le mock : ils ne protègent rien.

## Fonctionnement du mock

- `mock-api.js` intercepte `fetch` pour tous les appels `/api/…` et répond avec des données de démonstration, avec une latence simulée.
- La **date est figée** au mardi 14 juillet 2026 (`window.CP_DEMO_TODAY`) pour que la semaine de démo reste cohérente.
- Les commandes, billets, points et historiques sont conservés dans le `localStorage` du navigateur. Les films et événements créés depuis l'admin le sont aussi.
- Pour repartir de zéro, vider le `localStorage` du site.

## Structure

```
index.html            Accueil
programme.html        Grille de la semaine
market.html           Achat / réservation de films
events.html           Événements
trailer.html          Bande-annonce d'un film
compte.html           Espace client
authentification.html Inscription / connexion
contact.html          Contact
admin-login.html      Connexion administrateur
admin.html            Administration
mock-api.js           API simulée
icons.js              Icônes SVG partagées
tutorial-guide.js     Visite guidée
css/ images/ videos/  Ressources
```

## Technologies

HTML, CSS et JavaScript natif, sans framework ni étape de build. [Bootstrap](https://getbootstrap.com) (grille), [qrcode.js](https://github.com/davidshimjs/qrcodejs) (génération des QR), [html5-qrcode](https://github.com/mebjas/html5-qrcode) (lecture par caméra) et les polices Montserrat, Inter et JetBrains Mono (Google Fonts).

## Notes

- Le format de réponse du mock est conçu pour correspondre à une API REST réelle (films, séances, commandes, tickets, scans), ce qui permet de brancher un vrai backend sans réécrire les pages.
- Les affiches et bandes-annonces appartiennent à leurs ayants droit et ne sont présentes qu'à titre d'illustration de la démonstration.
