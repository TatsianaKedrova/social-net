import {Dispatch} from "redux";
import {userAPI} from "../api/socialNetAPI";

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
    isLoading: false,
    followingInProgress: [] as Array<number>
};
export type InitUsersStateType = typeof initialState;

//reducer
const usersReducer = (state = initialState, action: UsersActionsType): InitUsersStateType => {
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
        case "FOLLOWING_IN-PROGRESS":
            return {...state,
                followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.userId]:
                    state.followingInProgress.filter(item => item !== action.userId)
            }
        default:
            return state;
    }
}
//action creators
export const followUnfollow = (userId: number) => ({type: 'TOGGLE_FOLLOW_UNFOLLOW', userId} as const);
export const setUsers = (users: Array<SingleUserType>) => ({type: 'SET_USERS', users} as const);
export const setUsersTotalCount = (count: number) => ({type: 'TOTAL_USERS_COUNT', count} as const);
export const setCurrentPage = (page: number) => ({type: 'SET_CURRENT_PAGE', page} as const);
export const toggleIsLoading = (isFetching: boolean) => ({ type: 'IS_LOADING', isFetching } as const );
export const toggleDisabled = (userId: number, isFetching: boolean) => ({ type: 'FOLLOWING_IN-PROGRESS', userId , isFetching} as const );

//types of AC
export type FollowUnfollowToggleType = ReturnType<typeof followUnfollow>
export type SetUsersType = ReturnType<typeof setUsers>
export type SetTotalUsersCountType = ReturnType<typeof setUsersTotalCount>
export type SetCurrentPageType = ReturnType<typeof setCurrentPage>
export type IsLoadingType = ReturnType<typeof toggleIsLoading>
export type FollowingInProgressType = ReturnType<typeof toggleDisabled>

//thunk creators
export const getUsers = (currentPage: number, pageSize: number) => (dispatch: Dispatch<UsersActionsType>) => {
    dispatch(toggleIsLoading(true));
    userAPI.getUsers(currentPage, pageSize)
        .then(data => {
                dispatch(toggleIsLoading(false));
                dispatch(setUsers(data.items));
                dispatch(setUsersTotalCount(data.totalCount));
            }
        )
}

export const onPageChange = (pageNumber: number, pageSize: number) => (dispatch: Dispatch<UsersActionsType>) => {
    dispatch(setCurrentPage(pageNumber))
    dispatch(toggleIsLoading(true));
    userAPI.getUsers(pageNumber, pageSize)
        .then(data => {
                dispatch(toggleIsLoading(false));
                dispatch(setUsers(data.items));
            }
        )
}
export const followTC = (userId: number) => (dispatch: Dispatch<UsersActionsType>) => {
    dispatch(toggleDisabled(userId, true))
    userAPI.follow(userId)
            .then((res) => {
                    if (res.data.resultCode === 0) {
                        dispatch(followUnfollow(userId))
                    }
                    dispatch(toggleDisabled(userId, false))
                })
}

export const unfollowTC = (userId: number) => (dispatch: Dispatch<UsersActionsType>) => {
    dispatch(toggleDisabled(userId, true))
    userAPI.unfollow(userId)
            .then((res) => {
                    if (res.data.resultCode === 0) {
                        dispatch(followUnfollow(userId))
                    }
                    dispatch(toggleDisabled(userId, false))
                })
}

//types
export type UsersActionsType = FollowUnfollowToggleType | SetUsersType | SetTotalUsersCountType | SetCurrentPageType | IsLoadingType | FollowingInProgressType;

export default usersReducer;