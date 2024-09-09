import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaSort } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CitiesTable = () => {
  const [citiesList, setCitiesList] = useState([]);
  const [subject, setSubject] = useState('name');
  const [order, setOrder] = useState('ASC');
  const [cityName, setCityName] = useState('');

  const citySeach = cityName && `&refine=name%3A${cityName}`;

  const Url = useEffect(() => {
    getCities();
  }, [cityName]);

  const getCities = async () => {
    try {
      const response = await axios.get(
        `https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?order_by=${subject}%20${order}&limit=20${citySeach}`
      );

      setCitiesList(response.data.results);
    } catch (err) {
      console.log('error occured', err);
    }
  };

  console.log(citiesList);

  return (
    <div className="container mx-auto my-10">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-gray-50 text-4xl font-bold mb-5">
          Weather Forecasting App
        </h1>
        <input
          className="text-center text-white border-2 bg-transparent border-gray-600 px-3 py-4 rounded-lg w-[50%] mb-5"
          type="text"
          placeholder="Seach for the City You Are Looking for..."
          value={cityName}
          onChange={(e) => {
            setCityName(
              e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
            );
          }}
        />
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="table-fixed w-full text-lg text-left  text-gray-500">
            <thead className="text-sm text-gray-700 uppercase bg-gray-200">
              <tr>
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center">
                    City
                    <button
                      onClick={() => {
                        setSubject('name');
                        if (order === 'ASC') {
                          setOrder('DESC');
                        } else {
                          setOrder('ASC');
                        }
                      }}
                    >
                      <FaSort />
                    </button>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center">
                    Country
                    <button
                      onClick={() => {
                        setSubject('name');
                        if (order === 'ASC') {
                          setOrder('DESC');
                        } else {
                          setOrder('ASC');
                        }
                      }}
                    >
                      <FaSort />
                    </button>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center">
                    TimeZone
                    <button
                      onClick={() => {
                        setSubject('name');
                        if (order === 'ASC') {
                          setOrder('DESC');
                        } else {
                          setOrder('ASC');
                        }
                      }}
                    >
                      <FaSort />
                    </button>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {citiesList.map((city) => (
                <tr className="bg-gray-50 border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 hover:underline cursor-pointer"
                  >
                    <Link to={`/weather/${city.name}`}>{city.name}</Link>
                  </th>
                  <td className="px-6 py-4">{city.cou_name_en}</td>
                  <td className="px-6 py-4">{city.timezone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CitiesTable;
