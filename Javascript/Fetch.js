"use strict";

// Id till foursquare så jag kan komma år API,
const CLIENT_ID = "F5D0UDYYYWDWYZTFCPXLNZSUZ1UTR2TJ3QXZNMY2UUPH42WL";
const CLIENT_SECRET = "4HU1KT2UDW55FJ5QE0UF0GJN5WI3JN1KMQC0R3I1ZUK0PP2K";

// jag har lagt mina funktioner i klasses så jag kan göra ny instancer av dom senare
class FetchWeather {
  async getCurrentWeather(location) {
    // id för openweather så jag kan använda deras API
    const appid = "5a919ee6cbae9e201308bf3ffd6ac46b";

    // här skapar jag en ny URL från openweathers API
    const Weather_api_url = new URL(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}`
    );
    // är lägger jag till parametrar till min URL så slipper jag skriva ut hela långa länken för hand.

    // hur APIN ska bli läst
    Weather_api_url.searchParams.append("mode", "json");

    // min personliga ID till openweather
    Weather_api_url.searchParams.append("appid", appid);

    // vilken enhet jag ska använda
    Weather_api_url.searchParams.append("units", "metric");

    // Vilket språk
    Weather_api_url.searchParams.append("lang", "en");

    // här "fångar" jag APIn och lägger den i en variabel.
    const response = await fetch(Weather_api_url);

    // här läser jag variabel som en json fil
    const WeatherData = await response.json();

    console.log(WeatherData);

    // retunerar response
    return WeatherData;
  }
}
// jag har lagt mina funktioner i klasses så jag kan göra ny instancer av dom senare

class FetchAttractions {
  async getCurrentAttraction(location) {
    // här skapar jag en URL från foursquare API
    const Foursquare_api_url = new URL(
      `https://api.foursquare.com/v2/venues/explore?near=${location}`
    );

    // är lägger jag till parametrar till min URL så slipper jag skriva ut hela långa länken för hand.
    // min personliga client id och secret så jagh kommer åt APIn
    Foursquare_api_url.searchParams.append("client_id", CLIENT_ID);
    Foursquare_api_url.searchParams.append("client_secret", CLIENT_SECRET);
    // vilken version
    Foursquare_api_url.searchParams.append("v", "20210211");

    // vad jag ska söka efter, i detta fall så söger jag efter bara mat ställen
    Foursquare_api_url.searchParams.append("section", "food");

    // sätter jag en limit till 3 saker
    Foursquare_api_url.searchParams.append("limit", "3");

    // här "fångar" jag APIn och lägger den i en variabel.
    const response = await fetch(Foursquare_api_url);

    // här läser jag variabel som en json fil
    const foursquareData = await response.json();

    console.log(foursquareData);

    // retunerar response
    return foursquareData;
  }
}

// async function getCurrentAttractionimg() {
//   const Foursquare_img_api_url = `https://api.foursquare.com/v2/venues/5001aaf2e4b0a4b26cf22be0/photos?near=halmstad&section=food&limit=3&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=20210211`;

//   const response = await fetch(Foursquare_img_api_url);

//   const foursquareimgData = await response.json();

//   console.log(foursquareimgData);

//   return foursquareimgData;
// }
