import React from 'react';
import s from "../ProfileInfo.module.css";
import ProfileRightInner from "./ProfileRightInner/ProfileRightInner";
import ProfileRightListItems from "./ProfileRightListItems/ProfileRightListItems";
import MyPosts from "./MyPosts/MyPosts";


const ProfileRight = (props) => {
    return (
        <div className={s.ProfileRight}>
            <ProfileRightInner info={props.info}/>
            <ProfileRightListItems additional={props.additional}/>
            <MyPosts
                posts={props.posts}
                newPostText={props.newPostText}
                dispatch={props.dispatch}
            />
        </div>
    )
}

export default ProfileRight;