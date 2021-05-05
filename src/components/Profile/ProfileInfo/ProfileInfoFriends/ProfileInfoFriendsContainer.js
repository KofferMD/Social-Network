import React from 'react';
import {connect} from "react-redux";
import ProfileInfoFriends from "./ProfileInfoFriends";

let mapStateToProps = (state) => {
    return {
        friends: state.profilePage.friends,
        friendsOnline: state.profilePage.friendsOnline
    }
}

let mapDispatchToProps = (dispatch) => {
    return {}
}

const ProfileInfoFriendsContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileInfoFriends)

export default ProfileInfoFriendsContainer;