import React from "react";
import './navbar.css';
import Api from '../Api';


export default ({onReceive}) =>{
    
    const handleFacebookLogin = async () =>{
        let result = await Api.fbPopup();
        if(result){
            onReceive(result.user);
        }else{
            alert("Erro!")
        }
    }

    window.addEventListener("scroll", function(){
        var header = document.querySelector("header")
        header.classList.toggle("sticky", window.scrollY > 0)
    })

    return(
        <div className="navbar-body">
            <div className="navbar">
                <header className="navbar-header">
                    <a className="logo">whatsapp</a>
                    <ul>
                        <li><a>Inicio</a></li>
                        <li><a>Tecnologias</a></li>
                        <li><a onClick={handleFacebookLogin}>Entrar</a></li>
                    </ul>
                </header>
                <section className="banner"></section>
            </div>
        </div>
    );
}