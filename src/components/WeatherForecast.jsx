/* eslint-disable react/prop-types */
import { RiCelsiusLine, RiFahrenheitLine } from "react-icons/ri";


const WeatherForecast = ({
  weatherData,
  celsius,
  fahrenheit,
}) => {
  if (!weatherData) {
    return <div className="text-sm  text-[#e1e2e4]">Loading...</div>;
  }

  return (
    <div className="h-full text-[#e1e2e4]">
      <div className="*:my-auto pt-5 flex justify-between h-[30%]">
        <h3 className="text-sm text-[]">Forecast</h3>
        <p className="text-xs text-slate-500">7 days</p>
      </div>
      <div className="h-[70%] flex overflow-x-auto no-scrollbar *:bg-[#1a1d2e] *:me-4 :first:ms-0 last:me-0 *:h-full *:w-[120px] *:flex-shrink-0 *:rounded-xl">
        {weatherData.forecast.forecastday.slice(1, 8).map((day, index) => (
          <div
            key={index}
            className="bg-[#1a1d2e] flex flex-col mx-1 py-1 px-2 *:bg-[#1a1d2e] *:m-auto"
          >
            <h3 className="text-md text-center">{day.date}</h3>
            <img
              src={`https:${day.day.condition.icon}`}
              className="bg-[#1a1d2e] h-[30%]"
            />
            <p className="text-xs text-center text-slate-500">
              {day.day.condition.text}
            </p>
            <p className="flex text-md text-center">
              {celsius && Math.round(day.day.avgtemp_c)}
              {fahrenheit && Math.round(day.day.avgtemp_f)}
              {celsius ? (
                <RiCelsiusLine className="bg-[#1a1d2e] text-[0.8rem] pt-1" />
              ) : (
                <RiFahrenheitLine className="bg-[#1a1d2e] text-[0.8rem] pt-1" />
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default WeatherForecast;
