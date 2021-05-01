import { DialogsPageType } from "./store";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

export type UpdateMessageBodyType = {
    type: typeof UPDATE_NEW_MESSAGE_BODY
    body: string
}

export type SendMessageType = {
    type: typeof SEND_MESSAGE
    // newMessage: string
}

const dialogsReducer = (state: DialogsPageType, action: UpdateMessageBodyType | SendMessageType) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: new Date().getTime(), message: body});
            return state;
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        default:
            return state;
    }
}

export const updateNewMessageBodyActionCreator = (updatedMessage: string): UpdateMessageBodyType => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: updatedMessage
});

export const sendMessageActionCreator = (): SendMessageType => ({
    type: SEND_MESSAGE

});

export default dialogsReducer;