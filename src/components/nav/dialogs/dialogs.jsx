import React from 'react';
import d from './dialogs.module.css';
import DialogsContainer from './dialogsContainer';

const Dialogs = props => {
    return (
        <div className={d.wrapper}>
            <DialogsContainer />
        </div>
    );
};

export default Dialogs;
