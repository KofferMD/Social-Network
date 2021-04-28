import React from 'react';
import s from "../../../ProfileInfo.module.css";

const ProfileRightTop =() => {
    return (
        <div className={s.ProfileRightTop}>
            <div className={s.ProfileInfoName}>
                Николай Винокуров
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