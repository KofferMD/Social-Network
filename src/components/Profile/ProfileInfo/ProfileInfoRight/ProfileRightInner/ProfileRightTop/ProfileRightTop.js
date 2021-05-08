import React from 'react';
import s from "./ProfileRightTop.module.css";

const ProfileRightTop = (props) => {
    return (
        <div className={s.ProfileRightTop}>
            <div className={s.ProfileInfoName}>
                {props.profile.fullName}
            </div>
            <div className={s.ProfileRightPostDate}>
                <time className={s.ProfileRightPublished} dateTime="25-4-2021">
                    Заходил два часа назад
                </time>
            </div>
        </div>
    )
}

export default ProfileRightTop;