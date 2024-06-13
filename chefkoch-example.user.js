/* TODO
 *   optimize for mobile:
 *DONE       delte einkaufsliste and bei rewe bestellen button
 * DONE      set Zubereitung directly under zutaten
 *    for recipes in different parts(https://www.chefkoch.de/rezepte/2529831396465550/Pfannkuchen-Crepe-und-Pancake.html):
 *       make parts expandable
 *   optimize for pc:
 *       make Zubereitung rearange into the sidebar
 *   general:
 *       Make Browser Addon for Firefox, Chrome, Duckduckgo and when needed others too
 */

// ==UserScript==
// @name         Better Chefkoch
// @namespace    https://github.com/WandernderVogel
// @version      1.0
// @description  Makes chefkoch on mobile slightly more enjoyable
// @author       Wandernder Vogel
// @match        https://www.chefkoch.de/rezepte*
// @icon         https://img.chefkoch-cdn.de/favicon.ico
// @grant        none
// ==/UserScript==

(function () {
  ("use strict");

  // MOBILE
  document.getElementsByClassName("pi-cont")[0].parentElement.innerHTML = "";
  document.getElementsByClassName("ds-hr ")[6].innerHTML = "";
  document.querySelectorAll("guj-ad-outstream")[0].style.minHeight = "0px";
  document.querySelectorAll("guj-ad-outstream")[0].style.height = "0px";

  // delete "Zubereitungstipps on mobile"
  document.querySelectorAll(
    '[data-vars-tracking-title="Zubereitungstipps"]'
  )[0].parentElement.innerHTML = "";
  document.querySelectorAll(
    '[data-vars-tracking-title="Zutaten"]'
    )[0].parentElement.style.marginBottom = "0px";
  //delete Zeitangaben
  document.getElementsByClassName(
    "ds-recipe-meta rds-recipe-meta"
  )[0].innerHTML = "";
  //delete zubereitungstitel
  document.querySelectorAll(
    '[data-vars-tracking-title="Zubereitung"]'
  )[0].innerHTML = "";
    })();
