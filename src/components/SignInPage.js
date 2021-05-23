import React from 'react';
import "../sass/main.scss";
import illustration from '../asset/ilustration.webp';
import SignInForm from './SignInForm';

const SignInPage = () => {
    return (
        <div className="sign-in-container">
           <div className="illustration-container">
           <img className="illustration" src={illustration} alt="illustration"/>
           <SignInForm/>
           </div>
           
        </div>
    )
}
export default SignInPage;
