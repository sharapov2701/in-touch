import React, { useEffect, useRef } from 'react'
import { resize } from '../../../../utils'
import style from './Post.module.css'

const Post = props => {
    const img = useRef()
    useEffect(() => resize(img))

    return (
        <div className={style.post}>
            <div className={style.image}>
                <img ref={img} src={props.post.img} />
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
