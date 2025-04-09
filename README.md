# Zynetic

# Weather Dashboard

A responsive weather dashboard built with React.js that displays current weather information for any city using the OpenWeatherMap API.

## Features

- Search for weather by city name
- View current temperature, humidity, wind speed, and more
- Dark/light mode toggle
- Recent search history
- Refresh weather data
- Responsive design for all screen sizes
- Loading and error states

## Technologies Used

- React.js
- Vite
- Axios (for API calls)
- React Icons

## Setup

1. Clone the repository
2. Install dependencies: npm install
3. Create a .env file in the root directory and add your OpenWeatherMap API key:
VITE_API_KEY=your_api_key_here

4. Start the development server: npm run dev

## API Integration

This app uses the OpenWeatherMap Current Weather API:
- API URL: https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric
- Free tier has a limit of 60 calls per minute
- You need to sign up at https://openweathermap.org/api to get an API key

## Deployment

The app is deployed on Github. The live version can be accessed at [https://github.com/Harshita2459/Zynetic]
