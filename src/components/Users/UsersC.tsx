import React, { MouseEvent} from "react";
import s from './Users.module.css';
import {SingleUserType} from "../../redux/users-reducer";
import axios from "axios";
import {v1} from "uuid";

export type UsersPropsType = {
    users: Array<SingleUserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    followUnfollow: (userId: number) => void
    setUsers: (users: Array<SingleUserType>) => void
    setCurrentPage: (page: number) => void
}

class UsersC extends React.Component<UsersPropsType> {
    /*constructor(props: UsersPropsType) {
        super(props);
        }*/

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items);
            }
        )}

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items);
            }
        )
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return (
            <div>
                <div>
                    {pages.map(page => {
                        return <span key={v1()}
                                     className={this.props.currentPage === page ? s.selectedPage : ""}
                                    onClick={(e: MouseEvent<HTMLSpanElement>) => this.onPageChanged(page)}
                        >{page}</span>
                    })}


                </div>
                {this.props.users.map(u => (
                    <div key={u.id} className={s.userBox}>
                        <span>
                            <div><img
                                src={u.photos.small != null ? u.photos.small : "https://i.ytimg.com/vi/2Oe747XzeHw/maxresdefault.jpg"}
                                className={s.photo}
                                alt={"avatar"}/></div>
                            <button
                                onClick={() => {
                                    this.props.followUnfollow(u.id)
                                }}
                            >{u.followed ? "Follow" : "Unfollow"}</button>
                        </span>
                        <span>
                           <span>
                               <div>{u.name}</div>
                               <div>{u.status}</div>
                           </span>
                            {/*<span>
                               <div>{`${u.location.country},`}</div>
                               <div>{u.location.city}</div>
                           </span>*/}
                        </span>
                    </div>
                ))
                }
            </div>
        )
    }
}

export default UsersC;






