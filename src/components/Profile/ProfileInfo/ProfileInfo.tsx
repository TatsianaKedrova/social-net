import React from "react";
import classes from './ProfileInfo.module.css';
import {UserProfileType} from "../../../redux/profile-reducer";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

export type ProfileInfoPropsType = {
	userProfile: UserProfileType | null
	status: string
}

const ProfileInfo:React.FC<ProfileInfoPropsType> = ({userProfile, status}) => {

	if(!userProfile) {
		return <Preloader />
	}

	return (
		<div>
			<div className={classes.descriptionBlock}>
				<img
					className={classes.avatarProperties}
					src={userProfile?.photos.small !== null ? userProfile?.photos.small : "https://i.ytimg.com/vi/2Oe747XzeHw/maxresdefault.jpg"} alt={"avatar Photo"}/>
					<ProfileStatus status={status}/>
			</div>
		</div>
	);
};

export default ProfileInfo;
