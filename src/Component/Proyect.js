import React, { Component } from 'react';
import Papitas from '../Imagen/Papitas.png';
import PokemonData from '../Imagen/PokemonData.png';
import movie from '../Imagen/movie.png';
import './Proyect.css';
import './Aboutme.css';



class Proyect extends Component {

    render() {
        return (
            <div className="container">
                <div className="proyectBox">
                    <div className="textproyect">
                        <h4>Proyectos</h4>
                    </div>
                    <div className='proyect'>
                        <Proyects myImg={proyectobj[0].img} myTitle={proyectobj[0].title} myProyect={proyectobj[0].descripcion} myDemo={proyectobj[0].demo} myCode={proyectobj[0].code} />
                        <Proyects myImg={proyectobj[1].img} myTitle={proyectobj[1].title} myProyect={proyectobj[1].descripcion} myDemo={proyectobj[1].demo} myCode={proyectobj[1].code} />
                        <Proyects myImg={proyectobj[2].img} myTitle={proyectobj[2].title} myProyect={proyectobj[2].descripcion} myDemo={proyectobj[2].demo} myCode={proyectobj[2].code} />
                    </div>
                </div>
            </div>
        );
    }
}

const proyectobj = [
    {
        img: PokemonData,
        title: 'PokemonData',
        descripcion: 'interfaz de desarrollo móvil y web para usuarios del juego Pokemon Go para visualizar y filtrar distintos tipos de datos.',
        demo: 'https://irenemonzon.github.io/SCL011-data-lovers/src/index.html',
        code: 'https://github.com/irenemonzon/SCL011-data-lovers'
    },
    {
        img: Papitas,
        title: 'Red social',
        descripcion: 'Interfaz web donde los usuarios pueden recomendar y visualizar los mejores lugares para comer papitas fritas.',
        demo: 'https://irenemonzon.github.io/SCL011-Social-Network/src/index.html',
        code: 'https://github.com/irenemonzon/SCL011-Social-Network'
    },

    {
        img: movie,
        title: 'Movielennian',
        descripcion: 'interfaz de desarrollo móvil y web para usuarios del juego Pokemon Go para visualizar y filtrar distintos tipos de datos.',
        demo: 'https://irenemonzon.github.io/SCL011-hackathon-peliculas/src/index.html',
        code: 'https://github.com/irenemonzon/SCL011-hackathon-peliculas'
    }
];

class Proyects extends Component {
    render() {

        return (

            <div className="cards">
                <div className="imgcards">
                    <img className="imagen" src={this.props.myImg} alt="foto"></img>
                </div>
                <div className="textproyect">
                    <h4>{this.props.myTitle}</h4>
                    <p>{this.props.myProyect}</p>
                </div>
                <div className="buttonlinks">
                    <a href={this.props.myDemo} ><button className="btndemo">Demo</button></a>
                    <a href={this.props.myCode}><button className="btncode">Código</button></a>
                </div>
            </div>

        );
    }

}

export default Proyect