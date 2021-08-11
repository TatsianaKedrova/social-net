import {authAPI} from "../api/socialNetAPI";
import {ThunkDispatch} from "redux-thunk";
import {AppRootType} from "./store-redux";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

export type InitialLoginType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
};
const authReducer = (state: InitialLoginType = initialState, action: AuthActionsType) => {

    switch (action.type) {

        case "AUTH/SET-USER-DATA" :
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}

//action creators
export const setAuthUserData = (userId: number | null, email: string | null, login: string | null) => ({
    type: 'AUTH/SET-USER-DATA',
    data: {userId, email, login}
} as const);

//thunk creators
export const setAuthTC = () => (dispatch: ThunkDispatch<AppRootType, unknown, AuthActionsType>) => {
    authAPI.me()
        .then(res => {
            if(res.data.resultCode === 0) {
                let { email, id, login } = res.data.data;
                dispatch(setAuthUserData(id, email, login));
            }
        })
}

//types of AC
export type SetUserDataType = ReturnType<typeof setAuthUserData>
type AuthActionsType = SetUserDataType;


export default authReducer;