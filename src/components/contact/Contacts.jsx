import React, { useState } from 'react'
import "./Contacts.css"
import Contact from './Contact'
import ContactHeader from './ContactHeader'

const Contacts = () => {
    const [clickCount, setClickCount] = useState(0);
    
    return (
        <div className='contacts'>
            <ContactHeader />
            <div className="contact">

                <div className="each__contact head__color">
                    {
                        clickCount === 0 ?
                            <>
                                <input className='checkbox__cell' type="checkbox" />
                                <div className="name__cell">Name</div>
                                <div className="email__cell">Email</div>
                                <div className="company__cell">Company Name</div>
                                <div className="role__cell">Role</div>
                                <div className="forecast__cell">Forecast</div>
                                <div className="activity__cell">Activity</div>
                            </>
                            :
                            <>
                                <span className='checkbox__cell count__btn'>{clickCount}</span>
                                <div className="name__cell">
                                    <span className='selected'>{clickCount} selected</span>
                                    <span class="icon material-symbols-outlined">
                                        delete
                                    </span>
                                </div>
                            </>
                    }
                </div>
                <Contact
                    name={"Ayush Kumar"}
                    email={"ayushkumar.dev25@gmail.com"}
                    company={"Hatchbuck"}
                    role={"Manager"}
                    forecast={"50"}
                    activity={"5 Minutes"}
                    setClickCount={setClickCount}
                />
                <Contact
                    name={"Ayush Kumar"}
                    email={"ayushkumar.dev25@gmail.com"}
                    company={"Hatchbuck"}
                    role={"Manager"}
                    forecast={"50"}
                    activity={"5 Minutes"}
                    setClickCount={setClickCount}
                />
                <Contact
                    name={"Ayush Kumar"}
                    email={"ayushkumar.dev25@gmail.com"}
                    company={"Hatchbuck"}
                    role={"Manager"}
                    forecast={"50"}
                    activity={"5 Minutes"}
                    setClickCount={setClickCount}
                />
                <Contact
                    name={"Ayush Kumar"}
                    email={"ayushkumar.dev25@gmail.com"}
                    company={"Hatchbuck"}
                    role={"Manager"}
                    forecast={"50"}
                    activity={"5 Minutes"}
                    setClickCount={setClickCount}
                />
            </div>
        </div>
    )
}

export default Contacts