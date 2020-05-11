import React, { Component } from 'react';
import HeaderLogo from '../img/headerlogo.png';

class Header extends Component {
  render(){
    return(
      <div>
        <div className="row">
          <div className="center">
            <img className="headerlogo-resize center" src={HeaderLogo} alt="Header Logo"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
