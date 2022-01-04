import React, {useState, useEffect, useRef} from "react";
import EmojiPicker from 'emoji-picker-react'
import './ChatWindow.css';
import Api from "../Api";
import MessageItem from './MessageItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import MicIcon from '@mui/icons-material/Mic';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';

export default ({user, data}) =>{

    const body = useRef();

    // Função para pegar a biblioteca do microfone
    let recognition = null;
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if(SpeechRecognition !== undefined){
        recognition = new SpeechRecognition();
    }

    const [emojiOpen,setEmojiOpen] = useState(false);
    const [text, setText] = useState('');
    const [listening, setListening] = useState(false)
    const [list, setList] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        setList([]);
        let unsub = Api.onChatContent(data.chatId, setList, setUsers)
        return unsub;
    }, [data.chatId])

    useEffect(()=>{
        // para quando chegar mensagem a barra do scroll chegar no final do chat
        if(body.current.scrollHeight > body.current.offsetHeight){
            body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight
        }
    },[list]);

    const handleOpenEmoji = ()=>{
        setEmojiOpen(true);
    }

    const handleCloseEmoji =()=>{
        setEmojiOpen(false)
    }

    const handleEmojiClick = (e,emojiObject) =>{
        setText(text+emojiObject.emoji);
    }

    const handleMicClick = () =>{
        if(recognition !== null){

            recognition.onstart = () =>{
                setListening(true)
            }
            recognition.onend = ()=>{
                setListening(false)
            }
            recognition.onresult = (e)=>{
                setText( e.results[0][0].transcript );
            }

            recognition.start();

        }
    }

    const handleInputKeyUp = (e) => {
        if(e.keyCode == 13) {
            handleSendClick();
        }
    }

    const handleSendClick = ()=>{
        if(text !== ''){
            Api.sendMessage(data, user.id, 'text', text, users);
            setText('');
            setEmojiOpen(false);
        }
    }

    return (
        <div className="chatWindow">    
            {/* header do chat com nome de usuario e avatar */}
            <div className="chatWindowheader">
                <div className="chatWindowheaderinfo">
                    <img className="chatWindowavatar" src={data.image}></img>
                    <div className="chatWindowname">{data.title}</div>
                </div>
            {/* botões do header */}
                <div className="chatWindowheaderbuttons">
                    <div className="chatWindowbtn">
                        <SearchIcon></SearchIcon>
                    </div>
                    <div className="chatWindowbtn">
                        <AttachFileIcon></AttachFileIcon>
                    </div>
                    <div className="chatWindowbtn">
                        <MoreVertIcon></MoreVertIcon>
                    </div>

                </div>


            </div>
        {/* corpo do chat / body */}
            <div ref={body} className="chatWindowbody">
                {list.map((item, key)=>(
                    <MessageItem
                        key={key}
                        data={item}
                        user={user}
                    />
                ))}
            </div>
            {/* area de emojis */}
            <div className="chatWindowemojiarea" 
                 style={{height: emojiOpen ? '200px' : '0px'}}
            >
                <EmojiPicker
                    onEmojiClick={handleEmojiClick}
                    disableSearchBar
                    disableSkinTonePicker
                />
            </div>
            {/* footer do chat com input para mensagem */}
            <div className="chatWindowfooter">
                <div className="chatWindowpre">

                    <div 
                    className="chatWindowbtn"
                    onClick={handleCloseEmoji}
                    style={{width: emojiOpen?40:0}}
                    >
                        <CloseIcon></CloseIcon>
                    </div>

                    <div 
                    className="chatWindowbtn"
                    onClick={handleOpenEmoji}
                    
                    >
                        <TagFacesIcon style={{color: emojiOpen? '#009688':'#919191'}}></TagFacesIcon>
                    </div>

                </div>
                <div className="chatWindowarea">
                    <input 
                    className="chatWindowareainput" 
                    type="text"
                    placeholder="Digite uma mensagem"
                    value={text}
                    onChange={e=>setText(e.target.value)}
                    onKeyUp={handleInputKeyUp}
                    />
                </div>
                <div className="chatWindowpos">
                    {text === '' &&
                        <div onClick={handleMicClick} className="chatWindowbtn">
                            <MicIcon style={{color: listening ? '#126ECE' : '#919191'}}></MicIcon>
                        </div>
                    }
                    {text !== '' &&
                        <div onClick={handleSendClick} className="chatWindowbtn">
                            <SendIcon></SendIcon>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}