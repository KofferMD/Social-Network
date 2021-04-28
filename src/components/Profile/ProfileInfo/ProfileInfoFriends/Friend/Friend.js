import React from 'react';
import s from '../../ProfileInfo.module.css';

const Friend = (props) => {
    return (
        <a className={s.ProfileInfoFriend}>
            <img className={s.ProfileInfoFriendsIcon} src={props.src} alt=""/>
            <div>{props.name}</div>
        </a>
    )
}


export default Friend;