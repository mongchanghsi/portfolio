import React, { Component } from 'react';
import Navbar from '../../Components/Navbar';
import { Helmet } from 'react-helmet';
import Image1 from '../../img/odineimg/photo1.jpg';
import Report2 from '../../img/report2.png';
import Demovid from '../../img/demovid.png';

class Odine extends Component {
  render(){
    return(
      <div>
        <Helmet>
          <title> Hardware | Odine </title>
        </Helmet>
        <Navbar/>
        <div className="page-space">
          <div className="wrapper">
            <div className="row">
              <div className="order-2 order-md-1 order-lg-1 col-md-7 col-lg-7">
                <img src={Image1} className="pf2 center"/>
              </div>

              <div className="order-1 order-md-2 order-lg-2 col-md-5 col-lg-5">
                <p className='product-title'> "O" Dine </p>
                <hr/>
                <p className="justify">'O' Dine aims to solves the problem of clearing leftover food and cutlery left on the table with simple conveyor system underneath the flooring.</p>
                <p className="justify">The insights from this project is that there are various concerns raised regarding the maintenance of the system and potential growing of germs and smell from the conveyor belt.</p>

                <div className="row padding-top">
                  <div className="center">
                    <a href="https://www.youtube.com/watch?v=NnQjbumDtmo" target="_blank">
                      <button className="link-button">
                        <img src={Demovid} className="link-button-logo"/>
                      </button>
                    </a>
                  </div>
                </div>

                <div className="row padding-top">
                  <div className="center">
                    <a href="https://drive.google.com/open?id=1PASC5JrG5nz3TlV096yqSIu2VO383msu" target="_blank">
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

export default Odine;
