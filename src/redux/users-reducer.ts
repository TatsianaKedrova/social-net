const TOGGLE_FOLLOW_UNFOLLOW = 'TOGGLE_FOLLOW_UNFOLLOW';

export type FollowUnfollowToggleType = {
    type: typeof TOGGLE_FOLLOW_UNFOLLOW
}


export type SingleUserType = {
    id: number
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
        {id: 1, followed: true, fullName: "Tania", status: "My goal is at my hand!", location: { country: "Belarus", city: "Gomel"}},
        {id: 2, followed: false, fullName: "Nadin", status: "I am queen", location: { country: "Egupt", city: "Cairo"}},
        {id: 3, followed: true, fullName: "Sveta", status: "I want to be happy", location: { country: "Belarus", city: "Gomel"}},
        {id: 4, followed: false, fullName: "Alessandro", status: "I am great football player!", location: { country: "USA", city: "Los Angelos"}},
        {id: 5, followed: true, fullName: "Francesco", status: "Handsome life!", location: { country: "Italy", city: "Rome"}},
        {id: 6, followed: false, fullName: "Pavel", status: "Telegram creator!", location: { country: "UAE", city: "Dubai"}},

    ]
};

const usersReducer = (state: UsersType = initialState, action: any): any => {
    switch (action.type) {
        case TOGGLE_FOLLOW_UNFOLLOW:
            /*return {...state,
            [...users]
            }*/
        default:
            return state;
    }
}

export const FollowUnfollowAC = () : FollowUnfollowToggleType => ({
    type: 'TOGGLE_FOLLOW_UNFOLLOW'
});

export default usersReducer;