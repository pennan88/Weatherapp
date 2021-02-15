"use strict";
// massor av variablar
const OutputTemp = document.querySelector("#Temp");
const OutputName = document.querySelector("#hstad");
const OutputCond = document.querySelector("#Cond");
const icon = document.querySelector("#icon");
const OutputLocation = document.querySelector("#location");

const cardwindow1 = document.querySelector("#card_location1");
const innercardwindow1 = document.querySelector("#inner_card1");

const cardwindow2 = document.querySelector("#card_location2");
const innercardwindow2 = document.querySelector("#inner_card2");

const cardwindow3 = document.querySelector("#card_location3");
const innercardwindow3 = document.querySelector("#inner_card3");

// jag har lagt mina funktioner i klasses så jag kan göra ny instancer av dom senare
class WeatherUI {
  // Här tar jag WeatherData från Fetch.js så jag kan komma åt mina objekt och lägga in dom i mina skapade variablar
  populateUI(WeatherData) {
    OutputTemp.innerHTML = `${WeatherData.main.temp}° C`;
    OutputCond.innerHTML = `${WeatherData.weather[0].description}`;
    OutputLocation.innerHTML = `${WeatherData.name}, ${WeatherData.sys.country}`;

    // här kollar jag om tempen är < 0 så kommer det en snöflinga annars and sol
    if (WeatherData.main.temp < 0) {
      icon.src = "images/snowflake.svg";
    } else {
      icon.src = "/images/sunny.svg";
    }
  }
}
// jag har lagt mina funktioner i klasses så jag kan göra ny instancer av dom senare
class AttractionUI {
  // här tar jag foursquareData från Fetch.js så jag kan komma åt mina objekt
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
