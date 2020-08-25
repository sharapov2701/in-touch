import React from 'react'
import ProfileHeader from './ProfileHeader/ProfileHeader'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import Posts from './Posts/Posts'
import ProfileFriends from './ProfileFriends/ProfileFriends'
import style from './Profile.module.css'

const Profile = ({ profilePage, addPost, changeNewPostText }) => {
    const { posts, friends, newPostText } = profilePage

    return (
        <div className={style.profile}>
            <ProfileHeader />
            <ProfileInfo />
            <ProfileFriends friends={friends} />
            <Posts
                posts={posts}
                addPost={addPost}
                newPostText={newPostText}
                changeNewPostText={changeNewPostText}
            />
        </div>
    )
}

export default Profile
