import React from 'react';
import m from './myPosts.module.css';
import Post from './post/post';
import { getActiveElement } from '@testing-library/user-event/dist/utils';

const MyPosts = props => {
  let postElements = props.posts.map(item => {
    return <Post text={item.text} like={item.likes} />;
  });

  let addButton = () => {
    let text = document.getElementById('new-text').value;
    alert(text);
  };

  return (
    <div className={m.wrapper}>
      <h2>My Post</h2>
      <div>
        <textarea id="new-post" placeholder="Write here"></textarea>
        <br />
        <button onClick={addButton}>Add Post</button>
      </div>
      {postElements}
    </div>
  );
};

export default MyPosts;
