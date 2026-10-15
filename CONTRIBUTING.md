# Contributing

Merci de contribuer à `@koromerzhin/userscripts`.

## Workflow

1. Fork + branche depuis `develop` : `feat/<script>-<action>` ou `fix/<script>-<action>`.
2. Un script = un fichier auto-suffisant dans `src/<ccmbmark|divers>/` (pas d'import, servi via GitHub raw).
3. Respecter les conventions ci-dessous.
4. Vérifier en local avant PR :

```sh
npm ci
npm run lint
```

## Conventions userscript

- En-tête complet requis : `@name`, `@namespace https://github.com/koromerzhin/userscripts`, `@version` (alignée sur `package.json`), `@description` réelle (pas de placeholder), `@match` minimal, `@grant none` sauf besoin, `@run-at document-idle`, `@downloadURL` + `@updateURL` vers `raw.githubusercontent.com/.../main/...`.
- Code encapsulé : `(function () { 'use strict'; ... })()`.
- Pas de `console.log` en production.
- Pas de `setInterval` sans nettoyage : préférer `MutationObserver` (`childList + subtree`) + `observer.disconnect()` sur `unload`. Si un polling reste nécessaire (ex. Facebook), intervalle >= 5s + `clearInterval` sur `unload`.
- DOM dynamique obligatoire : traiter le DOM initial + les nœuds ajoutés.
- URLs : utiliser `new URL(href)` + table de mapping `hostname`, avec `try/catch`. Ne jamais faire `href.replace('www.x', 'www.y.x')`.
- Liens externes `_blank` : toujours ajouter `rel="noopener noreferrer"`.
- Sélecteurs fragiles interdits : pas de classes CSS minifiées/obfusquées (ex. Facebook `_42ft ...`). Préférer texte / `aria-label` / `role`.

## Tests manuels

- Installer le script via Tampermonkey > "Installer depuis URL" (lien raw).
- Tester sur la page `@match` : chargement initial + navigation SPA + ajout dynamique de liens.
- Vérifier console navigateur : zéro erreur, zéro log.

## Release

- Bumper `@version` des scripts modifiés + `package.json` ensemble.
- PR vers `develop`, squash si possible.
