import { PostType, ProfilePageType } from "./store";

export type AddPostActionType = {
    type: typeof ADD_POST
}
export type UpdatePostActionType = {
    type: typeof UPDATE_NEW_POST_TEXT
    newText: string
}
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state: ProfilePageType, action: AddPostActionType | UpdatePostActionType) => {

    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;

        case ADD_POST:
        let newPost: PostType = {
            id: new Date().getTime(),
            message: state.newPostText,
            likesCount: 0
        };
        if (state.newPostText) {
            state.posts.push(newPost);
            state.newPostText = '';
        } return state;
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