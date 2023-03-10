import "./Chat.css"
import React from 'react'
import ChatHeader from "./ChatHeader"
import Messages from "./Messages"
import MessInput from "./MessInput"


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