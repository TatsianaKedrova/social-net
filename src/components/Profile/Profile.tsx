import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {UserProfileType} from "../../redux/profile-reducer";

export type ProfilePropsType = {
	userProfile: UserProfileType | null
	isAuth: boolean
}

const Profile: React.FC<ProfilePropsType>= (props) => {
	console.log(props)
	return (
		<div>
			<ProfileInfo userProfile={props.userProfile}/>
			<MyPostsContainer />
		</div>
	);
};

export default Profile;
