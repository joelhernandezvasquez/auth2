import React, { Component } from 'react';
import {connect} from 'react-redux';
import {signIn,signOut} from '../action/index';
import history from './history';
import "../sass/main.scss";

class GoogleAuth extends Component {
    
   
    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId:'282916870799-5me3jpe85gl8p5eqktc2rcufafdorpl8.apps.googleusercontent.com',
                scope:'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
              this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        }); 
    }

    onAuthChange = (isSignedIn) =>{
     
       isSignedIn? this.props.signIn(this.auth.currentUser.get().getId()): this.props.signOut();

    }

     onSignInClick = () =>{
       
        this.auth.signIn().then(()=>{
            history.push("/home");
        })
       
    }

    onSignOutClick = () =>{
     this.auth.signOut().then(()=>{
         history.push("/");
     })
    } 

    renderAuthButton ()
    {
        if(this.props.isSignedIn === null)
        {
            return null;
        }

        else
        if(this.props.isSignedIn)
        {
           return(
               
               <button className="auth-btn" onClick = {this.onSignOutClick}>
                  <i class="fa fa-google" aria-hidden="true"></i>
                   Sign out
               </button>
           )
        }
        else
        {
        return (
           
         
            <button className="auth-btn" onClick = {this.onSignInClick}>
            <i class="fa fa-google" aria-hidden="true"></i>
             Sign in with Google
        </button>
        
    
        
        
        )
        }
    } 
    render() {
        
        return (
            <div>
                {this.renderAuthButton()} 
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
  return{
      isSignedIn: state.auth.isSignedIn
  }
}

export default connect(mapStateToProps,{signIn,signOut}) (GoogleAuth);
