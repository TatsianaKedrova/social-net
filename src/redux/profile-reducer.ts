import { SendMessageType, UpdateMessageBodyType } from "./dialogs-reducer";
import { profileAPI, userAPI } from "../api/socialNetAPI";
import { ThunkDispatch } from "redux-thunk";
import { AppRootType } from "./store-redux";
import { type } from "os";

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
};

let initialState = {
  posts: [],
  newPostText: "",
  profile: null,
  profileStatus: "hey",
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

//thunk creators
export const changeProfileStatus =
  (newStatus: string) =>
  async (dispatch: ThunkDispatch<AppRootType, unknown, ProfileActionsType>) => {
    try {
      const response = await profileAPI.changeProfileStatus(newStatus);
      console.log("response data: ", response.data);
      dispatch(changeProfileStatusAC(newStatus));
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
      console.log("response.data: ", response.data);
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
export type ProfileActionsType =
  | AddPostActionType
  | UpdatePostActionType
  | UpdateMessageBodyType
  | SendMessageType
  | SetUserProfileType
  | SetProfileStatus
  | ChangeProfileStatus;

export default profileReducer;
