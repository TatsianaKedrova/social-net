import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { ProfileContainerPropsType } from "./ProfileContainer";

export type ProfilePropsType = Omit<ProfileContainerPropsType, "setUserProfile" | "getUserProfileTC" | "getUserProfileStatus">;

const Profile: React.FC<ProfilePropsType> = (props) => {
  const { userProfile, profileStatus, changeProfileStatus, isError, errorMessage, setErrorAC } = props;
  return (
    <div>
      <ProfileInfo
        userProfile={userProfile}
        profileStatus={profileStatus}
        changeProfileStatus={changeProfileStatus}
		isError={isError}
		errorMessage={errorMessage}
		setErrorAC={setErrorAC}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
