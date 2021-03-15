import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Posts/Post";

const MyPosts = () => {
	return (
		<div>
			<div>
				<textarea></textarea>
				<button>Add post</button>
			</div>
		
			<div className={classes.posts}>
				<Post message={'I love you'} />
				<Post message={'My dream job is here in my heart!'}/>
				

			</div>
		</div>
	);
};

export default MyPosts;
