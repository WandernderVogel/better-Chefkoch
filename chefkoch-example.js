/* let ZubereitungsElement;
let ZubereitungsChild;

function init() {
  //get main parent
  //   const mainElement = document.querySelectorAll("main")[0];
  // get Zubereitungs Element
  ZubereitungsChild = document.querySelectorAll(
    '[data-vars-tracking-title="Zubereitung"]'
  )[0];
  ZubereitungsElement = ZubereitungsChild.parentElement;
}

//delete sidebar
let deleteSidebar = function () {
  document
    .querySelectorAll('[data-vars-tracking-title="recipe-nutrition"]')[0]
    .replaceWith(ZubereitungsElement);
};

function test() {
//   init();
//   deleteSidebar();
//   changeStyles();
  this.alert("hello");
}

// document.querySelectorAll("aside")[3].innerHTML = "";
// document.querySelectorAll("aside")[4].innerHTML = "";
// document.querySelectorAll("aside")[5].innerHTML = "";

//set margin on side
let changeStyles = function () {
  document.querySelectorAll("main")[0].style.margin = "20px";
  // change width of sidebar elements
  ZubereitungsElement.style.width = "300px";
  document
    .querySelectorAll("aside")
    .forEach((element) => (element.style.width = "100px"));

  document.querySelectorAll("guj-ad-outstream")[0].style.minHeight = "0px";
}; */

/* TODO
 *   optimize for mobile:
 *       delte einkaufsliste and bei rewe bestellen button
 *       set Zubereitung directly under zutaten
 *    for recipes in different parts(https://www.chefkoch.de/rezepte/2529831396465550/Pfannkuchen-Crepe-und-Pancake.html):
 *       make parts expandable
 *   optimize for pc:
 *       make Zubereitung rearange into the sidebar
 *   general:
 *       Make Browser Addon for Firefox, Chrome, Duckduckgo and when needed others too
 */



// MOBILE 
document.getElementsByClassName("pi-cont")[0].parentElement.innerHTML = "";
document.getElementsByClassName("ds-hr ")[6].innerHTML = "";
document.querySelectorAll("guj-ad-outstream")[0].style.minHeight = "0px";

// delete "Zubereitungstipps on mobile"
document.querySelectorAll(
  '[data-vars-tracking-title="Zubereitungstipps"]'
)[0].parentElement.innerHTML = "";
document.querySelectorAll(
  '[data-vars-tracking-title="Zutaten"]'
)[0].parentElement.style.marginBottom = "0px";
