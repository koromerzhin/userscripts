# Welcome to @koromerzhin/userscripts

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/koromerzhin/userscripts/graphs/commit-activity)
![Continuous Integration](https://github.com/koromerzhin/userscripts/workflows/ci/badge.svg?branch=develop)

> Collection de userscripts Tampermonkey / Violentmonkey pour automatiser des tâches web.

## Prérequis

- Une extension userscript : [Tampermonkey](https://www.tampermonkey.net/) ou [Violentmonkey](https://violentmonkey.github.io/)
- `npm` (uniquement pour contribuer / linter)

## Installation (1-clic)

Clique sur le lien `raw` correspondant, l'extension proposera l'installation.
Les mises à jour sont automatiques via `@downloadURL` / `@updateURL`.

### CCM Benchmark

| Script | Rôle | `@match` | Installer |
|--------|------|----------|-----------|
| `auto_link-atlassian.js` | Ouvre les liens externes Atlassian en `_blank` + `noopener` | `ccmbenchmark.atlassian.net/*` | [Installer](https://raw.githubusercontent.com/koromerzhin/userscripts/main/src/ccmbenchmark/auto_link-atlassian.js) |
| `changeurl-local.js` | Réécrit les URLs prod vers `.local` (via `URL` API + `MutationObserver`) | `*.local.journaldesfemmes.fr`, `*.local.journaldunet.com`, `*.local.hugolescargot.com`, `*.local.linternaute.com` | [Installer](https://raw.githubusercontent.com/koromerzhin/userscripts/main/src/ccmbenchmark/changeurl-local.js) |
| `changeurl-qlf.js` | Réécrit les URLs prod vers `.qlf` (via `URL` API + `MutationObserver`) | `*.qlf.journaldesfemmes.fr`, `*.qlf.journaldunet.*`, `*.qlf.hugolescargot.com`, `*.qlf.linternaute.com` | [Installer](https://raw.githubusercontent.com/koromerzhin/userscripts/main/src/ccmbenchmark/changeurl-qlf.js) |

### Divers

| Script | Rôle | `@match` | Installer |
|--------|------|----------|-----------|
| `auto_link.js` | Ouvre les liens externes Packagist en `_blank` + `noopener` | `packagist.org/*` | [Installer](https://raw.githubusercontent.com/koromerzhin/userscripts/main/src/divers/auto_link.js) |
| `facebook-poke-french.js` | Auto-poke Facebook FR (DEPRECATED, sélecteurs FB instables) | `facebook.com/pokes/*` | [Installer](https://raw.githubusercontent.com/koromerzhin/userscripts/main/src/divers/facebook-poke-french.js) |

## Développement

```sh
git clone git@github.com:koromerzhin/userscripts.git userscripts
cd userscripts
npm ci
npm run lint
```

Conventions userscript :

- IIFE + `'use strict'` obligatoire (pas de fuite globale)
- Pas de `setInterval` persistant : préférer `MutationObserver` + `disconnect()` sur `unload`
- Réécriture URL via `new URL()`, jamais `String.replace` sur hostname
- Headers requis : `@name`, `@namespace`, `@version` (alignée sur `package.json`), `@description` réelle, `@match`, `@downloadURL`, `@updateURL`, `@run-at document-idle`

Voir [CONTRIBUTING.md](./CONTRIBUTING.md) et [SECURITY.md](./SECURITY.md).

## 🏠 Homepage

[https://github.com/koromerzhin/userscripts#readme](https://github.com/koromerzhin/userscripts#readme)

## 🤝 Contributing

Contributions, issues et feature requests bienvenues.
Voir [issues](https://github.com/koromerzhin/userscripts/issues) et [contributing guide](./CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2019 [koromerzhin](https://github.com/koromerzhin).

This project is [MIT](https://github.com/koromerzhin/userscripts/blob/develop/LICENSE) licensed.
