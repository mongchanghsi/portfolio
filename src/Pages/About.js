import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../Components/Navbar';
import ProfilePic from '../img/profilepic.jpg';
import Abouttitle from '../img/abouttitle.png'
import Githubtitle from '../img/githubtitle.png';
import CVtitle from '../img/cvtitle.png';

class About extends Component {
  render(){
    return(
      <div>
        <Helmet>
          <title> Eric Mong | About </title>
        </Helmet>
        <Navbar/>
        <div className="page-space">
          <div className="wrapper">
            <div className="row">
              <div className="center">
                <img src={Abouttitle} alt="title" className="title-resize"/>
              </div>
            </div>

            <div className="row padding-top">
              <div className="col-md-4 col-lg-4">
                <div className="pic-margin">
                  <img src={ProfilePic} alt='profilepic' className="profile-resize sd-center sd-pad-from-btm"/>
                </div>
              </div>

              <div className="col-md-8 col-lg-8">
                <p className="justify sd-padding-top words-margin"> Major in Computer Engineering and Masters in Technology Entrepreneurship, I am always
                    inspired to solve the problems through user research, design thinking and quick prototyping.
                    With an interest in the Internet of Things (IoT), I split my IoT learning into Hardware and Software
                    and have trained them with school projects and self-initiated projects.
                    With limited resources on what the school can offer, I self-learnt most of my programming knowledge through online courses and apply what I have learnt in my projects.
                </p>

                <p className="justify words-margin">  I am always looking out for opportunities to further improve my skills in both hardware and software. </p>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <div className="row">
                  <div className="center">
                    <a href="" target="_blank">
                      <button className="link-button">
                        <img src={Githubtitle} className="link-button-logo"/>
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="row">
                  <div className="center">
                    <a href="" target="_blank">
                      <button className="link-button">
                        <img src={CVtitle} className="link-button-logo"/>
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

export default About;
