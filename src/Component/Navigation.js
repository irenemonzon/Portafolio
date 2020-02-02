import React,{Component} from 'react';
import{Link} from 'react-router-dom';
import './Navigation.css';

class Navigation extends Component{

    render(){
        return(
            <nav> 
                 <h2 className="logoName">IM</h2>
               <ul>
                   <li><Link to ="" className="menu">Sobre mi</Link></li>
                   <li><Link to=""className= "menu">Habilidades</Link></li>
                   <li><Link to =""className="menu">Proyectos</Link></li>
                   <li><Link to ="" className="menu">Contactame</Link> </li>  
               </ul> 
            </nav>
           
        );
    }
}
export default Navigation;