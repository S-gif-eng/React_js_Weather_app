import "./TodayForecast.css";
const TodayForecast = ({ data }) => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="description">{data.weather[0].description}</p>
        </div>
        <img
          alt="Image not Found"
          className="weather-icon"
          src={`icons/${data.weather[0].icon}.png`} />
      </div>
      <div className="bottom">
        <p className="temp">{Math.round(data.main.temp)}°c</p>
        <div className="details">
          <div className="row">
            <span className="title">Details</span>
          </div>
          <div className="row">
            <span className="title">Feels Like</span>
            <span className="value">{Math.round(data.main.feels_like)}°c</span>
          </div>
          <div className="row">
            <span className="title">Wind</span>
            <span className="value">{data.wind.speed} m/s</span>
          </div>
          <div className="row">
            <span className="title">Humidity</span>
            <span className="value">{data.main.humidity}%</span>
          </div>
          <div className="row">
            <span className="title">Pressure</span>
            <span className="value">{data.main.pressure} hpa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodayForecast;
