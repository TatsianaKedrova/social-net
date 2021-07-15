import {SendMessageType, UpdateMessageBodyType} from "./dialogs-reducer";

export type PostType = {
    id: number,
    message: string,
    likesCount: number
};

export type UserProfileType = {
    aboutMe: string | null
    contacts: {
        facebook: string | null
        github: string | null
        instagram: string | null
        mainLink: string | null
        twitter: string | null
        vk: string | null
        website: string | null
        youtube: string | null
    }
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    photos: {
        large: string | null,
        small: string | null
    }
    userId: number
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
    profile: UserProfileType | null

}

let initialState = {
    posts: [],
    newPostText: '',
    profile : null
}

//reducer
const profileReducer = (state: ProfilePageType = initialState, action: DispatchFunctionType): ProfilePageType => {
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
        case "SET_USER_PROFILE":
            return {...state,
            profile: action.profile
            }

        default:
            return state;
    }
}

//action creators
export const addPostAC = () => ({type: 'ADD-POST'} as const);
export const updateNewPostTextAC = (newText: string) => ({type: 'UPDATE-NEW-POST-TEXT', newText} as const);
export const setUserProfile = (profile: any) => ({type: 'SET_USER_PROFILE', profile} as const);

//types of AC
export type AddPostActionType = ReturnType<typeof addPostAC>
export type UpdatePostActionType = ReturnType<typeof updateNewPostTextAC>
export type SetUserProfileType = ReturnType<typeof setUserProfile>
export type DispatchFunctionType =
    AddPostActionType
    | UpdatePostActionType
    | UpdateMessageBodyType
    | SendMessageType
    | SetUserProfileType

export default profileReducer;