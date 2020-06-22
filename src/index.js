import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import About from './Pages/About';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
import Hardware from './Pages/Hardware';
import Software from './Pages/Software';
import UIUX from './Pages/UIUX';
import ATMail from './Pages/HardwarePages/ATMail';
import Odine from './Pages/HardwarePages/Odine';
import Lambdaroll from './Pages/HardwarePages/Lambdaroll';
import HumanCB from './Pages/HardwarePages/HumanCB';
import Semele from './Pages/HardwarePages/Semele';
import Attendy from './Pages/SoftwarePages/Attendy';
import Darts from './Pages/SoftwarePages/Darts';
import ProjectTodo from './Pages/SoftwarePages/ProjectTodo';
import TicTacToe from './Pages/SoftwarePages/TicTacToe';
import FurnitU from './Pages/UIUXPages/FurnitU';
import PortfolioDev from './Pages/SoftwarePages/Portfolio';

import {
  BrowserRouter as Router,
  Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route exact path="/" component={App}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/portfolio" component={Portfolio}/>
      <Route exact path="/portfolio/hardware" component={Hardware}/>
      <Route exact path="/portfolio/software" component={Software}/>
      <Route exact path="/portfolio/uiux" component={UIUX}/>
      <Route exact path="/portfolio/hardware/atmail" component={ATMail}/>
      <Route exact path="/portfolio/hardware/odine" component={Odine}/>
      <Route exact path="/portfolio/hardware/lambdaroll" component={Lambdaroll}/>
      <Route exact path="/portfolio/hardware/humancb" component={HumanCB}/>
      <Route exact path="/portfolio/hardware/semele" component={Semele}/>
      <Route exact path="/portfolio/software/attendy" component={Attendy}/>
      <Route exact path="/portfolio/software/portfoliodev" component={PortfolioDev}/>
      <Route exact path="/portfolio/software/darts" component={Darts}/>
      <Route exact path="/portfolio/software/projecttodo" component={ProjectTodo}/>
      <Route exact path="/portfolio/software/tictactoe" component={TicTacToe}/>
      <Route exact path="/portfolio/uiux/furnitu" component={FurnitU}/>
      <Route exact path="/contact" component={Contact}/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
