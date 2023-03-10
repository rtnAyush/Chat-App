import React, { useState } from 'react'
import InputEmoji from "react-input-emoji";

const MessInput = () => {
    const [text, setText] = useState("");

    function handleOnEnter() {
        console.log("enter", text);
    }
    return (
        <div className="chat__input">
            <InputEmoji
                onChange={setText}
                cleanOnEnter
                onEnter={handleOnEnter}
                placeholder="Type a message"
                borderColor={"white"}
                fontSize={"13"}
            />
            <input type="file" id="file" style={{ display: "none" }} />
            <label htmlFor="file">
                <span className="material-symbols-outlined">
                    attach_file
                </span>
            </label>
        </div>
    )
}

export default MessInput