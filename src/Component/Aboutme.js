import React, { Component } from 'react';
import profile from '../Imagen/profile.png';
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
            <p className="aboutmetext">Soy desarrolladora front-end e ingeniera electrónica de profesión,responsable, ordenada, con capacidad de trabajo en equipo,
            me gusta asumir grandes retos, contribuyendo en el éxito de clientes y usuarios a través de soluciones tecnológicas. </p>
          </div>
        </div>
      </div>

    );
  }
}
export default Aboutme