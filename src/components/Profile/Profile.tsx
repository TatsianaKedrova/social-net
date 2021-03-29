import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { PostsType } from '../../index';


export type ProfilePropsType = {
    posts: PostsType
}

const Profile = (props: ProfilePropsType) => {
	return (
		<div>
			<ProfileInfo />
			
			<MyPosts posts = {props.posts}/>
		</div>
	);
};

export default Profile;
