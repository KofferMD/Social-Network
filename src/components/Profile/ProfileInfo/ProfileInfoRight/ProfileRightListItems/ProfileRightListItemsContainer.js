import React from 'react';
import {connect} from "react-redux";
import ProfileRightListItems from "./ProfileRightListItems";

let mapStateToProps = (state) => {
    return {
        additional: state.profilePage.additional
    }
}

let mapDispatchToProps = (dispatch) => {
    return {}
}

const ProfileRightListItemsContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileRightListItems);

export default ProfileRightListItemsContainer;