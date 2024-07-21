import CityInputForm from "./CityInputForm";
import CurrentWeather from "./CurrentWeather";
import WeatherForecast from "./WeatherForecast";

import { useEffect, useState, useRef } from "react";
import axios from "axios";

const api_key = import.meta.env.VITE_WEATHER_APP;

const WeatherScreen = () => {
  const [userCurrentcity, setUserCurrentCity] = useState("");
  const [locationError, setLocationError] = useState(null);
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const inputRef = useRef(null);
  const [celsius, setCelsius] = useState(true);
  const [fahrenheit, setFahrenheit] = useState(false);

  const celsiusButton = () => {
    setCelsius(true);
    setFahrenheit(false);
  };

  const fahrenheitButton = () => {
    setFahrenheit(true);
    setCelsius(false);
  };

  const getCityName = async (latitude, longitude) => {
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=10&addressdetails=1`
      );
      const city =
        response.data.address.city ||
        response.data.address.town ||
        response.data.address.village;
      setUserCurrentCity(city);
    } catch (error) {
      setLocationError("Failed to fetch city name");
    }
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          getCityName(latitude, longitude);
        },
        (error) => {
          setLocationError(error.message);
        }
      );
    } else {
      setLocationError("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    if (userCurrentcity) {
      getWeatherData(userCurrentcity);
    }
  }, [userCurrentcity]);

  const getWeatherData = async (cityName) => {
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${cityName}&days=7&aqi=no&alerts=no`
      );
      setWeatherData(response.data);
      setError(null); // clear any previous error
      setCity("");
    } catch (error) {
      setError("Enter a valid city or country name!");
      setWeatherData(null); // clear previous weather data on error
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputRef.current) {
      inputRef.current.blur();
    }
    getWeatherData(city);
  };

  return (
    <div className="h-full w-full">
      <div className="h-[9%] flex">
        <div className="my-auto w-full">
          <CityInputForm
            {...{ handleSubmit, city, setCity, error, inputRef }}
          />
        </div>
      </div>

      <div className="h-[55%] flex">
        <div className="my-auto w-full h-full">
          <CurrentWeather
            {...{
              weatherData,
              locationError,
              celsius,
              fahrenheit,
              celsiusButton,
              fahrenheitButton,
            }}
          />
        </div>
      </div>

      <div className="h-[38%] flex ">
        <div className="my-auto w-full h-full">
          <WeatherForecast
            {...{
              weatherData,
              celsius,
              fahrenheit,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default WeatherScreen;
