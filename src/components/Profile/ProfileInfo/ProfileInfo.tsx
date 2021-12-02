import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import { ProfilePropsType } from "../Profile";
import authUserPhoto from "../../../assets/authUserPhoto.jpg";

const ProfileInfo: React.FC<ProfilePropsType> = (props) => {
  const {
    userProfile,
    profileStatus,
    changeProfileStatus,
    isError,
    errorMessage,
    setErrorAC,
  } = props;
  if (!userProfile) {
    return <Preloader />;
  }

  return (
    <div>
      <div className={classes.descriptionBlock}>
        <img
          className={classes.avatarProperties}
          src={
            userProfile?.photos.small !== null
              ? userProfile?.photos.small
              : authUserPhoto
          }
          alt={"avatar Photo"}
        />
        <ProfileStatus
          profileStatus={profileStatus}
          changeProfileStatus={changeProfileStatus}
          isError={isError}
          errorMessage={errorMessage}
          setErrorAC={setErrorAC}
        />
      </div>
    </div>
  );
};

export default ProfileInfo;
