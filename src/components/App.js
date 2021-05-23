import React from 'react';
import {Router,Route} from 'react-router-dom';
import SignInPage from './SignInPage';
import HomePage from './HomePage';
import history from './history';


const App = () => {
    return (
        <div>
           <Router history={history}>
              <Route path="/" exact component={SignInPage}/>
              <Route path ="/home" exact component ={HomePage}/>
           </Router>
        </div>
    )
}

export default App;
