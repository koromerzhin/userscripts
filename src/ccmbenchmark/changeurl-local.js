// ==UserScript==
// @name         Change URL (LOCAL CCM)
// @namespace    https://raw.githubusercontent.com/koromerzhin/userscripts/main/src/ccmbenchmark/changeurl-local.js
// @version      0.2
// @description  try to take over the world!
// @author       koromerzhin
// @match        https://www.local.journaldesfemmes.fr/*
// @match        https://sante.local.journaldesfemmes.fr/*
// @match        https://www.local.journaldunet.com/*
// @match        https://www.local.hugolescargot.com/*
// @match        https://www.local.linternaute.com/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  var links = document.getElementsByTagName("a");
  for (var i = 0, len = links.length; i < len; i++) {
      var url = links[i].href.replace('www.journaldesfemmes', 'www.local.journaldesfemmes');
      url = url.replace('sante.journaldesfemmes', 'sante.local.journaldesfemmes');
      url = url.replace('www.journaldunet', 'www.local.journaldunet');
      url = url.replace('www.hugolescargot', 'www.local.hugolescargot');
      url = url.replace('www.linternaute', 'www.local.linternaute');
      links[i].setAttribute('href', url);
  }
})();