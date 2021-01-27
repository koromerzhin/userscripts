// ==UserScript==
// @name         Auto link _blank packagist
// @namespace    https://raw.githubusercontent.com/koromerzhin/userscripts/main/src/divers/auto_link.js
// @version      0.1
// @description  try to take over the world!
// @author       koromerzhin
// @match        https://packagist.org/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  var links = document.getElementsByTagName("a");
  var total = links.length;
  for (var i = 0; i < total; i++) {
      console.log(links[i].href);
      if (links[i].href.indexOf("packagist.org") == -1) {
          links[i].setAttribute('target', '_blank');
      }
  }
})();