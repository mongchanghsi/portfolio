import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../../Components/Navbar';
import Image1 from '../../img/furnitimg/photo1.jpg';
import Image2 from '../../img/furnitimg/photo2.jpg';
import Image3 from '../../img/furnitimg/photo3.jpg';
import Image4 from '../../img/furnitimg/photo4.jpg';
import Image5 from '../../img/furnitimg/photo5.jpg';
import Image6 from '../../img/furnitimg/photo6.jpg';
import Image7 from '../../img/furnitimg/photo7.jpg';

class FurnitU extends Component {
  render(){
    return(
      <div>
        <Helmet>
          <title> UIUX | FurnitU </title>
        </Helmet>
        <Navbar/>
        <div className="page-space">
          <div className="wrapper">
            <div className="row">
              <div className="order-2 order-md-1 order-lg-1 col-md-7 col-lg-7">
                <img src={Image1} className="wf2 center"/>
                <img src={Image2} className="wf2 padding-top padding-bottom center"/>
                <img src={Image3} className="wf2 padding-top padding-bottom center"/>
                <img src={Image4} className="wf2 padding-top padding-bottom center"/>
                <img src={Image5} className="wf2 padding-top padding-bottom center"/>
                <img src={Image6} className="wf2 padding-top padding-bottom center"/>
                <img src={Image7} className="wf2 padding-top padding-bottom center"/>
              </div>

              <div className="order-1 order-md-2 order-lg-2 col-md-5 col-lg-5">
                <p className='product-title'> FurnitU </p>
                <hr/>
                <p className="justify"> The problem that i'm tackling is health and well-being of the students studying in University of Twente as part of a Design Challenge.  </p>
                <p className="justify"> My team conducted interviews in the campus and surprisingly found that students burnt furniture when they are due to move out as it is a hassle to sell it off (all the logistic procedures issues). Thus, FurnitU. </p>
                <p className="justify"> FurnitU is a platform where students are able to buy and sell furniture for their housing needs. Students are able to sell the furniture on the platform and incoming students are able to purchase it from the platform or a warehouse in the school campus. The repairs of the furniture can be done by the students themselves as part of a volunteering activity and to enhance their creativity skills in turning the furniture into something more.</p>
                <p className="justify"> This project is done using Android Studio, Adobe ExperienceDesign and Adobe Photoshop, Adobe Illustrator. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FurnitU;
