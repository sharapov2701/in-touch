import React from 'react'
import ProfileHeader from './ProfileHeader/ProfileHeader'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import Posts from './Posts/Posts'
import style from './Profile.module.sass'

const Profile = ({ posts }) => {
    return (
        <div className={style.profile}>
            <ProfileHeader />
            <ProfileInfo />
            <Posts posts={posts} />
        </div>
    )
}

export default Profile
