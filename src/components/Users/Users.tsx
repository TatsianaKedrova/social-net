import React from "react";
import s from './Users.module.css';
import {SingleUserType} from "../../redux/users-reducer";

export type UsersPropsType = {
    users: Array<SingleUserType>
    followUnfollow: (userId: number) => void
    setUsers: (users: Array<SingleUserType>) => void
}

const Users = ({ users, followUnfollow, setUsers }: UsersPropsType) => {

    let pageUsers = users.map(u => (
        <div key={u.id} className={s.userBox}>
                        <span>
                            <div><img src={u.photoUrl}
                                      className={s.photo}
                                      alt={"avatar"}/></div>
                            <button
                                onClick={() => {followUnfollow(u.id)}}
                            >{u.followed ? "Follow" : "Unfollow"}</button>
                        </span>
            <span>
                           <span>
                               <div>{u.fullName}</div>
                               <div>{u.status}</div>
                           </span>
                           <span>
                               <div>{`${u.location.country},`}</div>
                               <div>{u.location.city}</div>
                           </span>
                        </span>
        </div>
    ))

    return (
        <div>
            {pageUsers}
        </div>
    )
}
export default Users;
/*<div className={s.usersContainer}>
    {pageUsers}

</div>*/




