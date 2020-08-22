import React from 'react'
import ProfileHeader from './ProfileHeader/ProfileHeader'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import Posts from './Posts/Posts'
import ProfileFriends from './ProfileFriends/ProfileFriends'
import style from './Profile.module.css'

const Profile = ({ posts }) => {
    return (
        <div className={style.profile}>
            <ProfileHeader />
            <ProfileInfo />
            <ProfileFriends />
            <Posts posts={posts} />
        </div>
    )
}

export default Profile
