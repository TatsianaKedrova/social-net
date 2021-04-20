import React, {KeyboardEvent} from "react";
import classes from "./MyPosts.module.css";
import Post from "./Posts/Post";
import { PostType } from "../../../redux/state";


export type MyPostsPropsType = {
    posts: Array<PostType>
	newPostText: string
	addPost: () => void
	updateNewPostText: (newText: string) => void
}

const MyPosts = (props: MyPostsPropsType) => {
    let postElements =
        props.posts.map(p => <Post key={p.id} message={p.message} id={p.id} likesCount={p.likesCount}/>
    )

	let newPostElement = React.createRef<HTMLTextAreaElement>();

	let addPost = () => {
		props.addPost();
	}

	let onKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
		if(e.key === "Enter") {
			props.addPost();
		}
	}
	let onPostChange = () => {
		let text = newPostElement.current?.value;
		if(text) {
			props.updateNewPostText(text);
		} else {
			props.updateNewPostText('');
		}

	}

	return (
		<div className={classes.postBlock}>
			<h3>My Posts</h3>
			<div>
				<div>
					<textarea
						ref={newPostElement}
						value={props.newPostText}
						onChange={onPostChange}
						onKeyPress={ onKeyPress }
					/>
				</div>
				<div>
					<button

						onClick={ addPost }>Add post</button>
				</div>
			</div>

			<div className={classes.posts}>
                {postElements}
			</div>
		</div>
	);
};

export default MyPosts;
