"use strict";

const OutputTemp = document.querySelector("#Temp");
const OutputName = document.querySelector("#hstad");
const OutputCond = document.querySelector("#Cond");
const WeatherIcon = document.querySelector("#Weather_icon");
const OutputLocation = document.querySelector("#location");

const cardwindow1 = document.querySelector("#card_location1");
const innercardwindow1 = document.querySelector("#inner_card1");

const cardwindow2 = document.querySelector("#card_location2");
const innercardwindow2 = document.querySelector("#inner_card2");

const cardwindow3 = document.querySelector("#card_location3");
const innercardwindow3 = document.querySelector("#inner_card3");

class WeatherUI {
  populateUI(WeatherData) {
    OutputTemp.innerHTML = `${WeatherData.main.temp}° C`;
    OutputCond.innerHTML = `${WeatherData.weather[0].description}`;
    OutputLocation.innerHTML = `${WeatherData.name}, ${WeatherData.sys.country}`;
  }
}

class AttractionUI {
  populateAttractionUI(foursquareData) {
    cardwindow1.innerHTML =
      foursquareData.response.groups[0].items[0].venue.name;
    innercardwindow1.innerHTML = `${foursquareData.response.groups[0].items[0].venue.categories[0].name} <br> ${foursquareData.response.groups[0].items[0].venue.location.address}`;

    cardwindow2.innerHTML =
      foursquareData.response.groups[0].items[1].venue.name;
    innercardwindow2.innerHTML = `${foursquareData.response.groups[0].items[1].venue.categories[0].name} <br> ${foursquareData.response.groups[0].items[1].venue.location.address}`;

    cardwindow3.innerHTML =
      foursquareData.response.groups[0].items[2].venue.name;
    innercardwindow3.innerHTML = `${foursquareData.response.groups[0].items[2].venue.categories[0].name} <br> ${foursquareData.response.groups[0].items[2].venue.location.address}`;
  }
}
