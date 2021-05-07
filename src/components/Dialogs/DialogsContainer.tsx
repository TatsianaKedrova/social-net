import React, {ChangeEvent} from "react";
import DialogItem from "./DialogItem";
import classes from "./Dialogs.module.css";
import Message from "./Message";
import { StoreType } from "../../redux/store";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

type DialogsContainerPropsType = {
    store: StoreType
}
// UpdateMessageBodyType | SendMessageType

const DialogsContainer = (props: DialogsContainerPropsType) => {
    let state = props.store.getState().dialogsPage;

    const onNewMessageChange = (body: string) => {
        props.store.dispatch(updateNewMessageBodyActionCreator(body));
    }

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator());
    }

    return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={state}/>
};

export default DialogsContainer;
