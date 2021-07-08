import React from "react";
import {SingleUserType} from "../../redux/users-reducer";
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
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.count);
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

export default UsersAPIComponent;






