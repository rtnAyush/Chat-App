import React from 'react'
import Message from './Message'

const Messages = () => {
    return (
        <div className="chat__message_box">
            <Message
                who={""}
                name={"Ayush Kumar"}
                time={"10:40pm"}
            />
            <Message
                who={"owner"}
                name={"Ayush Kumar"}
                time={"11:00pm"}
            />
            <Message
                who={""}
                name={"Ayush Kumar"}
                time={"11:10pm"}
            />
            <Message
                who={"owner"}
                name={"Ayush Kumar"}
                time={"11:20pm"}
            />
            <Message
                who={""}
                name={"Ayush Kumar"}
                time={"11:30pm"}
            />
            <Message
                who={"owner"}
                name={"Ayush Kumar"}
                time={"11:40pm"}
            />
        </div>
    )
}

export default Messages