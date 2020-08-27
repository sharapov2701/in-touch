import React from 'react'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Profile from './components/Profile/Profile'
import Messages from './components/Messages/Messages'
import { Route } from 'react-router-dom'

function App({ state, dispatch }) {
    const { profilePage, messagesPage } = state

    return (
        <div className='wrapper'>
            <div className='content'>
                <Header />
                <main className='main container'>
                    <Nav />
                    <Route
                        path='/'
                        exact
                        render={() => (
                            <Profile
                                profilePage={profilePage}
                                dispatch={dispatch}
                            />
                        )}
                    />
                    <Route
                        path='/messages'
                        exact
                        render={() => (
                            <Messages
                                messages={messagesPage.messages}
                                dialogs={messagesPage.dialogs}
                            />
                        )}
                    />
                    <Route
                        path='/messages/:id'
                        exact
                        render={() => (
                            <Messages
                                messages={messagesPage.messages}
                                dialogs={messagesPage.dialogs}
                            />
                        )}
                    />
                </main>
            </div>
        </div>
    )
}

export default App
