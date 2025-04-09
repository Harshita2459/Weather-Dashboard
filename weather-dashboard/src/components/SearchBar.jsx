import { useState, useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import { FiSearch } from 'react-icons/fi';

function SearchBar({ darkMode }) {
  const [city, setCity] = useState('');
  const { fetchWeather } = useContext(WeatherContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      fetchWeather(city);
      setCity('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className={`flex shadow-lg rounded-lg overflow-hidden ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name..."
          className={`flex-grow px-4 py-3 focus:outline-none ${darkMode ? 'bg-gray-700 text-white placeholder-gray-400' : 'bg-white text-gray-900'}`}
        />
        <button
          type="submit"
          className={`px-6 py-3 transition-colors ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white`}
        >
          <FiSearch size={20} />
        </button>
      </div>
    </form>
  );
}

export default SearchBar;