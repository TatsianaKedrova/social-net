import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { ProfileContainerPropsType } from "./ProfileContainer";

export type ProfilePropsType = Pick<ProfileContainerPropsType, "userProfile" | "profileStatus" | "changeProfileStatus">;

const Profile: React.FC<ProfilePropsType> = (props) => {
  const { userProfile, profileStatus, changeProfileStatus } = props;
  return (
    <div>
      <ProfileInfo
        userProfile={userProfile}
        profileStatus={profileStatus}
        changeProfileStatus={changeProfileStatus}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
