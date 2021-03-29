import React from "react";
import DialogItem from "./DialogItem";
import classes from "./Dialogs.module.css";
import Message from "./Message";
import { DialogsType, MessagesType} from '../../index';

export type DialogsPropsType = {
    dialogs: DialogsType
    messages: MessagesType
}


const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogs.map(d =>
        <DialogItem key={d.id} name = {d.name} id = {d.id} />
    );

    let messagesElements = props.messages.map(m =>
        <Message key={m.id} message={m.message}/>
    );

	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogsItems}>
                { dialogsElements }
			</div>
			<div className={classes.messages}>
                {messagesElements}
			</div>
		</div>
	);
};

export default Dialogs;
