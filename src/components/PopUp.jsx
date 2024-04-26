import React, { useState } from 'react';
import "../styles/Popup.css";

function Popup(props) {
  const [showConfirm, setShowConfirm] = useState(false);
  const [inputEmail, setInputEmail] = useState('');
  const [inputCode, setInputCode] = useState('');
  const [err,setErr] = useState('');
  const [checked, setChecked] = useState(false)

  const handleCLose = () => {
    props.onClose(false); 
  }

  const handleSubmit = () => {
    
    if(inputEmail && inputEmail.toLowerCase()
    .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    ){
      setErr('');
      setShowConfirm(true);
        fetch(`https://trongphan5301.click/api/confirm`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({email:inputEmail})
          })
          .then((data)=>{return data.json()}).then((data)=>console.log(data))
          .then((data)=>{
            if(data.message){
              setErr('');
              props.noti("Success: "+data.message);
            }
          })
    }else{
      setErr('Please enter a valid email address');
    }
  };

  const handleConfirmCode = () => {
    if(inputCode){
      fetch(`https://trongphan5301.click/api/${checked ? 'unsubscribe' : 'subscribe'}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email:inputEmail, code: inputCode})
      }).then((data)=>{return data.json()}).then((data)=>{
        if(!data.error){
          props.noti("Success: "+data.message);
          handleCLose();
        }else{
          setErr('Code is invalid');
        }
      })
    }else{
      setErr('Please enter a valid email address');
    }
  };

  const handleInputEmailChange = (event) => {
    setInputEmail(event.target.value);
  };

  const handleInputCodeChange = (event) => {
    setInputCode(event.target.value);
  };

  const handleClickCheckbox = () => {
    setChecked(!checked)
  }

  return (
    <div className="popup">
      <div className="popup-content">
        <div className='row'>
        <div className='col-11'></div>
        <span className="close-button col-1" onClick={handleCLose}>x</span>
        </div>
            {!showConfirm && <div>
                    <h2>Subscribe</h2>
                    <p>Subscribe to receive daily notifications</p>
                    <div className='formEmail'>
                        <label for="email" className=''>Enter a city name</label>
                        <input id="email" className="form-control" onChange={handleInputEmailChange} type="text" placeholder="Enter your email"/> <br />
                        {err && <p className='text-danger'>{err}</p>}
                        <input type="checkbox" checked={checked} onClick={handleClickCheckbox}/> &nbsp;
                        <label for="email" className=''>You want unsubscribe </label>
                        <button className="btn btn-primary col-12" onClick={handleSubmit}>Submit</button> 
                    </div>
            </div>}

            {showConfirm && <div>
                    <h2>Subscribe</h2>
                    <p>Confirmation code is valid for 120 seconds </p>
                    <div className='formEmail'>
                        <label for="email" className=''>Enter confirmation code in email</label>
                        <input id="email" className="form-control" onChange={handleInputCodeChange} type="text" placeholder="Enter confirmation code"/> <br />
                        {err && <p className='text-danger'>{err}</p>}
                        <button className="btn btn-primary col-12" onClick={handleConfirmCode}>Submit</button> 
                    </div>
            </div>}
      </div>
    </div>
  );
}
export default Popup;