import React from 'react';
import p from './post.module.css';

const Post = props => {
  return (
    <div>
      <img
        className={p.icon}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Xn54j6fcVfa9DDRVLSOWIgqbk_j4QjOAUN44vjgIa9UhxA5uX8aMI2hlc9NbqPBiSGk&usqp=CAU"
        alt="icon"
      />
      {props.text}
      <div>
        <span> Likes: {props.like}</span>
      </div>
    </div>
  );
};

export default Post;
