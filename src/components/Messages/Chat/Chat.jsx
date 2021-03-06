import React from 'react'
import { withRouter } from 'react-router-dom'
import ChatHeader from './ChatHeader/ChatHeader'
import Message from './Message/Message'
import NewMessage from './NewMessage/NewMessage'
import style from './Chat.module.css'

const Chat = props => {
    const messagesElements = props.messages.map(message => (
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
            <div className={style.messages}>{messagesElements}</div>
            <NewMessage />
        </div>
    )
}

export default withRouter(Chat)
