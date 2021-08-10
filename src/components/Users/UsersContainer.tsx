import {connect} from "react-redux";
import {
    followUnfollow,
    getUsersTC,
    onPageChangeTC,
    setCurrentPage,
    setUsers,
    setUsersTotalCount,
    SingleUserType,
    toggleDisabled,
    toggleIsLoading
} from "../../redux/users-reducer";
import {AppRootType} from "../../redux/store-redux";
import React from "react";
import {UserPresentational} from "./UserPresentational";
import Preloader from "../common/Preloader/Preloader";

export type UsersPropsType = {
    users: Array<SingleUserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followUnfollow: (userId: number) => void
    setUsers: (users: Array<SingleUserType>) => void
    setUsersTotalCount: (count: number) => void
    setCurrentPage: (page: number) => void
    toggleIsLoading: (isFetching: boolean) => void
    toggleDisabled: (userId: number, isFetching: boolean) => void
    followingInProgress: Array<number>
    getUsersTC: (currentPage: number, pageSize: number) => void
    onPageChange: (pageNumber: number, pageSize: number) => void
}

class UsersAPIComponent extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.onPageChange(pageNumber, this.props.pageSize)
        /*this.props.setCurrentPage(pageNumber);
        this.props.toggleIsLoading(true);
        userAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                    this.props.toggleIsLoading(false);
                    this.props.setUsers(data.items);
                }
            )*/
    }

    render() {

        return <>
            {this.props.isFetching ?
                <Preloader/> : null}
            <UserPresentational
                users={this.props.users}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                followUnfollow={this.props.followUnfollow}
                onPageChanged={this.onPageChanged}
                toggleDisabled={this.props.toggleDisabled}
                followingInProgress={this.props.followingInProgress}
            />
        </>

    }
}

let mapStateToProps = (state: AppRootType) => {

    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isLoading,
        followingInProgress: state.usersPage.followingInProgress
    }
}

const UsersContainer = connect(mapStateToProps,
    {
        followUnfollow,
        setUsers,
        setUsersTotalCount,
        setCurrentPage,
        toggleIsLoading,
        toggleDisabled,
        getUsers: getUsersTC,
        onPageChange: onPageChangeTC
    })(UsersAPIComponent);

export default UsersContainer;