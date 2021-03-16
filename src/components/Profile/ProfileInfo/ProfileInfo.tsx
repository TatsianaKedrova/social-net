import React from "react";
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
	return (
		<div>
			<div className={classes.content}>
				<img
					src="https://www.learningspace.co.zw/wp-content/uploads/sites/391/2019/12/electricity.0.jpg"
					alt="electricityPic"
				/>
			</div>
			<div className={classes.descriptionBlock}>
				ava + info
			</div>
		</div>
	);
};

export default ProfileInfo;
