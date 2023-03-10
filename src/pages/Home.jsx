import React from 'react'
import "./Home.css"
import Nav from '../components/Nav'
import SearchBar from '../components/SearchBar'
import Chat from '../components/Chat'
import ChatContacts from '../components/ChatContacts'
import { Route, Routes } from 'react-router-dom'


const Home = () => {
    return (
        <>
            <div className='home'>
                <div className="left__side">
                    <Nav />
                </div>
                <div className="right__side">

                    <SearchBar />

                    <div className="right__down">

                        <Routes>
                            <Route path='/' element={
                                <>
                                    <h2>Nothing to show</h2>
                                </>
                            } />
                            <Route path='/chat/' element={
                                <>
                                    <ChatContacts />
                                    <Chat />
                                </>
                            } />
                        </Routes>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;