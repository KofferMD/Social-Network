import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
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
                <button className={s.MyPostBtn} onClick={onAddPost}>Опубликовать</button>
            </div>
            <div className={s.MyPostInner}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;