import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { ProfilePageType } from "../../redux/state";

export type ProfilePropsType = {
	profilePage : ProfilePageType
	dispatch: (action: any) => void
}

const Profile = (props: ProfilePropsType) => {
	return (
		<div>
			<ProfileInfo />
			
			<MyPosts posts = {props.profilePage.posts}
					 newPostText={props.profilePage.newPostText}
					 dispatch={props.dispatch}

			/>
		</div>
	);
};

export default Profile;
