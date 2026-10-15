# Security Policy

## Supported Versions

Seule la branche `main` (dernière version des scripts via `@updateURL`) est supportée.

| Version | Supported |
|---------|-----------|
| `main` (1.x) | yes |
| `< 1.0` | no |

## Reporting a Vulnerability

Ne pas ouvrir d'issue publique pour une faille.

Contact : via [issues privées](https://github.com/koromerzhin/userscripts/issues) avec le label `security`, ou via le profil [koromerzhin](https://github.com/koromerzhin).

Inclure :

- Script concerné (`src/...`) + `@version`
- URL `@match` reproduisant le problème
- Impact estimé (ex. exfiltration, XSS, fuite `href`)

## Scope

Ces userscripts s'exécutent avec les privilèges de la page (`@grant none`).
Ils ne doivent jamais :

- exfiltrer de données (pas de `fetch`/`GM_xmlhttpRequest` vers un tiers),
- demander d'élargir `@match` sans justification,
- embarquer de code minifié/obfusqué non auditable.

Toute PR élargissant un `@match` ou ajoutant un `@grant` / `@require` externe doit le justifier explicitement.
