import React from 'react'
import ReactDOM from 'react-dom'
import './index.sass'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter } from 'react-router-dom'

const posts = [
    {
        id: 1,
        body: 'Ты не сравнишься со мной, ибо я несравненен',
        img:
            'https://gamepedia.cursecdn.com/dota2_gamepedia/0/00/Invoker_icon.png?version=fb7516f0b780535fa8acfa9e8cb99266',
        name: 'Карл И.',
        time: '4:20'
    },
    {
        id: 2,
        body: 'Я - маяк мудрости в океане невежества',
        img:
            'https://gamepedia.cursecdn.com/dota2_gamepedia/0/00/Invoker_icon.png?version=fb7516f0b780535fa8acfa9e8cb99266',
        name: 'Карл И.',
        time: '4:19'
    }
]

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter basename='/in-touch/'>
            <App posts={posts} />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
