const TOGGLE_FOLLOW_UNFOLLOW = 'TOGGLE_FOLLOW_UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

export type FollowUnfollowToggleType = {
    type: typeof TOGGLE_FOLLOW_UNFOLLOW
    userId: number
}

export type SetUsersType = {
    type: typeof SET_USERS,
    users: Array<SingleUserType>
}

export type SetCurrentPageType = {
    type: typeof SET_CURRENT_PAGE,
    page: number
}

export type SingleUserType = {
    name: string,
    id: number,
    uniqueUrlName: null,
    photos: {
        small: null | string,
        large: null | string
    },
    status: null,
    followed: boolean
}
/*export type SingleUserType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: {
        country: string,
        city: string
    }
}*/

export type UsersType = {
    users: Array<SingleUserType>
}

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 19,
    currentPage: 2
};

export type UserReducerDispatchType = FollowUnfollowToggleType | SetUsersType | SetCurrentPageType;

const usersReducer = (state: UsersType = initialState, action: UserReducerDispatchType): any => {
    switch (action.type) {
        case TOGGLE_FOLLOW_UNFOLLOW:
            return {
                ...state,
                // users: [...state.users]
                // let newState = stateCopy.users.map((e) => e.id === action.userId ? !e.followed : e);
                // this is one variant
                users: state.users.map(u => u.id === action.userId ? {...u, followed: !u.followed} : u)
            };
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            };
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
export const setCurrrentPageAC = (page: number): SetCurrentPageType => ({
    type: SET_CURRENT_PAGE,
    page
})

export default usersReducer;