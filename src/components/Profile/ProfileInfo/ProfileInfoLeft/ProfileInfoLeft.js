import React from 'react';
import s from './ProfileInfoLeft.module.css';
import userIcon from "./../../../../assets/images/userIcon.png";

const ProfileInfoLeft = (props) => {
    return (
        <div className={s.ProfileInfoLeft}>
            <div className={s.ProfileInfoAva}>
                <img className={s.ProfileInfoAvaImg}
                    src={props.profile.photos.large != null ? props.profile.photos.large : userIcon}
                     alt=""/>
                <a className={s.ProfileInfoChange}>Обновить фотографию</a>
            </div>
            <div className={s.ProfileInfoSettings}>
                <a className={s.ProfileInfoSettingsLink} href="">Редактировать</a>
            </div>
        </div>
    )
}

export default ProfileInfoLeft;