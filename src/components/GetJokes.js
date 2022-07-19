import React, { useEffect, useState } from "react";
import {useNavigate, useLocation} from 'react-router-dom';
import axios from 'axios';
import { createClient } from '@supabase/supabase-js'

function GetJokes() {
  const supabase = createClient('https://mdatzzubyplzikegdlms.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1kYXR6enVieXBsemlrZWdkbG1zIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTgxODgxNjEsImV4cCI6MTk3Mzc2NDE2MX0.DTyLzXMQhtA3PRMQr7hn2p-NkAoY1Fozba1f873TfQs');
  
  const [message, setMessage] = useState('text')
  const location = useLocation();
  var email = location.state.user
    const getJoke = async() =>
    {
      document.getElementById('favoriteButton').setAttribute("class", "nofavorite");
      document.getElementById('favoriteButton').innerHTML = 'Set as Favorite';
      const results = await axios.get('/.netlify/functions/helloWorld')
      //console.log(results.data.message)
      setMessage(results.data.message)
      console.log(email)
    }
 

    useEffect(()=> {
      getJoke()
    })

    const saveJoke = async() =>
    {
      const status = document.getElementById('favoriteButton').getAttribute("class");
      if (status === 'nofavorite'){
        
        await supabase.from('jokes').insert([{ user: email, joke: message }])
        document.getElementById('favoriteButton').setAttribute("class", "favorite");
        document.getElementById('favoriteButton').innerHTML = 'Favorite';
      }
      else
      {
        document.getElementById('favoriteButton').setAttribute("class", "nofavorite");
        document.getElementById('favoriteButton').innerHTML = 'Set as Favorite';
        await supabase.from('jokes').delete().match({ joke: message })
      }
      
      
     // const { data} = await supabase.from('users').select('user')
     // const { data, error } = await supabase.from('jokes').insert([{ user: email, joke: message })
      //console.log(results.data.message)
      //console.log(data)
      //setMessage(d.data.message)
    }


  const navigate = useNavigate();

  const navigateToHome = () => {
    
    navigate('/home', {state: {
      user: email,
  }});
  };

  return (
    <div className="login-box">
      <h2>New Jokes</h2>
      <div className="user-box">
      <label>{message}</label>
      </div>
      <div className="button_cen">
        
      <button onClick={navigateToHome} className="buttonx">Home</button>
      <button onClick={getJoke} className="buttonx">New joke</button>
      <button onClick={saveJoke} id="favoriteButton" className="buttonx">Set as favorite</button>
      </div>
    </div>
  );
}

export default GetJokes;
