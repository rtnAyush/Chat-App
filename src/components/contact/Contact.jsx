import React, { useRef } from 'react'

const Contact = ({ name, email, company, role, forecast, activity, setClickCount }) => {
    const ref = useRef()

    const handleChecked = () => {
        if (ref.current.checked) {
            setClickCount((c) => c + 1)
        } else {
            setClickCount((c) => c - 1)
        }
    }
    return (
        <div className="each__contact">
            <input ref={ref} className='checkbox__cell' type="checkbox" onClick={handleChecked} />
            <div className="name__cell cell">
                <img src={process.env.PUBLIC_URL + "/logo192.png"} alt="" />
                <span>{name}</span>
            </div>
            <div className="email__cell cell">{email}</div>
            <div className="company__cell cell">{company}</div>
            <div className="role__cell cell">{role}</div>
            <div className="forecast__cell cell">{forecast} %</div>
            <div className="activity__cell cell">{activity} ago</div>
        </div>
    )
}

export default Contact

Contact.defaultProps = {
    cellHead: "",
    name: "Name",
    email: "Email",
    company: "Company Name",
    role: "Role",
    forecast: "forecast",
    activity: "activity"
}