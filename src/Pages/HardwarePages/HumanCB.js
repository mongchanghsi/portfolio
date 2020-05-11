import React, { Component } from 'react';
import Navbar from '../../Components/Navbar';
import { Helmet } from 'react-helmet';
import Image1 from '../../img/humancardboardimg/photo1.jpg';
import Image2 from '../../img/humancardboardimg/photo2.jpg';
import Image3 from '../../img/humancardboardimg/photo3.jpg';
import Image4 from '../../img/humancardboardimg/photo4.jpg';
import Image5 from '../../img/humancardboardimg/photo5.jpg';
import Image6 from '../../img/humancardboardimg/photo6.jpg';

class HumanCB extends Component {
  render(){
    return(
      <div>
        <Helmet>
          <title> Hardware | Human Cardboard </title>
        </Helmet>
        <Navbar/>
        <div className="page-space">
          <div className="wrapper">
            <div className="row">
              <div className="order-2 order-md-1 order-lg-1 col-md-7 col-lg-7">
                <img src={Image1} className="pf2 center"/>
                <img src={Image2} className="pf2 padding-top padding-bottom center"/>
                <img src={Image3} className="pf2 padding-top padding-bottom center"/>
                <img src={Image4} className="pf2 padding-top padding-bottom center"/>
                <img src={Image5} className="pf2 padding-top padding-bottom center"/>
                <img src={Image6} className="pf2 padding-top padding-bottom center"/>
              </div>

              <div className="order-1 order-md-2 order-lg-2 col-md-5 col-lg-5">
                <p><b> Human Cardboard </b></p>
                <hr/>
                <p className="justify">Human-sized Cardboard Model with movable joints. This was done along side with LambdaRoll as part of the submission.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HumanCB;
