import React from 'react'
import style from './Posts.module.css'
import NewPost from './NewPost/NewPost'
import Post from './Post/Post'

const Posts = ({ posts, newPostText, dispatch }) => {
    const postsElements = posts.map(post => <Post post={post} key={post.id} />)

    return (
        <React.Fragment>
            <h3 className={style.title}>Записи</h3>
            <NewPost
                newPostText={newPostText}
                dispatch={dispatch}
            />
            <div className={style.posts}>{postsElements}</div>
        </React.Fragment>
    )
}

export default Posts
