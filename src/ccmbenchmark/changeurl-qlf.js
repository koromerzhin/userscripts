// ==UserScript==
// @name         Change URL (QLF CCM)
// @namespace    https://github.com/koromerzhin/userscripts
// @version      1.0.0
// @description  Reecrit les URLs de production vers les environnements QLF (.qlf).
// @author       koromerzhin
// @match        https://www.qlf.journaldesfemmes.fr/*
// @match        https://sante.qlf.journaldesfemmes.fr/*
// @match        https://www.qlf.journaldunet.fr/*
// @match        https://www.qlf.journaldunet.com/*
// @match        https://www.qlf.hugolescargot.com/*
// @match        https://www.qlf.linternaute.com/*
// @grant        none
// @run-at       document-idle
// @downloadURL  https://raw.githubusercontent.com/koromerzhin/userscripts/main/src/ccmbenchmark/changeurl-qlf.js
// @updateURL    https://raw.githubusercontent.com/koromerzhin/userscripts/main/src/ccmbenchmark/changeurl-qlf.js
// ==/UserScript==

(function () {
  'use strict';

  var HOST_MAP = {
    'www.journaldesfemmes.fr': 'www.qlf.journaldesfemmes.fr',
    'sante.journaldesfemmes.fr': 'sante.qlf.journaldesfemmes.fr',
    'www.journaldunet.fr': 'www.qlf.journaldunet.fr',
    'www.journaldunet.com': 'www.qlf.journaldunet.com',
    'www.hugolescargot.com': 'www.qlf.hugolescargot.com',
    'www.linternaute.com': 'www.qlf.linternaute.com'
  };

  function rewriteLink(link) {
    var href = link.getAttribute('href');
    if (!href || href.indexOf('http') !== 0) {
      return;
    }
    try {
      var url = new URL(href);
      var target = HOST_MAP[url.hostname];
      if (target) {
        url.hostname = target;
        link.setAttribute('href', url.toString());
      }
    } catch {
      // URL relative ou invalide : ignoree volontairement.
    }
  }

  function processAll(root) {
    var links = (root || document).getElementsByTagName('a');
    for (var i = 0; i < links.length; i++) {
      rewriteLink(links[i]);
    }
  }

  processAll(document);

  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      mutation.addedNodes.forEach(function (node) {
        if (node.nodeType !== 1) {
          return;
        }
        if (node.tagName === 'A') {
          rewriteLink(node);
        } else if (node.getElementsByTagName) {
          processAll(node);
        }
      });
    });
  });

  observer.observe(document.documentElement, { childList: true, subtree: true });
  window.addEventListener('unload', function () {
    observer.disconnect();
  });
})();
