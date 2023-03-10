import React from 'react'

const Message = () => {
  return (
    <div className="chat__message owner">
      <header>
        <img src={process.env.PUBLIC_URL + "/logo192.png"} alt="" />
        <span>Ayush Kumar</span>
        <span className='time'>11:55 pm</span>
      </header>
      <div className='chat__description'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque nisi voluptates deserunt ipsam eius ullam tempora autem iure quos voluptas, est magnam ea odit libero.
      </div>
    </div>
  )
}

export default Message