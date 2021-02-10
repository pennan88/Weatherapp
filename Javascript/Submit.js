"use strict";
const OutputTemp = document.querySelector("#Temp");
const OutputName = document.querySelector("#hstad");
const OutputWind = document.querySelector("#Wind");
const OutputCond = document.querySelector("#Cond");
const searchbar = document.querySelector("#mySearch");
const submitbtn = document.querySelector("#submitbtn");
const infowindow1 = document.querySelector(".info1");
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

function cityWeatherUrl(cityName) {
  let CityWeatherUrl = new URL(
    "https://api.openweathermap.org/data/2.5/weather"
  );
  CityWeatherUrl.searchParams.set("q", cityName);
  CityWeatherUrl.searchParams.set("appid", "5a919ee6cbae9e201308bf3ffd6ac46b");
  CityWeatherUrl.searchParams.set("mode", "json");
  CityWeatherUrl.searchParams.set("units", "metric");
  CityWeatherUrl.searchParams.set("lang", "en");
  return CityWeatherUrl;
}

function GetWeatherInfo() {
  if (mySearch.value === "") {
    alert("Please enter a city:");
  } else {
    let city = mySearch.value;
    let xhr = new XMLHttpRequest();

    const url = cityWeatherUrl(city);
    xhr.open("GET", url);

    xhr.responseType = "json";

    xhr.onload = function () {
      console.log(xhr.status + " " + xhr.statusText);
      console.log(xhr.response);
      OutputTemp.innerText = "Temperature: " + xhr.response.main.temp + "C";
      OutputName.innerText = xhr.response.name;
      OutputWind.innerHTML = "Wind speed: " + xhr.response.wind.speed + "m/s";
      OutputCond.innerHTML =
        "Condition: " + xhr.response.weather[0].description.toUpperCase();
    };

    xhr.send();
  }
}

const CLIENT_ID = "F5D0UDYYYWDWYZTFCPXLNZSUZ1UTR2TJ3QXZNMY2UUPH42WL";
const CLIENT_SECRET = "4HU1KT2UDW55FJ5QE0UF0GJN5WI3JN1KMQC0R3I1ZUK0PP2K";

function cityattractions() {
  let CityAttractionUrl = new URL(
    `https://api.foursquare.com/v2/venues/search?near="halmstad"&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=20210209`

  );
  CityAttractionUrl.searchParams.set("near", "Halmstad");
  CityAttractionUrl.searchParams.set("limit", "10");
  return CityAttractionUrl;
}

function testt() {
  let xhr = new XMLHttpRequest();

  const url = cityattractions();
  xhr.open("GET", url);

  xhr.responseType = "json";

  xhr.onload = function () {
    console.log(xhr.statusText + " " + xhr.statusText);
    console.log(xhr.response);
    infowindow1.innerHTML = xhr.response.venues[6];
  };

  xhr.send();
}

submitbtn.addEventListener("click", function () {
  GetWeatherInfo();
});
