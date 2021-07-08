import {connect, ConnectedProps} from "react-redux";
import {
    followUnfollowAC,
    setCurrentPageAC,
    setUsersAC,
    setUsersTotalCountAC,
    SingleUserType
} from "../../redux/users-reducer";
import {AppDispatch, AppRootType} from "../../redux/redux-store";
import UsersAPIComponent from "./UsersAPIComponent";

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
        setTotalUsersCount: (count: number) => {
            dispatch(setUsersTotalCountAC(count))
        },
        setCurrentPage: (page: number) => {
            dispatch(setCurrentPageAC(page))
        }
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);

// type ConnectedPropsType = ConnectedProps<typeof UsersContainer>
export default UsersContainer;