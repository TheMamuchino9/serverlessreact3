import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import { createClient } from '@supabase/supabase-js'


function MyJokes() {
  const supabase = createClient('https://mdatzzubyplzikegdlms.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1kYXR6enVieXBsemlrZWdkbG1zIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTgxODgxNjEsImV4cCI6MTk3Mzc2NDE2MX0.DTyLzXMQhtA3PRMQr7hn2p-NkAoY1Fozba1f873TfQs');

  var [joke, setJoke] = useState('text')
  var jokes = ''
  const query = async() =>{
    const { data} = await supabase.from('users').select('user')
    for (const item in data) {
      //console.log(data[item].user)
      jokes += data[item].user;
    }
    console.log(jokes)
    //console.log(data)
    //console.log(data.length)
    setJoke(jokes);
    document.getElementById("jokes").innerHTML = joke;
  }


  useEffect(()=> {
    query()
  }, [])

  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/home', { replace: true });
  };

  return (
    <div className="login-box">
      <h2>My jokes</h2>
      <div className="user-box">
      <label id="jokes"></label>
      </div>
      <div className="button_cen">
        
      <button onClick={navigateToHome}>Home</button>
      </div>
    </div>
  );
}

export default MyJokes;
