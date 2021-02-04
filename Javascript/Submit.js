"use strict";

let searchbar = document.getElementById("mySearch");
let sub_btn = document.getElementById("submitbtn");
let locations = document.getElementById("hstad");
let temp = document.getElementById("Temp");
let day = document.getElementById("Day");
let cond = document.getElementById("Cond");

let DateNum = new Date();
let NumtoDate = new Array(7);
NumtoDate[0] = "Sunday";
NumtoDate[1] = "Monday";
NumtoDate[2] = "Tuesday";
NumtoDate[3] = "Wednesday";
NumtoDate[4] = "Thursday";
NumtoDate[5] = "Friday";
NumtoDate[6] = "Saturday";
let WhatDay = NumtoDate[DateNum.getDay()];
day.innerHTML = WhatDay;

sub_btn.addEventListener("click", function () {
  let currentVal = searchbar.value;
  locations.innerHTML = currentVal;

  if (locations.innerHTML === "Göteborg") {
    temp.innerHTML = "Test";
  }
});
