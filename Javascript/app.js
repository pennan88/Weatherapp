"use strict";
const Fetch_Weather = new FetchWeather();
const Weather_UI = new WeatherUI();

const Fetch_attraction = new FetchAttractions();
const Attraction_UI = new AttractionUI();

const search = document.querySelector("#mySearch");
const button = document.querySelector("#submitbtn");

button.addEventListener("click", () => {
  const currentval = search.value;

  Fetch_Weather.getCurrentWeather(currentval).then((WeatherData) => {
    Weather_UI.populateUI(WeatherData);

    // ui.saveToLS(WeatherData);
  });

  Fetch_attraction.getCurrentAttraction(currentval).then((foursquareData) => {
    Attraction_UI.populateAttractionUI(foursquareData);
  });
});

let day = document.getElementById("Day");

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
