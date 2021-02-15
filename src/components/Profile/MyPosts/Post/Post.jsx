import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <div className={s.post__wrap}> {props.message}
                <div className={s.like}>❤ {props.likes}</div>
            </div>
        </div>
    );
}

export default Post;