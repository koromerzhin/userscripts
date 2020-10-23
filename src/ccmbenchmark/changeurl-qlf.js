// ==UserScript==
// @name         Change URL (QLF CCM)
// @namespace    https://raw.githubusercontent.com/koromerzhin/userscripts/main/src/ccmbenchmark/changeurl-qlf.js
// @version      0.2
// @description  try to take over the world!
// @author       koromerzhin
// @match        https://www.qlf.journaldesfemmes.fr/*
// @match        https://sante.qlf.journaldesfemmes.fr/*
// @match        https://www.qlf.journaldunet.fr/*
// @match        https://www.qlf.journaldunet.com/*
// @match        https://www.qlf.hugolescargot.com/*
// @match        https://www.qlf.linternaute.com/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  setInterval(
      function() {
          var links = document.getElementsByTagName("a");
          for (var i = 0, len = links.length; i < len; i++) {
              var url = links[i].href.replace('www.journaldesfemmes', 'www.qlf.journaldesfemmes');
              url = url.replace('sante.journaldesfemmes', 'sante.qlf.journaldesfemmes');
              url = url.replace('www.journaldunet', 'www.qlf.journaldunet');
              url = url.replace('www.hugolescargot', 'www.qlf.hugolescargot');
              url = url.replace('www.linternaute', 'www.qlf.linternaute');
              links[i].setAttribute('href', url);
          }
      },
      3000
  );
})();