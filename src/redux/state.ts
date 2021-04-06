import { rerenderEntireTree } from "../render";

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
}

export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

// type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    // sidebar: SidebarType
}



let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: "How is your successful life?", likesCount: 12},
            {id: 2, message: "Everything needs care and attention, remember it!", likesCount: 15},
        ],
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
    // sidebar: {}
}

export const addPost = (postMessage: string) => {
    const newPost: PostType= {
        id: new Date().getTime(),
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export default state;