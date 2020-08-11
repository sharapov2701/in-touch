import React from 'react'
import style from './Profile.module.sass'
import Posts from './Posts/Posts'

const Profile = () => {
    return (
        <div className={style.profile}>
            <div className={style.header}>
                <div className={style.photo}>
                    <img src='https://dota2.ru/img/heroes/invoker/portrait.jpg' />
                </div>
            </div>
            <h2 className={style.name}>Карл И.</h2>
            <div className={style.about}>
                <div>
                    <span>Дата рождения:</span>
                    <span className={style.value}>01.01.1970</span>
                </div>
                <div>
                    <span>Город:</span>
                    <span className={style.value}>Казань</span>
                </div>
            </div>
            <Posts />
        </div>
    )
}

export default Profile
