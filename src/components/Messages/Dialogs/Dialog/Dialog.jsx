import React, { useEffect, useRef } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { resize } from '../../../../utils'
import style from './Dialog.module.css'

const Dialog = props => {
    const img = useRef()
    useEffect(() => resize(img), [])

    return (
        <NavLink
            to={`/messages/${props.dialog.id}/`}
            className={style.dialog}
            activeClassName={style.active}
            exact
        >
            <div className={style.img}>
                <img ref={img} src={props.dialog.img} alt={props.dialog.name} />
            </div>
            <div className={style.text}>
                <div className={style.name}>{props.dialog.name}</div>
                <div className={style.body}>{props.dialog.body}</div>
            </div>
        </NavLink>
    )
}

export default withRouter(Dialog)
