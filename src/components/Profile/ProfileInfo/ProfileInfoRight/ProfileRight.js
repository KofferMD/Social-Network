import React from 'react';
import s from "./ProfileRight.module.css";
import ProfileRightInnerContainer from "./ProfileRightInner/ProfileRightInnerContainer";
import ProfileRightListItemsContainer from "./ProfileRightListItems/ProfileRightListItemsContainer";


const ProfileRight = (props) => {
    return (
        <div className={s.ProfileRight}>
            <ProfileRightInnerContainer />
            {/*<ProfileRightListItemsContainer />*/}
        </div>
    )
}

export default ProfileRight;