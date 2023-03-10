import React, { useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import "./Nav.css"

const Nav = () => {
  let location = useLocation();
  const [toggle, setToggle] = useState(false);

  return (
    <div className='nav'>

      {/* logo part */}
      <div className="nav__header">
        SasS <span className={toggle && "toggle__active" }>Kit</span>
      </div>

      <div className="hr"></div>

      {/* profile info part */}
      <div className="nav__profile_info">
        <img src={process.env.PUBLIC_URL + "/logo192.png"} alt="" />
        <div className={toggle && "toggle__active" }>
          <header>Sierra Ferguson</header>
          <section>sierraferguson@gmail.com</section>
        </div>

      </div>

      {/* Option part */}
      <div className="nav__options">

        <Link to="/dashboard" className={location.pathname === "/dashboard" ? "active" : ""}>
          <span className="icon material-symbols-outlined">
            dashboard
          </span>
          <p className={toggle && "toggle__active" }>Dashboard</p>
        </Link>

        <Link to="/task" className={location.pathname === "/task" ? "active" : ""}>
          <span className="icon material-symbols-outlined">
            splitscreen
          </span>
          <p className={toggle && "toggle__active" }>Task</p>
        </Link>

        <Link to="/email" className={location.pathname === "/email" ? "active" : ""}>
          <span className="icon material-symbols-outlined">
            mail
          </span>
          <p className={toggle && "toggle__active" }>Email</p>
        </Link>

        <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>
          <span className="icon material-symbols-outlined">
            person
          </span>
          <p className={toggle && "toggle__active" }>Conatct</p>
        </Link>

        <Link to="/chat" className={location.pathname === "/chat" ? "active" : ""} >
          <span className="icon material-symbols-outlined">
            chat_bubble
          </span>
          <p className={toggle && "toggle__active" }>Chat</p>
        </Link>

        <Link to="/deals" className={location.pathname === "/deals" ? "active" : ""}>
          <span className="icon material-symbols-outlined">
            view_column
          </span>
          <p className={toggle && "toggle__active" }>Deals</p>
        </Link>

      </div>


      <div className="hr"></div>


      <div className="nav__options">

        <Link to="/setting" className={location.pathname === "/setting" ? "active" : ""}>
          <span className="icon material-symbols-outlined">
            settings
          </span>
          <p className={toggle && "toggle__active"}>Setting</p>
        </Link>

      </div>

      {/* nav__toggler */}
      <div className={`nav__toggler ${toggle && "active"}`} onClick={() => { toggle ? setToggle(false) : setToggle(true); }}>
        <span className="icon material-symbols-outlined">
          toggle_off
        </span>
        <p className={toggle && "toggle__active" }>Toggle sidebar</p>
      </div>

    </div >
  )
}

export default Nav