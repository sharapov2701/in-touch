import React from 'react'
import style from './Dialogs.module.sass'
import Dialog from './Dialog/Dialog'
import { withRouter } from 'react-router-dom'

const Dialogs = ({ dialogs }) => {
    const dialogsElements = dialogs.map(dialog => <Dialog dialog={dialog} />)

    return (
        <div
            className={`${style.dialogs} ${
                props.match.params.id ? style.hide : ''
            }`}
        >
            {dialogsElements}
        </div>
    )
}

export default withRouter(Dialogs)
