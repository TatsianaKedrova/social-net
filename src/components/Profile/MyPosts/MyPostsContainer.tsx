import React from "react";
import {PostDispatchType, PostType, RootStateType} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import Dialogs from "../../Dialogs/Dialogs";


	let mapStateToProps = (state: RootStateType) => {
		return {
			posts: state.profilePage.posts,
			newPostText: state.profilePage.newPostText
		}
	}

	let mapDispatchToProps = (dispatch: PostDispatchType) => {
		return {
			updateNewPostText: (text: string) => {
				let action = updateNewPostTextActionCreator(text);
				dispatch(action);
			},
			addPost: () => {
				dispatch(addPostActionCreator());
			}
		}
	}

	const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default MyPostsContainer;
