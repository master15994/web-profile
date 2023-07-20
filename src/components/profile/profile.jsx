import React from 'react';
import p from './profile.module.css';
import MyPosts from './MyPosts/myPosts';
import ProfileInfo from './profile-info/profile-info';

const Profile = props => {
  return (
    <div className={p.profile}>
      <ProfileInfo />
      <MyPosts
        dispatch={props.dispatch}
        posts={props.posts.profilePage.posts}
        newWords={props.posts.profilePage.newWords}
      />
    </div>
  );
};
export default Profile;
