import React from 'react';
import s from "./ProfileRight.module.css";
import ProfileRightInnerContainer from "./ProfileRightInner/ProfileRightInnerContainer";


const ProfileRight = (props) => {
    return (
        <div className={s.ProfileRight}>
            <ProfileRightInnerContainer profile={props.profile} status={props.getStatus} updateStatus={props.updateStatus}/>
            {/*<ProfileRightListItemsContainer />*/}
        </div>
    )
}

export default ProfileRight;