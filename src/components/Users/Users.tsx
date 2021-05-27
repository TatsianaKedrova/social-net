import React from "react";
import s from './Users.module.css';
import {SingleUserType} from "../../redux/users-reducer";
import axios from "axios";

export type UsersPropsType = {
    users: Array<SingleUserType>
    followUnfollow: (userId: number) => void
    setUsers: (users: Array<SingleUserType>) => void
}

const Users = ({ users, followUnfollow, setUsers }: UsersPropsType) => {

   if(users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            debugger;
            setUsers([]);
        })
   }

 !users.length && setUsers([
        {id: 1, photoUrl: 'https://tse1.mm.bing.net/th?id=OIP.tH0HK6vs6urnkIxoTmR1WgAAAA&pid=Api/?', followed: true, fullName: "Tania", status: "My goal is at my hand!", location: {country: "Belarus", city: "Gomel"}
        },
        {id: 2, photoUrl: '', followed: false, fullName: "Nadin", status: "I am queen", location: {country: "Egypt", city: "Cairo"}},
        {id: 3, photoUrl: '', followed: true, fullName: "Sveta", status: "I want to be happy", location: {country: "Belarus", city: "Gomel"}
        },
        {id: 4, photoUrl: '', followed: false, fullName: "Alessandro", status: "I am great football player!", location: {country: "USA", city: "Los Angelos"}
        },
        {id: 5, photoUrl: '', followed: true, fullName: "Francesco", status: "Handsome life!", location: {country: "Italy", city: "Rome"}
        },
        {id: 6, photoUrl: '', followed: false, fullName: "Pavel", status: "Telegram creator!", location: {country: "UAE", city: "Dubai"}
        },
    ]);

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




