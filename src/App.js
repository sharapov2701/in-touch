import React from 'react'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Profile from './components/Profile/Profile'

function App() {
    return (
        <React.Fragment>
            <Header />
            <main className='main container'>
                <Nav />
                <Profile />
            </main>
        </React.Fragment>
    )
}

export default App
