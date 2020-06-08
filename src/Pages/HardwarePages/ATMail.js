import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../../Components/Navbar';
import ATMail1 from '../../img/atmailimg/ATMail Group.png';
import ATMail2 from '../../img/atmailimg/ATMail Image 1.jpg';
import ATMail3 from '../../img/atmailimg/ATMail CAD.png';
import ATMail4 from '../../img/atmailimg/ATMail Image 2.jpg';
import ATMail5 from '../../img/atmailimg/ATMail Image 3.jpg';
import Promovid from '../../img/promovid.png';
import Demovid from '../../img/demovid.png';

class ATMail extends Component {
  render(){
    return(
      <div>
        <Helmet>
          <title> Hardware | ATMail </title>
        </Helmet>
        <Navbar/>
        <div className="page-space">
          <div className="wrapper">
            <div className="row">
              <div className="order-2 order-md-1 order-lg-1 col-md-7 col-lg-7">
                <img src={ATMail1} className="pf2 center"/>
                <img src={ATMail2} className="pf2 padding-top padding-bottom center"/>
                <img src={ATMail3} className="pf2 padding-top padding-bottom center"/>
                <img src={ATMail4} className="pf2 padding-top padding-bottom center"/>
                <img src={ATMail5} className="pf2 padding-top padding-bottom center"/>
              </div>

              <div className="order-1 order-md-2 order-lg-2 col-md-5 col-lg-5">
                <p className='product-title'> ATMail </p>
                <hr/>
                <p className="justify"> ATMail aims to provide an efficient last-mile delivery for mails, flats and small packets delivered specifically by SingPost through the use of automation and IoT Technology. It benefits both the Post-man and any household individuals.</p>
                <p className="justify"> For Post-man, it is a one-stop to delivery both mails, flats and small packets instead of them having going to each individuals household to deliver the packets. An automated sorter is built-in to sort the mails and flats for the Post-man.</p>
                <p className="justify"> For household individuals, anyone from the household would be able to collect the mails, flats and small packets as it is authenticated through One-Time Password system and individuals will know if they is any items to collect through our notification system hence individuals would need not to trouble themselves to always open their mailbox and not to find any mails.</p>
                <p className="justify"> I mainly spearheaded the User Interface and the User Experience. I have also dealt with several sensors and motors to assist with the dispensing of items. Programming Language used are C++ and Python (Tkinter). API used are Firebase and Twilio.</p>

                <div className="row padding-top">
                  <div className="center">
                    <a href="https://www.youtube.com/watch?v=xdp0zVrh-v0" target="_blank">
                      <button className="link-button">
                        <img src={Promovid} className="link-button-logo"/>
                      </button>
                    </a>
                  </div>
                </div>

                <div className="row padding-top">
                  <div className="center">
                    <a href="https://www.youtube.com/watch?v=mqAq8sXu3_I&t=2s" target="_blank">
                      <button className="link-button">
                        <img src={Demovid} className="link-button-logo"/>
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

export default ATMail;
