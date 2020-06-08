import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../../Components/Navbar';
import S2 from '../../img/semeleimg/photo2.jpg';
import S3 from '../../img/semeleimg/photo3.jpg';
import Demovid from '../../img/demovid.png';
import Report2 from '../../img/report2.png';

class Semele extends Component {
  render(){
    return(
      <div>
        <Helmet>
          <title> Hardware | Semele </title>
        </Helmet>
        <Navbar/>
        <div className="page-space">
          <div className="wrapper">
            <div className="row">
              <div className="order-2 order-md-1 order-lg-1 col-md-7 col-lg-7">
                <img src={S2} className="pf2 center"/>
                <img src={S3} className="pf2 padding-top padding-bottom center"/>
              </div>

              <div className="order-1 order-md-2 order-lg-2 col-md-5 col-lg-5">
                <p className='product-title'> Semelē </p>
                <hr/>
                <p className="justify">Semelē is an automated gardening system that aims to help the users to water the plants at a regular interval or whenever the plants require watering and provide specific lights to promote growth of the plants.</p>
                <p className="justify">Semelē was coded in Python and it comes with Relay, Hydrometer, YF-S201 Flow Meter and Light Sensor.</p>

                <div className="row padding-top">
                  <div className="center">
                    <a href="https://www.youtube.com/watch?v=66rsEkoRujY" target="_blank">
                      <button className="link-button">
                        <img src={Demovid} className="link-button-logo"/>
                      </button>
                    </a>
                  </div>
                </div>

                <div className="row padding-top">
                  <div className="center">
                    <a href="https://drive.google.com/open?id=1AIqKK9-i941asvN0aEW-LqcRuuYVA3oz" target="_blank">
                      <button className="link-button">
                        <img src={Report2} className="link-button-logo"/>
                      </button>
                    </a>
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

export default Semele;
