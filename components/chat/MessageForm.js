import { useState } from 'react'
import { sendMessage, isTyping } from 'react-chat-engine'

const MessageForm = (props) => {

    const [ value, setValue] = useState('');
    const { chatId, creds } = props;

    const handleSubmit = () => {
        event.preventDefault(); //not browser refresh 
        const text = value.trim(); //remove space not need
        if(text.length > 0) sendMessage(creds, chatId, { text });
        setValue('');
    }

    const handleChange = (event) => {
        setValue(event.target.value);
        isTyping(props, chatId)
    }
    
    const handleUpload = (event) => {
        sendMessage(creds, chatId, { files: event.target.files, text: '' })
    }

    return(
        <form className='overflow-hidden bg-white relative' onSubmit={handleSubmit}>
            <input 
                className='border-white h-10 focus:outline-none'
                placeholder='type your messages...'
                value={value}
                onChange={handleChange}
                onSubmit={handleSubmit}
                style={{float: 'left'}}
            />  
            <label htmlFor="upload-button">
            <img src='/images/icon-upload-picture.png' className='absolute cursor-pointer right-7 m-2'/>
            </label>
            <input 
                type='file'
                multiple={false}
                id='upload-button'
                style={{display: 'none'}}
                onChange={handleUpload}
            />
            <button type='submit'>
                <img src='/images/icon-send-message.png' className='absolute cursor-pointer right-0 bottom-2.5' />
            </button>
        </form>
    )
}

export default MessageForm;