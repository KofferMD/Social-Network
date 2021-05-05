import React from 'react';
import s from './Info.module.css';

const Info = (props) => {
    return (
        <div className={s.ProfileRightInfoItem}>
            <div className={s.ProfileRightTitle}>{props.title}</div>
            <div className={s.ProfileInfoDescr}>{props.descr}</div>
        </div>
    )
}

export default Info;