import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo
                profilePage={props.profilePage}
                dispatch={props.dispatch}
            />
        </div>
    );
}

export default Profile;