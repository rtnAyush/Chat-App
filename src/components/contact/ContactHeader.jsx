import React, { useState } from 'react'
import axios from "axios"
import { useStateValue } from '../../context/StateProvider'

const ContactHeader = () => {

    const [{ user }] = useStateValue();
    const [addContact, setAddContact] = useState(false)
    const [contact, setContact] = useState({});
    const [{ apiUrl }] = useStateValue();


    const handleSubmit = async (e) => {

        e.preventDefault();
        setAddContact(false);

        try {
            await axios.post(`${apiUrl}/contact`, { who: user.email, contact });
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = (e) => {
        switch (e.target.name) {
            case "name":
                setContact({
                    ...contact,
                    name: e.target.value
                })
                break;
            case "email":
                setContact({
                    ...contact,
                    email: e.target.value
                })
                break;
            case "company":
                setContact({
                    ...contact,
                    company: e.target.value
                })
                break;
            case "role":
                setContact({
                    ...contact,
                    role: e.target.value
                })
                break;
            case "forecast":
                setContact({
                    ...contact,
                    forecast: e.target.value
                })
                break;
            case "activity":
                setContact({
                    ...contact,
                    activity: e.target.value
                })
                break;

            default:
                break;
        }
    }
    return (
        <>
            {
                addContact && <>
                    <form onSubmit={handleSubmit}>
                        <div className="add__contact">
                            <span onClick={() => { setAddContact(false) }} className="cross__icon material-symbols-outlined">
                                close
                            </span>
                            <div>
                                <h3>Name:</h3>
                                <input onChange={handleChange} name="name" type="text" placeholder="Enter name.." />
                            </div>
                            <div>
                                <h3>Email:</h3>
                                <input onChange={handleChange} name="email" type="email" placeholder="enter email.." />
                            </div>
                            <div>
                                <h3>Company Name:</h3>
                                <input onChange={handleChange} name="company" type="text" placeholder="enter company name.." />
                            </div>
                            <div>
                                <h3>Role:</h3>
                                <input onChange={handleChange} name="role" type="text" placeholder="enter role.." />
                            </div>
                            <div>
                                <h3>Forecast:</h3>
                                <input onChange={handleChange} name="forecast" type="number" placeholder="enter forecast.." />
                            </div>
                            <div>
                                <h3>Activity:</h3>
                                <input onChange={handleChange} name="activity" type="text" placeholder="enter activity.." />
                            </div>
                            <div>
                                <button type='submit' style={{ width: "100%" }} className='btn'>Add</button>
                            </div>

                        </div>
                    </form>
                    <div onClick={() => { setAddContact(false) }} className="blur__bg"></div>
                </>
            }
            <div className='contact__header'>
                <div>
                    <label htmlFor="#company">company</label>
                    <select name="" id="company">
                        <option value="1">All</option>
                    </select>
                </div>
                <button className='btn' onClick={() => { setAddContact(true); setContact({}); }}>Add Contact</button>
            </div>
        </>
    )
}

export default ContactHeader