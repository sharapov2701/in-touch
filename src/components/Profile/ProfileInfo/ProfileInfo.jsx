import React from 'react'
import style from './ProfileInfo.module.sass'

const ProfileInfo = () => {
    return (
        <div className={style.about}>
            <h2 className={style.name}>Карл И.</h2>
            <div>
                <span>Дата рождения:</span>
                <span className={style.value}>01.01.1970</span>
            </div>
            <div>
                <span>Город:</span>
                <span className={style.value}>Казань</span>
            </div>
        </div>
    )
}

export default ProfileInfo
