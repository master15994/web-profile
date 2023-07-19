import React from 'react';
import p from './profile.module.css';
import MyPosts from './MyPosts/myPosts';
import ProfileInfo from './profile-info/profile-info';

const Profile = props => {
  return (
    <div className={p.profile}>
      <ProfileInfo />
      <MyPosts posts={props.postsPage.posts} />
    </div>
  );
};
export default Profile;
