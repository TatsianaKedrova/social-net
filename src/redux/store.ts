import profileReducer, {AddPostActionType, UpdatePostActionType} from "./profile-reducer";
import dialogsReducer, {SendMessageType, UpdateMessageBodyType} from "./dialogs-reducer";

declare const window: any;

export type MessageType = {
    id: number
    message: string
}

export type DialogType = {
    id: number,
    name: string
}

export type PostType = {
    id: number,
    message: string,
    likesCount: number
};

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    // sidebar: SidebarType
}

export type DispatchFucntionType = AddPostActionType | UpdatePostActionType | UpdateMessageBodyType | SendMessageType

export type StoreType = {
    _state: RootStateType,
    _callSubscriber: (state: RootStateType) => void,
    getState: () => RootStateType,
    subscribe: (observer: (state: RootStateType) => void) => void,
    dispatch: (action: DispatchFucntionType) => void

}

const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                /*{id: 1, message: "How is your successful life?", likesCount: 12},
                {id: 2, message: "Everything needs care and attention, remember it!", likesCount: 15},*/
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        },
    },
    _callSubscriber(state) {
        console.log(state);
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);

        /*switch (action.type) {
            case SEND_MESSAGE:
                let body = this._state.dialogsPage.newMessageBody;
                this._state.dialogsPage.newMessageBody = '';
                this._state.dialogsPage.messages.push({id: new Date().getTime(), message: body})

                return this._callSubscriber(this._state);
            case UPDATE_NEW_MESSAGE_BODY:
                this._state.dialogsPage.newMessageBody = action.body;
                return this._callSubscriber(this._state);
            case UPDATE_NEW_POST_TEXT:
                this._state.profilePage.newPostText = action.newText
                return this._callSubscriber(this._state);
            case ADD_POST:
                let newPost: PostType = {
                    id: new Date().getTime(),
                    message: this._state.profilePage.newPostText,
                    likesCount: 0
                };
                if (this._state.profilePage.newPostText) {
                    this._state.profilePage.posts.push(newPost);
                    this._state.profilePage.newPostText = '';
                    console.log("State is changed");
                }
                return this._callSubscriber(this._state)
            default:
                return this._state
        }*/
    }
}

window.store = store;

export default store;