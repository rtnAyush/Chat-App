import React from 'react'

const ContactHeader = () => {
    return (
        <div className='contact__header'>
            <div>
                <label htmlFor="#company">company</label>
                <select name="" id="company">
                    <option value="1">All</option>
                </select>
            </div>
            <button className='btn'>Add Contact</button>
        </div>
    )
}

export default ContactHeader