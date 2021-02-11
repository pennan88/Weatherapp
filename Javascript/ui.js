"use strict";

const OutputTemp = document.querySelector("#Temp");
const OutputName = document.querySelector("#hstad");
const OutputWind = document.querySelector("#Wind");
const OutputCond = document.querySelector("#Cond");

const infowindow1 = document.querySelector(".info1");
const infowindow2 = document.querySelector(".info2");
const infowindow3 = document.querySelector(".info3");

class WeatherUI {
  populateUI(WeatherData) {
    OutputTemp.innerHTML = `Temperature: ${WeatherData.main.temp} C`;
    OutputName.innerHTML = `${WeatherData.name}`;
    OutputWind.innerHTML = `Wind speed: ${WeatherData.wind.speed} m/s`;
    OutputCond.innerHTML = `Conditions: ${WeatherData.weather[0].main}/ ${WeatherData.weather[0].description}`;
  }
}

class AttractionUI {
  populateAttractionUI(foursquareData) {
    infowindow1.innerHTML =
      foursquareData.response.groups[0].items[0].venue.name;
    infowindow2.innerHTML =
      foursquareData.response.groups[0].items[1].venue.name;
    infowindow3.innerHTML =
      foursquareData.response.groups[0].items[2].venue.name;
  }
}
