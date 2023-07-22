import React from 'react';
import m from './myPosts.module.css';
import Post from './post/post';
import {
  addPostActionCreator,
  updatePostActionCreator,
} from '../../../redux/profile-reducer';

const MyPosts = props => {
  let postElements = props.posts.map(item => {
    return <Post text={item.text} like={item.likes} />;
  });

  let updateInput = event => {
    let body = event.target.value;
    props.dispatch(updatePostActionCreator(body));
    // let action = { type: 'UPDATE-INPUT-POST', newPost: text };
    // props.dispatch(action);
  };

  let addPost = () => {
    // props.dispatch({ type: 'ADD-POST' });
    props.dispatch(addPostActionCreator());
  };

  return (
    <div className={m.wrapper}>
      <h2>My Post</h2>
      <div>
        <textarea onChange={updateInput} placeholder="Write here" />
        <br />
        <button className={m.button} onClick={addPost}>
          Add Post
        </button>
      </div>
      {postElements}
    </div>
  );
};

export default MyPosts;
