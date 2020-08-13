import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Nav.module.sass'

const Nav = () => {
    return (
        <nav className={style.nav}>
            <NavLink
                exact
                activeClassName={style.active}
                className={style.item}
                to='/'
            >
                Профиль
            </NavLink>
            <NavLink
                activeClassName={style.active}
                className={style.item}
                to='/messages'
            >
                Сообщения
            </NavLink>
        </nav>
    )
}

export default Nav
