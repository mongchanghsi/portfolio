import React, { Component } from 'react';
import Navbar from '../Components/Navbar';
import { Helmet } from 'react-helmet';
import Softwareproj from '../img/softwareproj.png';
import { Link } from 'react-router-dom';
import AttendyPF from '../img/attendyimg/startscan.png';
import PortfolioPF from '../img/portfolioimg/websiteimg.png';
import DartsPF from '../img/dartsimg/Image1.png';

class Software extends Component {
  render(){
    return(
      <div>
        <Helmet>
          <title> Portfolio | Software </title>
        </Helmet>
        <Navbar/>
        <div className="page-space">
          <div className="wrapper">
            <div className="row">
              <div className="center">
                <img src={Softwareproj} alt="title" className="title-resize"/>
              </div>
            </div>

            <div className="row padding-top">
              <div className="col-md-6 col-lg-4">
                <Link to="/portfolio/software/attendy" className="link-deco">
                  <div className="row">
                    <div className="center web-image">
                      <img src={AttendyPF} alt="atmail" className="wf"/>
                    </div>
                  </div>

                  <div className="row">
                    <div className="center">
                      <p> Attendy </p>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="col-md-6 col-lg-4">
                <Link to="/portfolio/software/portfoliodev" className="link-deco">
                  <div className="row">
                    <div className="center web-image">
                      <img src={PortfolioPF} alt="portfolio" className="wf"/>
                    </div>
                  </div>

                  <div className="row">
                    <div className="center">
                      <p> Portfolio </p>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="col-md-6 col-lg-4">
                <Link to="/portfolio/software/darts" className="link-deco">
                  <div className="row">
                    <div className="center web-image">
                      <img src={DartsPF} alt="portfolio" className="wf"/>
                    </div>
                  </div>

                  <div className="row">
                    <div className="center">
                      <p> Darts App </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Software;
