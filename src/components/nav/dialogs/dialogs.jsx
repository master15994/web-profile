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

  let refTextInput = React.createRef();

  let updateText = () => {
    let text = refTextInput.current.value;
    props.dispatch({ type: 'UPDATE-INPUT-TEXT', newText: text });
    // props.updateInputText(text);
  };

  let addText = () => {
    props.dispatch({ type: 'ADD-TEXT' });
  };

  return (
    <div className={d.wrapper}>
      <div className={d.name}>{namesElement}</div>
      <div className={d.dialog}>{dialogsElement}</div>
      <div>
        <textarea ref={refTextInput} onChange={updateText}></textarea>
        <br />
        <button className={d.button} onClick={addText}>
          Add post
        </button>
      </div>
    </div>
  );
};

export default Dialogs;
