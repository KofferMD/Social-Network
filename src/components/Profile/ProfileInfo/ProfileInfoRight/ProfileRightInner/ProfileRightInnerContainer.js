import React from 'react';
import {connect} from "react-redux";
import ProfileRightInner from "./ProfileRightInner";
import {getStatus, updateStatus} from "../../../../../redux/profileReducer";

let mapStateToProps = (state) => {
    return {
        info: state.profilePage.info,
        profile: state.profilePage.profile
    }
}


const ProfileRightInnerContainer = connect(mapStateToProps, {getStatus, updateStatus})(ProfileRightInner);

export default ProfileRightInnerContainer;