import React, { useRef, useEffect } from 'react'
import { resize } from '../../../../utils'
import style from './ProfileFriend.module.css'

const ProfileFriends = ({friend}) => {
    const img = useRef()
    useEffect(() => resize(img))

    return (
        <div className={style.image}>
            <img
                ref={img}
                src={friend.img}
            />
        </div>
    )
}

export default ProfileFriends
