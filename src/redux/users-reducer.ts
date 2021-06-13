const TOGGLE_FOLLOW_UNFOLLOW = 'TOGGLE_FOLLOW_UNFOLLOW';
const SET_USERS = 'SET_USERS';

export type FollowUnfollowToggleType = {
    type: typeof TOGGLE_FOLLOW_UNFOLLOW
    userId: number
}

export type SetUsersType = {
    type: typeof SET_USERS,
    users: Array<SingleUserType>
}

export type SingleUserType = {
    name: string,
    id: number,
    uniqueUrlName: null,
    photos: {
        small: null,
        large: null
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
    users: []
};

export type UserReducerDispatchType = FollowUnfollowToggleType | SetUsersType

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

export default usersReducer;