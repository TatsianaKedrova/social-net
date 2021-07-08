import {DialogsPageType, DispatchFucntionType} from "./store";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

export type UpdateMessageBodyType = {
    type: typeof UPDATE_NEW_MESSAGE_BODY
    body: string
}

export type SendMessageType = {
    type: typeof SEND_MESSAGE
}

let initialState = {
    dialogs: [
        {id: 1, name: 'Tatiana'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Elena'},
        {id: 4, name: 'Vladimir'},
        {id: 5, name: 'Nadin'},
        {id: 6, name: 'Sasha'},
        {id: 7, name: 'Diana'},
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'What is your goal for next 3 years?'},
        {id: 4, message: 'I plan to work as a FrontEnd developer remotely for US or Canada company.'},
        {id: 5, message: 'Good. How is your sweetheart'},
    ],
    newMessageBody: '',
};

const dialogsReducer = (state: DialogsPageType = initialState, action: DispatchFucntionType) : DialogsPageType=> {


    switch (action.type) {
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: new Date().getTime(), message: body} ],

            };

        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
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