import { useState, useEffect } from "react";
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault()

        const authObject = { 'Project-ID' : process.env.ch_engine_projectID, 'User-Name': username, 'User-Secret': password}

        await axios.get('https://api.chatengine.io/chats', { headers: authObject });
        
        localStorage.setItem('username', username)
        localStorage.setItem('password', password)
        window.location.reload();

    }

   
        return(
            
            <div className='h-screen w-full bg-gradient-to-r bg-gradient-to-r from-green-400 to-blue-500 flex justify-center items-center'>
              
                <div className='w-80'>
                    <h1 className='text-center text-white text-3xl mb-8 uppercase'>Chat Application</h1>
                    <form >
                        <div align="center">
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className='focus:outline-none rounded border-none bg-white text-black text-xl p-5 w-80 mb-2' placeholder="Username" required />
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='focus:outline-none rounded border-none bg-white text-black text-xl p-5 w-80 mb-8' placeholder="Password" required />
                        
                            {/*<button type="submit" className={chatStyle.button} onClick={handleSubmit}>*/}
                            <button type="submit" className='focus:outline-none rounded border-none bg-white text-black text-center uppercase text-xl p-5 w-80 hover:bg-black hover:text-white' onClick={handleSubmit}>
                                <span> Start Chatting </span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
           
        )
  
    
}

export default LoginForm