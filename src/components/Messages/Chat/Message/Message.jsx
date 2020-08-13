import React, { useEffect, useRef } from 'react'
import style from './Message.module.sass'

const Message = props => {
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
        <div className={style.message}>
            <div className={style.img}>
                <a href='#'>
                    <img ref={ref} src={props.img} alt={props.name} />
                </a>
            </div>
            <div>
                <div className={style.header}>
                    <a href='#' className={style.name}>
                        {props.name}
                    </a>
                    <div className={style.time}>{props.time}</div>
                </div>
                <div>{props.body}</div>
            </div>
        </div>
    )
}

export default Message
