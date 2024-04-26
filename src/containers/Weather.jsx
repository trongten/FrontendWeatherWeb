import { useEffect, useState } from "react";
import WeatherCard from "../components/WeatherCard";
import "../styles/titledashboard.css";
import LocationInput from "../components/LocationInput";
import CurrentWeatherCard from "../components/CurrentWeatherCard";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PopUp from "../components/PopUp";

function Weather() {
  const [data,setData] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [loadMore, setLoadMore] = useState(2);

  function callAPI(query='vietnam',day=6) {
    fetch(`https://trongphan5301.click/api/weather?country=${query}&day=${day}`)
      .then((data)=>{return data.json()})
      .then((data)=>{
        if(data.error){
          toast.error(data.error);
        }else{
          setData(data);
          console.log(data);
          console.log(`https://trongphan5301.click/api/weather?country=${query}&day=${day}`);
        }
      })
  }

  useEffect(()=>{
    callAPI();
  },[])

  const notify = (string) => toast(string);

  return (
    <div>
      <h1 className="title-dashboard">Weather Dashboard</h1>
      <div className="container"> 
      <div className="row">
        <LocationInput onClick={callAPI} onPopUp={setShowPopup} onResetLoadMore={setLoadMore}/>   
        <div className="col-lg-8 col-md-12">
          <CurrentWeatherCard data={data} />
        </div><WeatherCard data={data.forecast?.forecastday} onClick={callAPI} loadMore={loadMore} onSetLoadMore={setLoadMore} country={data.location?.name}/>
      </div>
      </div>
       {showPopup && <PopUp noti={notify} onClose={setShowPopup}/>}
       <ToastContainer />
    </div>
  );
}

export default Weather;
