export type SingleUserType = {
    name: string,
    id: number,
    uniqueUrlName: null | string,
    photos: {
        small: null | string,
        large: null | string
    },
    status?: null,
    followed: boolean
}

let initialState = {
    users: [] as Array<SingleUserType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
};
export type InitStateType = typeof initialState;

const usersReducer = (state = initialState, action: UserReducerDispatchType): InitStateType => {
    switch (action.type) {
        case 'TOGGLE_FOLLOW_UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: !u.followed} : u)
            };
        case 'SET_USERS':
            return {
                ...state,
                users: action.users
            };
        case 'TOTAL_USERS_COUNT': {
            return {
                ...state,
                totalUsersCount: action.count
            }
        }
        case 'SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.page
            }
        case "IS_LOADING":
            return {...state}
        default:
            return state;
    }
}

export const followUnfollowAC = (userId: number) => ({type: 'TOGGLE_FOLLOW_UNFOLLOW', userId} as const);
export const setUsersAC = (users: Array<SingleUserType>) => ({type: 'SET_USERS', users} as const);
export const setUsersTotalCountAC = (count: number) => ({type: 'TOTAL_USERS_COUNT', count} as const)
export const setCurrentPageAC = (page: number) => ({type: 'SET_CURRENT_PAGE', page} as const)
export const isLoadingAC = () => ({ type: 'IS_LOADING',  } as const )


export type FollowUnfollowToggleType = ReturnType<typeof followUnfollowAC>
export type SetUsersType = ReturnType<typeof setUsersAC>
export type SetTotalUsersCountType = ReturnType<typeof setUsersTotalCountAC>
export type SetCurrentPageType = ReturnType<typeof setCurrentPageAC>
export type IsLoadingType = ReturnType<typeof isLoadingAC>

export type UserReducerDispatchType = FollowUnfollowToggleType | SetUsersType | SetTotalUsersCountType | SetCurrentPageType | IsLoadingType;


export default usersReducer;