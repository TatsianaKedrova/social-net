import { SendMessageType, UpdateMessageBodyType } from "./dialogs-reducer";
import { profileAPI, userAPI } from "../api/socialNetAPI";
import { ThunkDispatch } from "redux-thunk";
import { AppRootType } from "./store-redux";

export type PostType = {
  id: number;
  message: string;
  likesCount: number;
};

export type UserProfileType = {
  aboutMe: string | null;
  contacts: {
    facebook: string | null;
    github: string | null;
    instagram: string | null;
    mainLink: string | null;
    twitter: string | null;
    vk: string | null;
    website: string | null;
    youtube: string | null;
  };
  fullName: string;
  lookingForAJob: boolean;
  lookingForAJobDescription: string | null;
  photos: {
    large: string | null;
    small: string | null;
  };
  userId: number;
};

export type ProfilePageType = {
  posts: Array<PostType>;
  newPostText: string;
  profile: UserProfileType | null;
  profileStatus: string;
  isError: boolean;
  errorMessage: string;
};

let initialState = {
  posts: [],
  newPostText: "",
  profile: null,
  profileStatus: "",
  isError: false,
  errorMessage: " ",
};

//reducer
const profileReducer = (
  state: ProfilePageType = initialState,
  action: ProfileActionsType
): ProfilePageType => {
  switch (action.type) {
    case "UPDATE-NEW-POST-TEXT":
      return {
        ...state,
        newPostText: action.newText,
      };

    case "ADD-POST":
      let newPost: PostType = {
        id: new Date().getTime(),
        message: state.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };
    case "SET_USER_PROFILE":
      return { ...state, profile: action.profile };

    case "SET_USER_STATUS":
      return { ...state, profileStatus: action.profileStatus };

    case "CHANGE_PROFILE_STATUS":
      return { ...state, profileStatus: action.status };
    case "SET_IS_ERROR":
      return { ...state, isError: action.error };
    case "SET_ERROR_MESSAGE":
      return { ...state, errorMessage: action.errorMessage };
    default:
      return state;
  }
};

//action creators
export const addPostAC = () => ({ type: "ADD-POST" } as const);
export const updateNewPostTextAC = (newText: string) =>
  ({ type: "UPDATE-NEW-POST-TEXT", newText } as const);
export const setUserProfile = (profile: any) =>
  ({ type: "SET_USER_PROFILE", profile } as const);
export const setProfileStatus = (profileStatus: string) =>
  ({ type: "SET_USER_STATUS", profileStatus } as const);
export const changeProfileStatusAC = (status: string) =>
  ({ type: "CHANGE_PROFILE_STATUS", status } as const);
export const setErrorAC = (error: boolean) =>
  ({ type: "SET_IS_ERROR", error } as const);
export const setErrorMessageAC = (errorMessage: string) =>
  ({ type: "SET_ERROR_MESSAGE", errorMessage } as const);

//thunk creators
export const changeProfileStatus =
  (newStatus: string) =>
  async (dispatch: ThunkDispatch<AppRootType, unknown, ProfileActionsType>) => {
    try {
      const response = await profileAPI.changeProfileStatus(newStatus);
      if (response.data.resultCode === 0) {
        console.log("response data: ", response.data);
        dispatch(changeProfileStatusAC(newStatus));
      } else {
        dispatch(setErrorAC(true));
        dispatch(setErrorMessageAC(response.data.messages[0]));
        console.log("Error message: ", response.data.messages);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

export const getUserProfileTC =
  (userId: number) =>
  (dispatch: ThunkDispatch<AppRootType, unknown, ProfileActionsType>) => {
    userAPI.getProfile(userId).then((response) => {
      dispatch(setUserProfile(response.data));
    });
  };

export const getUserProfileStatus =
  (userId: number) =>
  async (dispatch: ThunkDispatch<AppRootType, unknown, ProfileActionsType>) => {
    try {
      const response = await profileAPI.getProfileStatus(userId);
      console.log(typeof response.data);
      dispatch(setProfileStatus(response.data));
    } catch (error) {
      console.error("ERROR: ", error);
    }
  };

//types of AC
export type AddPostActionType = ReturnType<typeof addPostAC>;
export type UpdatePostActionType = ReturnType<typeof updateNewPostTextAC>;
export type SetUserProfileType = ReturnType<typeof setUserProfile>;
export type SetProfileStatus = ReturnType<typeof setProfileStatus>;
export type ChangeProfileStatus = ReturnType<typeof changeProfileStatusAC>;
export type SetErrorType = ReturnType<typeof setErrorAC>;
export type SetErrorMessageType = ReturnType<typeof setErrorMessageAC>;
export type ProfileActionsType =
  | AddPostActionType
  | UpdatePostActionType
  | UpdateMessageBodyType
  | SendMessageType
  | SetUserProfileType
  | SetProfileStatus
  | ChangeProfileStatus
  | SetErrorType
  | SetErrorMessageType;

export default profileReducer;
