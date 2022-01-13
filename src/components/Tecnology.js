import React from "react";
import './Tecnology.css';
import { FaReact } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { FaJsSquare } from 'react-icons/fa';
import { SiFirebase } from "react-icons/si"
import { FaFacebook } from 'react-icons/fa';




export default()=>{
    


    return(
        <div className="body-tec">
            <div id="Tecnology" className="content-tec">
                <section className="tec-elements">
                    <h2 className="Tec-title">Tecnologias usadas no projeto</h2>
                    <ul className="sci">
                        <li data-text="React" data-color="#61dbfb">
                            <a className="React-icon" ><FaReact/></a>
                        </li>
                        <li data-text="Html" data-color="#e34c26">
                            <a className="Html-icon" ><FaHtml5/></a>
                        </li>
                        <li data-text="Css" data-color="#264de4">
                            <a className="Css-icon" ><FaCss3Alt/></a>
                        </li>
                        <li data-text="Javascript" data-color="#f0db4f">
                            <a className="Js-icon" ><FaJsSquare/></a>
                        </li>
                        <li data-text="Firebase" data-color="#FFCA2A">
                            <a className="Firebase-icon" ><SiFirebase/></a>
                        </li>
                        <li data-text="Facebook" data-color="#1877F2">
                            <a className="Facebook-icon" ><FaFacebook/></a>
                        </li>
                    </ul>
                                        
                </section>
            </div>
        </div>
)}