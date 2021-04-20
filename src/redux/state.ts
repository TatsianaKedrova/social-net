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
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    // sidebar: SidebarType
}

export type StoreType = {
    _state: RootStateType,
    _callSubscriber: () => void,
    addPost: () => void,
    getState: ()=> RootStateType,
    updateNewPostText: (newText: string) => void,
    subscribe: (observer: () => void) => void
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
            ]
        },
    },
    _callSubscriber() {

    },
    getState() {
        return this._state;
    },
    addPost() {
        let newPost: PostType = {
            id: new Date().getTime(),
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        console.log("State is changed");
        this._callSubscriber();
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber();
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

window.store = store;

export default store;