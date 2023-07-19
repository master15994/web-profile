import React from 'react';
import n from './nav.module.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div className={n.nav}>
      <nav>
        <ul>
          <li>
            <NavLink
              className={navData => (navData.isActive ? n.active : n.item)}
              to="/profile"
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              className={navData => (navData.isActive ? n.active : n.item)}
              to="/dialogs"
            >
              Messages
            </NavLink>
          </li>
          <li>
            <NavLink
              className={navData => (navData.isActive ? n.active : n.item)}
              to="/news"
            >
              News
            </NavLink>
          </li>
          <li>
            <NavLink
              className={navData => (navData.isActive ? n.active : n.item)}
              to="music"
            >
              Music
            </NavLink>
          </li>
          <li>
            <NavLink
              className={navData => (navData.isActive ? n.active : n.item)}
              to="settings"
            >
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
