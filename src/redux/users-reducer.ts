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
    isLoading: true
};
export type InitUsersStateType = typeof initialState;

//reducer
const usersReducer = (state = initialState, action: UserReducerDispatchType): InitUsersStateType => {
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
            return {...state,
            isLoading: action.isFetching
            }
        // case "REDIRECT_TO_USER_PROFILE":

        default:
            return state;
    }
}
//action creators
export const followUnfollow = (userId: number) => ({type: 'TOGGLE_FOLLOW_UNFOLLOW', userId} as const);
export const setUsers = (users: Array<SingleUserType>) => ({type: 'SET_USERS', users} as const);
export const setUsersTotalCount = (count: number) => ({type: 'TOTAL_USERS_COUNT', count} as const)
export const setCurrentPage = (page: number) => ({type: 'SET_CURRENT_PAGE', page} as const)
export const toggleIsLoading = (isFetching: boolean) => ({ type: 'IS_LOADING', isFetching } as const )
export const redirectToUserProfile = (userId: number) => ({ type: 'REDIRECT_TO_USER_PROFILE', userId } as const )


//types of AC
export type FollowUnfollowToggleType = ReturnType<typeof followUnfollow>
export type SetUsersType = ReturnType<typeof setUsers>
export type SetTotalUsersCountType = ReturnType<typeof setUsersTotalCount>
export type SetCurrentPageType = ReturnType<typeof setCurrentPage>
export type IsLoadingType = ReturnType<typeof toggleIsLoading>
export type RedirectToUserProfileType = ReturnType<typeof redirectToUserProfile>

export type UserReducerDispatchType = FollowUnfollowToggleType | SetUsersType | SetTotalUsersCountType | SetCurrentPageType | IsLoadingType | RedirectToUserProfileType;

export default usersReducer;