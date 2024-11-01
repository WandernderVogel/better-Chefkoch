// ==UserScript==
// @name         Better Chefkoch
// @namespace    https://github.com/WandernderVogel
// @version      1.0
// @description  Make the UI of Chefkoch.de better on mobile and PC
// @author       Wandernder Vogel
// @match        *://*.chefkoch.de/rezepte/*
// @icon         https://www.chefkoch.de/favicon.ico
// @grant        none
// ==/UserScript==

(function () {
	("use strict");
	//Desktop
	document.querySelectorAll(".pi-cont").forEach((e) => {
		e.style.height = "0px";
		e.innerHTML = "";
	});
	document.querySelectorAll(".guj-ad-outstream").forEach((e) => {
		e.style.height = "0px";
		e.style.minHeight = "0px";
		e.innerHTML = "";
	});
	//collect table
	let zubereitungDiv = document.querySelector(
		'[data-vars-tracking-title="Zubereitung"]'
	).parentElement;
	let zutaten = document.querySelector('[data-vars-tracking-title="Zutaten"]')
		.parentElement.innerHTML;
	let zubereitung = zubereitungDiv.querySelector(".ds-box").innerHTML;
	//create table
	let table = document.createElement("div");
	table.id = "tableCustom";
	table.style.position = "fixed";
	table.style.top = "55%";
	table.style.left = "50%";
	table.style.width = "90vw";
	table.style.height = "85vh";
	table.style.transform = "translate(-50%, -50%)";
	table.style.backgroundColor = "#cccccc";
	table.style.border = "1px solid black";
	table.style.padding = "20px";
	table.style.zIndex = "100000001";
	table.style.color = "black";
	table.style.display = "block";
	table.style.overflowX = "scroll";
	table.innerHTML = `
   <table style="border-collapse: collapse; width: 100%">
     <tr style="cursor: unset">
       <th style="border: 1px solid grey; padding: 10px; vertical-align: text-top; width:32%">
       ${zutaten}
       </th>
       <th style="border: 1px solid grey; padding: 10px; vertical-align: text-top; width:68%">
       ${zubereitung}
       </th>
     </tr>
   </table>`;
	//add table to webpage
	document.body.appendChild(table);
	//add close btn
	let closebtn = document.createElement("div");
	closebtn.id = "closebtn";
	closebtn.style.display = "block";
	closebtn.style.zIndex = "1000000001";
	closebtn.style.position = "fixed";
	closebtn.style.transform = "translate(-50%, -50%)";
	closebtn.style.top = "7%";
	closebtn.style.left = "95%";
	closebtn.style.width = "90px";
	closebtn.style.height = "90px";
	closebtn.innerHTML = `
<button
	onclick="
(document.getElementById('tableCustom').style.display == 'block')?
(document.getElementById('tableCustom').style.display = 'none'):
(document.getElementById('tableCustom').style.display = 'block')"
	style="height: 90px; width: 90px; background: none; border: none; cursor: pointer;">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 40 40"
		enable-background="new 0 0 40 40">
		<line
			x1="15"
			y1="15"
			x2="25"
			y2="25"
			stroke="#000"
			stroke-width="2.5"
			stroke-linecap="round"></line>
		<line
			x1="25"
			y1="15"
			x2="15"
			y2="25"
			stroke="#000"
			stroke-width="2.5"
			stroke-linecap="round"></line>
	</svg>
</button>

  `;
	document.body.appendChild(closebtn);
})();
