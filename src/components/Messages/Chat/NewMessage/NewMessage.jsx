import React from 'react'
import style from './NewMessage.module.css'

const NewPost = () => {
    return (
        <div className={style.message}>
            <input
                className={style.body}
                type='text-area'
                placeholder='Сообщение...'
            />
            <button className={style.send}>Отправить</button>
        </div>
    )
}

export default NewPost
