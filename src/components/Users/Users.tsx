import React from "react";
import s from './Users.module.css';
import {SingleUserType} from "../../redux/users-reducer";

export type UsersPropsType = {
    users: Array<SingleUserType>
    followUnfollow: (userId: number) => void
    setUsers: (users: Array<SingleUserType>) => void
}

const Users: React.FC<UsersPropsType> = (props) => {

    let pageUsers = props.users.map(u => {
        <div key={u.id} className={s.userBox}>
                <span>
                    <img src={u.photoUrl}
                         alt={"avatar"}/>
                    <button>{u.followed ? "Follow" : "Unfollow"}</button>
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
    })

    return (
        <div className={s.usersContainer}>
            {pageUsers}

        </div>
    )
}

export default Users;

