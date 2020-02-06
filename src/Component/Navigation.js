import React,{Component} from 'react';
import{Link} from 'react-router-dom';
import './Navigation.css';


class Navigations extends Component{

    render(){
        return(
     
              <nav> 
                 <h2 className="logoName">Irene Monzón</h2>
               <ul>
                   <li><Link to ="/navigation/aboutme" className="menu">Sobre mi</Link></li>
                   <li><Link to="/navigation/hability" className= "menu">Habilidades</Link></li>
                   <li><Link to ="/navigation/proyect"className="menu">Proyectos</Link></li>
                   <li><Link to ="/navigation/contact" className="menu">Contactame</Link> </li>  
               </ul> 
            </nav>
           
        );
    }
}
export default Navigations;