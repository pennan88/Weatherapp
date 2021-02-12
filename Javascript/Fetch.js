"use strict";
const CLIENT_ID = "F5D0UDYYYWDWYZTFCPXLNZSUZ1UTR2TJ3QXZNMY2UUPH42WL";
const CLIENT_SECRET = "4HU1KT2UDW55FJ5QE0UF0GJN5WI3JN1KMQC0R3I1ZUK0PP2K";

class FetchWeather {
  async getCurrentWeather(location) {
    const appid = "5a919ee6cbae9e201308bf3ffd6ac46b";

    const Weather_api_url = new URL(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}`
    );
    Weather_api_url.searchParams.append("mode", "json");
    Weather_api_url.searchParams.append("appid", appid);
    Weather_api_url.searchParams.append("units", "metric");
    Weather_api_url.searchParams.append("lang", "en");
    const response = await fetch(Weather_api_url);

    const WeatherData = await response.json();

    console.log(WeatherData);

    return WeatherData;
  }
}

class FetchAttractions {
  async getCurrentAttraction(location) {
    const Foursquare_api_url = new URL(
      `https://api.foursquare.com/v2/venues/explore?near=${location}`
    );

    Foursquare_api_url.searchParams.append("client_id", CLIENT_ID);
    Foursquare_api_url.searchParams.append("client_secret", CLIENT_SECRET);
    Foursquare_api_url.searchParams.append("v", "20210211");
    Foursquare_api_url.searchParams.append("section", "food");
    Foursquare_api_url.searchParams.append("limit", "3");
    const response = await fetch(Foursquare_api_url);

    const foursquareData = await response.json();

    console.log(foursquareData);

    return foursquareData;
  }
}

async function getCurrentAttractionimg() {
  const Foursquare_img_api_url = `https://api.foursquare.com/v2/venues/5001aaf2e4b0a4b26cf22be0/photos?near=halmstad&section=food&limit=3&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=20210211`;

  const response = await fetch(Foursquare_img_api_url);

  const foursquareimgData = await response.json();

  console.log(foursquareimgData);

  return foursquareimgData;
}
