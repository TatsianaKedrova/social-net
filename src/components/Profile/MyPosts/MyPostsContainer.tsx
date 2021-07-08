import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";
import {AppDispatch, AppRootType} from "../../../redux/store-redux";


	let mapStateToProps = (state: AppRootType) => {
		return {
			posts: state.profilePage.posts,
			newPostText: state.profilePage.newPostText
		}
	}

	let mapDispatchToProps = (dispatch: AppDispatch) => {
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


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
// export type MyPostsContainerConnectType = ConnectedProps<typeof MyPostsContainer>

export default MyPostsContainer;
