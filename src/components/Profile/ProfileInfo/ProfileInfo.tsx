import React from "react";
import classes from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import { ProfilePropsType } from "../Profile";
import authUserPhoto from "../../../assets/authUserPhoto.jpg";

const ProfileInfo:React.FC<ProfilePropsType> = ({userProfile, profileStatus, changeProfileStatus}) => {

	if(!userProfile) {
		return <Preloader />
	}

	return (
		<div>
			<div className={classes.descriptionBlock}>
				<img
					className={classes.avatarProperties}
					src={userProfile?.photos.small !== null ? userProfile?.photos.small : authUserPhoto} alt={"avatar Photo"}/>
					<ProfileStatus status={profileStatus} changeStatus={changeProfileStatus}/>
			</div>
		</div>
	);
};

export default ProfileInfo;
