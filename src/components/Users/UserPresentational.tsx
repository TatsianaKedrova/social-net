import React, {MouseEvent} from "react";
import {v1} from "uuid";
import s from "./Users.module.css";
import {SingleUserType} from "../../redux/users-reducer";

type UserPresentationalPropsType = {
    users: Array<SingleUserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    followUnfollow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
}

export const UserPresentational: React.FC<UserPresentationalPropsType> = ({ users,pageSize,totalUsersCount, currentPage, followUnfollow, onPageChanged }) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages: number[] = [];
    for(let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    console.log(pages);
    console.log(pagesCount);
    console.log(totalUsersCount);
    console.log(users);
    return (
        <div>
            <div>
                {pages.map(page => {
                    return <span key={v1()}
                                 className={currentPage === page ? s.selectedPage : ""}
                                 onClick={(e: MouseEvent<HTMLSpanElement>) => onPageChanged(page)}
                    >{page}</span>
                })}

            </div>
            {users.map(u => (
                <div key={u.id} className={s.userBox}>
                        <span>
                            <div><img
                                src={u.photos.small != null ? u.photos.small : "https://i.ytimg.com/vi/2Oe747XzeHw/maxresdefault.jpg"}
                                className={s.photo}
                                alt={"avatar"}/></div>
                            <button
                                onClick={() => {
                                    followUnfollow(u.id)
                                }}
                            >{u.followed ? "Follow" : "Unfollow"}</button>
                        </span>
                    <span>
                           <span>
                               <div>{u.name}</div>
                               <div>{u.status}</div>
                           </span>
                        </span>
                </div>
            ))
            }
        </div>
    )

}