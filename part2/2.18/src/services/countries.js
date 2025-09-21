import axios from 'axios';

const API_COUNTRIES = 'https://studies.cs.helsinki.fi/restcountries/api/all';
const API_COUNTRY_BY_NAME = 'https://studies.cs.helsinki.fi/restcountries/api/name';
const WEATHER_API = 'https://api.openweathermap.org/data/2.5/weather';
const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY; // khai báo key trong .env

const getAll = async () => {
  try {
    const response = await axios.get(API_COUNTRIES);
    return response.data;
  } catch (error) {
    console.error('Error fetching countries:', error);
    throw error;
  }
};

const getByName = async (name) => {
  try {
    const response = await axios.get(`${API_COUNTRY_BY_NAME}/${name}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching country by name:', error);
    throw error;
  }
};

const getWeatherByCity = async (city) => {
  try {
    const url = `${WEATHER_API}?q=${city}&appid=${WEATHER_API_KEY}&units=metric`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching weather:', error);
    throw error;
  }
};

export default {
  getAll,
  getByName,
  getWeatherByCity,
};
