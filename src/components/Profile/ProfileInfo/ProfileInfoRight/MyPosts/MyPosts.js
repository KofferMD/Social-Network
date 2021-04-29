import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../../redux/profileReducer";

const MyPosts = (props) => {
    debugger
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <div className={s.MyPosts}>
            <div className={s.MyPost}>
                <textarea
                    placeholder="Что у вас нового?"
                    className={s.MyPostTextArea}
                    onChange={onPostChange}
                    ref={newPostElement}
                    value={props.newPostText}
                />
                <button className={s.MyPostBtn} onClick={addPost}>Опубликовать</button>
            </div>
            <div className={s.MyPostInner}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;