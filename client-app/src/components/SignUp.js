import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignUp({ socket }) {
    const navigate = useNavigate(),
        [userName, setUserName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('userName', userName);
        socket.emit('newUser', { userName, socketID: socket.id });
        navigate('/');
    };

    return (
        <form className="home__container" onSubmit={handleSubmit}>
            <h1 className="home__header">Sign up to Open Chat</h1>
            <label htmlFor="username">Username</label>
            <input
                type="text"
                name="username"
                id="username"
                className="username__input"
                value={userName}
                onChange={e => setUserName(e.target.value)}
            />
            <button className="home__cta">SIGN IN</button>
        </form>
    );
};