import React from 'react'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Profile from './components/Profile/Profile'
import Messages from './components/Messages/Messages'
import { Route } from 'react-router-dom'

function App(props) {
    return (
        <div className='wrapper'>
            <div className='content'>
                <Header />
                <main className='main container'>
                    <Nav />
                    <Route path='/' exact component={Profile} />
                    <Route path='/messages' exact component={Messages} />
                    <Route path='/messages/:id' exact component={Messages} />
                </main>
            </div>
        </div>
    )
}

export default App
