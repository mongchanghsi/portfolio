import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../../Components/Navbar';
import Attendy1 from '../../img/attendyimg/login.png';
import Attendy2 from '../../img/attendyimg/signup.png';
import Attendy3 from '../../img/attendyimg/select.png';
import Attendy4 from '../../img/attendyimg/beforestart.png';
import Attendy5 from '../../img/attendyimg/startscan.png';
import Attendy6 from '../../img/attendyimg/endscan.png';
import Attendy7 from '../../img/attendyimg/endsess.png';
import Attendy8 from '../../img/attendyimg/excel.png';
import Liveweb from '../../img/liveweb.png';
import Sourcecode from '../../img/sourcecode.png';
import Report2 from '../../img/report2.png';

class Attendy extends Component {
  render(){
    return(
      <div>
        <Helmet>
          <title> Software | Attendy </title>
        </Helmet>
        <Navbar/>
        <div className="page-space">
          <div classname="wrapper">
            <div className="row">
              <div className="order-2 order-md-1 order-lg-1 col-md-7 col-lg-7">
                <img src={Attendy1} className="wf2 center"/>
                <img src={Attendy2} className="wf2 padding-top padding-bottom center"/>
                <img src={Attendy3} className="wf2 padding-top padding-bottom center"/>
                <img src={Attendy4} className="wf2 padding-top padding-bottom center"/>
                <img src={Attendy5} className="wf2 padding-top padding-bottom center"/>
                <img src={Attendy6} className="wf2 padding-top padding-bottom center"/>
                <img src={Attendy7} className="wf2 padding-top padding-bottom center"/>
                <img src={Attendy8} className="wf2 padding-top padding-bottom center"/>
              </div>

              <div className="order-1 order-md-2 order-lg-2 col-md-5 col-lg-5">
                <p><b> Attendy </b></p>
                <hr/>
                <p className="justify"> Attendy is a web-application that allows the Professors or Teaching Assistant to take attendance of a class through scanning the student's card using Optical Character Recognition (OCR) and subsequently generate a CSV file that contains the entire class attendance. </p>
                <p className="justify"> I mainly spearheaded the Front-end Development, User Interface and User Experience. I developed the web-application using ReactJS and also integrated the relevant Back-end APIs developed by my teammate. </p>

                <div className="row padding-top">
                  <div className="center">
                    <a href="https://github.com/mongchanghsi/Entrepreneurial-Leadership-Project---Attendy" target="_blank">
                      <button className="link-button">
                        <img src={Sourcecode} className="link-button-logo"/>
                      </button>
                    </a>
                  </div>
                </div>

                <div className="row padding-top">
                  <div className="center">
                    <a href="https://attendygeofi.herokuapp.com/" target="_blank">
                      <button className="link-button">
                        <img src={Liveweb} className="link-button-logo"/>
                      </button>
                    </a>
                  </div>
                </div>

                <div className="row padding-top">
                  <div className="center">
                    <a href="https://drive.google.com/open?id=1g3l3qwQ4Nv7vLQKdSe8vzYxNZqU8AOZk" target="_blank">
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

export default Attendy;
