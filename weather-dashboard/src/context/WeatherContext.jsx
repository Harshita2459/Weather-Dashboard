import { createContext, useState } from 'react'
import axios from 'axios'

export const WeatherContext = createContext()

export function WeatherProvider({ children }) {
  const [weatherData, setWeatherData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [recentSearches, setRecentSearches] = useState([])
  
  const API_KEY = '55c603aee09230f390463f5936a5d178' //Using openWeathermap's api

  const fetchWeather = async (city) => {
    if (!city) return
    
    setLoading(true)
    setError(null)
    
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      )
      
      setWeatherData(response.data)
      addRecentSearch(city)
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch weather data')
      setWeatherData(null)
    } finally {
      setLoading(false)
    }
  }

  const addRecentSearch = (city) => {
    setRecentSearches(prev => {
      const newSearches = [city, ...prev.filter(item => item.toLowerCase() !== city.toLowerCase())]
      return newSearches.slice(0, 5)
    })
  }

  const refreshWeather = () => {
    if (weatherData?.name) {
      fetchWeather(weatherData.name)
    }
  }

  return (
    <WeatherContext.Provider value={{
      weatherData,
      loading,
      error,
      recentSearches,
      fetchWeather,
      refreshWeather
    }}>
      {children}
    </WeatherContext.Provider>
  )
}