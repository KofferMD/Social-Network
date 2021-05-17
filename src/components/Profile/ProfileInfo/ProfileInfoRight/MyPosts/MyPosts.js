import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../../utils/validators/validators";
import {Textarea} from "../../../../FormsControls/FormsControls";


const maxLength = maxLengthCreator(10);

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.MyPosts}>
            <div>
                <AddPostFormRedux onSubmit={onAddPost}/>
            </div>
            <div className={s.MyPostInner}>
                {postsElements}
            </div>
        </div>
    );
}

const addPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.MyPost}>
            <div>
                <Field placeholder="Что у вас нового?" component={Textarea} name='newPostText'
                       className={s.MyPostTextArea} validate={[required, maxLength]} />
            </div>
            <div>
                <button className={s.MyPostBtn}>Опубликовать</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm({form: 'ProfileAddPostForm'})(addPostForm)

export default MyPosts;