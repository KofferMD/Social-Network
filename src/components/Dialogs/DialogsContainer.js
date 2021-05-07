import React from 'react';
import {sendMessage, updateNewMessageText} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         updateNewMessageText: (message) => {
//             dispatch(updateNewMessageTextCreator(message));
//         },
//         sendMessage: () => {
//             dispatch(addMessageActionCreator());
//         }
//     }
// }

const DialogsContainer = connect(mapStateToProps, {updateNewMessageText, sendMessage})(Dialogs);

export default DialogsContainer;