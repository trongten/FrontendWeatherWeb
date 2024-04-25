import { useEffect, useState } from "react";
import WeatherCard from "../components/WeatherCard";
import "../styles/TitleDashboard.css";
import LocationInput from "../components/LocationInput";
import CurrentWeatherCard from "../components/CurrentWeatherCard";

function Weather() {
  const [data,setData] = useState([]);

  function callAPI(query) {
    fetch(`https://trongphan5301.click/api/weather?country=${query}`)
      .then((data)=>{return data.json()})
      .then((data)=>{setData(data); console.log(data);})
      .catch((err)=>console.log(err))
  }

  useEffect(()=>{
    callAPI('vietnam');
  },[])

  return (
    <div>
      <h1 className="title-dashboard">Weather Dashboard</h1>
      <div className="container"> 
      <div className="row">
        <LocationInput onClick={callAPI}/>   
        <div className="col-lg-8 col-md-12">
          <CurrentWeatherCard data={data} />
          <WeatherCard data={data.forecast?.forecastday} />
        </div>
      </div>
      </div>
    </div>
  );
}

export default Weather;
