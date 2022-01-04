import React, { useState, useEffect } from "react";
import './NewChat.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Api from "../Api";

export default ({user, chatlist, show, setShow}) =>{

    const [list, setList] = useState([]);
    useEffect(()=>{
        const getList = async()=>{
            if(user !== null){
                let results = await Api.getContactList(user.id);
                setList(results);
            }
        }
        getList();
    }, [user])

    const handleClose = ()=>{
        setShow(false);
    }
    const addNewChat = async(user2)=>{
        await Api.addNewChat(user, user2);

        handleClose();
    }

    return(
        <div className="newChat" style={{left: show ? 0:-415}}>
            <div className="newChathead">
                <div onClick={handleClose} className="newChatbackbutton">
                    <ArrowBackIcon />
                </div>
                <div className="newChatheadtitle">Nova Conversa</div>
            </div> 
            <div className="newChatlist">
                {list.map((item, key)=>(
                    <div className="newchatitem" onClick={()=>addNewChat(item)} key={key}>
                        <img className="newchatitemavatar" src={item.avatar} alt=""></img>
                        <div className="newchatitemname">{item.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}