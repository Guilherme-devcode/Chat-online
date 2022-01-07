import React, { useState, useEffect } from 'react';
import './App.css';
import LoginContainer from './components/LoginContainer';
import Navbar from './components/Navbar';
import Login from './components/Login';
import NewChat from './components/NewChat';
import ChatWindow from './components/ChatWindow';
import ChatListItem from './components/ChatListItem';
import ChatIntro from './components/ChatIntro';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import Api from './Api';
export default () =>{
  

  const [chatlist, setChatList] = useState([]);
  const [activeChat, setActiveChat] = useState({});
  const [user, setUser] = useState(null);
  // funções para abrir e fechar o newchat
  const [showNewChat, setShowNewChat] = useState(false);
  
  useEffect(()=>{
    if(user !== null){
      let unsub = Api.onChatList(user.id, setChatList);
      return unsub;
    }
  },[user]);

  const handleNewChat = () =>{
    setShowNewChat(true);
  }

  //AUTENTICAÇÃO DO LOGIN
  const handleLoginData = async(u)=>{
    // PEGANDO OS DADOS DO USUARIO
    let newUser = {
      id: u.uid,
      name: u.displayName,
      avatar: u.photoURL
    };

    await Api.addUser(newUser);
    setUser(newUser);
  }

  if(user === null){
    return (<Navbar onReceive={handleLoginData}/>);
  }

  return(
    <div className='app-window'>
      <div className='sidebar'>
          <NewChat 
            chatlist={chatlist}
            user={user}
            show={showNewChat}
            setShow={setShowNewChat}
          />
            <header>
              <img className='headeravatar' src={user.avatar} alt=""></img>
              <div className='headerbutons'>
                <div className='headerbtn'>
                <DonutLargeIcon ></DonutLargeIcon>
                </div>
                <div onClick={handleNewChat} className='headerbtn'>
                <ChatIcon ></ChatIcon>
                </div>
                <div className='headerbtn'>
                <MoreVertIcon></MoreVertIcon>
                </div>
              </div>
            </header>
            <div className='search'> 
              <div className='searchinput'>
                  <SearchIcon fontSize='small' style={{color:'#919191'}}/>
                  <input type="search" placeholder='Procurar ou começar uma nova conversa'></input>
              </div>
            </div>
            <div className='chatlist'>
              {chatlist.map((item, key)=>(
                <ChatListItem
                  key={key}
                  data={item}
                  active={activeChat.chatId === chatlist[key].chatId}
                  onClick={()=>setActiveChat(chatlist[key])}
                />
              ))}
            </div>

      </div>
      
      <div className='contentarea'>
        {/* Para quando o chat tiver ativo mostrar a janela do chat */}
            {activeChat.chatId !== undefined && 
              <ChatWindow
                user={user}
                data={activeChat}
              />
            }
            {activeChat.chatId === undefined && 
              <ChatIntro/>
            }
            
      </div>
    </div>
  )
}