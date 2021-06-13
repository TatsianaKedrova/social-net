import React from "react";
import s from './Users.module.css';
import {SingleUserType} from "../../redux/users-reducer";
import axios from "axios";

export type UsersPropsType = {
    users: Array<SingleUserType>
    followUnfollow: (userId: number) => void
    setUsers: (users: Array<SingleUserType>) => void
}

class UsersC extends React.Component<UsersPropsType>{
    constructor(props: UsersPropsType) {
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                this.props.setUsers(response.data.items);
            }
        )}

    render() {
        return (
            <div>

                {this.props.users.map(u => (
                    <div key={u.id} className={s.userBox}>
                        <span>
                            <div><img src={u.photoUrl}
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
                }
            </div>
        )
    }
}

export default UsersC;






