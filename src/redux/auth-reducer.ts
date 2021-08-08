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
const authReducer = (state: InitialLoginType = initialState, action: ActionType) => {

    switch (action.type) {
        case "AUTH/SET-USER-DATA" :
            return {
                ...state,
                ...action.data
            }
        case "AUTH/IS-USER-AUTHENTICATED":
            return {
                ...state, isAuth: action.isAuth
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
export const isUserAuthenticated = (isAuth: boolean) => ({type: 'AUTH/IS-USER-AUTHENTICATED', isAuth} as const);

//types of AC
export type SetUserDataType = ReturnType<typeof setAuthUserData>
export type IsUserAuthenticatedType = ReturnType<typeof isUserAuthenticated>
type ActionType = SetUserDataType | IsUserAuthenticatedType;

export default authReducer;