import axios from "axios";
import { SingleUserType } from "../redux/users-reducer";
import { UserProfileType } from "../redux/profile-reducer";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "6bbf046c-5364-4b2f-bc8e-9e579932f01e",
  },
});

//APIs
export const userAPI = {
  getUsers(currentPage: number = 1, pageSize: number = 10) {
    return instance
      .get<UsersResponseType>(
        `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`
      )
      .then((res) => {
        return res.data;
      });
  },
  follow(userId: number) {
    return instance.post<ResponseServerType>(`follow/${userId}`, {});
  },
  unfollow(userId: number) {
    return instance.delete<ResponseServerType>(`follow/${userId}`);
  },
  getProfile(userId: number) {
    console.warn("Obsolete method. Please use profileAPI object.");
    return profileAPI.getProfile(userId);
  },
};

export const profileAPI = {
  getProfile(userId: number) {
    return instance.get<UserProfileType>(`profile/${userId}`);
  },
  getStatus(userId: number) {
    const status = instance.get(`/profile/status/${userId}`);
    return status;
  },
};

export const authAPI = {
  me() {
    return instance.get<ResponseServerType<LoginResponseType>>("auth/me");
  },
};

//types
export type ResponseServerType<D = {}> = {
  resultCode: number;
  messages: Array<string>;
  data: D;
};

export type UsersResponseType = {
  items: Array<SingleUserType>;
  totalCount: number;
  error: null | string;
};

export type LoginResponseType = {
  id: number;
  email: string;
  login: string;
};
