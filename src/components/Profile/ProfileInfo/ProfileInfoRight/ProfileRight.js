import React from 'react';
import s from "../ProfileInfo.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileRightInnerContainer from "./ProfileRightInner/ProfileRightInnerContainer";
import ProfileRightListItemsContainer from "./ProfileRightListItems/ProfileRightListItemsContainer";


const ProfileRight = (props) => {
    // let state = props.store.getState().profilePage;info={state.info}additional={state.additional}

    return (
        <div className={s.ProfileRight}>
            <ProfileRightInnerContainer />
            <ProfileRightListItemsContainer />
            <MyPostsContainer />
        </div>
    )
}

export default ProfileRight;