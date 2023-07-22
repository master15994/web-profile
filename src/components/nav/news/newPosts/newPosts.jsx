import React from 'react';
import { NavLink } from 'react-router-dom';
import n from './newPost.module.css';

// let newPost = (
//   <NavLink
//     className={navLink => (navLink.isActive ? n.active : n.item)}
//     to="/news/1"
//   >
//     <p>grey </p>
//   </NavLink>
// );

const NewPosts = props => {
  let path = '/news/' + props.id;
  return (
    <div>
      <NavLink className={n.news} to={path}>
        {props.text}
      </NavLink>
    </div>
  );
};

export default NewPosts;
