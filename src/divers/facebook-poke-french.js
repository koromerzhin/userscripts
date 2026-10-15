// ==UserScript==
// @name         Facebook Auto poke French
// @namespace    https://github.com/koromerzhin/userscripts
// @version      1.0.0
// @description  Clique automatiquement sur "poke en retour" sur la page des pokes Facebook (DEPRECATED : selecteurs Facebook instables).
// @author       koromerzhin
// @match        https://www.facebook.com/pokes/*
// @grant        none
// @run-at       document-idle
// @downloadURL  https://raw.githubusercontent.com/koromerzhin/userscripts/main/src/divers/facebook-poke-french.js
// @updateURL    https://raw.githubusercontent.com/koromerzhin/userscripts/main/src/divers/facebook-poke-french.js
// ==/UserScript==

(function () {
  'use strict';

  var LABEL_PATTERN = /poke en retour/i;
  var SCAN_INTERVAL_MS = 5000;

  function findPokeButtons(root) {
    return Array.prototype.filter.call(
      (root || document).querySelectorAll('div[role="button"], button, a'),
      function (el) {
        var text = (el.textContent || '') + ' ' + (el.getAttribute('aria-label') || '');
        return LABEL_PATTERN.test(text);
      }
    );
  }

  function clickPokes() {
    findPokeButtons(document).forEach(function (btn) {
      try {
        btn.click();
      } catch {
        // Clic impossible (element detache) : ignore.
      }
    });
  }

  clickPokes();

  var throttle = null;
  var observer = new MutationObserver(function () {
    if (throttle) {
      return;
    }
    throttle = setTimeout(function () {
      throttle = null;
      clickPokes();
    }, 1000);
  });

  observer.observe(document.documentElement, { childList: true, subtree: true });

  // Filet de securite si Facebook rend le contenu en dehors du DOM observe.
  var fallback = setInterval(clickPokes, SCAN_INTERVAL_MS);

  window.addEventListener('unload', function () {
    observer.disconnect();
    clearInterval(fallback);
    if (throttle) {
      clearTimeout(throttle);
    }
  });
})();
