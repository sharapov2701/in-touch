import React from 'react'
import style from './Post.module.sass'

const Post = () => {
    return (
        <div className={style.post}>
            <div className={style.image}>
                <img src='https://dota2.ru/img/heroes/invoker/portrait.jpg' />
            </div>
            <div className={style.body}>Hello world!</div>
        </div>
    )
}

export default Post
