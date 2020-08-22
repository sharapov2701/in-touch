import React, { useEffect, useRef } from 'react'
import style from './Post.module.css'

const Post = props => {
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
        <div className={style.post}>
            <div className={style.image}>
                <img ref={ref} src={props.post.img} />
            </div>
            <div className={style.wrapper}>
                <div className={style.header}>
                    <div className={style.name}>{props.post.name}</div>
                    <div className={style.time}>{props.post.time}</div>
                </div>
                <div className={style.body}>{props.post.body}</div>
            </div>
        </div>
    )
}

export default Post
