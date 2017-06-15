const API_KEY = 'af50b3aaac845b0bd2cda806876dfca9';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;

  return {
    type: FETCH_WEATHER
  };
}