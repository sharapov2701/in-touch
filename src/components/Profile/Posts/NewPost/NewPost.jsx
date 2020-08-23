import React from 'react'
import style from './NewPost.module.css'
import { useRef } from 'react'

const NewPost = ({ addPost }) => {
    const post = useRef()
    const add = () => {
        addPost(post.current.value)
        post.current.value = ''
    }

    return (
        <div className={style.post}>
            <input
                className={style.body}
                type='text-area'
                placeholder='Что нового?'
                ref={post}
            />
            <button className={style.send} onClick={add}>
                Опубликовать
            </button>
        </div>
    )
}

export default NewPost
