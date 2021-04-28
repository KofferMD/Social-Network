import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
                <ul className={s.headerNav}>
                    <li className={s.headerItemIcon}>
                        <img className={s.headerItemIconImg}
                             src="https://www.iconpacks.net/icons/2/free-opened-book-icon-3169-thumb.png" alt=""/>
                    </li>
                    <li className={s.headerItemName}>
                        <h2 className={s.headerItemNameTitle}>socialNet</h2>
                    </li>
                    <li className={s.headerItemInput}>
                        <input type="text" placeholder="Search" className={s.headerItemInputSearch}/>
                    </li>
                    <li className={s.headerItemProfile}>
                        <a href="#" className={s.headerItemProfileLink}>
                            <div className={s.headerItemProfileName}>Николай</div>
                            <img src="https://i.pinimg.com/originals/02/29/cf/0229cf00478ba83e641dfd23ef0339c5.png"
                                 alt="" className={s.headerItemProfileLinkImg}/>
                            <div>
                                <img src="" alt=""/>
                            </div>
                        </a>
                    </li>
                </ul>
        </header>
    );
}

export default Header;