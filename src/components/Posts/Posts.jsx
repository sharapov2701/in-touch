import React from 'react'
import style from './Posts.module.sass'
import NewPost from '../NewPost/NewPost'
import Post from '../Post/Post'

const Posts = () => {
    return (
        <div className={style.posts}>
            <h3 className={style.title}>Записи</h3>
            <NewPost />
            <Post />
            <Post />
        </div>
    )
}

export default Posts
