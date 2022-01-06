import React from "react";
import './navbar.css'


export default () =>{
    

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
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Tecnologias</a></li>
                    <li><a href="#">Entrar</a></li>
                </ul>
            </header>
            <section className="banner"></section>
        </div>
    );
}