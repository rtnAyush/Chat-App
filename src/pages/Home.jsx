import React from 'react'
import "./Home.css"
import Nav from '../components/Nav'
import SearchBar from '../components/SearchBar'
import Chat from '../components/chat/Chat'
import ChatContacts from '../components/chat/ChatContacts'
import { Route, Routes } from 'react-router-dom'
import Contacts from '../components/contact/Contacts'
import Login from "./Login"
import Register from "./Register"
import DefaultPage from '../components/DefaultPage'
import { useStateValue } from '../context/StateProvider'


const Home = () => {

    const [{ user }] = useStateValue();

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
                                user ? <h1>Working on Page</h1> : <DefaultPage />

                            } />

                            <Route path="/register" element={
                                <Register />
                            } />

                            <Route path="/login" element={
                                <Login />
                            } />

                            <Route path='/chat' element={
                                user ? <>
                                    <ChatContacts />
                                    <Chat />
                                </> : <DefaultPage />
                            } />
                            <Route path='/contact' element={
                                user ? <Contacts /> : <DefaultPage />
                            } />
                        </Routes>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;