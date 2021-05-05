import React from 'react';
import s from './ProfileInfo.module.css';
import ProfileInfoLeft from "./ProfileInfoLeft/ProfileInfoLeft";
import ProfileRight from "./ProfileInfoRight/ProfileRight";
import ProfileInfoFriendsContainer from "./ProfileInfoFriends/ProfileInfoFriendsContainer";
import MyPostsContainer from "./ProfileInfoRight/MyPosts/MyPostsContainer";


const ProfileInfo = (props) => {
    return (
        <div className={s.ProfileInfoWrapper}>
            <div className={s.ProfileInfoInner}>
                <ProfileInfoLeft/>
                <ProfileRight />
                <ProfileInfoFriendsContainer/>
                <MyPostsContainer />
            </div>
        </div>
    );
}

export default ProfileInfo;