import React from 'react'
import style from './NewPost.module.css'
import { useRef } from 'react'
import { CHANGE_NEW_POST_TEXT, ADD_POST } from '../../../../redux/types'

const NewPost = ({ newPostText, dispatch }) => {
    const post = useRef()

    return (
        <div className={style.post}>
            <input
                className={style.body}
                type='text-area'
                placeholder='Что нового?'
                ref={post}
                value={newPostText}
                onChange={event =>
                    dispatch({
                        type: CHANGE_NEW_POST_TEXT,
                        payload: event.target.value
                    })
                }
            />
            <button
                className={style.send}
                onClick={() => dispatch({ type: ADD_POST })}
            >
                Опубликовать
            </button>
        </div>
    )
}

export default NewPost
