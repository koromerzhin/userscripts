// ==UserScript==
// @name         Auto link _blank atlassian
// @namespace    https://github.com/koromerzhin/userscripts
// @version      1.0.0
// @description  Ouvre les liens externes CCM Benchmark Atlassian dans un nouvel onglet.
// @author       koromerzhin
// @match        https://ccmbenchmark.atlassian.net/*
// @grant        none
// @run-at       document-idle
// @downloadURL  https://raw.githubusercontent.com/koromerzhin/userscripts/main/src/ccmbenchmark/auto_link-atlassian.js
// @updateURL    https://raw.githubusercontent.com/koromerzhin/userscripts/main/src/ccmbenchmark/auto_link-atlassian.js
// ==/UserScript==

(function () {
  'use strict';

  var INTERNAL_HOST = 'ccmbenchmark.atlassian.net';

  function isExternal(href) {
    try {
      var url = new URL(href, window.location.href);
      return url.protocol.indexOf('http') === 0 && url.hostname !== INTERNAL_HOST;
    } catch {
      return false;
    }
  }

  function processLink(link) {
    if (isExternal(link.href)) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    }
  }

  function processAll(root) {
    var links = (root || document).getElementsByTagName('a');
    for (var i = 0; i < links.length; i++) {
      processLink(links[i]);
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
          processLink(node);
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
