import React,{Component} from 'react';
import './Hability.css';

class Hability extends Component{

    render(){
        return(
          <div className="habilityBox">
          <h3>Habilidades Tecnicas</h3>
             <div className='row'>
                <Icons myIcon={iconobj[0].icon} myTitle={iconobj[0].title}/>
                <Icons myIcon={iconobj[1].icon} myTitle={iconobj[1].title}/>
                <Icons myIcon={iconobj[2].icon} myTitle={iconobj[2].title}/>
                <Icons myIcon={iconobj[3].icon} myTitle={iconobj[3].title}/>
                <Icons myIcon={iconobj[4].icon} myTitle={iconobj[4].title}/>
                <Icons myIcon={iconobj[5].icon} myTitle={iconobj[5].title}/>
             </div>
          </div>        
       );
    }
}
 const iconobj=[
   {
    icon: <i class="fab fa-js"></i>,
    title:'Javascript'
   },
   {
    icon:   <i class="fab fa-html5"></i>,
    title:'HTML'
   },
   {
    icon: <i class="fab fa-css3-alt"></i>,
    title:'CSS'
   },
   {
    icon: <i class="fab fa-react"></i>,
    title:'React'
   },
   {
    icon:  <i class="fab fa-github"></i>,
    title:'GitHub'
   },
   {
    icon:<i class="fab fa-git"></i>,
    title:'Git'
   }
];

class Icons extends Component{
    render(){

        return(
            <div>
              <span>
                 {this.props.myIcon}
                 </span>
                 <p>{this.props.myTitle}</p>
             </div>
        );
    }

}
export default Hability