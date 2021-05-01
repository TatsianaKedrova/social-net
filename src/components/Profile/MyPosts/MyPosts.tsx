import React, {KeyboardEvent} from "react";
import classes from "./MyPosts.module.css";
import Post from "./Posts/Post";
import {PostType} from "../../../redux/store";
import {Button, Jumbotron} from "react-bootstrap";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";


export type MyPostsPropsType = {
    posts: Array<PostType>
	newPostText: string
	dispatch: (action: any) => void
}

// AddPostActionType | UpdatePostActionType

const MyPosts = (props: MyPostsPropsType) => {
    let postElements =
        props.posts.map(p => <Post key={p.id} message={p.message} id={p.id} likesCount={p.likesCount}/>
    )

	let newPostElement = React.createRef<HTMLTextAreaElement>();

	let addPost = () => {
		props.dispatch(addPostActionCreator());
	}

	let onKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {

		if (props.newPostText.trim() && e.key === "Enter") {
			props.dispatch(addPostActionCreator());
		}
	}
	let onPostChange = () => {
		let text = newPostElement.current?.value;
		if(text) {
			let action = updateNewPostTextActionCreator(text);
			props.dispatch(action);
		} /*else {
			props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: '' });
		}*/

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
						onKeyPress={ onKeyPress }
					/>
				</div>
				<div>
					<Button variant="primary"
						onClick={ addPost }>
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
