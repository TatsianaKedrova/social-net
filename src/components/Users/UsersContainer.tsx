import {connect} from "react-redux";
import {
    followUnfollow,
    setCurrentPage,
    setUsers,
    setUsersTotalCount,
    SingleUserType, toggleIsLoading
} from "../../redux/users-reducer";
import {AppRootType} from "../../redux/store-redux";
import React from "react";
import axios from "axios";
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
}

class UsersAPIComponent extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.toggleIsLoading(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                    this.props.toggleIsLoading(false);
                    console.log(response)
                    this.props.setUsers(response.data.items);
                    this.props.setUsersTotalCount(response.data.totalCount);
                }
            )
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsLoading(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsLoading(false);
                this.props.setUsers(response.data.items);
            }
        )
    }

    render() {

        return <>
            {this.props.isFetching ?
                <Preloader /> : null}
            <UserPresentational
                users={this.props.users}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                followUnfollow={this.props.followUnfollow}
                onPageChanged={this.onPageChanged}/>
        </>

    }
}

let mapStateToProps = (state: AppRootType) => {

    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isLoading
    }
}

/*let mapDispatchToProps = (dispatch: AppDispatch) => {
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
        },
        toggleIsLoading: (isFetching: boolean) => {
            dispatch(toggleIsLoadingAC(isFetching))
        }
    }
}*/

const UsersContainer = connect(mapStateToProps,
    {
        followUnfollow,
        setUsers,
        setUsersTotalCount,
        setCurrentPage,
        toggleIsLoading
    })(UsersAPIComponent);

// type ConnectedPropsType = ConnectedProps<typeof UsersContainer>
export default UsersContainer;