import React from 'react';
import GoogleAuth from './GoogleAuth';
import "../sass/main.scss";

const SignInForm = () => {
    return (
        <div className="form-container">
          <h1>Sign In</h1>
          <div className="btns-container">
            <GoogleAuth/>
            <div className="dribble-btn">
            <i className="fa fa-dribbble" aria-hidden="true"></i>
            </div>
          </div>

           <form className="regular-aunthetication-form">
              <div className="input-container">
                  <label>Username or Email Address</label>
                  <input type="email"/>
              </div>

              <div className="input-container">
                  <label>Password</label>
                  <input type="password"/>
              </div>

              <button className="sign-in-btn"> Sign In</button>
           </form>
        </div>
    )
}
export default SignInForm;
