import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const WeatherPage = () => {
  const [weatherDetail, setweatherDetail] = useState({});

  const city = useParams();
  const cityInLower = city.cityName.toLowerCase();

  useEffect(() => {
    fetchWeatherDetail();
  }, []);

  const fetchWeatherDetail = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city.cityName.toLowerCase()}&appid=${
          import.meta.env.VITE_API_KEY
        }`
      );
      setweatherDetail(response.data);

      console.log(response.data);
    } catch (err) {
      console.log('Error Fetching Weather Details');
    }
  };

  const timezone = String(
    new Date((weatherDetail?.sys?.sunrise - weatherDetail?.timezone) * 1000)
  ).split(' ');

  const urlIcon = `https://openweathermap.org/img/wn/${weatherDetail?.weather?.map(
    (data) => data.icon
  )}@2x.png`;

  console.log(urlIcon);

  return (
    <div className="flex m-10 h-[91vh]">
      <div className="w-full h-full p-5 bg-gray-500 rounded-lg flex flex-col justify-between bg-cover bg-[url('https://images.unsplash.com/photo-1561553873-e8491a564fd0?q=80&w=2147&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
        <div className="flex justify-between">
          <div>
            <Link
              className="text-2xl text-red-500 font-bold hover:underline"
              to="/"
            >
              Home
            </Link>

            <h1 className="text-8xl my-2 font-bold text-gray-50">
              {weatherDetail?.name}
            </h1>
          </div>

          <div>
            <p className="text-4xl text-right my-2 font-bold text-gray-50">
              {timezone[0]}
            </p>
            <p className="text-2xl text-right my-4 font-bold text-gray-50">
              {timezone[2] + '-' + timezone[1] + '-' + timezone[3]}
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center mt-10">
          <div className="flex justify-center items-center">
            <div className="border border-gray-300 rounded-lg mr-5">
              <img src={urlIcon} />
            </div>
            <p className="text-6xl my-2 font-bold text-gray-50">
              {weatherDetail?.weather?.map((data) => data.main)}
            </p>
          </div>

          <div>
            <p className="text-lg text-right my-2 font-bold text-gray-50">
              Temperature
            </p>
            <p className="text-8xl my-2 font-bold text-gray-50">
              {weatherDetail?.main?.temp}K
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-5">
          <div className="flex flex-col justify-center items-center rounded-lg w-44 h-48 bg-gray-950 bg-opacity-80 text-white text-center">
            <p className="text-xl font-semibold">Humidity</p>
            <p className="text-xl font-bold">
              {weatherDetail?.main?.humidity} %
            </p>
          </div>

          <div className="flex flex-col justify-center items-center rounded-lg w-44 h-48 bg-gray-950 bg-opacity-80 text-white text-center">
            <p className="text-xl font-semibold">Wind</p>
            <p className="text-xl font-bold">
              {weatherDetail?.wind?.speed} m/s
            </p>
          </div>

          <div className="flex flex-col justify-center items-center rounded-lg w-44 h-48 bg-gray-950 bg-opacity-80 text-white text-center">
            <p className="text-xl font-semibold">Pressure</p>
            <p className="text-xl font-bold">
              {weatherDetail?.main?.pressure} hPa
            </p>
          </div>

          <div className="flex flex-col justify-center items-center rounded-lg w-44 h-48 bg-gray-950 bg-opacity-80 text-white text-center">
            <p className="text-xl font-semibold">Ground Level</p>
            <p className="text-xl font-bold">
              {weatherDetail?.main?.grnd_level} hPa
            </p>
          </div>

          <div className="flex flex-col justify-center items-center rounded-lg w-44 h-48 bg-gray-950 bg-opacity-80 text-white text-center">
            <p className="text-xl font-semibold">Sea Level</p>
            <p className="text-xl font-bold">
              {weatherDetail?.main?.sea_level} hPa
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherPage;
