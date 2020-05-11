import React, { Component } from 'react';
import Navbar from '../Components/Navbar';
import { Helmet } from 'react-helmet';
import Portfoliotitle from '../img/portfolio.png';
import Code from '../img/coding.png';
import Hardware from '../img/hardware.png';
import UX from '../img/ux.png';
import { Link } from 'react-router-dom';

class Portfolio extends Component {
  render(){
    return(
      <div>
        <Helmet>
          <title> Eric Mong | Portfolio </title>
        </Helmet>
        <Navbar/>
        <div className="page-space">
          <div className="wrapper">
            <div className="row">
              <div className="center">
                <img src={Portfoliotitle} alt="title" className="title-resize"/>
              </div>
            </div>

            <div className="row padding-top">
              <div className="col-md-4 sd-padding-top">
                <div className="row">
                  <div className="center">
                    <Link to="/portfolio/hardware" className="link-deco">
                      <div className="row">
                        <img src={Hardware} alt="hardware" className="image-resize center"/>
                      </div>

                      <div className="row">
                        <p className="center"> Hardware Projects </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-4 sd-padding-top">
                <div className="row">
                  <div className="center">
                    <Link to="/portfolio/software" className="link-deco">
                      <div className="row">
                        <img src={Code} alt="hardware" className="image-resize center"/>
                      </div>

                      <div className="row">
                        <p className="center"> Software Projects </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 sd-padding-top">
                <div className="row">
                  <div className="center">
                    <Link to="/portfolio/uiux" className="link-deco">
                      <div className="row">
                        <img src={UX} alt="hardware" className="image-resize center"/>
                      </div>

                      <div className="row">
                        <p className="center"> UI/UX Projects </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
