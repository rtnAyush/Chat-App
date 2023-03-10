import React from 'react'

const ChatHeader = () => {
    return (
        <div className="chat__header">
            <div>
                <img src={process.env.PUBLIC_URL + "/logo192.png"} alt="" />
                <span>Ayush Kumar</span>
            </div>
            <div>
                <span className="material-symbols-outlined">
                    more_vert
                </span>
            </div>
        </div>
    )
}

export default ChatHeader