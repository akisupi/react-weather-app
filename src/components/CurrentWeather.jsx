/* eslint-disable react/prop-types */
import { RiCelsiusLine, RiFahrenheitLine } from "react-icons/ri";
import { WiHumidity, WiDayRainMix } from "react-icons/wi";
import { PiWindLight } from "react-icons/pi";

const CurrentWeather = ({
  weatherData,
  celsius,
  fahrenheit,
  celsiusButton,
  fahrenheitButton,
}) => {
  if (!weatherData) {
    return <div className="text-sm  text-[#e1e2e4]">Loading...</div>;
  }

  return (
    <div className="h-full text-[#e1e2e4]">
      <div className="flex h-[30%] w-full overflow-y-auto no-scrollbar">
        <div className="my-auto">
          <h1 className="text-2xl font-bold">
            {weatherData.location.name}, {weatherData.location.country}
          </h1>
          <p className="text-sm text-slate-500">
            {weatherData.location.localtime}
          </p>
        </div>
      </div>

      <div className="flex h-[70%]">
        <div className="bg-[#1a1d2e] h-full w-full rounded-2xl">
          <div className="bg-[#1a1d2e] flex justify-around h-[70%] w-full rounded-t-2xl *:m-auto *:w-[40%] *:h-[85%]">
            <img
              src={`https:${weatherData.current.condition.icon}`}
              className="bg-[#1a1d2e]"
            />
            <div className="bg-[#1a1d2e] flex">
              <div className="m-auto bg-[#1a1d2e]">
                <span className="bg-[#1a1d2e] flex">
                  <h1 className="bg-[#1a1d2e] text-4xl font-extrabold pt-2">
                    {celsius && Math.round(weatherData.current.temp_c)}
                    {fahrenheit && Math.round(weatherData.current.temp_f)}
                  </h1>
                  <span className="bg-[#1a1d2e] flex pt-3">
                    <sup className="bg-[#1a1d2e] pt-1 ps-1">
                      <button onClick={celsiusButton}>
                        {celsius ? (
                          <RiCelsiusLine className="bg-[#1a1d2e] text-[1rem]" />
                        ) : (
                          <RiCelsiusLine className="bg-[#1a1d2e] text-slate-600 text-[1rem]" />
                        )}
                      </button>
                    </sup>
                    <sup className="bg-[#1a1d2e] border border-s-0 h-[15px] mt-2 mx-1 border-slate-500"></sup>
                    <sup className="bg-[#1a1d2e] pt-1">
                      <button onClick={fahrenheitButton}>
                        {fahrenheit ? (
                          <RiFahrenheitLine className="bg-[#1a1d2e] text-[1rem]" />
                        ) : (
                          <RiFahrenheitLine className="bg-[#1a1d2e] text-slate-600 text-[1rem]" />
                        )}
                      </button>
                    </sup>
                  </span>
                </span>
                <span className="bg-[#1a1d2e] text-xs">
                  {weatherData.current.condition.text}
                </span>
                <p className="bg-[#1a1d2e] text-slate-500 text-xs">
                  {weatherData.location.name}
                </p>
              </div>
            </div>
          </div>
          <hr className="w-[90%] mx-auto border-slate-700 border-b-0" />
          <div className="bg-[#1a1d2e] flex justify-between h-[30%] *:m-auto *:text-xs rounded-b-2xl">
            <div className="bg-[#1a1d2e] flex flex-col *:m-auto *:bg-[#1a1d2e]">
              <PiWindLight className="text-xl text-slate-500" />
              <p>{Math.round(weatherData.current.wind_kph)} km/h</p>
              <p className="text-slate-500">Wind</p>
            </div>
            <div className="bg-[#1a1d2e] flex flex-col *:m-auto *:bg-[#1a1d2e]">
              <WiDayRainMix className="text-xl text-slate-500" />
              <p>{Math.round(weatherData.current.precip_mm * 100)}%</p>
              <p className="text-slate-500">Precipitation</p>
            </div>
            <div className="bg-[#1a1d2e] flex flex-col *:bg-[#1a1d2e] *:m-auto">
              <WiHumidity className="text-xl text-slate-500" />
              <p> {Math.round(weatherData.current.humidity)}</p>
              <p className="text-slate-500">Humidity</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CurrentWeather;
