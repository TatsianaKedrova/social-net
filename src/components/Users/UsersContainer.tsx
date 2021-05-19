import {connect} from "react-redux";
import Users from "./Users";
import { followUnfollowAC, setUsersAC, SingleUserType } from "../../redux/users-reducer";
import {AppDispatch, AppRootType} from "../../redux/redux-store";

let mapStateToProps = (state: AppRootType) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch: AppDispatch ) => {
    return {
        followUnfollow: (userId: number) => {
            dispatch(followUnfollowAC(userId));
        },
        setUsers: (users: Array<SingleUserType>) => {
            dispatch(setUsersAC(users));
        }
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;