import React from "react";
import classes from './ProfileInfo.module.css';
import {UserProfileType} from "../../../redux/profile-reducer";
import Preloader from "../../common/Preloader/Preloader";

export type ProfileInfoPropsType = {
	userProfile: UserProfileType | null
}

const ProfileInfo:React.FC<ProfileInfoPropsType> = (props) => {

	if(!props.userProfile) {
		return <Preloader />
	}

	return (
		<div>
			<div className={classes.content}>
				<img
					src="https://www.learningspace.co.zw/wp-content/uploads/sites/391/2019/12/electricity.0.jpg"
					alt="electricityPic"
				/>
			</div>
			<div className={classes.descriptionBlock}>
				<img
					className={classes.avatarProperties}
					src={props.userProfile?.photos.small !== null ? props.userProfile?.photos.small : "https://i.ytimg.com/vi/2Oe747XzeHw/maxresdefault.jpg"}/>
			</div>
		</div>
	);
};

export default ProfileInfo;
