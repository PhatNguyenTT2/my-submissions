import countryServices from '../services/countries'
import { useEffect, useState } from 'react'

const Country = ({ country }) => {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    const fetchWeather = async () => {
      const weatherData = await countryServices.getWeatherByCity(country.capital)
      setWeather(weatherData)
    }

    fetchWeather()
  }, [country.capital])

  return (
    <div>
      <h2>{country.name.common}</h2>
      <div>capital {country.capital}</div>
      <div>area {country.area}</div>
      <h3>languages:</h3>
      <ul>
        {Object.values(country.languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt={`Flag of ${country.name.common}`} width="150" />
      <h3>Weather in {country.capital}</h3>
      <div>temperature {weather ? weather.main.temp : 'Loading...'} °C</div>
      {weather && weather.weather[0] && (
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
          alt={weather.weather[0].description}
        />
      )}
      <div>wind {weather ? weather.wind.speed : 'Loading...'} m/s</div>
    </div>
  );
};

export default Country;