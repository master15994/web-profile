import React from 'react';
import h from './header.module.css';

const Header = () => {
  return (
    <div className={h.header}>
      <header>
        <img
          className={h.img}
          src="https://www.logolynx.com/images/logolynx/3a/3a405b9b2166f2ca3ef2d7722b35b766.png"
        />
      </header>
    </div>
  );
};

export default Header;
