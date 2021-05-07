import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {DispatchFucntionType, ProfilePageType, StoreType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

export type ProfilePropsType = {
	store: StoreType
}

const Profile = (props: ProfilePropsType) => {
	return (
		<div>
			<ProfileInfo />
			<MyPostsContainer store={props.store} />
		</div>
	);
};

export default Profile;
