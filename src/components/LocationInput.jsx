import { useState } from "react";
import "../styles/localtioninput.css"

function LocationInput(props) {

  const [location, setLocation] = useState('');

  const handleInputChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSubmit = () => {
    props.onClick(location); 
    props.onResetLoadMore(2);
  };

  const handlePopUp = () => {
    props.onPopUp(true);
  } 

    return (
        <div className="col-lg-4 col-md-12 localtion-input">
          <h3 className="input-title">Enter a city name</h3>
            <input className="form-control" onChange={handleInputChange} type="text" placeholder="Vietnam, London, vv.."/> <br />
            <button className="btn btn-primary col-12" onClick={handleSubmit}>Search</button> 
            <br />
            <hr /> 
            <button className="btn btn-primary col-12" onClick={handlePopUp}>Subscribe</button>
        </div>
    ); 
  }
  
  export default LocationInput;