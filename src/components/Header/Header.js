import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img className={s.img} src="https://www.iconpacks.net/icons/2/free-opened-book-icon-3169-thumb.png" alt="" />
            <h2 className={s.title}>Знания сила!</h2>
        </header>
    );
}

export default Header;