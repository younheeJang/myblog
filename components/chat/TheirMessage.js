

const TheirMessage = ({lastMessage, message}) => {
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;

    return(
        <div className='float-left w-full flex pl-4'>
            {isFirstMessageByUser && (
                <div 
                    className='w-9 h-9 rounded-full text-center bg-no-repeat bg-center bg-contain'
                    style={{ backgroundImage: message.sender && `url(${message.sender.avatar})` }}
                />
            )}
            {message && message.attachments.length > 0 ?
                        (<img 
                            src={message.attachments[0].file}
                            alt="messageAttachment"
                            className='w-40 max-h-56 max-w-56 min-h-28 min-w-28'
                            style={{ marginLeft: isFirstMessageByUser ? '4px' : '48px' }}
                        />)
                        : (
                        <div className='p-2 rounded-lg text-sm bg-blue-300 text-white' style={{ float: 'left', backgroundColor: '#CABCDC', marginLeft: isFirstMessageByUser ? '4px' : '48px'}}>
                            {message.text}
                        </div>
                        )
            }
        </div>
    )
}

export default TheirMessage;