import React, { Component } from 'react';
import copycolor from '../Imagen/copycolor.png';
import PokemonData from '../Imagen/pokemon.png';
import Papitas from '../Imagen/papitas.png';
import movie from '../Imagen/movie.png';
import users from '../Imagen/users.png';
import './Proyect.css';
import './Aboutme.css';
import proyectobj from './proyects.json'



class Proyect extends Component {

    render() {
        return (
            <div className="container">
                <div className="proyectBox">
                    <div className="titletext">
                        <h4>Proyectos</h4>
                    </div>
                    <div className='proyect'>
                        <Proyects myImg={copycolor} myTitle={proyectobj[0].title} myProyect={proyectobj[0].descripcion} myDemo={proyectobj[0].demo} myCode={proyectobj[0].code} />
                        <Proyects myImg={users} myTitle={proyectobj[1].title} myProyect={proyectobj[1].descripcion} myDemo={proyectobj[1].demo} myCode={proyectobj[1].code} />
                        <Proyects myImg={PokemonData} myTitle={proyectobj[2].title} myProyect={proyectobj[2].descripcion} myDemo={proyectobj[2].demo} myCode={proyectobj[2].code} />
                        <Proyects myImg={movie} myTitle={proyectobj[3].title} myProyect={proyectobj[3].descripcion} myDemo={proyectobj[3].demo} myCode={proyectobj[3].code} />
                        <Proyects myImg={Papitas} myTitle={proyectobj[4].title} myProyect={proyectobj[4].descripcion} myDemo={proyectobj[4].demo} myCode={proyectobj[4].code} />
                    </div>
                </div>
            </div>
        );
    }
}

class Proyects extends Component {
    render() {

        return (

            <div className="cards">

                <div className="imgcards">
                    <img className="imagen" src={this.props.myImg} alt="foto"></img>
                </div>
                <div className="boxcards">
                    <div className="textproyect">
                        <h4>{this.props.myTitle}</h4>
                        <p>{this.props.myProyect}</p>
                    </div>
                    <div className="buttonlinks">
                        <a href={this.props.myDemo} target="blank"><button className="btndemo" >Demo</button></a>
                        <a href={this.props.myCode} target="blank"><button className="btndemo" >Código</button></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Proyect