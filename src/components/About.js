import React from "react";
import './About.css';
import ChatIcon from '@mui/icons-material/Chat';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import FacebookIcon from '@mui/icons-material/Facebook';
import GroupIcon from '@mui/icons-material/Group';
import AddToHomeScreenIcon from '@mui/icons-material/AddToHomeScreen';
import ForumIcon from '@mui/icons-material/Forum';

export default ()=>{
    return(
    <div className="content" id="About">
        	<div className="container-about">
			<h1>Sobre o projeto</h1>
			<div className="row-about">
                    <div className="service-about">
                        <ChatIcon className="icon"/>
                        <h2>Envio de mensagens</h2>
                        <p>Envio de mensagens e links para os usuarios conectados no sistema.</p>
                    </div>
                    <div className="service-about">
                        <EmojiEmotionsIcon className="icon"/>
                        <h2>Envio de emojis</h2>
                        <p>Com os emojis suas conversas ficaram mais interativas.</p>
                    </div>
                    <div className="service-about">
                        <FacebookIcon className="icon"/>
                        <h2>Autenticação via facebook</h2>
                        <p>O cadastro do usuario no sistema é feito através do facebook.</p>
                    </div>
                    <div className="service-about">
                        <GroupIcon className="icon"/>
                        <h2>Inicio de novas amizades</h2>
                        <p>Através do sistema de chat você pode criar novas amizades e conversas com pessoas logadas no sistema.</p>
                    </div>				
                    <div className="service-about">
                        <AddToHomeScreenIcon className="icon"/>
                        <h2>Design responsivo</h2>
                        <p>Design que pode ser utilizado em vários dispositivos móveis.</p>
                    </div>
                    <div className="service-about">
                        <ForumIcon className="icon"/>
                        <h2>Comece a conversar!</h2>
                        <p>Cadastre-se e se conecte a outras pessoas!</p>
                    </div>
                </div>
            </div>
    </div>
)}