import React from 'react'
import "./Home.css"
import Nav from '../components/Nav'
import SearchBar from '../components/SearchBar'
import Chat from '../components/chat/Chat'
import ChatContacts from '../components/chat/ChatContacts'
import { Route, Routes } from 'react-router-dom'
import Contacts from '../components/contact/Contacts'


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
                            <Route path='*' element={
                                <>
                                    <h2>Page under process</h2>
                                </>
                            } />
                            <Route path='/chat' element={
                                <>
                                    <ChatContacts />
                                    <Chat />
                                </>
                            } />
                            <Route path='/contact' element={
                                <>
                                    <Contacts />
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