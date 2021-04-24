import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My  posts
            <div>
                <textarea></textarea>
                <button>Опубликовать</button>
            </div>
            <div className={s.posts}>
                <Post message="Hey, body" likesCount="12" />
                <Post message="It's my first post!" likesCount="42" />
                <Post message="Good for you!" likesCount="23" />
            </div>
        </div>
    );
}

export default MyPosts;