import React, { RefObject } from "react";
import classes from "./MyPosts.module.css";
import Post from "./Posts/Post";
import { PostType } from "../../../redux/state";

export type MyPostsPropsType = {
    posts: Array<PostType>
	addPost: (postMessage: string) => void
}

const MyPosts = (props: MyPostsPropsType) => {
    let postElements =
        props.posts.map(p => <Post key={p.id} message={p.message} id={p.id} likesCount={p.likesCount}/>
    )

	let newPostElement = React.createRef<HTMLTextAreaElement>();

	let addPost = () => {
		if (newPostElement.current) {
			// [...postElements]
			props.addPost(newPostElement.current.value);
			newPostElement.current.value = '';
		}

	}

	return (
		<div className={classes.postBlock}>
			<h3>My Posts</h3>
			<div>
				<div>
					<textarea ref={newPostElement}></textarea>
				</div>
				<div>
					<button onClick={ addPost }>Add post</button>
				</div>
			</div>


			<div className={classes.posts}>
                {postElements}
			</div>
		</div>
	);
};

export default MyPosts;
