import React from 'react'

const Message = ({ who, name, time, mess }) => {
  return (
    <div className={`chat__message ${who}`}>
      <header>
        <img src={process.env.PUBLIC_URL + "/logo192.png"} alt="" />
        <span>{who ? "You" : name}</span>
        <span className='time'>{time}</span>
      </header>
      <div className='chat__description'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque nisi voluptates deserunt ipsam eius ullam tempora autem iure quos voluptas, est magnam ea odit libero.
      </div>
    </div>
  )
}

export default Message