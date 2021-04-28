import React from 'react';
import{BrowserRouter as Router,Route} from'react-router-dom';
//import Navigation from'./Component/Navigation';
import Hability from './Component/Hability';
import Aboutme from './Component/Aboutme';
import Proyect from './Component/Proyect';
import Contact from './Component/Contact';
import Navigations from './Component/Navigation';

function App() {
  return (
    <div>
   <Router>
     <Navigations/>
     <Route exact path="/" component={Aboutme}/>
     <Route path="/navigation/aboutme" component={Aboutme}/>
     <Route path="/navigation/proyect" component={Proyect}/>
     <Route path="/navigation/hability" component={Hability}/>
     <Route path="/navigation/contact" component={Contact}/>
   </Router>
   </div>
  );
}

export default App;
