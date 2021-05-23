import React, { Component } from 'react';
import GoogleAuth from './GoogleAuth';
import '../sass/main.scss';

 class HomePage extends Component {
    
  
    
    render() {
        return (
            <div className="home-page">
              <GoogleAuth/>
              <div id="title-container">
              <h1> Home Page</h1>  
              </div>
              
            </div>
        )
    }
}

export default HomePage;
