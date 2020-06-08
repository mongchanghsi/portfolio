import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../../Components/Navbar';
import Image1 from '../../img/dartsimg/Image1.png';
import Image2 from '../../img/dartsimg/Image2.png';
import Image3 from '../../img/dartsimg/Image3.png';
import Image4 from '../../img/dartsimg/Image4.png';
import Image5 from '../../img/dartsimg/Image5.png';
import Image6 from '../../img/dartsimg/Image6.png';
import Liveweb from '../../img/liveweb.png';
import Sourcecode from '../../img/sourcecode.png';

class Darts extends Component {
  render(){
    return(
      <div>
        <Helmet>
          <title> Software | Darts </title>
        </Helmet>
        <Navbar/>
        <div className="page-space">
          <div classname="wrapper">
            <div className="row">
              <div className="order-2 order-md-1 order-lg-1 col-md-7 col-lg-7">
                <img src={Image1} className="wf2 center"/>
                <img src={Image2} className="wf2 padding-top padding-bottom center"/>
                <img src={Image3} className="wf2 padding-top padding-bottom center"/>
                <img src={Image4} className="wf2 padding-top padding-bottom center"/>
                <img src={Image5} className="wf2 padding-top padding-bottom center"/>
                <img src={Image6} className="wf2 padding-top padding-bottom center"/>
              </div>

              <div className="order-1 order-md-2 order-lg-2 col-md-5 col-lg-5">
                <p className='product-title'> Darts Score Tracking Web-app  </p>
                <hr/>
                <p className="justify"> What inspired me to do this web-application is that I personally own a competitive dart board, where unlike the electronics commonly seen in pub and bars, the electronic dartboard helps to keep track of the scorer. Hence whenever I invite my friends over to have a game or two, or when I'm training, I have a difficult time tracking the score of the game. </p>
                <p className="justify"> I developed this web-application as part of training my ReactJS skills and to strengthen my basics. Please feel free to use the web-application and do look forward for more updates on better UI and more game modes! </p>

                <div className="row padding-top">
                  <div className="center">
                    <a href="https://github.com/mongchanghsi/darts-app" target="_blank">
                      <button className="link-button">
                        <img src={Sourcecode} className="link-button-logo"/>
                      </button>
                    </a>
                  </div>
                </div>

                <div className="row padding-top">
                  <div className="center">
                    <a href="https://darts-app.herokuapp.com/" target="_blank">
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

export default Darts;
