import React from "react";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { PostsType, DialogsType, MessagesType } from './index';


export type AppPropsType = {
    dialogs: DialogsType
    posts: PostsType
    messages: MessagesType
}

const App = (props: AppPropsType) => {

	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header />
				<Navbar />

				<div className="app-wrapper-content">
					<Switch>
						<Route exact path="/dialogs" component={ () => <Dialogs dialogs = {props.dialogs} messages = {props.messages}/> } />

						<Route path="/profile" render = { () => <Profile posts = {props.posts}/> } />
						<Route path="/news" render = { () => <News /> } />
						<Route path="/music" render = { () => <Music /> } />
						<Route path="/settings" render = { () => <Settings /> } />
					</Switch>
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
