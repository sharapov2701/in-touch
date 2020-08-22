import React from 'react'
import ProfileFriend from './ProfileFriend/ProfileFriend'
import style from './ProfileFriends.module.css'

const ProfileFriends = ({ friends }) => {
    const friendsElements = friends.map(friend => (
        <ProfileFriend friend={friend} key={friend.id} />
    ))

    return (
        <React.Fragment>
            <h3 className={style.title}>Друзья</h3>
            <div className={style.friends}>{friendsElements}</div>
        </React.Fragment>
    )
}

export default ProfileFriends
