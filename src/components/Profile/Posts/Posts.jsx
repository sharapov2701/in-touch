import React from 'react'
import style from './Posts.module.css'
import NewPost from './NewPost/NewPost'
import Post from './Post/Post'

const Posts = ({ posts }) => {
    const postsElements = posts.map(post => <Post post={post} />)

    return (
        <div className={style.posts}>
            <h3 className={style.title}>Записи</h3>
            <NewPost />
            {postsElements}
        </div>
    )
}

export default Posts
