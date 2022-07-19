import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import { createClient } from '@supabase/supabase-js'


function Home() {
  
  
  const query = async() =>{
    const supabase = createClient('https://mdatzzubyplzikegdlms.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1kYXR6enVieXBsemlrZWdkbG1zIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTgxODgxNjEsImV4cCI6MTk3Mzc2NDE2MX0.DTyLzXMQhtA3PRMQr7hn2p-NkAoY1Fozba1f873TfQs');

    const { data, error } = await supabase.from('users').select('user')
    console.log(data)
  }


  

  const navigate = useNavigate();

  const navigateToMyJokes = () => {
    navigate('/myjokes', { replace: true });
  };


  const navigateToGetJokes = () => {
    navigate('/getjokes', { replace: true });
  };


  return (
    <div className="login-box">
      <h2>Home</h2>
      <div className="button_cen">
      <button onClick={navigateToGetJokes}>
        Get Jokes 
        </button>
        <button onClick={navigateToMyJokes}>
        My Jokes 
        </button>
        </div>
    </div>
  );
}

export default Home;
