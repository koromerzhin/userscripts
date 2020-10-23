// ==UserScript==
// @name         Facebook Auto poke French
// @namespace    https://raw.githubusercontent.com/koromerzhin/userscripts/main/src/divers/facebook-poke-french.js
// @version      1.0
// @description  retroarch-autoconfig-udev-git
// @author       koromerzhin
// @match        https://www.facebook.com/pokes/*
// @grant        none
// ==/UserScript==

function updatePoke() {
  for (var i in document.getElementsByClassName("_42ft _4jy0 _4jy3 _4jy1 selected _51sy")) {
    if (document.getElementsByClassName("_42ft _4jy0 _4jy3 _4jy1 selected _51sy")[i].text == "Envoyer un poke en retour") {
      document.getElementsByClassName("_42ft _4jy0 _4jy3 _4jy1 selected _51sy")[i].click();
    }
  }
}
setInterval(updatePoke, 1000);
