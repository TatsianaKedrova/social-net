import axios from "axios";
import {SingleUserType} from "../redux/users-reducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": '3356848e-44a4-478d-85f0-1e1fabb15c46'
    }
})

export const userAPI = {
    getUsers: (currentPage: number = 1, pageSize: number = 10) => {
        return instance.get<UsersResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
            .then(res => {
                return res.data
            })
    },
    follow: (userId: number) => {
        return instance.post<ResponseServerType>(`follow/${userId}`, {})
    },
    unfollow: (userId: number) => {
        return instance.delete<ResponseServerType>(`follow/${userId}`)
    }
}

export type ResponseServerType<D = {}> = {
    resultCode: number
    messages: Array<string>,
    data: D
}

export type UsersResponseType = {
    items: Array<SingleUserType>,
    totalCount: number,
    error: null | string
}
