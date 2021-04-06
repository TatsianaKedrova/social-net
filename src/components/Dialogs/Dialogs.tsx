import React from "react";
import DialogItem from "./DialogItem";
import classes from "./Dialogs.module.css";
import Message from "./Message";
import { DialogsPageType } from "../../redux/state";

type PropsType = {
	state: DialogsPageType
}


const Dialogs = (props: PropsType) => {

    let dialogsElements = props.state.dialogs.map(d =>
        <DialogItem key={d.id} name = {d.name} id = {d.id} />
    );

    let messagesElements = props.state.messages.map(m =>
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
