import React, { Component } from 'react';
import Navbar from '../../Components/Navbar';
import { Helmet } from 'react-helmet';
import Image1 from '../../img/tictactoeimg/tictactoe1.png';
import Liveweb from '../../img/liveweb.png';
import Sourcecode from '../../img/sourcecode.png';

class TicTacToe extends Component {
  render(){
    return(
      <div>
        <Helmet>
          <title> Software | Tic-Tac-Toe </title>
        </Helmet>
        <Navbar/>
        <div className="page-space">
          <div className="wrapper">
            <div className="row">
              <div className="order-2 order-md-1 order-lg-1 col-md-7 col-lg-7">
                <img src={Image1} className="wf2 center"/>
              </div>

              <div className="order-1 order-md-2 order-lg-2 col-md-5 col-lg-5">
                <p className='product-title'> Tic-Tac-Toe </p>
                <hr/>
                <p className="justify"> Developed using ReactJS as a simple practice. Looking to re-develop using MaterialUI to give a better visual looks. </p>
                <p className="justify"> Features includes winning player indicator and restarting capability </p>

                <div className="row padding-top">
                  <div className="center">
                    <a href="https://github.com/mongchanghsi/tictactoe" target="_blank">
                      <button className="link-button">
                        <img src={Sourcecode} className="link-button-logo"/>
                      </button>
                    </a>
                  </div>
                </div>

                <div className="row padding-top">
                  <div className="center">
                    <a href="https://eric-tictactoe.herokuapp.com/" target="_blank">
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

export default TicTacToe;
