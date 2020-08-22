import React, { useRef, useEffect } from 'react'
import style from './ChatHeader.module.css'
import { NavLink } from 'react-router-dom'
import {resize} from '../../../../utils'

const ChatHeader = props => {
    const img = useRef()
    useEffect(() => resize(img))

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
                    <img ref={img} src={props.img} />
                </div>
            </div>
        </div>
    )
}

export default ChatHeader
