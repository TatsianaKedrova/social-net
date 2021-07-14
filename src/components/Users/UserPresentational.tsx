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
    followUnfollow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
}

export const UserPresentational: React.FC<UserPresentationalPropsType> = ({
                                                                              users,
                                                                              pageSize,
                                                                              totalUsersCount,
                                                                              currentPage,
                                                                              followUnfollow,
                                                                              onPageChanged
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
                                    // onClick={}
                                    src={u.photos.small != null ? u.photos.small : "https://i.ytimg.com/vi/2Oe747XzeHw/maxresdefault.jpg"}
                                    className={s.photo}
                                    alt={"avatar"}/>
                                </NavLink>
                                </div>
                            <button
                                onClick={() => {
                                    followUnfollow(u.id)
                                }}
                            >{u.followed ? "Follow" : "Unfollow"}</button>
                        </span>
                    <span>
                           <span>
                               <div
                                   // onClick={}
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