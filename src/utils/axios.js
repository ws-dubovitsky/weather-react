import axios from "axios";

export const WeatherAPIRequest = axios.create({
    method: 'get',
    baseURL: "https://api.openweathermap.org",
    timeout: 1000,
});