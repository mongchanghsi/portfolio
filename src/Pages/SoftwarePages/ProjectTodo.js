import React, { Component } from 'react';
import Navbar from '../../Components/Navbar';
import { Helmet } from 'react-helmet';
import Image1 from '../../img/todoimg/todo1.png';
import Liveweb from '../../img/liveweb.png';
import Sourcecode from '../../img/sourcecode.png';

class ProjectTodo extends Component {
  render(){
    return(
      <div>
        <Helmet>
          <title> Software | Project Management To-Do </title>
        </Helmet>
        <Navbar/>
        <div className="page-space">
          <div className="wrapper">
            <div className="row">
              <div className="order-2 order-md-1 order-lg-1 col-md-7 col-lg-7">
                <img src={Image1} className="wf2 center"/>
              </div>

              <div className="order-1 order-md-2 order-lg-2 col-md-5 col-lg-5">
                <p className='product-title'> Project Management To-Do </p>
                <hr/>
                <p className="justify"> As I handle a few personal projects, I tend to have several thoughts in mind on what can be future improvement or bugs that I might need to solve. Hence, I enhanced a normal todo application with folder capability, to able to categories my todo into projects. While Trello is available for such purpose, I decided to attempt to develop one using MaterialUI as a practice. </p>
                <p className="justify"> Currently, this is developed as pure ReactJS with MaterialUI. I am looking into implementing APIs with NodeJS and ExpressJS alongside with MongoDB to store the data. Furthermore with user accounts which allows the public to use as well. </p>
                <p className="justify"> Features includes creating / deleting task folders and creating / deleting tasks within the task folders </p>

                <div className="row padding-top">
                  <div className="center">
                    <a href="https://github.com/mongchanghsi/project-management-todo" target="_blank">
                      <button className="link-button">
                        <img src={Sourcecode} className="link-button-logo"/>
                      </button>
                    </a>
                  </div>
                </div>

                <div className="row padding-top">
                  <div className="center">
                    <a href="https://project-management-todo.herokuapp.com/" target="_blank">
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

export default ProjectTodo;
