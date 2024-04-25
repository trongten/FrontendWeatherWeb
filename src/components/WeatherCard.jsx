import "../styles/WeatherCard.css";

function WeatherCard(props) {
    return (
        
        <div className="container-forecast row">
            <h2 className="date">4 Day forecast</h2>
            {props.data?.map((data => {
                return (
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6">
                        <div className="weather-card">
                            <div className="date">{data.date}</div>
                            <img src={data.day?.condition.icon} width={50} height={50}></img>
                            <div>Temperature: {data.day?.avgtemp_c}°C</div>
                            <div>Wind: {data.day?.maxwind_mph}m/s</div>
                            <div>Hudimity: {data.day?.avghumidity}%</div>
                        </div>
                    </div>
                )
            }))}
        </div>
    );
  }
  
  export default WeatherCard;