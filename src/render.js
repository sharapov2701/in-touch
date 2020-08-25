import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { addPost } from './redux/state'
import { changeNewPostText } from './redux/state'

export const rerenderEntireTree = state => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter basename='/in-touch/'>
                <App state={state} addPost={addPost} changeNewPostText={changeNewPostText} />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    )
}
