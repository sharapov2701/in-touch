import React, { useEffect, useRef } from 'react'
import { resize } from '../../../../utils'
import style from './Message.module.css'

const Message = props => {
    const img = useRef()
    useEffect(() => resize(img))

    return (
        <div className={style.message}>
            <div className={style.img}>
                <a href='#'>
                    <img
                        ref={img}
                        src={props.message.img}
                        alt={props.message.name}
                    />
                </a>
            </div>
            <div>
                <div className={style.header}>
                    <a href='#' className={style.name}>
                        {props.message.name}
                    </a>
                    <div className={style.time}>{props.message.time}</div>
                </div>
                <div>{props.message.body}</div>
            </div>
        </div>
    )
}

export default Message
