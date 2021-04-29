import React from 'react';
import s from './ProfileInfo.module.css';
import ProfileInfoLeft from "./ProfileInfoLeft/ProfileInfoLeft";
import ProfileInfoFriends from "./ProfileInfoFriends/ProfileInfoFriends";
import ProfileRight from "./ProfileInfoRight/ProfileRight";


const ProfileInfo = (props) => {
    return (
        <div className={s.ProfileInfoWrapper}>
            <div className={s.ProfileInfoInner}>
                <ProfileInfoLeft />
                <ProfileInfoFriends friends={props.profilePage.friends} friendsOnline={props.profilePage.friendsOnline}/>
                <ProfileRight
                    info={props.profilePage.info}
                    additional={props.profilePage.additional}
                    posts={props.profilePage.posts}
                    newPostText={props.profilePage.newPostText}
                    dispatch={props.dispatch}
                />
            </div>
        </div>
    );
}

export default ProfileInfo;