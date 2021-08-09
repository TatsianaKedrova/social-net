import React from "react";
import {v1} from "uuid";
import s from "./Users.module.css";
import {SingleUserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

type UserPresentationalPropsType = {
    users: Array<SingleUserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    followUnfollow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
    toggleDisabled: (userId: number, isFetching: boolean) => void
    followingInProgress: Array<number>
}

export const UserPresentational: React.FC<UserPresentationalPropsType> = ({
                                                                              users,
                                                                              pageSize,
                                                                              totalUsersCount,
                                                                              currentPage,
                                                                              followUnfollow,
                                                                              onPageChanged,
                                                                              toggleDisabled,
                                                                              followingInProgress
                                                                          }) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={s.userBox}>

            {pages.map(page => {
                return <span key={v1()}
                             className={currentPage === page ? s.selectedPage : ""}
                             onClick={() => onPageChanged(page)}
                >{page}</span>
            })}

            {users.map(u => (
                <div key={u.id}>
                        <span>
                            <div>
                                <NavLink to={"/profile/" + u.id}>

                                <img
                                    src={u.photos.small !== null ? u.photos.small : "https://i.ytimg.com/vi/2Oe747XzeHw/maxresdefault.jpg"}
                                    className={s.photo}
                                    alt={"avatar"}/>
                                </NavLink>
                                </div>
                            {u.followed ? <button
                                    disabled={followingInProgress.some(item => item === u.id)}
                                    onClick={() => {
                                        toggleDisabled(u.id, true);
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "3356848e-44a4-478d-85f0-1e1fabb15c46"
                                            }
                                        })
                                            .then((res) => {
                                                if (res.data.resultCode === 0) {
                                                    followUnfollow(u.id)
                                                }
                                                toggleDisabled(u.id, false)
                                            })
                                    }}>Unfollow</button>
                                : <button
                                    disabled={followingInProgress.some(item => item === u.id)}
                                    onClick={() => {
                                        toggleDisabled(u.id, true)
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "3356848e-44a4-478d-85f0-1e1fabb15c46"
                                            }
                                        })
                                            .then((res) => {
                                                if (res.data.resultCode === 0) {
                                                    followUnfollow(u.id)
                                                }
                                                toggleDisabled(u.id, false)
                                            })
                                    }}>Follow</button>
                            }

                        </span>
                    <span>
                           <span>
                               <div
                               >{u.name}</div>
                           </span>
                        </span>
                    <br/>
                </div>

            ))
            }
        </div>
    )

}