import { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

function RecentSearches({ darkMode }) {
    const { recentSearches, fetchWeather } = useContext(WeatherContext);

    if (recentSearches.length === 0) return null;

    return (
        <div className={`rounded-xl shadow-lg overflow-hidden ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
            <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Recent Searches</h3>
                <ul className="space-y-2">
                    {recentSearches.map((city, index) => (
                        <li key={index}>
                            <button
                                onClick={() => fetchWeather(city)}
                                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
                            >
                                {city}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default RecentSearches;