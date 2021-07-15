import React, {ChangeEvent, KeyboardEvent} from "react";
import DialogItem from "./DialogItem";
import classes from "./Dialogs.module.css";
import Message from "./Message";
import {DialogsPageType} from "../../redux/dialogs-reducer";


type DialogsPropsType = {
    dialogsPage: DialogsPageType
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void

}

const Dialogs = (props: DialogsPropsType) => {

    const {dialogs, messages, newMessageBody} = props.dialogsPage;

    let dialogsElements = dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);

    let messagesElements = messages.map(m => <Message key={m.id} message={m.message}/>);

    console.log(messages)
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    let onSendMessageClick = () => {
        if(props.dialogsPage.newMessageBody.trim()) {
            props.sendMessage();
        }
    }

    let onKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if(props.dialogsPage.newMessageBody.trim() && e.key === "Enter") {
            props.sendMessage();
        }
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={classes.messages}>

                <div>
                    <div>
                        <textarea
                            value={newMessageBody}
                            onChange={onNewMessageChange}
                            onKeyPress={onKeyPress}
                            placeholder={"Enter your message"}> </textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                        <div>{messagesElements}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
