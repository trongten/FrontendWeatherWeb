import { useEffect, useState } from "react";
import WeatherCard from "../components/WeatherCard";
import "../styles/TitleDashboard.css";
import LocationInput from "../components/LocationInput";
import CurrentWeatherCard from "../components/CurrentWeatherCard";
import Popup from "../components/PopUp";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Weather() {
  const [data,setData] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  function callAPI(query) {
    fetch(`https://trongphan5301.click/api/weather?country=${query}`)
      .then((data)=>{return data.json()})
      .then((data)=>{
        if(data.error){
          toast.error(data.error);
        }else{
          setData(data);
        }
      })
  }

  useEffect(()=>{
    callAPI('vietnam');
  },[])

  const notify = (string) => toast(string);

  return (
    <div>
      <h1 className="title-dashboard">Weather Dashboard</h1>
      <div className="container"> 
      <div className="row">
        <LocationInput onClick={callAPI} onPopUp={setShowPopup}/>   
        <div className="col-lg-8 col-md-12">
          <CurrentWeatherCard data={data} />
          <WeatherCard data={data.forecast?.forecastday} />
        </div>
      </div>
      </div>
       {showPopup && <Popup noti={notify} onClose={setShowPopup}/>}
       <ToastContainer />
    </div>
  );
}

export default Weather;
