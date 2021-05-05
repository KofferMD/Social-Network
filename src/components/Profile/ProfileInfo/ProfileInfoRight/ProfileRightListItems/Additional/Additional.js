import React from 'react';
import s from './Additional.module.css';

const Additional = (props) => {
    return (
        <li className={s.ProfileRightItem}>
            <a href="#" className={s.ProfileRightItemLink}>
                <div className={s.ProfileRightItemNumber}>{props.number}</div>
                <div className={s.ProfileRightItemDescr}>{props.descr}</div>
            </a>
        </li>
    )
}

export default Additional;
