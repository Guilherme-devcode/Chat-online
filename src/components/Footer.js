import React from "react";
import './Footer.css'
import { SiGithub } from 'react-icons/si';
import { SiLinkedin } from 'react-icons/si';
import { SiInstagram } from 'react-icons/si';

export default ()=>{
    return(
        <div className="Footer">
            <div className="Footer-container">
                   <div className="footer-right">
                        <a href="https://github.com/Guilherme-devcode"><SiGithub/></a>
                        <a href="https://www.linkedin.com/in/guilherme-rocha-7b3a69220/"><SiLinkedin/></a>
                        <a href="https://www.instagram.com/guilherme_devcode/"><SiInstagram/></a>
                   </div>
                   <div className="footer-left">
                        <p>Guilherme-devcode &copy; 2021</p>
                   </div>
            </div>
        </div>

        )}