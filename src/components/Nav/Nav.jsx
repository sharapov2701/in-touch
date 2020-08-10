import React from 'react'
import style from './Nav.module.sass'

const Nav = () => {
    return (
        <nav className={style.nav}>
            <div className={style.item}>Профиль</div>
            <div className={style.item}>Сообщения</div>
        </nav>
    )
}

export default Nav
