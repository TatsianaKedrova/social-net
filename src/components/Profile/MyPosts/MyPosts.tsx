import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Posts/Post";

const MyPosts = () => {
	return (
		<div className={classes.postBlock}>
			<h3>My Posts</h3>
			<div>
				<div>
					<textarea></textarea>
				</div>
				<div>
					<button>Add post</button>
				</div>
			</div>

			<div className={classes.posts}>
				<Post message={"I love you"} />
				<Post message={"My dream job is here in my heart!"} />
			</div>
		</div>
	);
};

export default MyPosts;
