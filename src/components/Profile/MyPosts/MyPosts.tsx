import React, {KeyboardEvent} from "react";
import classes from "./MyPosts.module.css";
import Post from "./Posts/Post";
import {PostType} from "../../../redux/store";
import {Button, Jumbotron} from "react-bootstrap";


export type MyPostsPropsType = {
	updateNewPostText: (text: string) => void,
	addPost: () => void,
	posts: Array<PostType>,
	newPostText: string,
}

// AddPostActionType | UpdatePostActionType

const MyPosts = (props: MyPostsPropsType) => {
    let postElements =
        props.posts.map(p => <Post key={p.id} message={p.message} id={p.id} likesCount={p.likesCount}/>
    )

	let newPostElement = React.createRef<HTMLTextAreaElement>();

	let onAddPost = () => {
		props.addPost();
	}

	/*let onKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
		if (props.newPostText.trim() && e.key === "Enter") {
			props.dispatch(addPostActionCreator());
		}
	}*/

	let onPostChange = () => {
		let text = newPostElement.current?.value;
		if(text) {
			props.updateNewPostText(text);
		}
		}

	return (
		<div className={classes.postBlock}>
			<Jumbotron >
			<h3 className={classes.h3Style}>Posts</h3>
				<div>
					<textarea
						ref={newPostElement}
						value={props.newPostText}
						onChange={onPostChange}
						// onKeyPress={ onKeyPress }
					/>
				</div>
				<div>
					<Button variant="primary"
						onClick={ onAddPost }>
						Add Post
					</Button>

				</div>
			</Jumbotron>

			<div className={classes.posts}>
                {postElements}
			</div>
		</div>
	);
};

export default MyPosts;
