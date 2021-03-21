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
    console.log(process.env.ch_engine_projectID)
    
   // const fetcher = (...args) => fetch(...args).then(res => console.log(res)).catch(err => console.log(err))
   // const { data } = useSWR(`/api/chat/id`, fetcher)
   // mutate(`/api/chat/id`, false)  
   //console.log(data)
   //const data= fetch('/api/chat/id').then(res => res.json()).then(data=>data.data).catch(err => console.log(err))
   //console.log(data)
    useEffect(() => {
                setUsername(window.localStorage.getItem('username'))
                setPassword(window.localStorage.getItem('password'))
                setProjectID(process.env.ch_engine_projectID)
                console.log(projectID)
    }, []); 
        
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