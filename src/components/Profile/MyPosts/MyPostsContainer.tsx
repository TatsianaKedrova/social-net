import React, {KeyboardEvent} from "react";
import Post from "./Posts/Post";
import {PostType, StoreType} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


export type MyPostsPropsType = {
    // store: StoreType
}

// AddPostActionType | UpdatePostActionType

const MyPostsContainer = (props: MyPostsPropsType) => {


    /*let onKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (props.newPostText.trim() && e.key === "Enter") {
            props.dispatch(addPostActionCreator());
        }
    }*/

    return (

        <StoreContext.Consumer>
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
        </StoreContext.Consumer>

    );
};

export default MyPostsContainer;
