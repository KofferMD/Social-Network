import React from 'react';
import s from "./ProfileRightTop.module.css";
import ProfileStatus from "./ProfileStatus/ProfileStatus";


const ProfileRightTop = (props) => {
    return (
        <div className={s.ProfileRightTop}>
            <div className={s.ProfileRightTopNameInner}>
                <div className={s.ProfileInfoName}>
                    {props.profile.fullName}
                </div>
            </div>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </div>
    )
}

export default ProfileRightTop;