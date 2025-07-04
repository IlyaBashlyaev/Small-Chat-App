import React, { useState, useEffect } from 'react';

export default function ChatBar({ socket }) {
    const [users, setUsers] = useState([]);

    if (users.length === 0) socket.emit('newUser', '');
    useEffect(() => {
        socket.on('newUserResponse', (data) => setUsers(data));
    }, [socket, users]);

    return (
        <div className="chat__sidebar">
            <h2>Small Chat App</h2>
            <div>
                <h4 className="chat__header">ACTIVE USERS</h4>
                <div className="chat__users">
                    {users.map((user) => (
                        <p key={user.socketID}>{user.userName}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};