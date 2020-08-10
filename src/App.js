import React from 'react';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <header className='header'>
        <div className="header__wrapper container">
          <a className='header__logo' href="#">
            <h1>inTouch</h1>
          </a>
          <nav className='header__top-menu top-menu'>
            <input className='top-menu__search' type='text' placeholder='поиск...' />
          </nav>
        </div>
      </header>
      <main className='main container'>
        <nav className='main__left-menu left-menu'>
          <div className='left-menu__item'>
            Профиль
          </div>
          <div className='left-menu__item'>
            Сообщения
          </div>
        </nav>
        <div className='main__profile profile'>
          <div className='profile__header'>
            <div className='profile__photo'>
              <img src='https://dota2.ru/img/heroes/invoker/portrait.jpg' />
            </div>
          </div>
          <h2 className='profile__name'>
            Карл И.
          </h2>
          <div className='profile__about about'>
            <div className='about__item'>
              <span className='about__title'>
                Дата рождения:
              </span>
              <span className='about__value'>
                01.01.1970
              </span>
            </div>
            <div className='about__item'>
              <span className='about__title'>
                Город:
              </span>
              <span className='about__value'>
                Казань
              </span>
            </div>
          </div>
          <div className='profile__posts posts'>
            <h3 className='posts__title'>
              Записи
            </h3>
            <div className='posts__new-post new-post'>
              <input className='new-post__text-area' type='text-area' placeholder='Что нового?' />
              <button className='new-post__send'>Опубликовать</button>
            </div>
            <div className='posts__post post'>
              <div className='post__image'>
                <img src='https://dota2.ru/img/heroes/invoker/portrait.jpg' />
              </div>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

export default App;
