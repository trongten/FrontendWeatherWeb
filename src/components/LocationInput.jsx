import { useState } from "react";
import "../styles/Localtioninput.css"

function LocationInput(props) {

  const [location, setLocation] = useState('');

  const handleInputChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSubmit = (event) => {
    props.onClick(location); 
  };

    return (
        <div className="col-lg-4 col-md-12">
          <h3 className="input-title">Enter a city name</h3>
            <input className="form-control" onChange={handleInputChange} type="text" placeholder="Vietnam, London, vv.."/> <br />
            <button className="btn btn-primary col-12" onClick={handleSubmit}>Search</button>
        </div>
    ); 
  }
  
  export default LocationInput;