import React, {ChangeEvent, KeyboardEvent} from "react";
import classes from "./MyPosts.module.css";
import Post from "./Posts/Post";
import {Button, Jumbotron} from "react-bootstrap";
import {PostType} from "../../../redux/profile-reducer";


export type MyPostsPropsType = {
    posts: Array<PostType>,
    newPostText: string,
    updateNewPostText: (text: string) => void,
    addPost: () => void,
}

const MyPosts = (props: MyPostsPropsType) => {
    let postElements =
        props.posts.map(p => <Post key={p.id} message={p.message} id={p.id} likesCount={p.likesCount}/>
        )

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let onAddPost = () => {

    	if (props.newPostText.trim()) {
			props.addPost();
		}
    }

    let onKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (props.newPostText.trim() && e.key === "Enter") {
            e.preventDefault();
            props.addPost();

        }
    }

    let onPostChange = (e:ChangeEvent) => {

        let text = newPostElement.current?.value;
        if (text !== undefined) {
            props.updateNewPostText(text);
        }
    }

    return (
        <div className={classes.postBlock}>
            <Jumbotron>
                <h3 className={classes.h3Style}>Posts</h3>
                <div>
					<textarea
                        className={classes.textareaStyle}
                        ref={newPostElement}
                        value={props.newPostText}
                        onChange={onPostChange}
                        onKeyDown={onKeyPress}
                    />
                </div>
                <div>
                    <Button variant="primary"
                            onClick={onAddPost}>
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
