import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likes={p.likes} />);

    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value; 
        props.addPost(text);
        newPostElement.current.value = '';
    }

    return (
        <div className={s.post_wrap}>
            <h3>New posts</h3>
            <div className={s.new__post_wrap}>
                <textarea ref={newPostElement}></textarea>
                <button onClick={addPost}>Add post</button>
            </div>
            {postsElements}
        </div>
    );
}

export default MyPosts;