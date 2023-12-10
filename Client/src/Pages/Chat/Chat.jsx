// import axios from 'axios';
import React, { useState } from 'react';

const Chat = () => {
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('')

   
   const handleSubmit = async(e) => {
    e.preventDefault();
    try {
        const res = await fetch('http://localhost:8080/conversation', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({content: prompt})
        });
     setResponse(res.data);
    } catch (error) {
        console.log(error);
    }
   }

    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <form onSubmit={handleSubmit}>
            <input value={prompt} onChange={(e) => setPrompt(e.target.value)}
            style={{width: '100%', height: '50px', border: 'solid 1px red'}}/>
            <button type='submit'>Submit</button>
          </form>
          <div style={{width: '100%', margin: '50px'}}>
            <p>{response}</p>
          </div>
        </div>
    );
};

export default Chat;