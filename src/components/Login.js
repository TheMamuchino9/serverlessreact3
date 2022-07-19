import React, { useEffect, useState } from "react";
import {Routes, Route, useNavigate} from 'react-router-dom';
import { createClient } from '@supabase/supabase-js'

function Login() {
  
  const supabase = createClient('https://mdatzzubyplzikegdlms.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1kYXR6enVieXBsemlrZWdkbG1zIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTgxODgxNjEsImV4cCI6MTk3Mzc2NDE2MX0.DTyLzXMQhtA3PRMQr7hn2p-NkAoY1Fozba1f873TfQs');
  var error = ""
  const query = async() =>{
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
   
    //onst { data} = await supabase.from('users').select('user') 
      try {
       
        const { error } = await supabase.auth.signIn({
          email: email,
        password: password 
      });
        if (error) throw error;
        console.log("Successfully logged in!");
        navigateToHome(email)
      } catch (error) {
        error = "The email or password you entered is incorrect"
        document.getElementById("error").innerHTML = error;
      } 
        
       
    
    //for (const item in data) {
      //console.log(data[item].user)
     // jokes += data[item].user;
   // }
    
    //console.log(data)
    //console.log(data.length)
    //setJoke(jokes);
    //document.getElementById("jokes").innerHTML = joke;
  }



  const navigate = useNavigate();

  const navigateToMyJokes = () => {
    navigate('/myjokes', { replace: true });
  };
  const navigateToHome = (email) => {
    navigate('/home', {state: {
      user: email,
  }});
  };


 
  

  return (
    <div className="login-box">
      <h2>Login</h2>
    
      <div className="user-box">
      <input type="text" id="email" required placeholder="" autoComplete="off"></input>
        <label>Email</label>
      </div>
      <div className="user-box">
      <input type="password" id="password" required  placeholder="" autoComplete="off"></input>
        <label>Password</label>
      </div>
      <div className="user-boxerror">
      <label id="error">{error}</label>
      </div>
            <div className="button_cen">
      <button onClick={query}>
        Login 
        </button>
        </div>
        
    </div>
  );
}

export default Login;
