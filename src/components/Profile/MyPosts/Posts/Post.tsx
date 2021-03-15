import React from "react";
import classes from "./Post.module.css";

type PostPropsType = {
	message: string
}

const Post = (props: PostPropsType) => {

	return (
			<div className={classes.posts}>
				<div className={classes.item}>
					<img src='https://www.cstatic-images.com/car-pictures/xl/usc70tsc024b021001.png' alt="Tesla car"/>
					{props.message}
					<div>
					<span>like</span>
					</div>
					
				</div>
				
			</div>
	);
};

export default Post;
