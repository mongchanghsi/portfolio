import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { Helmet } from 'react-helmet';
import HomeImage from './img/homeimage2.png';


function App() {
  return (
    <div className="App">
      <Helmet>
        <title> Eric Mong | Portfolio </title>
      </Helmet>
      <Navbar/>
      <div className="page-space">
        <div className="wrapper">
          <div className="row">
            <div className='center'>
              <h1 className='title'> Hi! I'm Eric Mong! </h1>
              <h5> Product Designer | Front-end Developer </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
