import React from "react";
import s from './Users.module.css';
import {SingleUserType} from "../../redux/users-reducer";
import axios from "axios";

export type UsersPropsType = {
    users: Array<SingleUserType>
    followUnfollow: (userId: number) => void
    setUsers: (users: Array<SingleUserType>) => void
}

const Users = ({users, followUnfollow, setUsers}: UsersPropsType) => {

    let getUsers = () => {
        if (users.length === 0) {
            axios.get<{items: Array<SingleUserType>, totalCount: number,
                error: null}>("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                setUsers(response.data.items);
            })
        }
    }

    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
            {users.map(u => (
                <div key={u.id} className={s.userBox}>
                        <span>
                            <div><img src={"https://i.ytimg.com/vi/2Oe747XzeHw/maxresdefault.jpg"}
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

console.dir(Object);
export default Users;






