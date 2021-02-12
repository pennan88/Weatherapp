"use strict";

const OutputTemp = document.querySelector("#Temp");
const OutputName = document.querySelector("#hstad");
const OutputCond = document.querySelector("#Cond");
const WeatherIcon = document.querySelector("#Weather_icon");
const OutputLocation = document.querySelector("#location");

const infowindow1 = document.querySelector("#info_location1");
const innerinfowindow1 = document.querySelector("#inner_info1");

const infowindow2 = document.querySelector("#info_location2");
const innerinfowindow2 = document.querySelector("#inner_info2");

const infowindow3 = document.querySelector("#info_location3");
const innerinfowindow3 = document.querySelector("#inner_info3");

class WeatherUI {
  populateUI(WeatherData) {
    OutputTemp.innerHTML = `${WeatherData.main.temp}° C`;
    OutputCond.innerHTML = `${WeatherData.weather[0].description}`;
    OutputLocation.innerHTML = `${WeatherData.name}, ${WeatherData.sys.country}`;
  }
}

class AttractionUI {
  populateAttractionUI(foursquareData) {
    infowindow1.innerHTML =
      foursquareData.response.groups[0].items[0].venue.name;
    innerinfowindow1.innerHTML = `${foursquareData.response.groups[0].items[0].venue.categories[0].name} <br> ${foursquareData.response.groups[0].items[0].venue.location.address}`;

    infowindow2.innerHTML =
      foursquareData.response.groups[0].items[1].venue.name;
    innerinfowindow2.innerHTML = `${foursquareData.response.groups[0].items[1].venue.categories[0].name} <br> ${foursquareData.response.groups[0].items[1].venue.location.address}`;

    infowindow3.innerHTML =
      foursquareData.response.groups[0].items[2].venue.name;
    innerinfowindow3.innerHTML = `${foursquareData.response.groups[0].items[2].venue.categories[0].name} <br> ${foursquareData.response.groups[0].items[2].venue.location.address}`;
  }
}
