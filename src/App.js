import Header from "./components/Header";
import TodayForecast from "./components/TodayForecast";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./Api";
import "./App.css";
import { useState } from "react";

function App() {
  const [currentweather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentweatherApi = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastapi = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentweatherApi, forecastapi])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const foreCastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...foreCastResponse });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(currentweather);
  console.log(forecast);
  return (
    <div className="App">
      <Header onSearchChange={handleOnSearchChange} />
      {currentweather && <TodayForecast data={currentweather} />}
    </div>
  );
}

export default App;
