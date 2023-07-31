import React from 'react';
import p from './profile.module.css';
import MyPosts from './MyPosts/myPosts';
import ProfileInfo from './profile-info/profile-info';
import MyPostsContainer from './MyPosts/myPostContainer';

const Profile = props => {
    return (
        <div className={p.profile}>
            <ProfileInfo />
            <MyPostsContainer
                dispatch={props.dispatch}
                posts={props.posts.profilePage.posts}
                newWords={props.posts.profilePage.newWords}
            />
        </div>
    );
};
export default Profile;
