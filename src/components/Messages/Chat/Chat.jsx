import React from 'react'
import { withRouter } from 'react-router-dom'
import ChatHeader from './ChatHeader/ChatHeader'
import Message from './Message/Message'
import style from './Chat.module.sass'

const Chat = props => {
    const messages = [
        {
            id: 2,
            name: 'Антимаг',
            img: 'https://prodota.ru/uploads/news/imperavi/1594455672309.png',
            time: '4:19',
            body: 'Я сменил(а) пол :D'
        },
        {
            id: 1,
            name: 'Карл И.',
            img:
                'https://gamepedia.cursecdn.com/dota2_gamepedia/0/00/Invoker_icon.png?version=fb7516f0b780535fa8acfa9e8cb99266',
            body: 'Ну и дура(к)',
            time: '4:20'
        }
    ]

    const messagesElements = messages.map(message => (
        <Message message={message} />
    ))

    return (
        <div
            className={`${style.chat} ${
                props.match.params.id ? '' : style.hide
            }`}
        >
            <ChatHeader
                name='Антимаг'
                img='https://prodota.ru/uploads/news/imperavi/1594455672309.png'
            />
            {messagesElements}
        </div>
    )
}

export default withRouter(Chat)
