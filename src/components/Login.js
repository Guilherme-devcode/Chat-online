import React from 'react';
import Api from '../Api';
import './Login.css';
import Navbar from './Navbar';

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
            <Navbar/>
            <button onClick={handleFacebookLogin}>Login</button>
        </div>
    );
}