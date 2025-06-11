import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChatBar from './ChatBar';
import ChatBody from './ChatBody';
import ChatFooter from './ChatFooter';

export default function Home({ socket }) {
    const navigate = useNavigate(),
        [messages, setMessages] = useState([]);

    useEffect(() => {
        if (!socket.id) navigate('/sign-up');
        socket.on('messageResponse', (data) => setMessages([...messages, data]));
    }, [socket, messages]);

    return (
        <div className="chat">
            <ChatBar socket={socket}/>
            <div className="chat__main">
                <ChatBody messages={messages}/>
                <ChatFooter socket={socket}/>
            </div>
        </div>
    );
}