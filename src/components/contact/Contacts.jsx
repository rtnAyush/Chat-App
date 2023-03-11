import React, { useState } from 'react'
import "./Contacts.css"
import Contact from './Contact'
import ContactHeader from './ContactHeader'
import { useStateValue } from '../../context/StateProvider'

const Contacts = () => {
    const [clickCount, setClickCount] = useState(0);
    const [{ user }] = useStateValue();

    console.log(user.contacts);
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

                {
                    user.contacts.map((contact) => {
                        return (
                            <Contact
                                name={contact.name}
                                email={contact.email}
                                company={contact.company}
                                role={contact.role}
                                forecast={contact.forecast}
                                activity={contact.activity}
                                setClickCount={setClickCount}
                            />
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Contacts