import React from 'react';
import s from "../ProfileInfo.module.css";
import Friend from "./Friend/Friend";


const ProfileInfoFriends = (props) => {
    let friendsElements = props.friends.friends.map(f => <Friend src={f.src} name={f.name}/>);
    let friendsOnlineElements = props.friendsOnline.friendsOnline.map(fo => <Friend src={fo.src} name={fo.name}/>);

    return (
        <div className={s.ProfileInfoFriends}>
            <div className={s.ProfileInfoFriendsInner}>
                <div className={s.ProfileInfoFriendsTitle}>Друзья</div>
                <div className={s.ProfileInfoAllFriends}>
                    {friendsElements}
                </div>
            </div>
            <div className={s.ProfileInfoFriendsInner}>
                <div className={s.ProfileInfoFriendsTitle}>Друзья онлайн</div>
                <div className={s.ProfileInfoAllOnline}>
                    {friendsOnlineElements}
                </div>
            </div>
        </div>
    )
}

export default ProfileInfoFriends;