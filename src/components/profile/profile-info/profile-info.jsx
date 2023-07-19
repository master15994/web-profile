import React from 'react';
import p from './profile-info.module.css';

const ProfileInfo = props => {
  return (
    <div>
      <div>
        <img
          className={p.img}
          alt="pic"
          src="https://hoteledmarsantamarta.com/wp-content/uploads/featured-image-index-1200x500.png"
        />
      </div>
      <div className={p.margin}>
        <img
          className={p.icon}
          alt="icon"
          src="https://cdn-icons-png.flaticon.com/512/145/145859.png"
        />
      </div>
    </div>
  );
};

export default ProfileInfo;
