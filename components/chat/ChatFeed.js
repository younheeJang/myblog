import MessageForm from './MessageForm'
import MyMessage from './MyMessage'
import TheirMessage from './TheirMessage'
import chatStyle from '../../styles/chat.module.css'

const ChatFeed = (props) => {
    const { chats, activeChat, userName, messages } = props;
    const chat = chats && chats[activeChat];
    console.log(chat)
    const renderReadReceipts = (message, isMyMessage) => {
        
        return chat.people.map((person, index) => person.last_read === message.id && (
        <div
          key={`read_${index}`}
          className={chatStyle.readReceipt}
          style={{
            float: isMyMessage ? 'right' : 'left',
            backgroundImage: person.person.avatar && `url(${person.person.avatar})`
          }}
        />
      ));
    }
    
    const renderMessages = () => {
        const keys = Object.keys(messages);
        console.log(keys)
        return <div className='h-4/6 overflow-hidden overflow-y-auto'>
        {keys.map((key, idx) => {
            const message = messages[key];
            const lastMessageKey = idx === 0 ? null : keys[idx - 1];
            const isMyMessage = userName === message.sender.username;
            return(
                <div key = {`msg_${idx}`} className='w-full'>
                    <div className='w-full inline-block'>
                        {isMyMessage
                        ? <MyMessage message={message}/>
                        : <TheirMessage message={message} lastMessage={messages[lastMessageKey]}/>}
                    </div>
                    <div className={chatStyle.readReceipts} style={{marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px'}}>
                    {renderReadReceipts(message, isMyMessage)}
                    </div>
                </div>
            )
        })}
        </div>
    }
   
    if(!chat) return 'Loading...';
    return (
        <div className='w-full h-full bg-white'>
            <div className='w-full text-center p-8'>
                <div className='text-blue-400 text-2xl extrabold'>
                    {chat.title}
                </div>
                <div className='text-blue-300 text-base bold'>
                    {chat.people.map((person => `${person.person.username} `))}
                </div>
            </div>
            {renderMessages()}
            <div className='h-5'></div>
            <div className='p-4'>
                <MessageForm {... props} chatId={activeChat}/>
            </div>
        </div>
    )
}

export default ChatFeed;