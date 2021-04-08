import MessageForm from'./MessageForm';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';

const ChatFeed =(props)=>{
  const {chats, messages, activeChat, userName} = props;

  const chat = chats && chats[activeChat];
  const renderMessages = ()=>{
    const keys = Object.ke(messages);
    console.log(keys);
    return keys.map((key, index) =>{
      const message = messages(key);
      const lastMessage = index === 0 ? null : keys[index - 1];
      const isMyMessage = userName === message.sender.username;


      return (
        <div key={`msg__`} style={{width: '100%'}}>
          <div className={'message-block'}>
            {
              isMyMessage 
              ? <MyMessage message={message}/> 
              : <TheirMessage message={message} lastMessage={messages[lastMessage]}/>
            }

          </div>
          <div className={'read-receipts'} style={{marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage? '0px': '60px'}}>
            read-receipts
          </div>

        </div>
      )
    })
  }
  renderMessages()
  if(!chat) return 'Loading.....';
  return(
    <div className={'chat-feed'}> 
      <div className={'chat-title-container'}>
        <div classNmae={'chat-title'}>{chat?.title}</div>
          <div classNmae={'chat-subtitile'}>
            {chat.people.map(person => `${person.person.username}`)}

          </div>
      </div>
      {renderMessages()}
      <div style={{height: '100px'}}/>
      <div className={'message-form-container'}>
        <MessageForm {...props} chatId={activeChat}/>

      </div>
    </div>
  )
}

export default ChatFeed;