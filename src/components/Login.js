import React, { useEffect, useState } from "react";
import {Routes, Route, useNavigate} from 'react-router-dom';

function Login() {
  
  const navigate = useNavigate();

  const navigateToMyJokes = () => {
    navigate('/myjokes', { replace: true });
  };
  const navigateHome = () => {
    navigate('/home', { replace: true });
  };

  return (
    <div className="login-box">
      <h2>Login</h2>
      <form onSubmit={navigateHome} autoComplete="off" >
      <div className="user-box">
      <input type="text" name="keyword" placeholder=""></input>
        <label>Username</label>
      </div>
      <div className="user-box">
      <input type="password" name="keyword" placeholder=""></input>
        <label>Password</label>
      </div>

      <div className="button_cen">
      <button type="submit">
        Login 
        </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
