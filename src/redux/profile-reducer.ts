import {DispatchFucntionType, PostType, ProfilePageType} from "./store";

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
    posts: [
        /*{id: 1, message: "How is your successful life?", likesCount: 12},
        {id: 2, message: "Everything needs care and attention, remember it!", likesCount: 15},*/
    ],
    newPostText: ''
}

const profileReducer = (state: ProfilePageType = initialState, action: DispatchFucntionType) : ProfilePageType => {

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
            // if (stateCopy.newPostText.trim()) {
            // }

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