import React, { Component } from 'react';
import Navbar from '../Components/Navbar';
import { Helmet } from 'react-helmet';
import Hardwareproj from '../img/hardwareproj.png'
import ATMailPF from '../img/atmailimg/ATMail Group.png'
import HumanPF from '../img/humancardboardimg/photo1.jpg';
import LambdarollPF from '../img/lambdarollimg/photo1.jpg';
import SemelePF from '../img/semeleimg/photo1.jpg';
import OdinePF from '../img/odineimg/photopf.jpg';
import { Link } from 'react-router-dom';

class Hardware extends Component {
  render(){
    return(
      <div>
        <Helmet>
          <title> Portfolio | Hardware </title>
        </Helmet>
        <Navbar/>
        <div className="page-space">
          <div className="wrapper">
            <div className="row">
              <div className="center">
                <img src={Hardwareproj} alt="title" className="title-resize"/>
              </div>
            </div>

            <div className="row padding-top">
              <div className="col-6 col-md-4">
                <Link to="/portfolio/hardware/atmail" className="link-deco">
                  <div className="row">
                    <div className="center product-image">
                      <img src={ATMailPF} alt="atmail" className="pf"/>
                    </div>
                  </div>

                  <div className="row">
                    <div className="center">
                      <p> ATMail </p>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="col-6 col-md-4">
                <Link to="/portfolio/hardware/semele" className="link-deco">
                  <div className="row">
                    <div className="center">
                      <img src={SemelePF} alt="semele" className="pf"/>
                    </div>
                  </div>

                  <div className="row">
                    <div className="center">
                      <p> Semelē </p>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="col-6 col-md-4">
                <Link to="/portfolio/hardware/lambdaroll" className="link-deco">
                  <div className="row">
                    <div className="center">
                      <img src={LambdarollPF} alt="lambdaroll" className="pf"/>
                    </div>
                  </div>

                  <div className="row">
                    <div className="center">
                      <p> Lambdaroll </p>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="col-6 col-md-4">
                <Link to="/portfolio/hardware/humancb" className="link-deco">
                  <div className="row">
                    <div className="center">
                      <img src={HumanPF} alt="human" className="pf"/>
                    </div>
                  </div>

                  <div className="row">
                    <div className="center">
                      <p> Human Cardboard </p>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="col-6 col-md-4">
                <Link to="/portfolio/hardware/odine" className="link-deco">
                  <div className="row">
                    <div className="center">
                      <img src={OdinePF} alt="odine" className="pf"/>
                    </div>
                  </div>

                  <div className="row">
                    <div className="center">
                      <p> 'O' Dine </p>
                    </div>
                  </div>
                </Link>
              </div>
              {/* Continue from more posts from here*/}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hardware;
