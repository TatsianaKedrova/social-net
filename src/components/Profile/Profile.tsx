import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

export type ProfilePropsType = {
	// store: StoreType
}

const Profile = (props: ProfilePropsType) => {
	return (
		<div>
			<ProfileInfo />
			<MyPostsContainer />
		</div>
	);
};

export default Profile;
