import React from "react";
import s from './Users.module.css';
import { SingleUserType } from "../../redux/users-reducer";

export type UsersPropsType = {
    users: Array<SingleUserType>
    followUnfollow: (userId: number) => void
    setUsers: (users: Array<SingleUserType>) => void
}

const Users: React.FC<UsersPropsType> = (props) => {

    props.users.map(u => {
            <div key={u.id}>
                <span></span>
                <span></span>
            </div>
        })

    return (
        <div className={s.usersContainer}>

        </div>
    )
}

export default Users;

