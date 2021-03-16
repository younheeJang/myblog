

const MyMessage = ({ message }) => {
    
    if(message && message.attachments.length > 0){
        return(
            <img 
                src={message.attachments[0].file}
                alt="messageAttachment"
                className='w-40 max-h-56 max-w-56 min-h-28 min-w-28'
                style={{ float: 'right' }}
            />
        )
    }
    return(
        <div className='p-2 rounded-lg text-sm bg-blue-400' style={{ float: 'right', marginRight:'18px', color: 'white', backgroundColor: '#3B2A50'}}>
            {message.text}
        </div>
    )
}

export default MyMessage;