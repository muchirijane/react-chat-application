import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

import './App.css';

const App = ()=>{
  return (
    <ChatEngine
       height = '100vh'
       projectID= '8d0b39c2-e377-4a50-8ad2-517601942995'
       userName='janetracy'
       userSecret='ilovewriting5480'
       renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;