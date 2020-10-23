// ==UserScript==
// @name         Auto link _blank atlassian
// @namespace    https://raw.githubusercontent.com/koromerzhin/userscripts/main/src/ccmbenchmark/auto_link-atlassian.js
// @version      0.1
// @description  try to take over the world!
// @author       koromerzhin
// @match        https://ccmbenchmark.atlassian.net/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  var links = document.getElementsByTagName("a");
  var total = links.length;
  for (var i = 0; i < total; i++) {
      console.log(links[i].href);
      if (links[i].href.indexOf("ccmbenchmark.atlassian.net") == -1) {
          links[i].setAttribute('target', '_blank');
      }
  }
})();