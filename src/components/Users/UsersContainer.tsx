import {connect} from "react-redux";
import {
    followTC,
    followUnfollow, getUsers, onPageChange,
    SingleUserType,
    toggleDisabled, unfollowTC,
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
    toggleDisabled: (userId: number, isFetching: boolean) => void
    followingInProgress: Array<number>
    getUsers: (currentPage: number, pageSize: number) => void
    onPageChange: (pageNumber: number, pageSize: number) => void
    followTC: (userId: number) => void
    unfollowTC: (userId: number) => void
}

class UsersAPIComponent extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.onPageChange(pageNumber, this.props.pageSize)
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
                follow={this.props.followTC}
                unfollow={this.props.unfollowTC}
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
        toggleDisabled,
        getUsers,
        onPageChange,
        followTC,
        unfollowTC
    })(UsersAPIComponent);

export default UsersContainer;