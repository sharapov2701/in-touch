import React from 'react'
import style from './Dialogs.module.css'
import Dialog from './Dialog/Dialog'
import { withRouter } from 'react-router-dom'

const Dialogs = props => {
    const dialogsElements = props.dialogs.map(dialog => (
        <Dialog dialog={dialog} />
    ))

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
