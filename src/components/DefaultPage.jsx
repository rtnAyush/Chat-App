import React from 'react'
import "./Defalt.css"
import { Link } from 'react-router-dom'

const DefaultPage = () => {
    return (
        <div className='default__page'>
            <Link to='/login' >
                <h1>Login / Register to see content</h1>
            </Link>
        </div>
    )
}

export default DefaultPage