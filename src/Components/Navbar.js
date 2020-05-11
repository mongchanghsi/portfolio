import React, { Component } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

class NavigationBar extends Component {
  render(){
    return(
      <div className="nav-pad-top">
        <Header/>
        <div className="row padding-top">
          <div className="center">
            <nav className="navbar navbar-expand-lg navbar-light">
              <button className="navbar-toggler center remove-border" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                MENU
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav center">
                  <Link to="/" className="center link-deco"><li className="nav-item nav-link" id='home'> HOME </li></Link>
                  <Link to="/about" className="center link-deco"><li className="nav-item nav-link" id='about'> ABOUT </li></Link>
                  <Link to="/portfolio" className="center link-deco"><li className="nav-item nav-link" id='portfolio'> PORTFOLIO </li></Link>
                  <Link to="/contact" className="center link-deco"><li className="nav-item nav-link" id='contact'> CONTACT </li></Link>
                </ul>
              </div>
            </nav>
            <hr className="hr-resize"/>
          </div>
        </div>
      </div>
    );
  }
}

export default NavigationBar;
