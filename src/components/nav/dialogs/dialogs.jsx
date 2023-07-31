import React from 'react';
import d from './dialogs.module.css';
import NamesItem from './namesItem/names-item';
import DialogItem from './dialogsItem/dialogs-items';
import { addTextActionCreator, updateTextActionCreator } from '../../../redux/dialogs-reducer';

const Dialogs = props => {
    let namesElement = props.dialogs.namesItem.map(item => {
        return <NamesItem name={item.name} id={item.id} />;
    });

    let dialogsElement = props.dialogs.dialogsItem.map(item => {
        return <DialogItem text={item.text} />;
    });

    let onTextChangeClick = event => {
        // props.dispatch({ type: 'UPDATE-INPUT-TEXT', newText: text });
        // props.updateInputText(text);
        props.dispatch(updateTextActionCreator(event.target.value));
    };

    let addText = () => {
        // props.dispatch({ type: 'ADD-TEXT' });
        props.dispatch(addTextActionCreator());
    };

    return (
        <div className={d.wrapper}>
            <div className={d.name}>{namesElement}</div>
            <div className={d.dialog}>{dialogsElement}</div>
            <div>
                <textarea value={props.dialogs.newDialog} onChange={onTextChangeClick} />
                <br />
                <button className={d.button} onClick={addText}>
                    Add Text
                </button>
            </div>
        </div>
    );
};

export default Dialogs;
