import React from 'react';
import Api from '../Api';
import './Login.css';
import Navbar from './Navbar';
import LoginContainer from './LoginContainer';
import About from './About';


export default ({onReceive}) =>{
    const handleFacebookLogin = async () =>{
        let result = await Api.fbPopup();
        if(result){
            onReceive(result.user);
        }else{
            alert("Erro!")
        }
    }
    
    return(
        <div className="login">
            <Navbar />
            <LoginContainer />
            <About />
            <button className="button-login" onClick={handleFacebookLogin}>entrar</button>
        </div>
    );
}