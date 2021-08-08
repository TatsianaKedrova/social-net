let initialState = {
    userId: null,
    email: null,
    login: null,
    isLoading: false
};

 export type InitialLoginType = {
    userId: number | null
    email: string | null
    login: string | null
    isLoading: boolean
};
const authReducer = (state: InitialLoginType = initialState, action: ActionType) => {

    switch (action.type) {
        case "AUTH/SET-USER-DATA" :
            return {
                ...state,
                ...action.data
            }
        default:
            return state;
    }
}

//action creators
export const setAuthUserData = (userId: number | null, email: string | null, login: string | null) => ({type: 'AUTH/SET-USER-DATA', data: {userId, email, login}} as const);

//types of AC
export type SetUserDataType = ReturnType<typeof setAuthUserData>
type ActionType = SetUserDataType;

export default authReducer;