import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

    return (
        <div className={s.item}>
            <img src="https://i.pinimg.com/originals/02/29/cf/0229cf00478ba83e641dfd23ef0339c5.png" alt="" />
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    );
}

export default Post;