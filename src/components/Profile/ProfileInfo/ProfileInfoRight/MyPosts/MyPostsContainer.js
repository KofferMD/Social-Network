import React from 'react';
import {addPost, updateNewPostText} from "../../../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         updateNewPostTextActionCreator: (text) => {
//             let action = updateNewPostTextActionCreator(text)
//             dispatch(action);
//         },
//         addPost: () => {
//             dispatch(addPostActionCreator());
//         }
//     }
// }

const MyPostsContainer = connect(mapStateToProps, {updateNewPostText, addPost
})(MyPosts);

export default MyPostsContainer;