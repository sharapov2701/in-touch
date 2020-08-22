import React, { useRef, useEffect } from 'react'
import style from './ChatHeader.module.css'
import { NavLink } from 'react-router-dom'

const ChatHeader = props => {
    const ref = useRef(null)

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
        <div className={style.header}>
            <NavLink className={style.back} to='/messages/' exact>
                &larr;
            </NavLink>
            <div className={style.wrapper}>
                <div className={style.name} href='#'>
                    {props.name}
                </div>
                <div href='#' className={style.img}>
                    <img ref={ref} src={props.img} />
                </div>
            </div>
        </div>
    )
}

export default ChatHeader
