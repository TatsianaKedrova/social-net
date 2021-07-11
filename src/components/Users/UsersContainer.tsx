import {connect} from "react-redux";
import {
    followUnfollowAC,
    setCurrentPageAC,
    setUsersAC,
    setUsersTotalCountAC,
    SingleUserType
} from "../../redux/users-reducer";
import {AppDispatch, AppRootType} from "../../redux/store-redux";
import React from "react";
import axios from "axios";
import {UserPresentational} from "./UserPresentational";

export type UsersPropsType = {
    users: Array<SingleUserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    followUnfollow: (userId: number) => void
    setUsers: (users: Array<SingleUserType>) => void
    setTotalUsersCount: (count: number) => void
    setCurrentPage: (page: number) => void
}

class UsersAPIComponent extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                    console.log(response)
                    this.props.setUsers(response.data.items);
                    this.props.setTotalUsersCount(response.data.totalCount);

                }
            )}

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items);
            }
        )
    }
    render() {

        return <UserPresentational users={this.props.users} pageSize={this.props.pageSize} totalUsersCount={this.props.totalUsersCount} currentPage={this.props.currentPage} followUnfollow={this.props.followUnfollow} onPageChanged={this.onPageChanged} />
    }
}

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