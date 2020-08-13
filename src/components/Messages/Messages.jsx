import React from 'react'
import style from './Messages.module.sass'
import Dialogs from './Dialogs/Dialogs'
import Chat from './Chat/Chat'

const Messages = props => {
    return (
        <div className={style.messages}>
            <Dialogs />
            <Chat />
        </div>
    )
}

export default Messages
