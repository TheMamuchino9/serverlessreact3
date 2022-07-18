import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios'

function App() {
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
  

  return (
    <div className="login-box">
  <h2>My jokes</h2>

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
    <button>
      Set as favorite
    </button>
    
          </div>
  
</div>
  );
}

export default App;

