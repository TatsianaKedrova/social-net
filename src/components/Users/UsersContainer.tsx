import {connect, ConnectedProps} from "react-redux";
import {followUnfollowAC, setCurrrentPageAC, setUsersAC, SingleUserType} from "../../redux/users-reducer";
import {AppDispatch, AppRootType} from "../../redux/redux-store";
import UsersC from "./UsersC";
import Users from "./Users";
import {stat} from "fs";

let mapStateToProps = (state: AppRootType) => {

    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch: AppDispatch ) => {
    return {
        followUnfollow: (userId: number) => {
            dispatch(followUnfollowAC(userId));
        },
        setUsers: (users: Array<SingleUserType>) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (page: number) => {
            dispatch(setCurrrentPageAC(page))
        }
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC);

type ConnectedPropsType = ConnectedProps<typeof UsersContainer>
export default UsersContainer;