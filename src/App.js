import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home.js'; 
import MyJokes from './components/MyJokes';
import GetJokes from './components/GetJokes';  
import Login from './components/Login'; 

import './App.css';
function App() {


  return (
        <Routes>
          <Route path="/getjokes" element={<GetJokes />} />
          <Route path="/myjokes" element={<MyJokes />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
        </Routes>
  );
}

export default App;