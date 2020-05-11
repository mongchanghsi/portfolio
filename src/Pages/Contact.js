import React, { Component } from 'react';
import Contacttitle from '../img/contact.png';
import { Helmet } from 'react-helmet';
import Navbar from '../Components/Navbar';

class Contact extends Component {
  render(){
    return(
      <div>
        <Helmet>
          <title> Eric Mong | Contact </title>
        </Helmet>
        <Navbar/>
        <div className="page-space">
          <div className="wrapper">
            <div className="row">
              <div className="center">
                <img src={Contacttitle} alt="title" className="title-resize"/>
              </div>
            </div>

            <div className="row padding-top">
              <div className="col-md-6 col-lg-6">
                <div className="">
                  <p> <b> Name: </b> Eric Mong Chang Hsi </p>
                  <p> <b> Email: </b> m.changhsi@gmail.com </p>
                  <p> <b> Country: </b> Singapore </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-6">
              <p className="justify words-margin"> I love building solutions to solve problems and applying what I have learnt through my past experiences. </p>
              <p className="justify words-margin">  If you have any exciting opportunities that would benefit both of us, do reach out to me and see how we could work together! </p>
              <p className="justify words-margin"> I built this website from ReactJS. If you have feedback about this portfolio website, do contact me as well! Feedbacks are much appreciated. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
