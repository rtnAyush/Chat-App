import "./Chat.css"
import React from 'react'
import ChatHeader from "./chat/ChatHeader"
import Messages from "./chat/Messages"
import MessInput from "./chat/MessInput"


const Chat = () => {
  return (
    <div className="chat">
      <ChatHeader />
      <Messages />
      <MessInput />
    </div>
  )
}

export default Chat