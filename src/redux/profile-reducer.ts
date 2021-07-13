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

let initialState = {
    posts: [],
    newPostText: ''
}

//reducer
const profileReducer = (state: ProfilePageType = initialState, action: DispatchFunctionType) : ProfilePageType => {
    switch (action.type) {
        case 'UPDATE-NEW-POST-TEXT':
            return {
                ...state,
                newPostText: action.newText
            };

        case 'ADD-POST':
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

//action creators
export const addPostAC = () => ({type: 'ADD-POST'} as const );
export const updateNewPostTextAC = (newText: string) => ({type: 'UPDATE-NEW-POST-TEXT', newText} as const );

//types of AC
export type AddPostActionType = ReturnType<typeof addPostAC>
export type UpdatePostActionType = ReturnType<typeof updateNewPostTextAC>
export type DispatchFunctionType = AddPostActionType | UpdatePostActionType | UpdateMessageBodyType | SendMessageType

export default profileReducer;