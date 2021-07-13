const TOGGLE_FOLLOW_UNFOLLOW = 'TOGGLE_FOLLOW_UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_USERS_COUNT = 'TOTAL_USERS_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

/*
export type FollowUnfollowToggleType = {
    type: typeof TOGGLE_FOLLOW_UNFOLLOW
    userId: number
}*/

/*export type SetUsersType = {
    type: typeof SET_USERS,
    users: Array<SingleUserType>
}*/

/*export type SetTotalUsersCountType = {
    type: typeof SET_TOTAL_USERS_COUNT,
    count: number
}*/

/*export type SetCurrentPageType = {
    type: typeof SET_CURRENT_PAGE,
    page: number
}*/

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
export const isLodingAC = () => ({ type: 'IS_LOADING',  } as const )


export type FollowUnfollowToggleType = ReturnType<typeof followUnfollowAC>
export type SetUsersType = ReturnType<typeof setUsersAC>
export type SetTotalUsersCountType = ReturnType<typeof setUsersTotalCountAC>
export type SetCurrentPageType = ReturnType<typeof setCurrentPageAC>
export type IsLoadingType = ReturnType<typeof isLodingAC>

export type UserReducerDispatchType = FollowUnfollowToggleType | SetUsersType | SetTotalUsersCountType | SetCurrentPageType | IsLoadingType;


export default usersReducer;