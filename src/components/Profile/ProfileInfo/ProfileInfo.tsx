import React from "react";
import classes from './ProfileInfo.module.css';
import {UserProfileType} from "../../../redux/profile-reducer";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

export type ProfileInfoPropsType = {
	userProfile: UserProfileType | null
}

const ProfileInfo:React.FC<ProfileInfoPropsType> = (props) => {

	if(!props.userProfile) {
		return <Preloader />
	}

	return (
		<div>
			<div className={classes.descriptionBlock}>
				
				<img
					className={classes.avatarProperties}
					src={props.userProfile?.photos.small !== null ? props.userProfile?.photos.small : "https://i.ytimg.com/vi/2Oe747XzeHw/maxresdefault.jpg"} alt={"avatar Photo"}/>
					<ProfileStatus />
			</div>
		</div>
	);
};

export default ProfileInfo;
