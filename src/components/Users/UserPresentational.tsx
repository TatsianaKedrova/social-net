import React from "react";
import {v1} from "uuid";
import s from "./Users.module.css";
import {SingleUserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";

type UserPresentationalPropsType = {
    users: Array<SingleUserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    followingInProgress: Array<number>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

export const UserPresentational: React.FC<UserPresentationalPropsType> = ({
                                                                              users,
                                                                              pageSize,
                                                                              totalUsersCount,
                                                                              currentPage,
                                                                              onPageChanged,
                                                                              followingInProgress,
                                                                              follow,
                                                                              unfollow
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
                                        unfollow(u.id)
                                    }}>Unfollow</button>
                                : <button
                                    disabled={followingInProgress.some(item => item === u.id)}
                                    onClick={() => {
                                        follow(u.id)
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

/*axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                           withCredentials: true,
                                           headers: {
                                               "API-KEY": "3356848e-44a4-478d-85f0-1e1fabb15c46"
                                           }
                                       })*/
/*
axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
    withCredentials: true,
    headers: {
        "API-KEY": "3356848e-44a4-478d-85f0-1e1fabb15c46"
    }
})*/
