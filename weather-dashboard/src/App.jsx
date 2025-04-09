import { useState } from 'react';
import { WeatherProvider } from './context/WeatherContext';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import RecentSearches from './components/RecentSearches';
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <WeatherProvider>
      <div className={`app-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        <div className="container">
          <div className="header">
            <h1 className="title">Weather Dashboard</h1>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="theme-toggle"
            >
              {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
          </div>
          
          <div className="grid">
            <div>
              <SearchBar darkMode={darkMode} />
              <WeatherCard darkMode={darkMode} />
            </div>
            <div>
              <RecentSearches darkMode={darkMode} />
            </div>
          </div>
        </div>
      </div>
    </WeatherProvider>
  );
}

export default App;