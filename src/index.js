import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { addPost } from './redux/state'
import { changeNewPostText } from './redux/state'
import * as serviceWorker from './serviceWorker'
import state from './redux/state'
import { subscribe } from './redux/state'

const rerenderEntireTree = state => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter basename='/in-touch/'>
                <App
                    state={state}
                    addPost={addPost}
                    changeNewPostText={changeNewPostText}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    )
}

rerenderEntireTree(state)
subscribe(rerenderEntireTree)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
