const TOGGLE_FOLLOW_UNFOLLOW = 'TOGGLE_FOLLOW_UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_USERS_COUNT = 'TOTAL_USERS_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

export type FollowUnfollowToggleType = {
    type: typeof TOGGLE_FOLLOW_UNFOLLOW
    userId: number
}

export type SetUsersType = {
    type: typeof SET_USERS,
    users: Array<SingleUserType>
}

export type SetTotalUsersCountType = {
    type: typeof SET_TOTAL_USERS_COUNT,
    count: number
}

export type SetCurrentPageType = {
    type: typeof SET_CURRENT_PAGE,
    page: number
}

export type SingleUserType = {
    name: string,
    id: number,
    // uniqueUrlName: null,
    photos: {
        small: null | string,
        large: null | string
    },
    status?: null,
    followed: boolean
}

export type UsersType = {
    users: Array<SingleUserType>
}

let initialState = {
    users: [] as Array<SingleUserType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1
};
export type InitStateType = typeof initialState;

export type UserReducerDispatchType = FollowUnfollowToggleType | SetUsersType | SetTotalUsersCountType | SetCurrentPageType;

const usersReducer = (state = initialState, action: UserReducerDispatchType): InitStateType => {
    switch (action.type) {
        case TOGGLE_FOLLOW_UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: !u.followed} : u)
            };
        case SET_USERS:
            return {
                ...state,
                users: action.users
            };
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.count
            }
        }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            }

        default:
            return state;
    }
}

export const followUnfollowAC = (userId: number): FollowUnfollowToggleType => ({
    type: TOGGLE_FOLLOW_UNFOLLOW,
    userId
});

export const setUsersAC = (users: Array<SingleUserType>): SetUsersType => ({
    type: SET_USERS,
    users
});

export const setUsersTotalCountAC = (count: number):  SetTotalUsersCountType => ({
    type: SET_TOTAL_USERS_COUNT,
    count
})

export const setCurrentPageAC = (page: number): SetCurrentPageType => ({
    type: SET_CURRENT_PAGE,
    page
})

export default usersReducer;