import React, { Component } from 'react';
import Navbar from '../../Components/Navbar';
import { Helmet } from 'react-helmet';
import Image1 from '../../img/lambdarollimg/photo1.jpg';
import Image2 from '../../img/lambdarollimg/photo2.jpg';
import Image3 from '../../img/lambdarollimg/photo3.jpg';
import News from '../../img/news.png';

class Lambdaroll extends Component {
  render(){
    return(
      <div>
        <Helmet>
          <title> Hardware | Lambdaroll </title>
        </Helmet>
        <Navbar/>
        <div className="page-space">
          <div className="wrapper">
            <div className="row">
              <div className="order-2 order-md-1 order-lg-1 col-md-7 col-lg-7">
                <img src={Image1} className="pf2 center"/>
                <img src={Image2} className="pf2 padding-top padding-bottom center"/>
                <img src={Image3} className="pf2 padding-top padding-bottom center"/>
              </div>

              <div className="order-1 order-md-2 order-lg-2 col-md-5 col-lg-5">
                <p><b> LambdaRoll </b></p>
                <hr/>
                <p className="justify">The problem that I'm tackling is the manpower crunch in the eldercare sector where there is a rise in the ageing population and more of such individual are staying in nursing home. As these individuals are mostly require attention when moving them to places such as dining area or the washroom, nurses are required to assist in the transfer of these individuals from their beds to their wheelchair. These transfers are also dangerous as elderly are prone to injuries due to fall and nurses are prone to injuries due to wrong position of transfer.</p>
                <p className="justify">LambdaRoll aims to ease the transfer of the wheelchair bounded individuals between surfaces.</p>
                <p className="justify">Insights drawn from this project is that it is a failed concept where it only work on individuals with leg strength whereas most elderly do not have much leg strength to support themselves.</p>

                <div className="row padding-top">
                  <div className="center">
                    <a href="https://www.straitstimes.com/singapore/education/device-to-help-wheelchair-users-among-innovations-at-sutd-design-showcase" target="_blank">
                      <button className="link-button">
                        <img src={News} className="link-button-logo"/>
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

export default Lambdaroll;
