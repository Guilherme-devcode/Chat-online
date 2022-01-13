import React from "react";
import './LoginContainer.css';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Slide3 from './img/Slide3.png'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default ()=>{


    return(
        <div className="main" id="LoginContainer">
            <div className="contentBx">
		        <div className="text">
			    <h2>Whatsapp <WhatsAppIcon className="icone"/></h2>
			    <p>Com o WhatsApp para web, você pode sincronizar facilmente suas conversas no seu computador e conversar da maneira que for mais conveniente para você.</p>
		    </div>
	    </div>
        <div className="imgBx">
            <img className="notebook" src={Slide3}/>
        </div>
        <div className="button-down"><a href="#About"><KeyboardArrowDownIcon  className="icon-down"/></a></div>
    </div>
    )
    }
    
