import React from 'react';
import{BrowserRouter as Router,Route} from'react-router-dom';
import Navigation from'./Component/Navigation';

function App() {
  return (

   <Router>

     <Route exact path="/" component={Navigation}/>
   
   </Router>
  );
}

export default App;
