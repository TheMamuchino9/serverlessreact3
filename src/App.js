import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { useNavigate, BrowserRouter, Route, Routes, Router } from "react-router-dom";
import axios from 'axios';
import Myjokes from './Myjokes.js'




function App() {



  const [message, setMessage] = useState('text')
  const fetchData = async () => {
    const results = await axios.get('/.netlify/functions/helloWorld')
    console.log(results.data.message)
    setMessage(results.data.message)
  }

  useEffect(() => {
    fetchData()
  }, [])




  return (
    <div className="login-box">
      <h2>New Joke</h2>

      <div className="user-box">

        <label>{message}</label>
      </div>

      <div className="button_cen">
        <button>
          My jokes
        </button>
        <button onClick={fetchData}>
          New joke
        </button>
        <button className='favorite' >
          Favorite
        </button>
      </div>
    <Router>
    <Routes>
      <Route path="/myjokes" element={<Myjokes/>} > </Route>
    </Routes>
    </Router>
    </div>
  );
}

export default App;

