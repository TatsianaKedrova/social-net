import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {UserProfileType} from "../../redux/profile-reducer";

export type ProfilePropsType = {
	userProfile: UserProfileType | null
	profileStatus: string
}

const Profile: React.FC<ProfilePropsType>= ({userProfile, profileStatus}) => {

   

	return (
		<div>
			<ProfileInfo userProfile={userProfile} status={profileStatus}/>
			<MyPostsContainer />
		</div>
	);
};

export default Profile;
