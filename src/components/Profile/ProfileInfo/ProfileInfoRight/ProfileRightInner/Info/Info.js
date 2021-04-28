import React from 'react';
import s from '../../../ProfileInfo.module.css';

const Info = (props) => {
    return (
        <div>
            <div className={s.ProfileRightTitle}>{props.title}</div>
            <div className={s.ProfileInfoDescr}>
                {props.descr}
            </div>
        </div>
    )
}

export default Info;