import React, { Component } from 'react';
import profile from '../Imagen/profile.png';
import cv from '../Imagen/cv.pdf';
import './Aboutme.css';



class Aboutme extends Component {

  render() {
    return (
      <div className="container">
        <div className="aboutmeBox">
          <div className="imgBox">
            <img className="profile" src={profile} alt="foto"></img>
          </div>
          <div className="aboutmewrite">
            <h4 className="titletext">Irene Monzón</h4>
            <p className="aboutmetext">Soy Desarrolladora Front End e ingeniera electrónica de profesión, apasionada de la tecnologia, comprometida y con capacidad de trabajo en equipo. Me gusta asumir grandes retos, contribuyendo en el éxito de clientes y usuarios a través de soluciones tecnológicas. </p>
            <div className="boxbtn">
              <a href={cv} target="blank"><button className="btncv" >Descarga mi CV</button></a>
            </div>
          </div>
        </div>


      </div>

    );
  }
}
export default Aboutme