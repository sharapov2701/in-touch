import React from 'react'
import ProfileHeader from './ProfileHeader/ProfileHeader'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import Posts from './Posts/Posts'
import style from './Profile.module.sass'

const Profile = () => {
    return (
        <div className={style.profile}>
            <ProfileHeader />
            <ProfileInfo />
            <Posts />
        </div>
    )
}

export default Profile
