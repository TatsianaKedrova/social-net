import {SendMessageType, UpdateMessageBodyType} from "./dialogs-reducer";

export type PostType = {
    id: number,
    message: string,
    likesCount: number
};

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

export type DispatchFunctionType = AddPostActionType | UpdatePostActionType | UpdateMessageBodyType | SendMessageType


export type AddPostActionType = {
    type: typeof ADD_POST
}
export type UpdatePostActionType = {
    type: typeof UPDATE_NEW_POST_TEXT
    newText: string
}
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [],
    newPostText: ''
}

const profileReducer = (state: ProfilePageType = initialState, action: DispatchFunctionType) : ProfilePageType => {

    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };

        case ADD_POST:
        let newPost: PostType = {
            id: new Date().getTime(),
            message: state.newPostText,
            likesCount: 0
        };
            return {
            ...state,
            posts: [...state.posts, newPost],
            newPostText: ''
        };

        default:
            return state;
    }
}

export const addPostActionCreator = (): AddPostActionType => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text: string): UpdatePostActionType => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
});

export default profileReducer;