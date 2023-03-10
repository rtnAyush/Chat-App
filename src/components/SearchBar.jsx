import React from 'react'
import "./SearchBar.css"

const SearchBar = () => {
    return (
        <div className='search__bar'>
            <div className="search__bar_input">
                <span className="icon material-symbols-outlined">
                    search
                </span>
                <input type="text" placeholder='search by contact or message' />
            </div>
            <div className="search__bar_notification">
                <span className="material-symbols-outlined">
                    notifications
                </span>
            </div>
        </div>
    )
}

export default SearchBar