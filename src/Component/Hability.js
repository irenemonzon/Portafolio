import React, { Component } from 'react';
import './Hability.css';
import './Aboutme.css';


class Hability extends Component {

    render() {
        return (
            <div className="container">
                <div className="habilityBox">
                    <div className="box">
                        <div className="texticons">
                            <h3>Tecnologías</h3>
                        </div>
                        <div className='boxicons'>
                            <div className='row'>
                                <Icons myIcon={iconobj[0].icon} myTitle={iconobj[0].title} />
                                <Icons myIcon={iconobj[1].icon} myTitle={iconobj[1].title} />
                                <Icons myIcon={iconobj[2].icon} myTitle={iconobj[2].title} />
                                <Icons myIcon={iconobj[3].icon} myTitle={iconobj[3].title} />
                            </div>
                            <div className="row2">
                                <Icons myIcon={iconobj[4].icon} myTitle={iconobj[4].title} />
                                <Icons myIcon={iconobj[5].icon} myTitle={iconobj[5].title} />
                                <Icons myIcon={iconobj[6].icon} myTitle={iconobj[6].title} />
                                <Icons myIcon={iconobj[7].icon} myTitle={iconobj[7].title} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const iconobj = [
    {
        icon: <i class="fab fa-js"></i>,
        title: 'Javascript'
    },
    {
        icon: <i class="fab fa-html5"></i>,
        title: 'HTML'
    },
    {
        icon: <i class="fab fa-css3-alt"></i>,
        title: 'CSS'
    },

    {
        icon: <i class="fab fa-react"></i>,
        title: 'React'
    },
    {
        icon: <i class="fab fa-node"></i>,
        title: 'Node Js'
    },
    {
        icon: <i class="fab fa-github"></i>,
        title: 'GitHub'
    },
    {
        icon: <i class="fab fa-git"></i>,
        title: 'Git'
    },

    {
        icon: <i><svg width="50" height="50" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title /><path d="M3.89 15.673L6.255.461A.542.542 0 0 1 7.27.289L9.813 5.06 3.89 15.673zm16.795 3.691L18.433 5.365a.543.543 0 0 0-.918-.295l-14.2 14.294 7.857 4.428a1.62 1.62 0 0 0 1.587 0l7.926-4.428zM14.3 7.148l-1.82-3.482a.542.542 0 0 0-.96 0L3.53 17.984 14.3 7.148z" fill="#030303" /></svg></i>,
        title: 'Firebase'
    },
];

class Icons extends Component {
    render() {

        return (
            <div className="habilityicon">
                <span>
                    {this.props.myIcon}
                </span>
                <p>{this.props.myTitle}</p>
            </div>
        );
    }

}
export default Hability