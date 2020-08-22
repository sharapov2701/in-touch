import React, { useEffect, useRef } from 'react'
import style from './Dialog.module.css'
import { NavLink, withRouter } from 'react-router-dom'

const Dialog = props => {
    const ref = useRef()

    useEffect(() => {
        const img = ref.current
        if (img) {
            if (img.offsetHeight > img.offsetWidth) {
                img.style.width = '100%'
            } else {
                img.style.height = '100%'
            }
        }
    })
    return (
        <NavLink
            to={`/messages/${props.dialog.id}/`}
            className={style.dialog}
            activeClassName={style.active}
            exact
        >
            <div className={style.img}>
                <img ref={ref} src={props.dialog.img} alt={props.dialog.name} />
            </div>
            <div className={style.text}>
                <div className={style.name}>{props.dialog.name}</div>
                <div className={style.body}>{props.dialog.body}</div>
            </div>
        </NavLink>
    )
}

export default withRouter(Dialog)
