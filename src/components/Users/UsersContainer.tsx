import {connect} from "react-redux";
import {
    followUnfollow,
    setCurrentPage,
    setUsers,
    setUsersTotalCount,
    SingleUserType, toggleDisabled, toggleIsLoading
} from "../../redux/users-reducer";
import {AppRootType} from "../../redux/store-redux";
import React from "react";
import {UserPresentational} from "./UserPresentational";
import Preloader from "../common/Preloader/Preloader";
import {userAPI} from "../../api/socialNetAPI";

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
}

class UsersAPIComponent extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.toggleIsLoading(true);
        userAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                    console.log(data)
                    this.props.toggleIsLoading(false);
                    this.props.setUsers(data.items);
                    this.props.setUsersTotalCount(data.totalCount);
                }
            )
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsLoading(true);
        userAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                    this.props.toggleIsLoading(false);
                    this.props.setUsers(data.items);
                }
            )
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
        toggleDisabled: toggleDisabled
    })(UsersAPIComponent);

export default UsersContainer;