import React from 'react'
import style from './Messages.module.css'
import Dialogs from './Dialogs/Dialogs'
import Chat from './Chat/Chat'

const Messages = ({ dialogs, messages }) => {
    return (
        <div className={style.messages}>
            <Dialogs dialogs={dialogs} />
            <Chat messages={messages} />
        </div>
    )
}

export default Messages
