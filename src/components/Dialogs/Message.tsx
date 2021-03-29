import classes from './Dialogs.module.css';
import React from 'react';

type MessagePropsType = {
    message: string
}

const Message:React.FC<MessagePropsType> = (props) => {
    return (
        <div>
            <div className={classes.message}>{props.message}</div>
        </div>
    )
}

export default Message;




