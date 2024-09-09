# Weather App

## Overview

The Weather App allows users to explore cities worldwide, view weather details, and get real-time weather information with dynamic and responsive design features. The application displays a table of cities with features like infinite scroll, search, autocomplete, filter, and sorting. Users can click on a city to view detailed weather information on a separate weather page.

## Technology Stack

- **Frontend**: React
- **Styling**: Tailwind CSS
- **API**: 
  - City Data: [GeoNames API](https://public.opendatasoft.com/explore/dataset/geonames-all-cities-with-a-population-1000/api/?disjunctive.cou_name_en&sort=name)
  - Weather Data: [OpenWeatherMap API](https://openweathermap.org/api)
- **Deployment**: Vercel

## Features

- **City Table Display**: Shows all cities in a table format with infinite scrolling.
- **Search Functionality**: Includes a search-as-you-type feature with autocomplete for city names.
- **Filter and Sort**: Filter and sort cities by name, country, timezone, and other columns.
- **City Navigation**: Clicking on a city name navigates to the weather page for that city. Right-clicking and opening a new tab also navigates to the weather page.
- **Weather Page**: Displays the selected city's current weather, forecast, and other weather-related information.
- **Responsive Design**: Optimized for various screen sizes with responsive design techniques.
- **Error Handling**: Graceful handling of API errors and invalid search queries.
- **Styling**: Tailwind CSS for modern and adaptive styling.

## Getting Started

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/weather-app.git
   cd weather-app
   npm install
   npm run dev
