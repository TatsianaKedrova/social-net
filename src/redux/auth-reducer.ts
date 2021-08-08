let initialState = {
    userId: null,
    email: null,
    login: null,
    // isLoading: false
};

type InitialStateType = {
    userId: number | null
    email: string | null
    login: string | null
    // isLoading: boolean
};
const authReducer = (state: InitialStateType = initialState, action: ActionType) => {

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
export const setUserData = (data: InitialStateType) => ({type: 'AUTH/SET-USER-DATA', data} as const);

//types of AC
export type SetUserDataType = ReturnType<typeof setUserData>
type ActionType = SetUserDataType;

export default authReducer;