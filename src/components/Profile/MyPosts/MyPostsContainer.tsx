import React, {KeyboardEvent} from "react";
import Post from "./Posts/Post";
import {PostType, StoreType} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


export type MyPostsPropsType = {
	store: StoreType
}

// AddPostActionType | UpdatePostActionType

const MyPostsContainer = (props: MyPostsPropsType) => {

	let state = props.store.getState()

	let addPost = () => {
		props.store.dispatch(addPostActionCreator());
	}

	let onPostChange = (text: string) => {
		if(text) {
			let action = updateNewPostTextActionCreator(text);
			props.store.dispatch(action);
		}
	}

	/*let onKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
		if (props.newPostText.trim() && e.key === "Enter") {
			props.dispatch(addPostActionCreator());
		}
	}*/

	return (
		<MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText}/>
	);
};

export default MyPostsContainer;
