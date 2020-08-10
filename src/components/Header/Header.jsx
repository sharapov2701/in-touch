import React from 'react'
import style from './Header.module.sass'

const Header = () => {
    return (
        <header className={style.header}>
            <div className={`${style.wrapper} container`}>
                <span className={style.burger} />
                <a className={style.logo} href='#'>
                    <h1>inTouch</h1>
                </a>
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
