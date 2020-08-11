import React from 'react'
import style from './NewPost.module.sass'

const NewPost = () => {
    return (
        <div className={style.post}>
            <input
                className={style.body}
                type='text-area'
                placeholder='Что нового?'
            />
            <button className={style.send}>Опубликовать</button>
        </div>
    )
}

export default NewPost
