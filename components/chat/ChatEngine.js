import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './ChatFeed'
import { useState, useEffect } from "react";
import LoginForm from './LoginForm'
import Delay from '../utils/Delay'

function ReactChatEngine() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [projectID, setProjectID] = useState('');
    useEffect(() => {
                setUsername(window.localStorage.getItem('username'))
                setPassword(window.localStorage.getItem('password'))
    }, []); 
        
    console.log(process.env.nv_client_id)
    console.log(process.env.ch_engine_projectID)
        if((!username && !password) || (username == '' && password == '')){
           
            return(
                <Delay wait={250}>
                <LoginForm />
                </Delay>
            ) 
        }
   
        if(username && password) {
        return (
            <ChatEngine
                projectID={projectID}
                userName={username}
                userSecret={password}
                height='100vh'
                renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            />
        );
    }
   
}

export default ReactChatEngine;