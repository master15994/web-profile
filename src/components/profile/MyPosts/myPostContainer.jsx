import React from 'react';
import m from './myPosts.module.css';
import Post from './post/post';
import { addPostActionCreator, updatePostActionCreator } from '../../../redux/profile-reducer';
// import MyPosts from './myPosts';

const MyPostsContainer = props => {
    let postElements = props.posts.map(item => {
        return <Post text={item.text} like={item.likes} />;
    });

    let updateInput = event => {
        props.dispatch(updatePostActionCreator(event.target.value));
        // let action = { type: 'UPDATE-INPUT-POST', newPost: text };
        // props.dispatch(action);
        // event.target.value = '';
    };

    let addPost = () => {
        // props.dispatch({ type: 'ADD-POST' });
        props.dispatch(addPostActionCreator());
    };

    // return <MyPosts updateInput={updateInput} addPost={addPost} />;
    return (
        <div>
            <h2>My Post</h2>
            <div>
                <textarea onChange={updateInput} value={props.newWords} placeholder="Write here" />
                <br />
                <button className={m.button} onClick={addPost}>
                    Add Post
                </button>
            </div>
            {postElements}
        </div>
    );
};

export default MyPostsContainer;
