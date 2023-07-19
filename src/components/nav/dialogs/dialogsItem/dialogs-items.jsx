import React from 'react';
import d from './dialogs-items.module.css';

const DialogItem = props => {
  return (
    <div>
      <div className={d.dialogItem}>{props.text}</div>
    </div>
  );
};

export default DialogItem;
