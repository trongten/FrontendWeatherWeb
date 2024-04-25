import "../styles/CurrentWeatherCard.css";

function CurrentWeatherCard(props) {
    return (
        <div className="row current-weather-card">
            <div className="col-9">
                <div className="date">{props.data?.location?.country} ({props.data?.location?.localtime.split(" ")[0]})</div>
                <div>Temperature: {props.data?.current?.temp_c}°C</div>
                <div>Wind: {props.data?.current?.wind_mph}m/s</div>
                <div>Hudimity: {props.data?.current?.humidity}%</div>
            </div>
            <div className="col-3">
                <img src={props.data?.current?.condition?.icon} width={70} height={70}></img>
                <div>{props.data?.current?.condition?.text}</div>
            </div>
        </div>
    ); 
  }
  
  export default CurrentWeatherCard; 