import React from "react";
import './LoginContainer.css';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Slide3 from './img/Slide3.png'
import Api from "../Api";

export default ({onReceive})=>{

    const handleFacebookLogin = async () =>{
        let result = await Api.fbPopup();
        if(result){
            onReceive(result.user);
        }else{
            alert("Erro!")
        }
    }

    return(
        <div className="main">
            <div class="contentBx">
		        <div class="text">
			    <h2>Whatsapp <WhatsAppIcon className="icone"/></h2>
			    <p>Com o WhatsApp para web e computador, você pode sincronizar facilmente suas conversas no seu computador e conversar da maneira que for mais conveniente para você.</p>
			    <button class="btn" onClick={handleFacebookLogin}>Entrar</button>
		    </div>
	    </div>
        <div className="imgBx">
            <img className="notebook" src={Slide3}/>
        </div>
    </div>
    )
    }
    
