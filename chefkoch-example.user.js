/* TODO
 *   optimize for mobile
 *DONE       delte einkaufsliste and bei rewe bestellen button
 *DONE      set Zubereitung directly under zutaten
 *       delte einkaufsliste and bei rewe bestellen button
 *       set Zubereitung directly under zutaten
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
// @description  Make the UI of Chefkoch.de better on mobile and PC
// @author       Wandernder Vogel
// @match        https://chefkoch.de/*
// @icon         https://www.chefkoch.de/favicon.ico
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

