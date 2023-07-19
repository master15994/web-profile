import React from 'react';
import d from './dialogs.module.css';
import NamesItem from './namesItem/names-item';
import DialogItem from './dialogsItem/dialogs-items';

const Dialogs = props => {
  let namesElement = props.dialogs.namesItem.map(item => {
    return <NamesItem name={item.name} id={item.id} />;
  });

  let dialogsElement = props.dialogs.dialogsItem.map(item => {
    return <DialogItem text={item.text} />;
  });

  return (
    <div className={d.wrapper}>
      <div>{namesElement}</div>
      <div className={d.dialog}>{dialogsElement}</div>
    </div>
  );
};

export default Dialogs;
