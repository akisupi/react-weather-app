import Header from "./Header";
import WeatherScreen from "./WeatherScreen";
import Footer from "./Footer";

const WeatherApp = () => {
  return (
    <div className="py-1 px-3 h-dvh w-screen md:px-[350px]">
      <div className="h-[3%] flex">
        <Header />
      </div>

      <div className="h-[87%] flex">
        <WeatherScreen />
      </div>

      <div className="h-[10%] flex">
        <Footer />
      </div>
    </div>
  );
};
export default WeatherApp;
