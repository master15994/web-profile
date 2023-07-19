import React from 'react';
import d from './names-item.module.css';
import { NavLink } from 'react-router-dom';

const NamesItem = props => {
  let path = '/dialogs/' + props.id;

  return (
    <div className={d.name}>
      <NavLink
        className={navLink => (navLink.isActive ? d.active : d.item)}
        to={path}
      >
        {props.name}
      </NavLink>
    </div>
  );
};
export default NamesItem;
