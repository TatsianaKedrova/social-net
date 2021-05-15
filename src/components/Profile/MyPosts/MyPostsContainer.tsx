import React from "react";
import {PostDispatchType, PostType, RootStateType} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import Dialogs from "../../Dialogs/Dialogs";


export type MyPostsPropsType = {
    // store: StoreType
}


const MyPostsContainer = (props: MyPostsPropsType) => {

	/*let onKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (props.newPostText.trim() && e.key === "Enter") {
            props.dispatch(addPostActionCreator());
        }
    }*/

		/*<StoreContext.Consumer>
			{(store) => {
				let state = store.getState()

				let addPost = () => {
					store.dispatch(addPostActionCreator());
				}

				let onPostChange = (text: string) => {
					if (text) {
						let action = updateNewPostTextActionCreator(text);
						store.dispatch(action);
					}
				}
				return (
					<MyPosts
						updateNewPostText={onPostChange}
						addPost={addPost} posts={state.profilePage.posts}
						newPostText={state.profilePage.newPostText}/>
				)
			}
			}
		</StoreContext.Consumer>*/


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

};

export default MyPostsContainer;
