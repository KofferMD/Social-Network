import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const  Profile = (props) => {

    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.getStatus} updateStatus={props.updateStatus}/>
        </div>
    );
}

export default Profile;