import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Posts/Post";
import { PostsType } from '../../../index';

export type MyPostsPropsType = {
    posts: PostsType
}

const MyPosts = (props: MyPostsPropsType) => {
    let postElements =
        props.posts.map(p => <Post key={p.id} message={p.message} id={p.id} likesCount={p.likesCount}/>
    )


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
                {postElements}
			</div>
		</div>
	);
};

export default MyPosts;
