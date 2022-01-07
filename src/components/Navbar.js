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
        <div className="navbar">
            <header>
                <a href="#" className="logo">whatsapp</a>
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Tecnologias</a></li>
                    <li><a onClick={handleFacebookLogin} href="#">Entrar</a></li>
                </ul>
            </header>
            <section className="banner"></section>
        </div>
    );
}