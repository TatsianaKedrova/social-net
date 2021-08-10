import {ProfileActionsType} from "./profile-reducer";

export type DialogType = {
    id: number,
    name: string
}

export type MessageType = {
    id: number
    message: string
}

export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
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

const dialogsReducer = (state: DialogsPageType = initialState, action: ProfileActionsType) : DialogsPageType=> {


    switch (action.type) {
        case 'SEND_MESSAGE':
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: new Date().getTime(), message: body} ],

            };

        case 'UPDATE_NEW_MESSAGE_BODY':
            return {
                ...state,
                newMessageBody: action.body
            };
        default:
            return state;
    }
}

//action creators
export const updateNewMessageBody = (updatedMessage: string) => ({type: 'UPDATE_NEW_MESSAGE_BODY', body: updatedMessage} as const);
export const sendMessage = () => ({type: 'SEND_MESSAGE'} as const);

//types of AC
export type UpdateMessageBodyType = ReturnType<typeof updateNewMessageBody>
export type SendMessageType = ReturnType<typeof sendMessage>

export default dialogsReducer;