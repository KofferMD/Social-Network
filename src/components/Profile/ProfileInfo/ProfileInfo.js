import React from 'react';
import s from './ProfileInfo.module.css';
import ProfileInfoLeft from "./ProfileInfoLeft/ProfileInfoLeft";
import ProfileRight from "./ProfileInfoRight/ProfileRight";
import ProfileInfoFriendsContainer from "./ProfileInfoFriends/ProfileInfoFriendsContainer";
import MyPostsContainer from "./ProfileInfoRight/MyPosts/MyPostsContainer";
import Preloader from "../../common/preloader/Preloader";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={s.ProfileInfoWrapper}>
            <div className={s.ProfileInfoInner}>
                <ProfileInfoLeft profile={props.profile}/>
                <ProfileRight profile={props.profile}/>
                <ProfileInfoFriendsContainer/>
                <MyPostsContainer />
            </div>
        </div>
    );
}

export default ProfileInfo;