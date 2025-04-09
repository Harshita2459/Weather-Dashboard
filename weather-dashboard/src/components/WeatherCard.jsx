import { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import Loader from './Loader';
import '../styles/weatherCard.css';

function WeatherCard({ darkMode }) {
  const { weatherData, loading, error, refreshWeather } = useContext(WeatherContext);

  if (loading) return <Loader />;

  if (error) {
    return (
      <div className={`error-message ${darkMode ? 'dark-error' : ''}`}>
        <p>{error}</p>
        <button 
          onClick={() => refreshWeather(weatherData?.name || '')}
          className={`try-again ${darkMode ? 'dark-text' : ''}`}
        >
          Try Again
        </button>
      </div>
    );
  }

  if (!weatherData) {
    return (
      <div className={`welcome-message ${darkMode ? 'dark-welcome' : ''}`}>
        <p>Search for a city to see weather information</p>
      </div>
    );
  }

  return (
    <div className={`weather-card ${darkMode ? 'dark-card' : ''}`}>
      <div className="card-content">
        <div className="card-header">
          <div>
            <h2>{weatherData.name}, {weatherData.sys.country}</h2>
            <p className={darkMode ? 'dark-text' : ''}>
              {new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
          <button
            onClick={() => refreshWeather(weatherData.name)}
            className={`refresh-btn ${darkMode ? 'dark-refresh' : ''}`}
          >
            🔄
          </button>
        </div>

        <div className="weather-details">
          <div className="weather-main">
            <img
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt={weatherData.weather[0].description}
              className="weather-icon"
            />
            <div>
              <p className="temperature">{Math.round(weatherData.main.temp)}°C</p>
              <p className={darkMode ? 'dark-text' : ''}>
                {weatherData.weather[0].description}
              </p>
            </div>
          </div>

          <div className="weather-stats">
            <div className={`stat-box ${darkMode ? 'dark-stat' : ''}`}>
              <p className={darkMode ? 'dark-text' : ''}>Humidity</p>
              <p>{weatherData.main.humidity}%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;