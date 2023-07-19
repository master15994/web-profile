import React from 'react';
import n from './news.module.css';
import { NavLink } from 'react-router-dom';

const News = () => {
  return (
    <div className={n.wrapper}>
      <div>
        <NavLink
          className={navLink => (navLink.isActive ? n.active : n.item)}
          to="/news/1"
        >
          <p>hey what up</p>
        </NavLink>
      </div>
      <div>
        <NavLink
          className={navLink => (navLink.isActive ? n.active : n.item)}
          to="/news/2"
        >
          <p>hey what up</p>
        </NavLink>
      </div>
      <div>
        <NavLink
          className={navLink => (navLink.isActive ? n.active : n.item)}
          to="/news/3"
        >
          <p>hey what up</p>
        </NavLink>
      </div>
      <div>
        <NavLink
          className={navLink => (navLink.isActive ? n.active : n.item)}
          to="/news/4"
        >
          <p>hey what up</p>
        </NavLink>
      </div>
      <div>
        <NavLink
          className={navLink => (navLink.isActive ? n.active : n.item)}
          to="/news/5"
        >
          <p>hey what up</p>
        </NavLink>
      </div>
    </div>
  );
};

export default News;
