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
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: {
        country: string,
        city: string
    }
}

export type UsersType = {
    users: Array<SingleUserType>
}

let initialState = {
    users: [
        {
            id: 1,
            photoUrl: 'https://tse1.mm.bing.net/th?id=OIP.tH0HK6vs6urnkIxoTmR1WgAAAA&pid=Api/?',
            followed: true,
            fullName: "Tania",
            status: "My goal is at my hand!",
            location: {country: "Belarus", city: "Gomel"}
        },
        {
            id: 2,
            photoUrl: '',
            followed: false,
            fullName: "Nadin",
            status: "I am queen",
            location: {country: "Egupt", city: "Cairo"}},
        {
            id: 3,
            photoUrl: '',
            followed: true,
            fullName: "Sveta",
            status: "I want to be happy",
            location: {country: "Belarus", city: "Gomel"}
        },
        {
            id: 4,
            photoUrl: '',
            followed: false,
            fullName: "Alessandro",
            status: "I am great football player!",
            location: {country: "USA", city: "Los Angelos"}
        },
        {
            id: 5,
            photoUrl: '',
            followed: true,
            fullName: "Francesco",
            status: "Handsome life!",
            location: {country: "Italy", city: "Rome"}
        },
        {
            id: 6,
            photoUrl: '',
            followed: false,
            fullName: "Pavel",
            status: "Telegram creator!",
            location: {country: "UAE", city: "Dubai"}
        },
    ]
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
                users: state.users.map(u => u.id !== action.userId ? {...u, followed: !u.followed} : u)
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