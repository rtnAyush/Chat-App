import React from 'react'

const ChatContact = () => {
    return (
        <div className='chat__contact'>
            <img src={process.env.PUBLIC_URL + "/logo192.png"} alt="" />
            <div className='contact__info'>
                <div>
                    <p>Ayush Kumar</p>
                    <span>30 Dec 2018, 12:34</span>
                </div>
                <div>
                    <span>New message</span>
                    <span className='mess__count'>1</span>
                </div>
            </div>
        </div>
    )
}

export default ChatContact