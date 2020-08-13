import React from 'react'
import style from './ProfileHeader.module.sass'
import Avatar from './Avatar/Avatar'

const ProfileHeader = () => {
    return (
        <div
            className={style.header}
            style={{
                background: `url(https://weplay-cdn.azureedge.net/weplay-public/2020-01-07/9e3a1d6e9afd2e56d7b3d296ea925651.251D22-DDA08F-53D0DA.jpeg)`
            }}
        >
            <Avatar />
        </div>
    )
}

export default ProfileHeader
