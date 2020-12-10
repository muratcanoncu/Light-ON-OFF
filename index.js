"use strict";

let light = document.querySelector("#bulb");

let on = document.querySelector("#on");
let off = document.querySelector("#off");

light.addEventListener("click", function (e) {
  e.target.classList.toggle("bulb-on"); // first click adds,second click removes the class
});
