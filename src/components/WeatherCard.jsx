import { useState } from "react";
import "../styles/weathercard.css";

function WeatherCard(props) {
    const PER = 6;

    const handleLoad = () => {
        props.onClick(props.country,props.loadMore*PER);
        props.onSetLoadMore(props.loadMore + 1);

        console.log(props.country,props.loadMore*PER);
    }

    return (
        <div>
            <div className="container-forecast row">
                <h2 className="date">Forecast</h2>
                {props.data?.map((data => {
                    return (
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-6 col-6">
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
        <div className="load-more">
            {props.loadMore <= 3 && <button className="btn text-primary" onClick={handleLoad}>Load more</button>}
        </div>
        </div>
    );
  }
  
  export default WeatherCard;