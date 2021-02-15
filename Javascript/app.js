"use strict";
// här gör jag mina nya instanser
const Fetch_Weather = new FetchWeather();
const Weather_UI = new WeatherUI();

const Fetch_attraction = new FetchAttractions();
const Attraction_UI = new AttractionUI();

const search = document.querySelector("#mySearch");
const button = document.querySelector("#submitbtn");

// ett click event till min submitbtn
button.addEventListener("click", () => {
  // en variable som är kopplad till min Search window
  const city = search.value;

  // här kallar jag på min Fetch_Weather som är min klass FetchWeather(Fetch.js) sen kallar jag till Funktionen som lägger i klassen och tilldelar en stad
  Fetch_Weather.getCurrentWeather(city).then((WeatherData) => {
    // här kallar jag på min Weather_UI(ui.js) som kallar till funktionen populateUI som kollar på WeatherData(Fetch.js)
    Weather_UI.populateUI(WeatherData);

    // ui.saveToLS(WeatherData);
  });

  // samma som åvan fast för foursquare
  Fetch_attraction.getCurrentAttraction(city).then((foursquareData) => {
    Attraction_UI.populateAttractionUI(foursquareData);
  });
});

// ett skript så jag kan få ut dagarna.
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
