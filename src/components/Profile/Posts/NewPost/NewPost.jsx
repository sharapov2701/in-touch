import React from 'react'
import style from './NewPost.module.css'
import { useRef } from 'react'

const NewPost = ({ addPost, newPostText, changeNewPostText }) => {
    const post = useRef()

    return (
        <div className={style.post}>
            <input
                className={style.body}
                type='text-area'
                placeholder='Что нового?'
                ref={post}
                value={newPostText}
                onChange={event => changeNewPostText(event.target.value)}
            />
            <button className={style.send} onClick={addPost}>
                Опубликовать
            </button>
        </div>
    )
}

export default NewPost
