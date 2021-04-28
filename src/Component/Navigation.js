import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';


class Navigations extends Component {

    render() {
        return (

            <nav>
                <ul>
                    <li><Link to="/navigation/aboutme" className="menu">Sobre mí</Link></li>
                    <li><Link to="/navigation/proyect" className="menu">Proyectos</Link></li>
                    <li><Link to="/navigation/hability" className="menu">Tecnologías</Link></li>
                    <li><Link to="/navigation/contact" className="menu">Contáctame</Link> </li>
                </ul>
            </nav>

        );
    }
}
export default Navigations;