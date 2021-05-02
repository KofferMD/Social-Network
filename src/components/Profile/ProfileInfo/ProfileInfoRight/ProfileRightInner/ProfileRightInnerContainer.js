import React from 'react';
import {connect} from "react-redux";
import ProfileRightInner from "./ProfileRightInner";

let mapStateToProps = (state) => {
    return {
        info: state.profilePage
    }
}

let mapDispatchToProps = () => {
    return {}
}

const ProfileRightInnerContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileRightInner);

export default ProfileRightInnerContainer;