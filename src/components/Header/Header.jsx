import React from 'react'
import style from './Header.module.sass'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header className={style.header}>
            <div className={`${style.wrapper} container`}>
                <span className={style.burger} />
                <NavLink className={style.logo} to='/'>
                    <h1>inTouch</h1>
                </NavLink>
                <nav>
                    <input
                        className={style.search}
                        type='text'
                        placeholder='поиск...'
                    />
                </nav>
            </div>
        </header>
    )
}

export default Header
