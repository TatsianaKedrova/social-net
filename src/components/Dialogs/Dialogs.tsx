import React, {ChangeEvent} from "react";
import DialogItem from "./DialogItem";
import classes from "./Dialogs.module.css";
import Message from "./Message";
import { StoreType } from "../../redux/store";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";

type DialogsPropsType = {
    store: StoreType
}
// UpdateMessageBodyType | SendMessageType

const Dialogs = (props: DialogsPropsType) => {
    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);

    let messagesElements = state.messages.map(m => <Message key={m.id} message={m.message}/>);
    let newMessageBody = state.newMessageBody;

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyActionCreator(body));
    }

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator());
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea value={newMessageBody} onChange={onNewMessageChange}
                                  placeholder={"Enter your message"}> </textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
