import React, { Component } from 'react';
import Navbar from '../../Components/Navbar';
import { Helmet } from 'react-helmet';
import Image1 from '../../img/portfolioimg/websiteimg.png';
import Liveweb from '../../img/liveweb.png';
import Sourcecode from '../../img/sourcecode.png';

class Portfolio extends Component {
  render(){
    return(
      <div>
        <Helmet>
          <title> Software | Portfolio Dev </title>
        </Helmet>
        <Navbar/>
        <div className="page-space">
          <div className="wrapper">
            <div className="row">
              <div className="order-2 order-md-1 order-lg-1 col-md-7 col-lg-7">
                <img src={Image1} className="wf2 center"/>
              </div>

              <div className="order-1 order-md-2 order-lg-2 col-md-5 col-lg-5">
                <p className='product-title'> Portfolio Website </p>
                <hr/>
                <p className="justify"> I have developed this portfolio website using HTML, CSS, Javaascript with ReactJS framework. This portfolio is responsive as well, and can be viewed at all devices.</p>

                <div className="row padding-top">
                  <div className="center">
                    <a href="https://github.com/mongchanghsi/portfolio" target="_blank">
                      <button className="link-button">
                        <img src={Sourcecode} className="link-button-logo"/>
                      </button>
                    </a>
                  </div>
                </div>

                <div className="row padding-top">
                  <div className="center">
                    <a href="/">
                      <button className="link-button">
                        <img src={Liveweb} className="link-button-logo"/>
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

export default Portfolio;
