import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.headerContainer}>
                <div className={s.headerNav}>
                    <div className={s.headerItemIcon}>
                        <img className={s.headerItemIconImg}
                             src="https://www.iconpacks.net/icons/2/free-opened-book-icon-3169-thumb.png" alt=""/>
                    </div>
                    { props.isAuth ? props.login
                        : <NavLink to='/login' className={s.headerItemProfileLink}>Войти</NavLink>}
                </div>
            </div>
        </header>
    );
}

export default Header;