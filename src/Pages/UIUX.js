import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../Components/Navbar';
import UIUXtitle from '../img/uiuxproj.png';
import FurnitPF from '../img/furnitimg/photo1.jpg';
import { Link } from 'react-router-dom';

class UIUX extends Component {
  render(){
    return(
      <div>
        <Helmet>
          <title> Portfolio | UIUX </title>
        </Helmet>
        <Navbar/>
        <div className="page-space">
          <div className="wrapper">
            <div className="row">
              <div className="center">
                <img src={UIUXtitle} alt="title" className="title-resize"/>
              </div>
            </div>

            <div className="row padding-top">
              <div className="col-md-6 col-lg-4">
                <Link to="/portfolio/uiux/furnitu" className="link-deco">
                  <div className="row">
                    <div className="center web-image">
                      <img src={FurnitPF} alt="furnitu" className="wf"/>
                    </div>
                  </div>

                  <div className="row">
                    <div className="center">
                      <p> FurnitU </p>
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

export default UIUX;
