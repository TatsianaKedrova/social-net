import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import classes from "./Profile.module.css";

const Profile = () => {
	return (
		<div>
			<div className={classes.content}>
				<img
					src="https://www.learningspace.co.zw/wp-content/uploads/sites/391/2019/12/electricity.0.jpg"
					alt="electricityPic"
				/>
			</div>
			<div>
				ava + info
			</div>
			<MyPosts />
		</div>
	);
};

export default Profile;
