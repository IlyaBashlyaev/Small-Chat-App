import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ChatBody({ messages }) {
    const navigate = useNavigate(),
          handleLeaveChat = () => {
              localStorage.removeItem('userName');
              navigate('/');
              window.location.reload();
          };

    return (
        <>
            <header className="chat__mainHeader">
                <button className="leaveChat__btn" onClick={handleLeaveChat}>
                    LEAVE CHAT
                </button>
            </header>

            <div className="message__container">
                {messages.map((message) =>
                    message.name === localStorage.getItem('userName') ? (
                        <div className="message__chats" key={message.id}>
                            <p className="sender__name">You</p>
                            <div className="message__sender">
                                <p>{message.text}</p>
                            </div>
                        </div>
                    ) : (
                        <div className="message__chats" key={message.id}>
                            <p>{message.name}</p>
                            <div className="message__recipient">
                                <p>{message.text}</p>
                            </div>
                        </div>
                    )
                )}
            </div>
        </>
    );
};