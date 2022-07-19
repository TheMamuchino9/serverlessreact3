import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import axios from 'axios'

function GetJokes() {
  const [message, setMessage] = useState('text')
  const fetchData = async() =>
  {
    const results = await axios.get('/.netlify/functions/helloWorld')
    console.log(results.data.message)
    setMessage(results.data.message)
  }

  useEffect(()=> {
    fetchData()
  }, [])

  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/home', { replace: true });
  };

  return (
    <div className="login-box">
      <h2>New Jokes</h2>
      <div className="user-box">
      <label>{message}</label>
      </div>
      <div className="button_cen">
        
      <button onClick={navigateToHome}>Home</button>
      <button onClick={fetchData}>New joke</button>
      <button onClick={fetchData}>Set as favorite</button>
      </div>
    </div>
  );
}

export default GetJokes;
